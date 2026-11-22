/* admin-chat-inbox.js — Hộp thư chat admin (Chat 1:1 + FCM push v1).
   DESIGN.md §5/§7 (ĐÃ ĐÓNG BĂNG 2026-11-22). File tải LƯỜI, dùng chung
   mobile + web (repo: mobile/assets/admin-chat-inbox.js; web tải qua prefix
   mobile/assets/). Expose window.SKAdminInbox:
     {mountList, openThread, closeThread, unmountList, ensureAdminPush, isMounted}
   - mountList(containerEl, {db, initial, force}): danh sách sk_chats
     orderBy updatedAt desc limit 50 + listener realtime; sort client:
     unreadAdmin > 0 lên đầu rồi lastAt desc.
   - openThread(uid, name): overlay riêng, listener messages orderBy
     createdAt desc limit 100 (đảo ngược khi vẽ), gửi qua callable
     sendAdminChatMessage, mark read qua callable markAdminChatRead.
   - Web chưa tải firebase-functions-compat ở startup → module tự loadJS
     gstatic functions-compat 10.12.2 khi cần callable.
   - Web KHÔNG đăng ký FCM ở v1 (không có SW) — ensureAdminPush là no-op.
   LƯU Ý: loadJS/esc/showOv của mobile nằm trong IIFE nên module KHÔNG dùng
   được — module tự mang loader + esc + CSS riêng (class skaci-*), chỉ tái
   dùng class giao diện có sẵn (.overlay.front/.detailhead/.detailbody/
   .detailfoot/.chatmsg/.chatbar/.chatsend ở mobile; .modal-bg/.btn ở web).
*/
(function(){
"use strict";
if(window.SKAdminInbox) return; /* nạp 2 lần: giữ state của lần đầu */

var FN_COMPAT_URL = "https://www.gstatic.com/firebasejs/10.12.2/firebase-functions-compat.js";
var LIST_LIMIT = 50;
var MSG_LIMIT = 100;
var MSG_MAX = 1000;
var CSS_ID = "skAdminInboxCss";
var BACK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m14.5 5.5L8 12l6.5 6.5"/></svg>';
var SEND_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>';

/* Thư mục chứa file này ("assets" ở mobile, "mobile/assets" ở web) —
   dùng để tìm assets/admin-chat.js cho ensureAdminPush. */
var ASSET_DIR = "assets";
var IS_WEB = false;
(function(){
  var found = false;
  try{
    var scripts = document.getElementsByTagName("script");
    for(var i = scripts.length - 1; i >= 0; i--){
      var src = scripts[i].getAttribute("src") || "";
      if(src.indexOf("admin-chat-inbox.js") >= 0){
        var cut = src.lastIndexOf("/");
        ASSET_DIR = cut >= 0 ? src.slice(0, cut) : ".";
        found = true;
        break;
      }
    }
  }catch(_){}
  IS_WEB = found ? (ASSET_DIR.indexOf("mobile/") === 0)
    : (location.pathname.indexOf("/mobile/") < 0);
})();

/* ---------------- helpers ---------------- */
function escHtml(s){
  return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function nl2br(s){ return escHtml(s).replace(/\n/g, "<br>"); }
function tsMs(v){
  if(!v) return 0;
  if(typeof v === "number") return v;
  if(typeof v.toMillis === "function"){ try{ return v.toMillis(); }catch(_){ return 0; } }
  if(typeof v.seconds === "number") return v.seconds * 1000 + Math.floor((v.nanoseconds || 0) / 1e6);
  if(v instanceof Date) return v.getTime();
  return 0;
}
function fmtTime(ms){
  if(!ms) return "—";
  try{
    return new Date(ms).toLocaleString("vi-VN", {timeZone: "Asia/Tokyo",
      day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit"});
  }catch(_){ return new Date(ms).toLocaleString("vi-VN"); }
}
function threadNameOf(d, uid){
  var n = String(d.userName || "").trim();
  if(n) return n;
  if(d.userEmail) return d.userEmail;
  return "Học viên " + String(uid).slice(0, 8);
}
function threadFromDoc(uid, d){
  return {uid: uid, name: threadNameOf(d, uid), email: d.userEmail || "",
    lastMsg: d.lastMsg || "", lastAtMs: tsMs(d.lastAt) || tsMs(d.updatedAt),
    lastFrom: d.lastFrom || "", unreadAdmin: (typeof d.unreadAdmin === "number" ? d.unreadAdmin : 0)};
}
function sortThreads(){
  threads.sort(function(a, b){
    var au = a.unreadAdmin > 0 ? 1 : 0, bu = b.unreadAdmin > 0 ? 1 : 0;
    if(bu !== au) return bu - au;
    if((b.lastAtMs || 0) !== (a.lastAtMs || 0)) return (b.lastAtMs || 0) - (a.lastAtMs || 0);
    return a.uid < b.uid ? -1 : (a.uid > b.uid ? 1 : 0);
  });
}

/* Loader riêng (promise-cache, mẫu loadJS của index — mobile loadJS nằm
   trong IIFE nên module không gọi được). */
var _cache = {};
function loadScript(src){
  if(_cache[src]) return _cache[src];
  _cache[src] = new Promise(function(res, rej){
    var s = document.createElement("script");
    s.src = src;
    s.onload = function(){ res(true); };
    s.onerror = function(){ delete _cache[src]; rej(new Error("Không tải được " + src)); };
    document.head.appendChild(s);
  });
  return _cache[src];
}

/* ---------------- CSS riêng (skaci-*) ---------------- */
function ensureCss(){
  if(document.getElementById(CSS_ID)) return;
  var css = [
    ".skaci-row{display:block; width:100%; text-align:left; font:inherit; color:var(--ink,#241f1a);",
    " background:var(--card,#fff); border:1px solid var(--line,#e8e2da); border-radius:11px;",
    " padding:12px 14px; margin:0 0 10px; cursor:pointer;}",
    ".skaci-row:last-child{margin-bottom:0;}",
    ".skaci-row.unread{border-color:var(--red,#C8102E);}",
    ".skaci-rowtop{display:flex; align-items:baseline; justify-content:space-between; gap:10px;}",
    ".skaci-name{font-weight:800; font-size:14.5px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}",
    ".skaci-row.unread .skaci-name{color:var(--red,#C8102E);}",
    ".skaci-time{flex:0 0 auto; font-size:12px; color:var(--ink-3,var(--muted,#8a8378)); font-weight:600;}",
    ".skaci-rowsub{display:flex; align-items:center; justify-content:space-between; gap:10px; margin-top:3px;}",
    ".skaci-snip{font-size:13.5px; color:var(--ink-2,var(--muted,#6b655c)); line-height:1.45;",
    " overflow:hidden; text-overflow:ellipsis; white-space:nowrap;}",
    ".skaci-badge{flex:0 0 auto; min-width:22px; height:22px; padding:0 6px; border-radius:999px;",
    " background:var(--red,#C8102E); color:#fff; font-size:12px; font-weight:800;",
    " display:inline-flex; align-items:center; justify-content:center;}",
    ".skaci-empty{font-size:13.5px; color:var(--ink-2,var(--muted,#6b655c)); margin:6px 0; line-height:1.55;}",
    ".skaci-retry{font:inherit; font-size:13.5px; font-weight:700; color:var(--red,#C8102E);",
    " background:none; border:1.5px solid var(--red,#C8102E); border-radius:999px; padding:8px 16px; cursor:pointer;}",
    ".skaci-mtime{display:block; font-size:11.5px; opacity:.7; margin-top:3px;}",
    ".skaci-status{font-size:13px; color:var(--ink-2,var(--muted,#6b655c)); line-height:1.5; margin:8px 0; min-height:0;}",
    ".skaci-status:empty{display:none;}",
    "#skAdminChatThread .skaci-threadhead{margin:2px 0 14px;}",
    "#skAdminChatThread .skaci-threadhead h2{margin:0; font-size:19px; font-weight:800;}",
    "#skAdminChatThread .skaci-threadhead p{margin:4px 0 0; font-size:13px; color:var(--ink-2); word-break:break-all;}",
    "#skAdminChatThread .skaci-foot{flex-direction:column; gap:6px;}",
    "#skAdminChatThread .skaci-bar{flex:1; margin-top:0; width:100%;}",
    "#skAdminChatThread .chatlist{padding-bottom:8px;}",
    ".skaci-panel{background:var(--card,#fff); border-radius:16px; width:100%; max-width:560px;",
    " height:min(720px,86vh); display:flex; flex-direction:column; overflow:hidden;",
    " box-shadow:0 20px 60px rgba(0,0,0,.3);}",
    ".skaci-panelhead{display:flex; align-items:flex-start; justify-content:space-between; gap:12px;",
    " padding:16px 18px 12px; border-bottom:1px solid var(--line,#e8e2da);}",
    ".skaci-panelhead h3{margin:0; font-size:18px;}",
    ".skaci-panelhead p{margin:4px 0 0; font-size:13px; color:var(--muted,#6b655c); word-break:break-all;}",
    ".skaci-panelhead .auth-x{position:static; padding:0 4px;}",
    ".skaci-list{flex:1 1 auto; overflow-y:auto; padding:14px 18px; display:flex; flex-direction:column; gap:10px;}",
    ".skaci-msg{display:flex;}",
    ".skaci-bub{background:var(--card,#fff); border:1px solid var(--line,#e8e2da);",
    " border-radius:4px 14px 14px 14px; padding:9px 12px; max-width:82%;}",
    ".skaci-bub b{display:block; font-size:12px; color:var(--muted,#6b655c); margin-bottom:2px;}",
    ".skaci-bub p{margin:0; font-size:14px; line-height:1.5;}",
    ".skaci-msg.skaci-mine{justify-content:flex-end;}",
    ".skaci-msg.skaci-mine .skaci-bub{background:var(--red,#C8102E); color:#fff; border-color:var(--red,#C8102E);",
    " border-radius:14px 4px 14px 14px;}",
    ".skaci-msg.skaci-mine .skaci-bub b{color:rgba(255,255,255,.75);}",
    ".skaci-panel .skaci-status{padding:0 18px;}",
    ".skaci-bar{display:flex; gap:8px; padding:12px 18px 16px; border-top:1px solid var(--line,#e8e2da);}",
    ".skaci-bar input{flex:1; min-width:0; font:inherit; font-size:14.5px; padding:11px 12px;",
    " border:1.5px solid var(--line-strong,#d8d0c6); border-radius:10px; background:#fff; color:var(--ink,#241f1a);}",
    ".skaci-bar input:focus{outline:none; border-color:var(--blue,#1e88e5);}",
    ".skaci-bar input:disabled,.skaci-bar button:disabled{opacity:.6;}"
  ].join("\n");
  var st = document.createElement("style");
  st.id = CSS_ID;
  st.type = "text/css";
  if(st.styleSheet){ st.styleSheet.cssText = css; } else { st.appendChild(document.createTextNode(css)); }
  document.head.appendChild(st);
}

/* ---------------- callable (sendAdminChatMessage / markAdminChatRead) ---------------- */
var _fnPromise = null;
function ensureFunctions(){
  if(typeof firebase !== "undefined" && firebase.functions) return Promise.resolve(true);
  if(!_fnPromise){
    _fnPromise = loadScript(FN_COMPAT_URL).then(function(){
      if(typeof firebase === "undefined" || !firebase.functions){
        delete _cache[FN_COMPAT_URL];
        throw new Error("firebase-functions-compat chưa nạp được");
      }
      return true;
    }).catch(function(err){ _fnPromise = null; throw err; });
  }
  return _fnPromise;
}
function callFn(name, args){
  return ensureFunctions().then(function(){
    return firebase.app().functions("asia-northeast1").httpsCallable(name)(args);
  });
}
function markRead(uid){
  if(!uid) return;
  callFn("markAdminChatRead", {uid: uid, lastSeenAt: Date.now()}).catch(function(){ /* im lặng */ });
}
function sendErrText(err){
  var code = (err && err.code) || "";
  if(code === "resource-exhausted") return "Bạn gửi quá nhanh — chờ vài giây rồi thử lại nhé.";
  if(code === "not-found") return "Cuộc trò chuyện này không còn tồn tại.";
  if(code === "unauthenticated") return "Phiên đăng nhập đã hết — đăng nhập lại rồi thử lại nhé.";
  if(code === "invalid-argument") return "Tin nhắn không hợp lệ (1–1000 ký tự).";
  return "Không gửi được — kiểm tra mạng rồi thử lại nhé.";
}

/* ---------------- danh sách hộp thư ---------------- */
var listEl = null, listDb = null, listUnsub = null;
var listFailed = false, listErrMsg = "", listLoaded = false;
var threads = [];

function renderList(){
  if(!listEl) return;
  ensureCss();
  if(!listLoaded && !listFailed){
    listEl.innerHTML = '<p class="skaci-empty">Đang tải hộp thư chat…</p>';
    return;
  }
  if(listFailed){
    listEl.innerHTML = '<p class="skaci-empty">' + escHtml(listErrMsg) + '</p>' +
      '<p style="margin:10px 0 0;"><button type="button" class="skaci-retry">Thử lại</button></p>';
    var rb = listEl.querySelector(".skaci-retry");
    if(rb) rb.addEventListener("click", function(){ mountList(listEl, {db: listDb, force: true}); });
    return;
  }
  if(!threads.length){
    listEl.innerHTML = '<p class="skaci-empty">Chưa có cuộc trò chuyện nào.</p>';
    return;
  }
  var html = "";
  threads.forEach(function(t){
    var unread = t.unreadAdmin > 0;
    html += '<button type="button" class="skaci-row' + (unread ? " unread" : "") +
      '" data-skaci-uid="' + escHtml(t.uid) + '" data-skaci-name="' + escHtml(t.name) + '">' +
      '<span class="skaci-rowtop"><span class="skaci-name">' + escHtml(t.name) +
      '</span><span class="skaci-time">' + escHtml(fmtTime(t.lastAtMs)) + '</span></span>' +
      '<span class="skaci-rowsub"><span class="skaci-snip">' +
      escHtml(t.lastMsg ? (t.lastFrom === "admin" ? "Bạn: " : "") + t.lastMsg : "—") +
      '</span>' + (unread ? '<span class="skaci-badge">' + t.unreadAdmin + '</span>' : '') +
      '</span></button>';
  });
  listEl.innerHTML = html;
  var rows = listEl.querySelectorAll("[data-skaci-uid]");
  for(var i = 0; i < rows.length; i++){
    rows[i].addEventListener("click", function(){
      openThread(this.getAttribute("data-skaci-uid"), this.getAttribute("data-skaci-name"));
    });
  }
}

function mountList(containerEl, opts){
  opts = opts || {};
  if(!containerEl) return;
  /* Guard đăng ký trùng: đã gắn cùng container thì chỉ vẽ lại từ cache. */
  if(listEl === containerEl && (listUnsub || listFailed) && !opts.force){
    renderList();
    return;
  }
  if(listEl && listEl !== containerEl) unmountList();
  listEl = containerEl;
  if(opts.db) listDb = opts.db;
  if(opts.initial && opts.initial.length){
    threads = opts.initial.map(function(it){ return threadFromDoc(it.id || it.uid, it); });
    sortThreads();
    listLoaded = true;
    renderList();
  } else if(!listLoaded){
    renderList(); /* "Đang tải…" */
  }
  var db = listDb;
  if(!db){
    if(!threads.length){
      listFailed = true;
      listErrMsg = "Chưa kết nối được máy chủ — tải lại trang rồi thử lại nhé.";
      renderList();
    }
    return;
  }
  if(listUnsub){ try{ listUnsub(); }catch(_){} listUnsub = null; }
  listFailed = false;
  listErrMsg = "";
  try{
    listUnsub = db.collection("sk_chats").orderBy("updatedAt", "desc").limit(LIST_LIMIT)
      .onSnapshot(function(snap){
        /* Container đã rời DOM (vd web đổi route) → tự hủy listener. */
        if(!listEl || !document.contains(listEl)){ unmountList(); return; }
        threads = [];
        snap.forEach(function(doc){ threads.push(threadFromDoc(doc.id, doc.data() || {})); });
        sortThreads();
        listLoaded = true;
        renderList();
      }, function(err){
        listUnsub = null;
        listFailed = true;
        listErrMsg = (err && err.code === "permission-denied")
          ? "Tài khoản này chưa được cấp quyền đọc hộp thư chat (kiểm tra rules Firestore)."
          : "Không tải được hộp thư chat — kiểm tra mạng rồi thử lại nhé.";
        renderList();
      });
  }catch(err){
    listFailed = true;
    listErrMsg = "Không tải được hộp thư chat — kiểm tra mạng rồi thử lại nhé.";
    renderList();
  }
}

function unmountList(){
  if(listUnsub){ try{ listUnsub(); }catch(_){} listUnsub = null; }
  listEl = null;
  listDb = null;
  listFailed = false;
  listErrMsg = "";
  listLoaded = false;
  threads = [];
}

function isMounted(el){
  return !!(listEl && listEl === el && (listUnsub || listFailed));
}

/* ---------------- cuộc trò chuyện ---------------- */
var threadUid = null, threadName = "", threadEmail = "", threadDb = null;
var threadUnsub = null, threadEl = null;
var threadFailed = false, threadLoaded = false, threadSending = false;
var threadMsgs = [];
var lastMarkedMsgId = "";
var threadFirstSnap = true;

function threadScroller(){
  if(!threadEl) return null;
  if(IS_WEB) return document.getElementById("skaciList");
  return threadEl.querySelector(".detailbody");
}
function threadNearBottom(){
  var sc = threadScroller();
  if(!sc) return true;
  return (sc.scrollHeight - sc.scrollTop - sc.clientHeight) < 120;
}
function threadScrollBottom(){
  var sc = threadScroller();
  if(sc) sc.scrollTop = sc.scrollHeight;
}

function renderThreadMsgs(){
  var list = document.getElementById("skaciList");
  if(!list) return;
  ensureCss();
  if(threadFailed){
    list.innerHTML = '<p class="skaci-empty">Không tải được tin nhắn — kiểm tra mạng rồi thử lại nhé.</p>' +
      '<p style="margin:10px 0 0;"><button type="button" class="skaci-retry" id="skaciMsgRetry">Thử lại</button></p>';
    var rb = document.getElementById("skaciMsgRetry");
    if(rb) rb.addEventListener("click", function(){ subscribeThread(); });
    return;
  }
  if(!threadLoaded){
    list.innerHTML = '<p class="skaci-empty">Đang tải tin nhắn…</p>';
    return;
  }
  if(!threadMsgs.length){
    list.innerHTML = '<p class="skaci-empty">Chưa có tin nhắn nào.</p>';
    return;
  }
  var html = "";
  threadMsgs.forEach(function(m){
    var mine = m.from === "admin";
    var who = mine ? "Admin" : threadName;
    var initial = mine ? "A" : (threadName ? threadName.charAt(0) : "H");
    if(IS_WEB){
      html += '<div class="skaci-msg' + (mine ? " skaci-mine" : "") + '">' +
        '<div class="skaci-bub"><b>' + escHtml(who) + '</b><p>' + nl2br(m.text) +
        '</p><span class="skaci-mtime">' + escHtml(fmtTime(m.createdAtMs)) + '</span></div></div>';
    } else {
      html += '<div class="chatmsg' + (mine ? " mine" : "") + '">' +
        '<span class="c-av">' + escHtml(initial) + '</span>' +
        '<div class="c-bub"><b>' + escHtml(who) + '</b><p>' + nl2br(m.text) +
        '</p><span class="skaci-mtime">' + escHtml(fmtTime(m.createdAtMs)) + '</span></div></div>';
    }
  });
  list.innerHTML = html;
}

function setThreadStatus(t){
  var el = document.getElementById("skaciStatus");
  if(el) el.textContent = t || "";
}

function subscribeThread(){
  if(!threadUid || !threadDb) return;
  if(threadUnsub){ try{ threadUnsub(); }catch(_){} threadUnsub = null; }
  threadFailed = false;
  threadLoaded = false;
  renderThreadMsgs();
  try{
    threadUnsub = threadDb.collection("sk_chats").doc(threadUid).collection("messages")
      .orderBy("createdAt", "desc").limit(MSG_LIMIT)
      .onSnapshot(function(snap){
        if(!threadEl || !document.contains(threadEl)){ closeThread(); return; }
        var wasNearBottom = threadNearBottom();
        var arr = [];
        snap.forEach(function(doc){
          var d = doc.data() || {};
          arr.push({id: doc.id, from: d.from || "", text: d.text || "",
            createdAtMs: tsMs(d.createdAt)});
        });
        arr.reverse(); /* desc → vẽ cũ-trước, mới-sau */
        threadMsgs = arr;
        threadLoaded = true;
        renderThreadMsgs();
        if(threadFirstSnap || wasNearBottom) threadScrollBottom();
        threadFirstSnap = false;
        /* Có tin mới từ học viên lúc đang mở → mark read ngay. */
        var newest = threadMsgs[threadMsgs.length - 1];
        if(newest && newest.from === "user" && newest.id !== lastMarkedMsgId){
          lastMarkedMsgId = newest.id;
          markRead(threadUid);
        }
      }, function(){
        threadUnsub = null;
        threadFailed = true;
        renderThreadMsgs();
      });
  }catch(_){
    threadFailed = true;
    renderThreadMsgs();
  }
}

function sendThread(){
  if(threadSending || !threadUid) return;
  var input = document.getElementById("skaciInput");
  var btn = document.getElementById("skaciSend");
  if(!input) return;
  var text = input.value.replace(/^\s+|\s+$/g, "");
  if(!text) return;
  if(text.length > MSG_MAX){
    setThreadStatus("Tin nhắn tối đa " + MSG_MAX + " ký tự.");
    return;
  }
  threadSending = true;
  input.disabled = true;
  if(btn) btn.disabled = true;
  setThreadStatus("Đang gửi…");
  callFn("sendAdminChatMessage", {toUid: threadUid, text: text}).then(function(){
    input.value = "";
    setThreadStatus("");
  }).catch(function(err){
    setThreadStatus(sendErrText(err)); /* giữ text trong input để thử lại */
  }).then(function(){
    threadSending = false;
    input.disabled = false;
    if(btn) btn.disabled = false;
    input.focus();
  });
}

function buildMobileThread(){
  var ov = document.createElement("div");
  ov.className = "overlay front";
  ov.id = "skAdminChatThread";
  ov.setAttribute("aria-hidden", "true");
  ov.style.zIndex = "47"; /* trên adminOverlay (z-46), dưới tabbar (z-60) */
  ov.innerHTML =
    '<div class="detailhead">' +
      '<button class="iconbtn" type="button" id="skaciBack" aria-label="Quay lại — đóng cuộc trò chuyện">' + BACK_SVG + '</button>' +
      '<div><h2></h2><span></span></div>' +
    '</div>' +
    '<div class="detailbody">' +
      '<div class="skaci-threadhead"><h2 id="skaciTitleName"></h2><p id="skaciTitleSub"></p></div>' +
      '<div class="chatlist" id="skaciList"></div>' +
      '<p class="skaci-status" id="skaciStatus" role="status"></p>' +
    '</div>' +
    '<div class="detailfoot skaci-foot">' +
      '<div class="chatbar skaci-bar"><input id="skaciInput" type="text" maxlength="1000" placeholder="Nhắn cho học viên…" autocomplete="off" aria-label="Nhắn cho học viên">' +
      '<button class="chatsend" type="button" id="skaciSend" aria-label="Gửi tin nhắn">' + SEND_SVG + '</button></div>' +
    '</div>';
  var adminOv = document.getElementById("adminOverlay");
  if(adminOv && adminOv.parentNode) adminOv.parentNode.insertBefore(ov, adminOv.nextSibling);
  else document.body.appendChild(ov);
  return ov;
}

function buildWebThread(){
  var root = document.getElementById("modalRoot") || document.body;
  root.innerHTML = "";
  var bg = document.createElement("div");
  bg.className = "modal-bg";
  bg.id = "skaciWebBg";
  bg.innerHTML =
    '<div class="skaci-panel" role="dialog" aria-modal="true" aria-label="Cuộc trò chuyện với học viên">' +
      '<div class="skaci-panelhead"><div><h3 id="skaciTitleName"></h3><p id="skaciTitleSub"></p></div>' +
      '<button class="auth-x" type="button" id="skaciBack" aria-label="Đóng">×</button></div>' +
      '<div class="skaci-list" id="skaciList"></div>' +
      '<p class="skaci-status" id="skaciStatus" role="status"></p>' +
      '<div class="skaci-bar"><input id="skaciInput" type="text" maxlength="1000" placeholder="Nhắn cho học viên…" autocomplete="off" aria-label="Nhắn cho học viên">' +
      '<button class="btn" type="button" id="skaciSend">Gửi</button></div>' +
    '</div>';
  root.appendChild(bg);
  return bg;
}

function onWebHashChange(){ closeThread(); }

function openThread(uid, name){
  if(!uid) return;
  if(threadUid === uid && threadEl && document.contains(threadEl)){
    if(!IS_WEB){ threadEl.classList.add("open"); threadEl.setAttribute("aria-hidden", "false"); }
    return;
  }
  closeThread();
  var meta = null;
  for(var i = 0; i < threads.length; i++){ if(threads[i].uid === uid){ meta = threads[i]; break; } }
  threadUid = uid;
  threadName = name || (meta ? meta.name : "Học viên");
  threadEmail = meta ? meta.email : "";
  threadDb = listDb;
  if(!threadDb){
    try{
      if(typeof firebase !== "undefined" && firebase.firestore) threadDb = firebase.firestore();
    }catch(_){ threadDb = null; }
  }
  threadMsgs = [];
  threadFailed = false;
  threadLoaded = false;
  threadSending = false;
  lastMarkedMsgId = "";
  threadFirstSnap = true;
  ensureCss();
  threadEl = IS_WEB ? buildWebThread() : buildMobileThread();
  var titleName = document.getElementById("skaciTitleName");
  var titleSub = document.getElementById("skaciTitleSub");
  if(titleName) titleName.textContent = threadName;
  if(titleSub) titleSub.textContent = (threadEmail ? threadEmail + " · " : "") + "UID " + uid.slice(0, 12) + "…";
  var back = document.getElementById("skaciBack");
  if(back) back.addEventListener("click", closeThread);
  var sendBtn = document.getElementById("skaciSend");
  if(sendBtn) sendBtn.addEventListener("click", sendThread);
  var input = document.getElementById("skaciInput");
  if(input) input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){ e.preventDefault(); sendThread(); }
  });
  if(IS_WEB){
    threadEl.addEventListener("click", function(e){ if(e.target === threadEl) closeThread(); });
    window.addEventListener("hashchange", onWebHashChange);
  } else {
    /* Hiện overlay (mẫu showOv: .open + aria-hidden; z-index 47 đã set inline). */
    void threadEl.offsetWidth;
    threadEl.classList.add("open");
    threadEl.setAttribute("aria-hidden", "false");
  }
  if(!threadDb){
    threadFailed = true;
    renderThreadMsgs();
    return;
  }
  subscribeThread();
  markRead(uid); /* mark read khi mở */
}

function closeThread(){
  if(threadUnsub){ try{ threadUnsub(); }catch(_){} threadUnsub = null; }
  if(IS_WEB) window.removeEventListener("hashchange", onWebHashChange);
  if(threadEl && threadEl.parentNode) threadEl.parentNode.removeChild(threadEl);
  threadEl = null;
  threadUid = null;
  threadName = "";
  threadEmail = "";
  threadDb = null;
  threadMsgs = [];
  threadFailed = false;
  threadLoaded = false;
  threadSending = false;
  lastMarkedMsgId = "";
  threadFirstSnap = true;
}

/* ---------------- FCM push cho admin (mobile only) ---------------- */
/* Fallback boot stub (DESIGN.md §5/§6): stub ensureAdminChat của W1 chưa có
   trong baseline nên module tự định nghĩa — tải assets/admin-chat.js rồi
   kiểm window.SKAdminChat. Nếu W1 đã nạp sẵn thì dùng luôn. */
var _adminChatPromise = null;
function ensureAdminChat(){
  if(window.SKAdminChat) return Promise.resolve(true);
  if(!_adminChatPromise){
    _adminChatPromise = loadScript(ASSET_DIR + "/admin-chat.js").then(function(){
      if(!window.SKAdminChat){
        delete _cache[ASSET_DIR + "/admin-chat.js"];
        throw new Error("admin-chat.js không có SKAdminChat");
      }
      return true;
    }).catch(function(err){ _adminChatPromise = null; throw err; });
  }
  return _adminChatPromise;
}
var _pushTried = false;
function ensureAdminPush(){
  if(_pushTried) return Promise.resolve(false);
  _pushTried = true;
  /* Web v1: KHÔNG đăng ký FCM (không có SW) — chỉ badge/số chưa đọc. */
  if(IS_WEB && !document.getElementById("adminOverlay")) return Promise.resolve(false);
  return ensureAdminChat().then(function(){
    if(window.SKAdminChat && typeof window.SKAdminChat.ensurePush === "function"){
      try{
        var r = window.SKAdminChat.ensurePush();
        return (r && typeof r.then === "function") ? r.then(function(){ return true; }) : true;
      }catch(_){ return false; }
    }
    return false;
  }).catch(function(){ return false; }); /* push là best-effort, không gãy inbox */
}

window.SKAdminInbox = {
  mountList: mountList,
  openThread: openThread,
  closeThread: closeThread,
  unmountList: unmountList,
  ensureAdminPush: ensureAdminPush,
  isMounted: isMounted
};
})();
