/* Chat 1:1 admin — phía học viên + FCM push (W1, chat v1).
   File tải lười qua ensureAdminChat() khi mở chat lần đầu; KHÔNG nằm trong
   startup. Chạy ngoài IIFE script chính nên CHỈ dùng global thật:
   window.firebase (compat 10.12.2), window.SKSync, DOM theo id.
   showOv/hideOv của app được truyền vào qua open({showOv, hideOv});
   không có hook thì tự đóng/mở overlay bằng class (dự phòng).
   Collection/function/hằng số theo DESIGN.md (đóng băng 22/11/2026). */
(function(){
  "use strict";

  var VAPID_PUBLIC_KEY = "BPICdAcAQrh5USYs7EUC5XUW4YUpmUa-JUBcuSEZwxGAiHDHjO_fI39UVI4obh9nC290SdphngpjEARS0pcJLKA";
  var MESSAGING_URL = "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js";
  var SW_URL = "firebase-messaging-sw.js"; /* cạnh mobile/index.html → scope /mobile/ */
  var DEVICE_KEY = "sk_device_id";
  var PUSH_ASKED_KEY = "sk_ac_push_asked";
  var SEND_GAP_MS = 3000; /* giãn cách client, mirror sendChat() phòng chat */

  var uid = null, hooks = null, isOpen = false;
  var msgUnsub = null, msgUid = null, threadUnsub = null, threadUid = null;
  var firstSnapshot = false, sending = false, lastSendAt = 0;
  var lastMarkedMsgAt = 0, unreadCount = 0, msgListenerFailed = false;
  var messagingReady = null, messagingBound = false, authBound = false, eventsBound = false;

  function $(id){ return document.getElementById(id); }
  function db(){ return (window.firebase && firebase.firestore) ? firebase.firestore() : null; }
  function currentUid(){
    try{
      var u = (window.firebase && firebase.auth) ? firebase.auth().currentUser : null;
      return u ? u.uid : "";
    }catch(_){ return ""; }
  }

  /* deviceId: SKSync.getDeviceId() là global duy nhất trỏ vào getDeviceId()
     trong IIFE script chính (dòng ~22643 baseline); dự phòng đọc/tạo
     localStorage sk_device_id cùng định dạng "dev-<base36>-<random>". */
  function deviceId(){
    try{
      if(window.SKSync && SKSync.getDeviceId) return SKSync.getDeviceId();
    }catch(_){}
    try{
      var d = window.localStorage.getItem(DEVICE_KEY);
      if(!d){
        d = "dev-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
        window.localStorage.setItem(DEVICE_KEY, d);
      }
      return d;
    }catch(_){ return "dev-web"; }
  }

  function showOverlay(){
    var ov = $("adminChatOverlay");
    if(!ov) return;
    if(hooks && hooks.showOv) hooks.showOv(ov);
    else { ov.classList.add("open"); ov.setAttribute("aria-hidden", "false"); }
  }
  function hideOverlay(){
    var ov = $("adminChatOverlay");
    if(!ov) return;
    if(hooks && hooks.hideOv) hooks.hideOv(ov);
    else { ov.classList.remove("open"); ov.setAttribute("aria-hidden", "true"); }
  }

  /* ---------- Badge chưa đọc (tile Home + hàng Cá nhân) ---------- */
  function setBadges(n){
    var t = (n > 99) ? "99+" : String(n);
    var a = $("acTileBadge"), b = $("acMeBadge");
    if(a){ a.textContent = t; a.hidden = !(n > 0); }
    if(b){ b.textContent = t; b.hidden = !(n > 0); }
  }

  /* Listener doc thread sk_chats/{uid}: bắt đầu khi mở chat lần đầu, giữ
     suốt phiên. Mẫu premiumWatchStart — guard đăng ký trùng theo uid. */
  function startThreadListener(){
    if(!uid || !db()) return;
    if(threadUnsub && threadUid === uid) return;
    stopThreadListener();
    threadUid = uid;
    threadUnsub = db().collection("sk_chats").doc(uid).onSnapshot(function(snap){
      var d = (snap && snap.exists) ? snap.data() : null;
      unreadCount = d ? (d.unreadUser || 0) : 0;
      setBadges(unreadCount);
      if(isOpen && unreadCount > 0) markRead();
    }, function(){ /* lỗi listener badge: im lặng, refreshBadge lần sau thử lại */ });
  }
  function stopThreadListener(){
    try{ if(threadUnsub) threadUnsub(); }catch(_){}
    threadUnsub = null; threadUid = null;
  }

  /* ---------- Trạng thái trong overlay ---------- */
  function showStatus(txt){ var el = $("acChatStatus"); if(el) el.textContent = txt || ""; }
  function showError(txt){
    var box = $("acChatError"), tx = $("acChatErrorTxt");
    if(tx) tx.textContent = txt || "";
    if(box) box.hidden = !txt;
  }
  function setHint(txt){ var el = $("acChatHint"); if(el) el.textContent = txt || ""; }

  /* ---------- Tin nhắn realtime ---------- */
  function startMsgListener(){
    if(!uid || !db()) return;
    if(msgUnsub && msgUid === uid) return;
    stopMsgListener();
    msgUid = uid;
    firstSnapshot = false;
    msgListenerFailed = false;
    showStatus("Đang tải…");
    showError("");
    msgUnsub = db().collection("sk_chats").doc(uid).collection("messages")
      .orderBy("createdAt", "desc").limit(100)
      .onSnapshot(function(snap){
        var docs = snap ? snap.docs.slice() : [];
        docs.reverse(); /* vẽ cũ → mới */
        renderMessages(docs);
        if(!firstSnapshot){
          firstSnapshot = true;
          showStatus(docs.length ? "" : "Chưa có tin nhắn nào — nhắn cho admin nhé.");
        }
        maybeMarkRead(docs);
      }, function(){
        /* Lỗi listener: hủy listener cũ rồi hiện lỗi + Thử lại. */
        stopMsgListener();
        msgListenerFailed = true;
        if(!firstSnapshot) showStatus("");
        showError("Không tải được tin nhắn — kiểm tra mạng rồi thử lại nhé.");
      });
  }
  function stopMsgListener(){
    try{ if(msgUnsub) msgUnsub(); }catch(_){}
    msgUnsub = null; msgUid = null;
  }

  function scrollBox(){
    var list = $("acChatList");
    if(!list) return null;
    if(list.closest) return list.closest(".detailbody") || list.parentElement;
    return list.parentElement;
  }
  function scrollListBottom(){
    var box = scrollBox();
    if(box) box.scrollTop = box.scrollHeight;
  }
  function fmtTime(ts){
    try{
      if(!ts || !ts.toDate) return "";
      return ts.toDate().toLocaleTimeString("vi-VN", {hour: "2-digit", minute: "2-digit"});
    }catch(_){ return ""; }
  }
  function renderMessages(docs){
    var list = $("acChatList");
    if(!list) return;
    var box = scrollBox();
    var nearBottom = true;
    if(box) nearBottom = (box.scrollHeight - box.scrollTop - box.clientHeight) < 140;
    var first = !list.hasChildNodes();
    while(list.firstChild) list.removeChild(list.firstChild);
    docs.forEach(function(doc){
      var m = doc.data() || {};
      var mine = (m.from === "user");
      var row = document.createElement("div");
      row.className = "chatmsg" + (mine ? " mine" : "");
      var av = document.createElement("span");
      av.className = "c-av";
      av.textContent = mine ? "Bạn" : "SK";
      var bub = document.createElement("div");
      bub.className = "c-bub";
      var nm = document.createElement("b");
      var t = fmtTime(m.createdAt);
      nm.textContent = (mine ? "Bạn" : "Admin SoraKanji") + (t ? " · " + t : "");
      var p = document.createElement("p");
      p.textContent = m.text || ""; /* textContent — không chèn HTML từ tin nhắn */
      bub.appendChild(nm);
      bub.appendChild(p);
      row.appendChild(av);
      row.appendChild(bub);
      list.appendChild(row);
    });
    if(first || nearBottom) scrollListBottom();
  }

  /* ---------- Đánh dấu đã đọc ---------- */
  function markRead(){
    if(!uid) return;
    try{
      var fn = firebase.app().functions("asia-northeast1").httpsCallable("markAdminChatRead");
      fn({uid: uid, lastSeenAt: Date.now()}).catch(function(){ /* best-effort */ });
    }catch(_){}
  }
  function maybeMarkRead(docs){
    if(!isOpen) return;
    for(var i = docs.length - 1; i >= 0; i--){
      var m = docs[i].data() || {};
      if(m.from === "admin"){
        var at = (m.createdAt && m.createdAt.toMillis) ? m.createdAt.toMillis() : 0;
        if(at > lastMarkedMsgAt){ lastMarkedMsgAt = at; markRead(); }
        return;
      }
    }
  }

  /* ---------- Gửi tin ---------- */
  function setSending(on){
    sending = on;
    var inp = $("acChatInput"), btn = $("acChatSend");
    if(inp) inp.disabled = on;
    if(btn) btn.disabled = on;
    setHint(on ? "Đang gửi…" : "");
  }
  function sendMessage(){
    if(sending) return;
    var inp = $("acChatInput");
    if(!inp) return;
    var text = (inp.value || "").trim();
    if(!text){ setHint("Nhập tin nhắn trước khi gửi nhé."); return; }
    if(text.length > 1000){ setHint("Tin nhắn tối đa 1000 ký tự — rút gọn lại giúp mình nhé."); return; }
    var now = Date.now();
    if(now - lastSendAt < SEND_GAP_MS){
      setHint("Gửi chậm lại chút — chờ " + Math.ceil((SEND_GAP_MS - (now - lastSendAt)) / 1000) + " giây nữa.");
      return;
    }
    lastSendAt = now;
    setSending(true);
    showError("");
    var call;
    try{
      call = firebase.app().functions("asia-northeast1").httpsCallable("sendAdminChatMessage")({text: text});
    }catch(err){
      setSending(false);
      setHint("Chưa gửi được — thử lại nhé.");
      return;
    }
    call.then(function(){
      inp.value = "";
      setSending(false);
      askPushAfterFirstSend();
    }).catch(function(err){
      setSending(false);
      /* Gửi lỗi: GIỮ text trong input để thử lại. */
      var code = (err && err.code) || "";
      if(code === "resource-exhausted") setHint("Bạn gửi nhanh quá — chờ vài giây rồi gửi lại nhé.");
      else if(code === "unauthenticated") setHint("Phiên đăng nhập hết hạn — đăng nhập lại rồi gửi nhé.");
      else if(code === "invalid-argument") setHint("Tin nhắn chưa hợp lệ — kiểm tra lại rồi gửi nhé.");
      else if(code === "not-found") setHint("Không kết nối được dịch vụ chat — thử lại sau nhé.");
      else setHint("Chưa gửi được — kiểm tra mạng rồi thử lại nhé.");
    });
  }

  function bindEvents(){
    if(eventsBound) return;
    eventsBound = true;
    var send = $("acChatSend"), inp = $("acChatInput"), retry = $("acChatRetry");
    if(send) send.addEventListener("click", sendMessage);
    if(inp) inp.addEventListener("keydown", function(e){
      if(e.key === "Enter"){ e.preventDefault(); sendMessage(); }
    });
    if(retry) retry.addEventListener("click", function(){
      showError("");
      if(msgListenerFailed){ msgListenerFailed = false; startMsgListener(); }
    });
  }

  /* Đăng xuất giữa phiên: dừng listener + xóa badge (app tải lại trang khi
     đăng xuất nên đây chỉ là dọn dẹp phòng hờ). */
  function bindAuthWatcher(){
    if(authBound) return;
    authBound = true;
    try{
      firebase.auth().onAuthStateChanged(function(user){
        if(!user){
          stopMsgListener();
          stopThreadListener();
          uid = null;
          isOpen = false;
          setBadges(0);
        }
      });
    }catch(_){}
  }

  /* ---------- Mở / đóng ---------- */
  function open(h){
    if(h && typeof h === "object") hooks = h;
    var u = currentUid();
    if(!u) return false;
    if(u !== uid){
      stopMsgListener();
      stopThreadListener();
      uid = u;
      lastMarkedMsgAt = 0;
      unreadCount = 0;
    }
    isOpen = true;
    bindEvents();
    var retry = $("acChatRetry");
    if(retry) retry.onclick = null; /* xóa handler lỗi-tải inline nếu có */
    showError("");
    showOverlay();
    bindAuthWatcher();
    startThreadListener();
    startMsgListener();
    if(unreadCount > 0) markRead();
    ensurePush();
    return true;
  }
  function close(){
    isOpen = false;
    stopMsgListener(); /* badge vẫn nghe qua thread listener */
    hideOverlay();
  }

  function refreshBadge(){
    var u = currentUid();
    if(!u || !db()){ setBadges(0); return Promise.resolve(0); }
    return db().collection("sk_chats").doc(u).get().then(function(snap){
      var d = (snap && snap.exists) ? snap.data() : null;
      var n = d ? (d.unreadUser || 0) : 0;
      unreadCount = n;
      setBadges(n);
      return n;
    }).catch(function(){ return 0; });
  }

  /* ---------- FCM (mobile only) ---------- */
  /* Loader riêng của module: loadJS nằm trong IIFE script chính nên không
     gọi được từ đây — cùng ngữ nghĩa promise-cache + tải lại khi lỗi. */
  function loadScript(src){
    if(!loadScript.cache) loadScript.cache = {};
    var cache = loadScript.cache;
    if(cache[src]) return cache[src];
    cache[src] = new Promise(function(res, rej){
      var s = document.createElement("script");
      s.src = src;
      s.onload = function(){ res(true); };
      s.onerror = function(){ delete cache[src]; rej(new Error("Không tải được " + src)); };
      document.head.appendChild(s);
    });
    return cache[src];
  }
  function ensureMessaging(){
    if(window.firebase && firebase.messaging) return Promise.resolve(true);
    if(messagingReady) return messagingReady;
    messagingReady = loadScript(MESSAGING_URL).then(function(){
      if(!firebase.messaging) throw new Error("firebase-messaging-compat không có messaging");
      return true;
    }).catch(function(err){ messagingReady = null; throw err; });
    return messagingReady;
  }
  function saveToken(token){
    var u = currentUid();
    if(!u || !token || !db()) return Promise.resolve(false);
    var ts = firebase.firestore.FieldValue.serverTimestamp();
    return db().collection("sk_fcm_tokens").doc(u).collection("devices").doc(deviceId())
      .set({token: token, platform: "web", updatedAt: ts, createdAt: ts}, {merge: true})
      .then(function(){ return true; })
      .catch(function(){ return false; });
  }
  function bindMessagingEvents(){
    if(messagingBound) return;
    messagingBound = true;
    try{
      var messaging = firebase.messaging();
      if(messaging.onMessage) messaging.onMessage(function(){
        if(isOpen) return; /* chat đang mở: listener tin nhắn đã hiện tin */
        refreshBadge();
      });
      if(messaging.onTokenRefresh) messaging.onTokenRefresh(function(){
        messaging.getToken({vapidKey: VAPID_PUBLIC_KEY})
          .then(function(t){ if(t) saveToken(t); })
          .catch(function(){});
      });
    }catch(_){}
  }
  function registerPush(){
    if(!("Notification" in window) || !("serviceWorker" in navigator)) return Promise.resolve(false);
    if(Notification.permission !== "granted") return Promise.resolve(false);
    return ensureMessaging().then(function(){
      bindMessagingEvents();
      return navigator.serviceWorker.register(SW_URL).then(function(reg){
        return firebase.messaging().getToken({vapidKey: VAPID_PUBLIC_KEY, serviceWorkerRegistration: reg});
      }).then(function(token){
        if(!token) return false;
        return saveToken(token);
      });
    }).catch(function(){ return false; });
  }
  function ensurePush(){
    /* Chỉ đăng ký khi đã được cấp quyền; permission "default" thì KHÔNG hỏi
       ngay — hỏi sau khi gửi tin đầu tiên (askPushAfterFirstSend, 1 lần);
       "denied" thì bỏ qua, badge trong app làm fallback. */
    if(!currentUid()) return Promise.resolve(false);
    if(!("Notification" in window)) return Promise.resolve(false);
    if(Notification.permission !== "granted") return Promise.resolve(false);
    return registerPush();
  }
  function askPushAfterFirstSend(){
    try{
      if(window.localStorage.getItem(PUSH_ASKED_KEY)) return;
      if(!("Notification" in window) || Notification.permission !== "default") return;
      window.localStorage.setItem(PUSH_ASKED_KEY, "1");
      var pr = Notification.requestPermission();
      if(pr && pr.then) pr.then(function(p){ if(p === "granted") registerPush(); }).catch(function(){});
    }catch(_){}
  }

  window.SKAdminChat = {open: open, close: close, ensurePush: ensurePush, refreshBadge: refreshBadge};
})();
