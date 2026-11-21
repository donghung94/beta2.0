/* SKSync — module đồng bộ tiến độ web <-> mobile (BẢN HỢP NHẤT).
 * 1 file duy nhất, dùng cho CẢ 2 bản: web nạp từ mobile/assets/sync-module.js,
 * mobile nhúng nguyên văn vào index.html (xem mobile/gen_module_mobile.py).
 * Đồng thời là bản tham chiếu (sync-module.js — 2 file byte-identical).
 * Nội dung = tham chiếu gốc (sha 333e5e45…) + doc grammar mới (shape
 * {marks: {"N5|12": {v, at}}}) + công tắc bật/tắt (setEnabled) + bỏ qua
 * ghi ví khi không có delta + SYNC_GROUP_KEYS hợp cả 2 bản (5 key mới:
 * sk_grammar_learned, sk_sync_uid, sk_sync_wu, sk_sync_words,
 * sk_sync_saved_keys) + A14: sửa lỗi migration/push không lưu meta
 * (xem UNIFY-REPORT.md) + tombstone xóa video tự tạo (doc videos:
 * {mine, removed}, API markVideoRemoved — sao chép pattern savedWords)
 * + createdAt (2026-11-18): syncAll tạo doc cha kanji_progress/{uid} kèm
 * createdAt = serverTimestamp nếu chưa có (xem ensureParentDoc).
 * + doc shop (2026-11-20, M-11): {owned: [key...], frame, frameAt} —
 * union owned, frame LWW theo frameAt (chỉ mobile có shop; web bỏ qua
 * doc này vì adapter web trả undefined). Reconcile W7-3 cùng đợt:
 * settings thêm field `explain` (đã có ở bản nhúng mobile từ trước).
 * + M-10 (2026-11-20): mergePlan30 không ghi appliedLv/appliedAt khi
 * phía thắng không có giá trị (Firestore cấm undefined); syncAllIds
 * catch từng doc — 1 doc lỗi không abort cả lần đồng bộ.
 * + mergeJlpt (2026-11-20): target null không bao giờ thắng giá trị
 * thật (null = chưa chọn cấp mục tiêu; app không có luồng xóa target
 * — chip chỉ đặt N5..N1); toSyncData không đóng dấu mới cho null.
 * + M-14 (2026-11-20): doc shop thêm expBoostUntil — mốc hết hạn x2
 * EXP của Vật phẩm Tăng Tốc, gộp max-wins (hết hạn muộn hơn thắng;
 * 0/vắng = không có boost). App cộng EXP qua addExp() nên boost áp
 * cho cả nhiệm vụ lẫn đấu trường.
 * + M-14b (2026-11-21): sổ granted ghi thêm amt = số EXP thực nhận
 * (đã nhân x2 nếu đang boost); clawback nhiệm vụ trùng trừ min(2 amt)
 * thay vì thưởng gốc — nhiệm vụ hoàn thành ở 2 máy chỉ tính 1 lần, ở
 * mức boost nếu 1 trong 2 lần nhận đang boost. Mục cũ không có amt
 * thì dùng thưởng gốc (tương thích ngược).
 * + M-14a (2026-11-21): doc shop thêm bought/used — bộ đếm mua/dùng
 * đơn điệu theo món, gộp max từng khóa; sở hữu hiệu dụng = bought >
 * used. Chống hồi sinh Tăng Tốc đã dùng khi gộp với máy cũ (union
 * owned cũ hồi lại vật phẩm). Doc cũ không có bộ đếm: khóa trong
 * owned coi như bought = 1. expBoostUntil vẫn max-wins như M-14.
 *
 * Dùng Firebase compat SDK (firebase.firestore()) — cả 2 bản app đều đang
 * dùng compat nên module này thả vào được cả 2 mà không cần sửa import.
 *
 * Module KHÔNG đọc trực tiếp localStorage của app. Mọi đọc/ghi local đi qua
 * `adapter` do mỗi bản tự viết (xem SKSync.init). Module lo: transport
 * Firestore, luật gộp, đóng dấu thời gian, debounce, listener, migration.
 *
 * Bố cục Firestore: kanji_progress/{uid}/sync/{docId}, mỗi doc có khung
 *   { v: 1, data: {...}, updatedAt: <ms>, updatedBy: <deviceId> }
 * Chi tiết thiết kế + luật gộp từng doc: xem SYNC-DESIGN.md cùng thư mục.
 *
 * Cách dùng (mỗi bản app):
 *   SKSync.init({ db: firebase.firestore(), getUid: ..., adapter: {...} });
 *   // sau khi đăng nhập / mở app:
 *   SKSync.syncAll();
 *   // sau mỗi lần ghi local (vd saveProgress, toggleWordSave...):
 *   SKSync.schedulePush("wallet");   // tên doc, debounce 2 giây
 *   // khi đăng xuất (BẮT BUỘC — chống trộn dữ liệu 2 tài khoản):
 *   SKSync.stopListener(); SKSync.clearLocalForLogout();
 */
(function (global) {
  "use strict";

  /* ---------------- cấu hình ---------------- */

  // Số dư gốc khi cài app lần đầu (USER QUYẾT 21/11 14:10: EXP 0,
  // Xu 50 quà tặng, điểm đóng góp 0, thắng/thua 0; duelLeft giữ 3 —
  // hạn mức đấu/ngày). Đồng bộ lần đầu dùng (local - SEED) làm hoạt
  // động ròng của máy đó. Nếu app đổi số dư khởi đầu thì PHẢI đổi
  // cả hằng này.
  var SYNC_SEED = { tuvi: 0, linh: 50, cong: 0, duelLeft: 3, wins: 0, losses: 0 };
  var WALLET_FIELDS = ["tuvi", "linh", "cong", "duelLeft", "wins", "losses"];

  var MISSION_KEYS = ["kanji", "quiz", "review", "exam", "rot"];
  var MISSION_REWARDS = { kanji: 40, quiz: 30, review: 35, exam: 60, rot: 30 };
  var QUIZ_CAP = 10, KANJI_CAP = 12;

  var FIXED_DOCS = ["wallet", "missions", "kanji", "grammar", "plan30", "jlpt",
                    "examBest", "videos", "settings", "avatar", "savedWords",
                    "shop"];
  var VOCAB_PREFIX = "vocab_";

  var LS_DEVICE = "sk_device_id";       // id thiết bị (local-only)
  var LS_BASELINE = "sk_sync_baseline"; // mốc ví lúc đồng bộ lần cuối
  var LS_MIGRATED = "sk_sync_migrated"; // đã đồng bộ lần đầu chưa
  var LS_SEEN = "sk_sync_seen";         // docId -> updatedAt đã thấy
  var LS_META = "sk_sync_meta_";        // + docId: bản đóng dấu lần cuối
  var LS_PARENTDOC = "sk_parentdoc";    // {uid: 1}: doc cha kanji_progress/{uid} đã có

  // Nhóm key local thuộc phạm vi đồng bộ — XÓA HẾT khi đăng xuất để tài
  // khoản khác đăng nhập trên cùng máy không gộp nhầm dữ liệu cũ.
  // (Xóa key không tồn tại cũng không sao nên liệt kê gộp cả 2 bản.)
  var SYNC_GROUP_KEYS = [
    "sk_progress", "sk_saved_words", "sk_exam_best", "sk_settings",
    "sk_sv_mine", "sk_avatar_custom", "sk_avatar_choice",
    "sk_jlpt_target", "sk_jlpt_plan", "sk_jlpt_done",
    "sk_plan_done_N5", "sk_plan_done_N4", "sk_plan_done_N3",
    "sk_plan_done_N2", "sk_plan_done_N1",
    "sk_grammar_learned", "sk_sync_uid", "sk_sync_wu",
    "sk_sync_words", "sk_sync_saved_keys",
    "sk_sync_baseline", "sk_sync_migrated", "sk_sync_seen",
    "sk_parentdoc"
    // sk_vocab_prog_* (web): xóa bằng cách quét prefix, xem clearLocalForLogout
    // sk_sync_meta_*: xóa bằng cách quét prefix
  ];

  var PUSH_DEBOUNCE_MS = 2000;

  /* ---------------- trạng thái module ---------------- */

  var cfg = null;          // { db, getUid, adapter, onStatus }
  var deviceId = null;
  var pushTimers = {};     // docId -> timeout
  var unsubListener = null;
  var syncingAll = false;
  var enabled = true; // công tắc đồng bộ (Cài đặt mobile: settings.sync)
  var parentEnsureTried = {}; // uid -> true: đã thử tạo doc cha trong lần tải trang này

  /* ---------------- tiện ích ---------------- */

  function now() { return Date.now(); }
  function log(msg) { if (cfg && typeof cfg.onStatus === "function") cfg.onStatus(msg); }
  function clone(o) { return o == null ? o : JSON.parse(JSON.stringify(o)); }
  function same(a, b) { return JSON.stringify(a || null) === JSON.stringify(b || null); }
  function num(x, dflt) { return (typeof x === "number" && isFinite(x)) ? x : dflt; }

  /* M-14a: làm sạch map đếm {khóa món: số lần} — chỉ giữ khóa chuỗi,
   * giá trị số nguyên >= 0 (làm tròn xuống, bỏ 0 vì 0 = chưa từng);
   * khóa sắp xếp để JSON.stringify ổn định khi same() so sánh doc
   * (tránh đẩy thừa do thứ tự khóa). Không phải object -> {}. */
  function countMap(o) {
    var out = {};
    if (!o || typeof o !== "object") return out;
    Object.keys(o).sort().forEach(function (k) {
      var v = o[k];
      if (typeof k === "string" && k && typeof v === "number" && isFinite(v) && v > 0)
        out[k] = Math.floor(v);
    });
    return out;
  }

  function lsGet(key) {
    try { return window.localStorage.getItem(key); } catch (_) { return null; }
  }
  function lsSet(key, val) {
    try { window.localStorage.setItem(key, val); } catch (_) {}
  }
  function lsRemove(key) {
    try { window.localStorage.removeItem(key); } catch (_) {}
  }
  function lsGetJSON(key, dflt) {
    try { var v = JSON.parse(lsGet(key) || "null"); return (v == null) ? dflt : v; }
    catch (_) { return dflt; }
  }
  function lsSetJSON(key, obj) { lsSet(key, JSON.stringify(obj)); }

  function getDeviceId() {
    if (deviceId) return deviceId;
    deviceId = lsGet(LS_DEVICE);
    if (!deviceId) {
      deviceId = "dev-" + now().toString(36) + "-" +
        Math.random().toString(36).slice(2, 8);
      lsSet(LS_DEVICE, deviceId);
    }
    return deviceId;
  }

  function coll(uid) {
    return cfg.db.collection("kanji_progress").doc(uid).collection("sync");
  }
  function wrap(data) {
    return { v: 1, data: data, updatedAt: now(), updatedBy: getDeviceId() };
  }

  /* ---------------- doc cha kanji_progress/{uid}: createdAt ----------------
   * Module chỉ ghi subcollection sync — doc cha KHÔNG tự tồn tại khi ghi
   * subcollection (Firestore: doc cha vẫn "không tồn tại", count()/list ở
   * bảng Admin không đếm được). Lần đồng bộ đầu tiên của mỗi tài khoản:
   * tạo doc cha (chỉ field createdAt = serverTimestamp) NẾU chưa có —
   * transaction get-then-set để 2 máy cùng tạo không ghi đè nhau.
   * Best-effort: lỗi (mất mạng, rules chưa cho ghi) thì bỏ qua, không làm
   * hỏng đồng bộ; lần tải trang sau thử lại (cờ RAM chỉ chặn thử lại trong
   * cùng 1 lần tải trang; cờ localStorage chỉ ghi khi đã chắc doc có).
   * Rules hiện tại cho owner create doc cha với mọi field nên giao dịch
   * này thành công (xem progress-sync/firestore.rules). */
  function parentFieldValue() {
    try {
      if (typeof firebase !== "undefined" && firebase.firestore && firebase.firestore.FieldValue) return firebase.firestore.FieldValue;
    } catch (_) {}
    return null;
  }
  function parentDocDone(uid) {
    try { return !!lsGetJSON(LS_PARENTDOC, {})[uid]; } catch (_) { return false; }
  }
  function parentDocMark(uid) {
    try { var m = lsGetJSON(LS_PARENTDOC, {}); m[uid] = 1; lsSetJSON(LS_PARENTDOC, m); } catch (_) {}
  }
  function ensureParentDoc(uid) {
    if (!uid || !cfg || !cfg.db) return Promise.resolve(false);
    if (parentEnsureTried[uid] || parentDocDone(uid)) return Promise.resolve(false);
    parentEnsureTried[uid] = true;
    var fv = parentFieldValue();
    if (!fv || typeof fv.serverTimestamp !== "function") return Promise.resolve(false);
    var ref = cfg.db.collection("kanji_progress").doc(uid);
    return cfg.db.runTransaction(function (tx) {
      return tx.get(ref).then(function (snap) {
        if (snap && snap.exists) return false;
        tx.set(ref, { createdAt: fv.serverTimestamp() });
        return true;
      });
    }).then(function () { parentDocMark(uid); return true; }).catch(function () { return false; });
  }

  /* Meta đóng dấu lần cuối của 1 doc (để biết mục nào thay đổi kể từ lần
   * đồng bộ trước — định dạng local không có timestamp nên module tự giữ). */
  function metaGet(docId) { return lsGetJSON(LS_META + docId, null); }
  function metaSet(docId, meta) { lsSetJSON(LS_META + docId, meta); }

  /* ---------------- đóng dấu thay đổi (dùng chung) ----------------
   * prevStamped: { khóa: {v, at} } — bản đã đồng bộ lần trước.
   * currPlain:   { khóa: giáTrị }  — trạng thái local hiện tại.
   * Trả về bản stamped mới: chỉ những khóa thay đổi mới lấy `at` = now,
   * khóa không đổi giữ nguyên `at` cũ. Khóa chỉ có giá trị "mặc định"
   * (0/false/null) và chưa từng có entry thì KHÔNG tạo entry (giữ map thưa).
   * removable=true: khóa biến mất khỏi currPlain (và trước đó truthy) thì
   * ghi {v: 0, at: now} — tức là "đã gỡ", để phía kia biết mà gỡ theo.
   * removable=false (vd status từ vựng — không có thao tác gỡ): khóa biến
   * mất thì giữ nguyên entry cũ. */
  function stampDiff(prevStamped, currPlain, removable, dflt) {
    prevStamped = prevStamped || {};
    currPlain = currPlain || {};
    var t = now(), out = {};
    var k;
    for (k in currPlain) {
      if (!Object.prototype.hasOwnProperty.call(currPlain, k)) continue;
      var v = currPlain[k];
      var prev = prevStamped[k];
      if (prev && prev.v === v) { out[k] = prev; continue; }
      if (!prev && (v === dflt || v === 0 || v === false || v == null)) continue;
      out[k] = { v: v, at: t };
    }
    for (k in prevStamped) {
      if (!Object.prototype.hasOwnProperty.call(prevStamped, k)) continue;
      if (k in currPlain) continue;
      if (removable && prevStamped[k] && prevStamped[k].v) {
        out[k] = { v: 0, at: t };
      } else if (!removable) {
        out[k] = prevStamped[k];
      }
    }
    return out;
  }

  /* Gộp 2 map stamped theo LWW từng khóa (mục nào `at` mới hơn thắng). */
  function mergeStamped(a, b) {
    a = a || {}; b = b || {};
    var out = {}, k;
    for (k in a) if (Object.prototype.hasOwnProperty.call(a, k)) out[k] = a[k];
    for (k in b) {
      if (!Object.prototype.hasOwnProperty.call(b, k)) continue;
      if (!out[k] || num(b[k] && b[k].at, 0) >= num(out[k] && out[k].at, 0)) out[k] = b[k];
    }
    return out;
  }

  /* Trích giá trị thuần từ map stamped (bỏ các mục v falsy — tức đã gỡ). */
  function stampedValues(stamped) {
    var out = {}, k;
    stamped = stamped || {};
    for (k in stamped) {
      if (!Object.prototype.hasOwnProperty.call(stamped, k)) continue;
      if (stamped[k] && stamped[k].v !== 0 && stamped[k].v !== false && stamped[k].v != null)
        out[k] = stamped[k].v;
    }
    return out;
  }

  /* ---------------- luật gộp từng doc (hàm thuần — test được) ---------------- */

  /* missions: local/server ở định dạng ĐỒNG BỘ (quizProg/kanjiProg dạng
   * {byDevice: {dev: {n, at}}}). Trả về {data, duplicateGrants}.
   * duplicateGrants: [{mission, amount}] — 2 máy cùng nhận thưởng 1 nhiệm vụ
   * trong ngày, cần trừ lại 1 lần (xem syncMissions). M-14b: amount =
   * min(EXP thực nhận 2 máy) — tổng đã nhận a+b, muốn giữ lại max(a,b)
   * (mức boost nếu 1 trong 2 đang boost) nên trừ (a+b)-max(a,b)=min(a,b).
   * Mục granted cũ không có amt thì dùng thưởng gốc (xem grantedAmt). */
  /* EXP thực nhận của 1 mục sổ granted (M-14b). Mục cũ (trước M-14b) không
   * có amt — hoặc amt không phải số dương — thì dùng thưởng gốc của nhiệm
   * vụ, đúng luật cũ (không đoán boost khi không có dữ kiện). */
  function grantedAmt(g, mk) {
    var a = num(g && g.amt, 0);
    return (a > 0) ? a : (MISSION_REWARDS[mk] || 0);
  }
  function mergeMissions(local, server, nowMs) {
    local = local || null; server = server || null;
    if (!local) return { data: clone(server), duplicateGrants: [] };
    if (!server) return { data: clone(local), duplicateGrants: [] };
    var days = {};
    var k;
    for (k in (local.days || {})) days[k] = 1;
    for (k in (server.days || {})) days[k] = 1;
    var out = { days: days };
    var dups = [];
    if (local.date === server.date) {
      out.date = local.date;
      out.rotKind = local.rotKind || server.rotKind || "";
      out.done = {};
      MISSION_KEYS.forEach(function (mk) {
        out.done[mk] = !!((local.done && local.done[mk]) || (server.done && server.done[mk]));
      });
      out.quizProg = mergeCounterMap(local.quizProg, server.quizProg);
      out.kanjiProg = mergeCounterMap(local.kanjiProg, server.kanjiProg);
      out.granted = {};
      MISSION_KEYS.forEach(function (mk) {
        var lg = local.granted && local.granted[mk];
        var sg = server.granted && server.granted[mk];
        if (lg && sg) {
          out.granted[mk] = (num(sg.at, 0) > num(lg.at, 0)) ? sg : lg;
          if (lg.by !== sg.by) dups.push({ mission: mk, amount: Math.min(grantedAmt(lg, mk), grantedAmt(sg, mk)) });
        } else if (lg || sg) {
          out.granted[mk] = lg || sg;
        }
      });
      out.clawback = {};
      for (k in (local.clawback || {})) out.clawback[k] = true;
      for (k in (server.clawback || {})) out.clawback[k] = true;
      // Đã trừ rồi thì không báo trùng nữa.
      dups = dups.filter(function (d) { return !out.clawback[d.mission]; });
    } else {
      // Khác ngày: phía có date mới hơn thắng toàn bộ (trừ days đã union).
      var winner = (String(local.date) > String(server.date)) ? local : server;
      out.date = winner.date;
      out.rotKind = winner.rotKind || "";
      out.done = clone(winner.done || {});
      out.quizProg = clone(winner.quizProg || { byDevice: {} });
      out.kanjiProg = clone(winner.kanjiProg || { byDevice: {} });
      out.granted = clone(winner.granted || {});
      out.clawback = clone(winner.clawback || {});
    }
    return { data: out, duplicateGrants: dups };
  }

  /* Gộp map đếm theo máy: {byDevice: {dev: {n, at}}} — LWW từng máy
   * (mỗi máy chỉ ghi mục của mình; unmark làm n giảm nên phải LWW, không max). */
  function mergeCounterMap(a, b) {
    var A = (a && a.byDevice) || {}, B = (b && b.byDevice) || {};
    var out = {}, k;
    for (k in A) if (Object.prototype.hasOwnProperty.call(A, k)) out[k] = A[k];
    for (k in B) {
      if (!Object.prototype.hasOwnProperty.call(B, k)) continue;
      if (!out[k] || num(B[k] && B[k].at, 0) >= num(out[k] && out[k].at, 0)) out[k] = B[k];
    }
    return { byDevice: out };
  }
  function counterTotal(cm, cap) {
    var bd = (cm && cm.byDevice) || {}, sum = 0, k;
    for (k in bd) if (Object.prototype.hasOwnProperty.call(bd, k)) sum += num(bd[k] && bd[k].n, 0);
    return Math.max(0, Math.min(cap, sum));
  }

  function mergePlan30(local, server) {
    local = local || {}; server = server || {};
    var out = { done: {} };
    ["N5", "N4", "N3", "N2", "N1"].forEach(function (lv) {
      out.done[lv] = Math.max(num(local.done && local.done[lv], 0),
                              num(server.done && server.done[lv], 0));
    });
    // appliedLv: LWW theo appliedAt; phía không có thì giữ phía còn lại.
    // M-10: phía thắng KHÔNG có appliedLv (vd máy mới omit ở lần sync
    // đầu khi vẫn là mặc định) thì lấy phía còn lại nếu có; cả 2 đều
    // không có thì BỎ key — không ghi undefined (Firestore cấm giá trị
    // undefined, set() sẽ ném và abort cả lần đồng bộ). Omit chứ không
    // default null như mergeJlpt: appliedLv vắng đã có nghĩa riêng
    // (adapter mobile cố tình omit), và toSyncData cũng chỉ ghi key
    // này khi có giá trị thật — omit giữ nhất quán cả 2 đầu.
    var la = local.appliedAt, sa = server.appliedAt;
    var winLv, winAt;
    if (sa == null || (la != null && la >= sa)) {
      winLv = local.appliedLv; winAt = la; // local thắng (kể cả hòa)
      if (winLv === undefined) { winLv = server.appliedLv; winAt = sa; }
    } else {
      winLv = server.appliedLv; winAt = sa;
      if (winLv === undefined) { winLv = local.appliedLv; winAt = la; }
    }
    if (winLv !== undefined) {
      out.appliedLv = winLv;
      if (winAt != null) out.appliedAt = winAt;
    }
    return out;
  }

  function mergeJlpt(local, server) {
    local = local || {}; server = server || {};
    var out = {};
    var la = local.targetAt, sa = server.targetAt;
    var lt = local.target || null, st = server.target || null;
    // mergeJlpt (2026-11-20): target null = "chưa chọn cấp mục tiêu",
    // KHÔNG phải hành động xóa — app không có luồng xóa target (chip
    // chọn cấp chỉ đặt N5..N1, xem renderJlptCard; key chỉ vắng khi
    // máy chưa từng chọn). Nên null KHÔNG BAO GIỜ thắng giá trị thật,
    // kể cả khi đóng dấu mới hơn: máy mới từng đóng dấu now() cho null
    // (xem toSyncData bên dưới, đã sửa) và server có thể đã bị ghi đè
    // null từ trước — luật này tự chữa lành các doc đã bị độc. Cả 2
    // phía đều có target thật thì vẫn LWW như cũ; cả 2 đều null thì
    // vẫn null.
    if (lt != null && st == null) {
      out.target = lt; if (la != null) out.targetAt = la;
    } else if (st != null && lt == null) {
      out.target = st; if (sa != null) out.targetAt = sa;
    } else if (lt == null && st == null) {
      out.target = null;
      var mAt = Math.max(num(la, 0), num(sa, 0));
      if (mAt) out.targetAt = mAt;
    } else if (la == null && sa == null) {
      out.target = lt; // cả 2 thật, đều chưa đóng dấu: giữ local (như cũ)
    } else if (sa == null || (la != null && la >= sa)) {
      out.target = lt; out.targetAt = la;
    } else { out.target = st; out.targetAt = sa; }
    // plan: cùng kỳ thi -> start sớm nhất (ngày bắt đầu thật); khác kỳ ->
    // lấy kỳ thi muộn hơn (kỳ hiện tại).
    var lp = local.plan, sp = server.plan;
    if (!lp) out.plan = clone(sp || null);
    else if (!sp) out.plan = clone(lp);
    else if (lp.exam === sp.exam) {
      out.plan = { exam: lp.exam, start: (String(lp.start) <= String(sp.start)) ? lp.start : sp.start };
    } else {
      out.plan = (String(lp.exam) > String(sp.exam)) ? clone(lp) : clone(sp);
    }
    // done: LWW từng mục trong từng ngày (checklist bật/tắt được).
    var done = {}, d, it;
    var allDates = {};
    for (d in (local.done || {})) allDates[d] = 1;
    for (d in (server.done || {})) allDates[d] = 1;
    for (d in allDates) {
      done[d] = mergeStamped(local.done && local.done[d], server.done && server.done[d]);
    }
    out.done = done;
    return out;
  }

  function mergeMaxMap(local, server) {
    local = local || {}; server = server || {};
    var out = {}, k;
    for (k in local) if (Object.prototype.hasOwnProperty.call(local, k)) out[k] = local[k];
    for (k in server) {
      if (!Object.prototype.hasOwnProperty.call(server, k)) continue;
      out[k] = Math.max(num(out[k], -Infinity), num(server[k], -Infinity));
    }
    return out;
  }

  /* videos: union theo id, LWW từng entry theo createdAt (như cũ),
   * + tombstone removed (ms): entry có removed[id] > createdAt thì bị
   * loại — sao chép pattern mergeSavedWords để xóa đồng bộ được. */
  function mergeVideos(local, server) {
    var byId = {};
    (local && local.mine || []).concat((server && server.mine) || []).forEach(function (e) {
      if (!e || !e.id) return;
      if (!byId[e.id] || num(e.createdAt, 0) >= num(byId[e.id].createdAt, 0)) byId[e.id] = e;
    });
    var removed = {};
    var k;
    for (k in (local && local.removed || {})) removed[k] = local.removed[k];
    for (k in (server && server.removed || {})) {
      if (!removed[k] || server.removed[k] > removed[k]) removed[k] = server.removed[k];
    }
    var mine = [];
    Object.keys(byId).forEach(function (id) {
      var e = byId[id];
      if (removed[id] && removed[id] > num(e.createdAt, 0)) return; // đã xóa sau lần tạo cuối
      mine.push(e);
    });
    mine.sort(function (a, b) { return num(b.createdAt, 0) - num(a.createdAt, 0); });
    return { mine: mine, removed: removed };
  }

  function mergeSettings(local, server) {
    local = local || {}; server = server || {};
    var out = {}, fieldAt = {}, f;
    ["sound", "remind", "recog", "sora", "explain"].forEach(function (f) {
      var la = num(local.fieldAt && local.fieldAt[f], 0);
      var sa = num(server.fieldAt && server.fieldAt[f], 0);
      if (sa > la) { out[f] = server[f]; fieldAt[f] = sa; }
      else if (local[f] !== undefined) { out[f] = local[f]; fieldAt[f] = la; }
      else if (server[f] !== undefined) { out[f] = server[f]; fieldAt[f] = sa; }
    });
    out.fieldAt = fieldAt;
    return out;
  }

  /* shop (M-11, chỉ mobile có — web không có shop nên adapter web bỏ
   * qua doc này): frame LWW theo frameAt (lần đeo gần nhất thắng).
   * frame phải thuộc owned, nếu không thì null (chưa đeo).
   * M-14: expBoostUntil (mốc hết hạn x2 EXP của Vật phẩm Tăng Tốc) gộp
   * max-wins — hết hạn muộn hơn thắng; 0/vắng = không có boost.
   * M-14a: bought/used là bộ đếm đơn điệu theo món, gộp max từng khóa;
   * sở hữu hiệu dụng = bought > used. Mua tăng bought, Dùng tăng used
   * (không bao giờ chỉ xóa khỏi owned) nên máy cũ còn giữ vật phẩm
   * đã dùng cũng không hồi sinh nó. Doc cũ không có bộ đếm: khóa còn
   * trong owned được coi như bought = 1 (đã mua, chưa dùng). */
  function mergeShop(local, server) {
    local = local || {}; server = server || {};
    var bought = countMap(local.bought), used = countMap(local.used);
    var sb = countMap(server.bought), su = countMap(server.used);
    var k;
    for (k in sb) if (!bought[k] || sb[k] > bought[k]) bought[k] = sb[k];
    for (k in su) if (!used[k] || su[k] > used[k]) used[k] = su[k];
    /* Doc cũ (trước M-14a) không có bộ đếm: khóa còn trong owned nghĩa
     * là đã mua và chưa dùng -> bought ít nhất 1. */
    (local.owned || []).concat(server.owned || []).forEach(function (kk) {
      if (typeof kk === "string" && kk && !bought[kk]) bought[kk] = 1;
    });
    /* Sở hữu hiệu dụng = đã mua nhiều hơn đã dùng; sắp xếp để JSON
     * ổn định khi same() so sánh doc. */
    var owned = Object.keys(bought).sort().filter(function (kk) {
      return bought[kk] > (used[kk] || 0);
    });
    var ownedSet = {};
    owned.forEach(function (kk) { ownedSet[kk] = true; });
    var la = num(local.frameAt, 0), sa = num(server.frameAt, 0);
    var frame, frameAt;
    if (sa > la) { frame = server.frame; frameAt = sa; }
    else { frame = local.frame; frameAt = la; }
    if (typeof frame !== "string" || !frame || !ownedSet[frame]) { frame = null; frameAt = 0; }
    return { owned: owned, frame: frame, frameAt: frameAt,
             expBoostUntil: Math.max(num(local.expBoostUntil, 0), num(server.expBoostUntil, 0)),
             bought: countMap(bought), used: countMap(used) };
  }

  /* savedWords: union theo khóa word|reading, LWW từng entry theo u,
   * fav = OR, tombstone removed (ms) mới hơn u thì entry bị loại. */
  function savedWordKey(w, r) { return (w || "") + "|" + (r || ""); }
  function mergeSavedWords(local, server) {
    local = local || {}; server = server || {};
    var byKey = {};
    (local.words || []).concat(server.words || []).forEach(function (e) {
      if (!e || !e.word) return;
      var k = savedWordKey(e.word, e.reading);
      var cur = byKey[k];
      if (!cur || num(e.u, 0) >= num(cur.u, 0)) {
        byKey[k] = clone(e);
        if (cur) byKey[k].fav = !!(cur.fav || e.fav);
      } else if (e.fav) {
        cur.fav = true;
      }
    });
    var removed = {};
    var k;
    for (k in (local.removed || {})) removed[k] = local.removed[k];
    for (k in (server.removed || {})) {
      if (!removed[k] || server.removed[k] > removed[k]) removed[k] = server.removed[k];
    }
    var words = [];
    for (k in byKey) {
      var e = byKey[k];
      if (removed[k] && removed[k] > num(e.u, 0)) continue; // đã gỡ sau lần sửa cuối
      words.push(e);
    }
    return { words: words, removed: removed };
  }

  /* vocab 1 bài: LWW từng chỉ số, từng mặt (status/favs/review đều dạng
   * {chỉSố: {v, at}}). Mục v falsy (đã gỡ ★ / gỡ khỏi deck ôn) vẫn giữ lại
   * trong map để lần gộp sau không hồi sinh — chỉ xóa khi cả 2 phía đều
   * không còn entry (không xảy ra vì entry {v:0} tồn tại mãi; dọn dẹp
   * thủ công nếu doc phình, xem SYNC-DESIGN.md §6). */
  function mergeVocab(local, server) {
    local = local || {}; server = server || {};
    return {
      status: mergeStamped(local.status, server.status),
      favs: mergeStamped(local.favs, server.favs),
      review: mergeStamped(local.review, server.review)
    };
  }

  var MERGES = {
    kanji: function (l, s) { return { marks: mergeStamped(l && l.marks, s && s.marks) }; },
    grammar: function (l, s) { return { marks: mergeStamped(l && l.marks, s && s.marks) }; },
    plan30: mergePlan30,
    jlpt: mergeJlpt,
    examBest: mergeMaxMap,
    videos: mergeVideos,
    settings: mergeSettings,
    shop: mergeShop,
    avatar: null, // LWW cả doc — xử lý riêng ở syncDoc (so updatedAt)
    savedWords: mergeSavedWords
  };

  /* ---------------- dịch local <-> định dạng đồng bộ ----------------
   * Adapter của mỗi bản đọc/ghi theo ĐỊNH DẠNG LOCAL của bản đó; các hàm
   * dưới đây dịch qua lại định dạng đồng bộ (có timestamp từng mục). */

  var convert = {
    /* kanji: mảng bit [0/1 x 2138] <-> {marks: {idx: {v, at}}}.
     * meta = marks đã đồng bộ lần trước (để đóng dấu đúng mục thay đổi). */
    kanjiToSync: function (bits, meta) {
      bits = bits || [];
      var plain = {};
      bits.forEach(function (b, i) { if (b) plain[i] = 1; });
      // Mục đã gỡ (có trong meta mà không còn trong plain) -> stampDiff
      // với removable=true sẽ ghi {v: 0}.
      return { marks: stampDiff(meta && meta.marks, plain, true, 0) };
    },
    kanjiFromSync: function (syncData, len) {
      var bits = new Array(len || 0);
      for (var i = 0; i < bits.length; i++) bits[i] = 0;
      var marks = (syncData && syncData.marks) || {};
      for (var k in marks) {
        if (Object.prototype.hasOwnProperty.call(marks, k) && marks[k] && marks[k].v)
          bits[Number(k)] = 1;
      }
      return bits;
    },

    /* grammar: map thuần {"N5|12": 1} <-> {marks: {"N5|12": {v, at}}}.
     * Giống kanji nhưng khóa là "cấp|chỉ số mẫu" thay vì chỉ số kanji. */
    grammarToSync: function (plain, meta) {
      plain = plain || {};
      var p = {};
      for (var k in plain) if (plain[k]) p[k] = 1;
      return { marks: stampDiff(meta && meta.marks, p, true, 0) };
    },
    grammarFromSync: function (syncData) {
      return stampedValues((syncData && syncData.marks) || {});
    },

    /* missions: số thuần local <-> map đếm theo máy.
     * meta = {date, quizOwn, kanjiOwn, quizAdopted, kanjiAdopted} — phần
     * đóng góp của máy này + phần đã nhận từ máy khác (xem SYNC-DESIGN.md
     * §5). Phải truyền meta vào/ra vì số local là TỔNG đã gộp, không phải
     * đóng góp riêng của máy. */
    missionsToSync: function (m, meta) {
      m = m || {};
      meta = meta || {};
      var t = now(), dev = getDeviceId();
      var out = {
        date: m.date || "", rotKind: m.rotKind || "",
        done: clone(m.done || {}), days: clone(m.days || {}),
        // granted/clawback không nằm trong localStorage của app — lấy từ meta.
        granted: clone(meta.granted || {}), clawback: clone(meta.clawback || {})
      };
      if (meta.date !== m.date) {
        // Sang ngày mới: đóng góp của máy này = số local (chưa gộp gì).
        meta = { date: m.date, quizOwn: num(m.quizProg, 0), kanjiOwn: num(m.kanjiProg, 0),
                 quizAdopted: 0, kanjiAdopted: 0 };
      } else {
        // Phần thay đổi kể từ lần gộp trước là của máy này.
        var dq = num(m.quizProg, 0) - (num(meta.quizOwn, 0) + num(meta.quizAdopted, 0));
        var dk = num(m.kanjiProg, 0) - (num(meta.kanjiOwn, 0) + num(meta.kanjiAdopted, 0));
        meta.quizOwn = Math.max(0, num(meta.quizOwn, 0) + dq);
        meta.kanjiOwn = Math.max(0, num(meta.kanjiOwn, 0) + dk);
        meta.quizAdopted = Math.max(0, num(m.quizProg, 0) - meta.quizOwn);
        meta.kanjiAdopted = Math.max(0, num(m.kanjiProg, 0) - meta.kanjiOwn);
      }
      var prevQ = (meta.prevSync && meta.prevSync.quizProg) || { byDevice: {} };
      var prevK = (meta.prevSync && meta.prevSync.kanjiProg) || { byDevice: {} };
      out.quizProg = mergeCounterMap(prevQ, { byDevice: (function (o) {
        o[dev] = { n: meta.quizOwn, at: t }; return o; })({}) });
      out.kanjiProg = mergeCounterMap(prevK, { byDevice: (function (o) {
        o[dev] = { n: meta.kanjiOwn, at: t }; return o; })({}) });
      return { data: out, meta: meta };
    },
    missionsFromSync: function (syncData, meta) {
      syncData = syncData || {};
      meta = meta || {};
      var m = {
        date: syncData.date || "", rotKind: syncData.rotKind || "",
        done: clone(syncData.done || {}), days: clone(syncData.days || {}),
        granted: clone(syncData.granted || {}), clawback: clone(syncData.clawback || {})
      };
      m.quizProg = counterTotal(syncData.quizProg, QUIZ_CAP);
      m.kanjiProg = counterTotal(syncData.kanjiProg, KANJI_CAP);
      if (meta.date !== syncData.date) {
        meta = { date: syncData.date, quizOwn: 0, kanjiOwn: 0,
                 quizAdopted: m.quizProg, kanjiAdopted: m.kanjiProg };
      } else {
        meta.quizAdopted = Math.max(0, m.quizProg - num(meta.quizOwn, 0));
        meta.kanjiAdopted = Math.max(0, m.kanjiProg - num(meta.kanjiOwn, 0));
      }
      meta.prevSync = { quizProg: clone(syncData.quizProg), kanjiProg: clone(syncData.kanjiProg) };
      meta.granted = clone(syncData.granted || {});
      meta.clawback = clone(syncData.clawback || {});
      return { data: m, meta: meta };
    },

    /* jlpt done: {ngày: {mục: 1}} <-> {ngày: {mục: {v, at}}}.
     * meta = done đã đồng bộ lần trước (định dạng sync). */
    jlptDoneToSync: function (donePlain, metaDone) {
      donePlain = donePlain || {}; metaDone = metaDone || {};
      var out = {}, d;
      var allDates = {};
      for (d in donePlain) allDates[d] = 1;
      for (d in metaDone) allDates[d] = 1;
      for (d in allDates) {
        var plain = {};
        var items = donePlain[d] || {};
        for (var it in items) if (items[it]) plain[it] = 1;
        out[d] = stampDiff(metaDone[d], plain, true, 0);
      }
      return out;
    },
    jlptDoneFromSync: function (doneSync) {
      var out = {}, d, it;
      doneSync = doneSync || {};
      for (d in doneSync) {
        var day = {};
        var items = doneSync[d] || {};
        for (it in items) if (items[it] && items[it].v) day[it] = 1;
        out[d] = day;
      }
      return out;
    },

    /* vocab 1 bài: {status, favs, review[]} <-> {status, favs, review}
     * dạng {chỉSố: {v, at}}. meta = bản sync đã đồng bộ lần trước. */
    vocabToSync: function (raw, meta) {
      raw = raw || {}; meta = meta || {};
      var reviewPlain = {};
      (raw.review || []).forEach(function (i) { reviewPlain[i] = 1; });
      var favsPlain = {};
      var f = raw.favs || {};
      for (var k in f) if (f[k]) favsPlain[k] = 1;
      return {
        status: stampDiff(meta.status, raw.status || {}, false, null),
        favs: stampDiff(meta.favs, favsPlain, true, 0),
        review: stampDiff(meta.review, reviewPlain, true, 0)
      };
    },
    vocabFromSync: function (syncData) {
      syncData = syncData || {};
      var review = [];
      var rv = syncData.review || {};
      for (var k in rv) if (rv[k] && rv[k].v) review.push(Number(k));
      review.sort(function (a, b) { return a - b; });
      var favs = {};
      var fv = syncData.favs || {};
      for (var f in fv) if (fv[f] && fv[f].v) favs[f] = true;
      return {
        status: stampedValues(syncData.status),
        favs: favs,
        review: review
      };
    },

    /* savedWords: entry mobile -> entry chuẩn (bỏ ex/img, thêm u/src).
     * resolveSrc(word, reading) -> {kind, lesson, idx} | null — do app
     * cung cấp (tra dữ liệu từ vựng + dokkai trên máy). */
    mobileWordToCanonical: function (entry, resolveSrc, t) {
      t = t || now();
      var src = null;
      try { src = resolveSrc ? resolveSrc(entry.word, entry.reading) : null; } catch (_) {}
      return {
        word: entry.word, reading: entry.reading || "",
        hanViet: entry.hanViet || "", meaning: entry.meaning || "",
        lv: entry.lv || null, from: entry.from || "",
        fav: !!entry.fav, u: t, src: src
      };
    },
    canonicalToMobileWord: function (entry, resolveDetail) {
      var ex = null, img = null;
      try {
        if (resolveDetail) { var d = resolveDetail(entry.word, entry.reading) || {}; ex = d.ex || null; img = d.img || null; }
      } catch (_) {}
      return {
        word: entry.word, reading: entry.reading || "",
        hanViet: entry.hanViet || "", meaning: entry.meaning || "",
        ex: ex, img: img, lv: entry.lv || null, from: entry.from || ""
      };
    },
    /* Từ web: (lessonKey, idx) + entry đầy đủ của từ đó -> entry chuẩn.
     * resolveLessonWord(lessonKey, idx) do app web cung cấp (tra dữ liệu
     * bài đó). kind: "minna" | "cn" | "dk". */
    webWordToCanonical: function (lessonKey, kind, idx, wordEntry, fav, t) {
      t = t || now();
      return {
        word: wordEntry.word, reading: wordEntry.reading || "",
        hanViet: wordEntry.hanViet || "", meaning: wordEntry.meaning || "",
        lv: wordEntry.lv || null, from: wordEntry.from || lessonKey,
        fav: !!fav, u: t,
        src: { kind: kind, lesson: lessonKey, idx: idx }
      };
    }
  };

  /* ---------------- adapter: mỗi bản app tự viết ----------------
   * Adapter đọc/ghi theo ĐỊNH DẠNG LOCAL của bản đó:
   *   readLocal(docId)  -> payload local, null nếu bản này có doc đó nhưng
   *                        chưa có dữ liệu, undefined nếu bản này KHÔNG có
   *                        doc đó (module sẽ bỏ qua doc đó hoàn toàn).
   *   writeLocal(docId, payload) -> ghi payload local về localStorage
   *                        (+ biến RAM của app nếu có) rồi render lại.
   *   listVocabKeys()   -> [lessonKey...] các bài có tiến độ local (web);
   *                        mobile trả [].
   *   onMerged(docId)   -> (tùy chọn) render lại sau khi gộp xong.
   * Định dạng local từng doc (xem SYNC-DESIGN.md §2 + REPORT.md):
   *   wallet:   {tuvi, linh, cong, duelLeft, wins, losses} (mobile: state)
   *   missions: {date, rotKind, done, quizProg:number, kanjiProg:number, days}
   *   kanji:    mảng bit [0/1...] theo thứ tự KANJI
   *   plan30:   {appliedLv, done:{N5..N1}} (web không có appliedLv)
 *   shop:     {owned: [key...], frame, frameAt, expBoostUntil,
 *             bought: {key: n}, used: {key: n}} (mobile only; web không có shop)
   *   jlpt:     {target, plan:{exam,start}, done:{ngày:{mục:1}}}
   *   examBest: {"N5-1": điểm}
   *   videos:   {mine:[{id,title,dur,lines,createdAt}]} (tombstone
   *             removed:{id:ms} giữ trong meta module, xem syncVideos)
   *   settings: {sound, remind, recog, sora}
   *   avatar:   {choice, custom}
   *   savedWords: {words:[entry chuẩn], removed:{}} — mobile adapter tự
   *             dịch sk_saved_words qua lại (xem convert.*); web adapter
   *             gom/tách các sk_vocab_prog_* (xem SYNC-DESIGN.md §6).
   *   vocab_<k>: {status:{idx:"known"|"unknown"}, favs:{idx:true},
   *             review:[idx]} — đúng hình dạng sk_vocab_prog_*.
   * CHÚ Ý: adapter.readLocal("missions") KHÔNG cần trả granted/clawback
   * (module giữ 2 map đó trong meta, app ghi qua SKSync.grantMission). */

  /* ---------------- dịch local -> sync (có đóng dấu) ---------------- */

  function toSyncData(docId, localRaw, meta) {
    meta = meta || {};
    var t = now();
    if (docId === "kanji") return convert.kanjiToSync(localRaw, meta);
    if (docId === "grammar") return convert.grammarToSync(localRaw || {}, meta);
    if (docId === "missions") {
      var r = convert.missionsToSync(localRaw, meta);
      return r.data;
    }
    if (docId === "jlpt") {
      var jl = localRaw || {};
      var out = { plan: clone(jl.plan || null) };
      var prevTarget = meta.target;
      out.target = jl.target || null;
      // mergeJlpt (2026-11-20): target null = chưa chọn, KHÔNG phải
      // hành động của user — không đóng dấu mới. Trước đây máy mới meta
      // trống nên (null !== undefined) -> true -> đóng dấu now() cho
      // null, rồi LWW cho null thắng mục tiêu thật trên server. Giữ
      // targetAt cũ (0 nếu chưa từng có) để null không bao giờ mang
      // dấu mới; target thật đổi vẫn đóng dấu như cũ.
      out.targetAt = (out.target != null && jl.target !== prevTarget) ? t : (meta.targetAt || 0);
      out.done = convert.jlptDoneToSync(jl.done || {}, meta.done || {});
      return out;
    }
    if (docId === "plan30") {
      var p = localRaw || {};
      var po = { done: clone(p.done || {}) };
      if (p.appliedLv !== undefined) {
        po.appliedLv = p.appliedLv;
        po.appliedAt = (p.appliedLv !== meta.appliedLv) ? t : (meta.appliedAt || 0);
      }
      return po;
    }
    if (docId === "shop") {
      var sh = localRaw || {};
      return {
        owned: (sh.owned || []).filter(function (k) { return typeof k === "string" && k; }),
        frame: (typeof sh.frame === "string" && sh.frame) ? sh.frame : null,
        frameAt: num(sh.frameAt, 0),
        expBoostUntil: num(sh.expBoostUntil, 0),
        bought: countMap(sh.bought),
        used: countMap(sh.used)
      };
    }
    if (docId === "settings") {
      var s = localRaw || {};
      var so = { fieldAt: {} };
      ["sound", "remind", "recog", "sora", "explain"].forEach(function (f) {
        so[f] = s[f];
        so.fieldAt[f] = (s[f] !== (meta.values && meta.values[f])) ? t
          : (meta.fieldAt && meta.fieldAt[f]) || 0;
      });
      return so;
    }
    if (docId.indexOf(VOCAB_PREFIX) === 0) return convert.vocabToSync(localRaw || {}, meta);
    if (docId === "videos") {
      var v = localRaw || {};
      return { mine: clone(v.mine || []), removed: clone(meta.removed || {}) };
    }
    return clone(localRaw); // wallet/examBest/avatar/savedWords: giữ nguyên
  }

  /* Dịch sync -> local. Trả về {local, meta} (meta mới để lưu lại). */
  function fromSyncData(docId, syncData, meta) {
    meta = meta || {};
    if (docId === "kanji") {
      var bits = convert.kanjiFromSync(syncData, meta.len || 0);
      return { local: bits, meta: { marks: clone((syncData && syncData.marks) || {}), len: bits.length } };
    }
    if (docId === "grammar") {
      return { local: convert.grammarFromSync(syncData),
               meta: { marks: clone((syncData && syncData.marks) || {}) } };
    }
    if (docId === "missions") {
      var r = convert.missionsFromSync(syncData, meta);
      // granted/clawback ở lại meta, không ghi xuống localStorage của app.
      var m = r.data;
      delete m.granted; delete m.clawback;
      return { local: m, meta: r.meta };
    }
    if (docId === "jlpt") {
      var j = syncData || {};
      return {
        local: { target: j.target || null, plan: clone(j.plan || null),
                 done: convert.jlptDoneFromSync(j.done || {}) },
        meta: { target: j.target || null, targetAt: j.targetAt || 0, done: clone(j.done || {}) }
      };
    }
    if (docId === "plan30") {
      var p = syncData || {};
      // M-10 (phòng thủ sâu): server thiếu appliedLv thì không tạo key
      // undefined trong payload local — payload này tuy không đi thẳng
      // tới Firestore (adapter + toSyncData đều đã guard), giữ sạch
      // vẫn hơn là để undefined lang thang trong local/meta.
      var pLocal = { done: clone(p.done || {}) };
      var pMeta = { appliedAt: p.appliedAt || 0 };
      if (p.appliedLv !== undefined) {
        pLocal.appliedLv = p.appliedLv;
        pMeta.appliedLv = p.appliedLv;
      }
      return { local: pLocal, meta: pMeta };
    }
    if (docId === "shop") {
      var s2 = syncData || {};
      return {
        local: {
          owned: (s2.owned || []).filter(function (k) { return typeof k === "string" && k; }),
          frame: (typeof s2.frame === "string" && s2.frame) ? s2.frame : null,
          frameAt: num(s2.frameAt, 0),
          expBoostUntil: num(s2.expBoostUntil, 0),
          bought: countMap(s2.bought),
          used: countMap(s2.used)
        },
        meta: {}
      };
    }
    if (docId === "settings") {
      var s = syncData || {};
      return {
        local: { sound: s.sound, remind: s.remind, recog: s.recog, sora: s.sora, explain: s.explain },
        meta: { values: { sound: s.sound, remind: s.remind, recog: s.recog, sora: s.sora, explain: s.explain },
                fieldAt: clone(s.fieldAt || {}) }
      };
    }
    if (docId.indexOf(VOCAB_PREFIX) === 0) {
      return { local: convert.vocabFromSync(syncData || {}), meta: clone(syncData || {}) };
    }
    if (docId === "videos") {
      var vs = syncData || {};
      return { local: { mine: clone(vs.mine || []) },
               meta: { removed: clone(vs.removed || {}) } };
    }
    return { local: clone(syncData), meta: meta }; // examBest/avatar/savedWords
  }

  /* ---------------- tầng Firestore ---------------- */

  function readServerDoc(uid, docId) {
    return coll(uid).doc(docId).get().then(function (snap) {
      if (!snap || !snap.exists) return null;
      return snap.data();
    });
  }
  function writeServerDoc(uid, docId, data) {
    return coll(uid).doc(docId).set(wrap(data));
  }
  function listServerDocIds(uid) {
    return coll(uid).get().then(function (qs) {
      var ids = [];
      qs.forEach(function (d) { ids.push(d.id); });
      return ids;
    });
  }

  function seenGet() { return lsGetJSON(LS_SEEN, {}); }
  function seenSet(map) { lsSetJSON(LS_SEEN, map); }
  function markSeen(docId, updatedAt) {
    var m = seenGet(); m[docId] = updatedAt; seenSet(m);
  }

  /* ---------------- wallet: delta qua transaction ----------------
   * Đẩy: delta = local - baseline (lần đầu: local - SEED). Đọc server trong
   * transaction rồi ghi server + delta (nguyên tử, an toàn khi 2 máy ghi
   * cùng lúc). Kéo: lấy server làm local mới, baseline = server. */
  function walletLocal() {
    var w = cfg.adapter.readLocal("wallet");
    if (w === undefined) return undefined;
    w = w || {};
    var out = {};
    WALLET_FIELDS.forEach(function (f) { out[f] = num(w[f], SYNC_SEED[f]); });
    return out;
  }
  function baselineGet() { return lsGetJSON(LS_BASELINE, null); }
  function baselineSet(b) { lsSetJSON(LS_BASELINE, b); }

  function pushWallet(uid, firstSync) {
    var local = walletLocal();
    if (local === undefined) return Promise.resolve(false);
    var base = baselineGet();
    var deltas = {}, hasDelta = false;
    WALLET_FIELDS.forEach(function (f) {
      var ref = firstSync ? SYNC_SEED[f] : (base ? num(base[f], SYNC_SEED[f]) : SYNC_SEED[f]);
      var d = num(local[f], SYNC_SEED[f]) - ref;
      deltas[f] = d;
      if (d !== 0) hasDelta = true;
    });
    // Không có delta (local == baseline) thì khỏi ghi — lần đầu
    // (firstSync) vẫn ghi để tạo doc server khi chưa có.
    if (!hasDelta && !firstSync) return Promise.resolve(false);
    var ref = coll(uid).doc("wallet");
    return cfg.db.runTransaction(function (tx) {
      return tx.get(ref).then(function (snap) {
        var cur = (snap && snap.exists) ? (snap.data().data || {}) : null;
        var next = {};
        if (!cur) {
          // Server chưa có: local là bản duy nhất (kể cả lần đầu).
          WALLET_FIELDS.forEach(function (f) { next[f] = num(local[f], SYNC_SEED[f]); });
        } else {
          WALLET_FIELDS.forEach(function (f) {
            next[f] = num(cur[f], SYNC_SEED[f]) + deltas[f];
          });
        }
        tx.set(ref, wrap(next));
        return next;
      });
    }).then(function (next) {
      baselineSet(clone(local));
      markSeen("wallet", now());
      return hasDelta;
    });
  }

  function pullWallet(uid) {
    var local = walletLocal();
    if (local === undefined) return Promise.resolve(false);
    return readServerDoc(uid, "wallet").then(function (env) {
      if (!env || !env.data) return false;
      var server = {};
      WALLET_FIELDS.forEach(function (f) { server[f] = num(env.data[f], SYNC_SEED[f]); });
      if (same(server, local)) { baselineSet(clone(server)); return false; }
      cfg.adapter.writeLocal("wallet", clone(server));
      baselineSet(clone(server));
      markSeen("wallet", env.updatedAt || 0);
      if (cfg.adapter.onMerged) cfg.adapter.onMerged("wallet");
      return true;
    });
  }

  /* Điều chỉnh ví 1 lần (dùng cho clawback thưởng nhiệm vụ trùng): trừ cả
   * server lẫn local + baseline cùng 1 lượng để không lệch nhau. */
  function adjustWallet(uid, adj) {
    var ref = coll(uid).doc("wallet");
    return cfg.db.runTransaction(function (tx) {
      return tx.get(ref).then(function (snap) {
        if (!snap || !snap.exists) return null;
        var cur = snap.data().data || {}, next = {};
        WALLET_FIELDS.forEach(function (f) {
          next[f] = num(cur[f], SYNC_SEED[f]) + num(adj[f], 0);
        });
        tx.set(ref, wrap(next));
        return next;
      });
    }).then(function (next) {
      if (!next) return false;
      var local = walletLocal();
      if (local !== undefined) {
        WALLET_FIELDS.forEach(function (f) { local[f] = num(local[f], 0) + num(adj[f], 0); });
        cfg.adapter.writeLocal("wallet", local);
        baselineSet(clone(local));
      }
      return true;
    });
  }

  /* ---------------- sync 1 doc thường ---------------- */

  function syncOne(uid, docId) {
    var localRaw = cfg.adapter.readLocal(docId);
    if (localRaw === undefined) return Promise.resolve("skip"); // bản này không có doc
    var meta = metaGet(docId);
    return readServerDoc(uid, docId).then(function (env) {
      var serverData = env ? env.data : null;
      var serverAt = env ? num(env.updatedAt, 0) : 0;
      // Avatar: LWW cả cặp theo updatedAt của server so với lần thấy cuối.
      if (docId === "avatar") {
        var seen = seenGet()[docId] || 0;
        if (!env) {
          if (localRaw == null) return "empty";
          return writeServerDoc(uid, docId, clone(localRaw)).then(function () {
            markSeen(docId, now()); return "pushed";
          });
        }
        if (same(serverData, localRaw)) { markSeen(docId, serverAt); return "same"; }
        if (serverAt > seen) {
          cfg.adapter.writeLocal(docId, clone(serverData));
          markSeen(docId, serverAt);
          if (cfg.adapter.onMerged) cfg.adapter.onMerged(docId);
          return "pulled";
        }
        return writeServerDoc(uid, docId, clone(localRaw)).then(function () {
          markSeen(docId, now()); return "pushed";
        });
      }
      var localSync = (localRaw == null) ? null : toSyncData(docId, localRaw, meta);
      if (!serverData && localSync == null) return "empty";
      if (!serverData) {
        return writeServerDoc(uid, docId, localSync).then(function () {
          markSeen(docId, now());
          metaSet(docId, fromSyncData(docId, localSync, meta).meta);
          return "pushed";
        });
      }
      if (localSync == null) {
        var pulled = fromSyncData(docId, serverData, meta);
        cfg.adapter.writeLocal(docId, pulled.local);
        metaSet(docId, pulled.meta);
        markSeen(docId, serverAt);
        if (cfg.adapter.onMerged) cfg.adapter.onMerged(docId);
        return "pulled";
      }
      var merged;
      if (docId.indexOf(VOCAB_PREFIX) === 0) merged = mergeVocab(localSync, serverData);
      else if (docId === "kanji") merged = MERGES.kanji(localSync, serverData);
      else if (docId === "grammar") merged = MERGES.grammar(localSync, serverData);
      else if (docId === "plan30") merged = mergePlan30(localSync, serverData);
      else if (docId === "jlpt") merged = mergeJlpt(localSync, serverData);
      else if (docId === "examBest") merged = mergeMaxMap(localSync, serverData);
      else if (docId === "videos") merged = mergeVideos(localSync, serverData);
      else if (docId === "settings") merged = mergeSettings(localSync, serverData);
      else if (docId === "shop") merged = mergeShop(localSync, serverData);
      else return Promise.resolve("unsupported");
      var serverChanged = !same(merged, serverData);
      var localChanged = !same(merged, localSync);
      var p = Promise.resolve();
      if (serverChanged) p = p.then(function () { return writeServerDoc(uid, docId, merged); });
      return p.then(function () {
        if (serverChanged) markSeen(docId, now()); else markSeen(docId, serverAt);
        if (localChanged) {
          var applied = fromSyncData(docId, merged, meta);
          cfg.adapter.writeLocal(docId, applied.local);
          metaSet(docId, applied.meta);
          if (cfg.adapter.onMerged) cfg.adapter.onMerged(docId);
        } else {
          metaSet(docId, fromSyncData(docId, merged, meta).meta);
        }
        return (serverChanged || localChanged) ? "merged" : "same";
      });
    });
  }

  /* ---------------- missions (có clawback) ---------------- */

  function syncMissions(uid) {
    var localRaw = cfg.adapter.readLocal("missions");
    if (localRaw === undefined) return Promise.resolve("skip");
    var meta = metaGet("missions") || {};
    return readServerDoc(uid, "missions").then(function (env) {
      var serverData = env ? env.data : null;
      var serverAt = env ? num(env.updatedAt, 0) : 0;
      // granted/clawback không nằm trong localStorage của app — lấy từ meta.
      var conv = convert.missionsToSync(localRaw || {}, meta);
      var localSync = conv.data;
      localSync.granted = clone(meta.granted || {});
      localSync.clawback = clone(meta.clawback || {});
      if (!serverData && localRaw == null) return "empty";
      if (!serverData) {
        return writeServerDoc(uid, "missions", localSync).then(function () {
          markSeen("missions", now());
          // A14: lưu meta đã tính (kèm sổ granted/clawback) thay
          // vì meta cũ — meta cũ mất ngày/đóng góp khi sang ngày mới.
          var pushMeta = conv.meta;
          pushMeta.granted = clone(meta.granted || {});
          pushMeta.clawback = clone(meta.clawback || {});
          metaSet("missions", pushMeta);
          return "pushed";
        });
      }
      if (localRaw == null) {
        var pulled = convert.missionsFromSync(serverData, meta);
        cfg.adapter.writeLocal("missions", (function (m) {
          delete m.granted; delete m.clawback; return m;
        })(pulled.data));
        metaSet("missions", pulled.meta);
        markSeen("missions", serverAt);
        if (cfg.adapter.onMerged) cfg.adapter.onMerged("missions");
        return "pulled";
      }
      var r = mergeMissions(localSync, serverData, now());
      var merged = r.data;
      var dups = r.duplicateGrants;
      var serverChanged = !same(merged, serverData);
      var localChanged = !same(merged, localSync);
      var p = Promise.resolve();
      if (dups.length) {
        // Trừ lại 1 lần thưởng cho mỗi nhiệm vụ bị nhận trùng.
        var adj = { tuvi: 0 };
        dups.forEach(function (d) {
          adj.tuvi -= (d.amount || 0);
          merged.clawback[d.mission] = true;
        });
        serverChanged = true;
        p = p.then(function () { return adjustWallet(uid, adj); });
      }
      if (serverChanged) p = p.then(function () { return writeServerDoc(uid, "missions", merged); });
      return p.then(function () {
        if (serverChanged) markSeen("missions", now()); else markSeen("missions", serverAt);
        var applied = convert.missionsFromSync(merged, meta);
        // Lưu granted/clawback vào meta (không ghi xuống localStorage app).
        var newMeta = applied.meta;
        newMeta.granted = clone(merged.granted || {});
        newMeta.clawback = clone(merged.clawback || {});
        metaSet("missions", newMeta);
        if (localChanged) {
          var m = applied.data;
          delete m.granted; delete m.clawback;
          cfg.adapter.writeLocal("missions", m);
          if (cfg.adapter.onMerged) cfg.adapter.onMerged("missions");
        }
        return (serverChanged || localChanged) ? "merged" : "same";
      });
    });
  }

  /* ---------------- savedWords (tombstone trong meta) ---------------- */

  function syncSavedWords(uid) {
    var localRaw = cfg.adapter.readLocal("savedWords");
    if (localRaw === undefined) return Promise.resolve("skip");
    var meta = metaGet("savedWords") || {};
    return readServerDoc(uid, "savedWords").then(function (env) {
      var serverData = env ? env.data : null;
      var serverAt = env ? num(env.updatedAt, 0) : 0;
      var localSync = null;
      if (localRaw != null) {
        localSync = { words: clone(localRaw.words || []), removed: clone(meta.removed || {}) };
      }
      if (!serverData && localSync == null) return "empty";
      if (!serverData) {
        return writeServerDoc(uid, "savedWords", localSync).then(function () {
          markSeen("savedWords", now()); return "pushed";
        });
      }
      if (localSync == null) {
        cfg.adapter.writeLocal("savedWords", { words: clone(serverData.words || []),
                                               removed: clone(serverData.removed || {}) });
        metaSet("savedWords", { removed: clone(serverData.removed || {}) });
        markSeen("savedWords", serverAt);
        if (cfg.adapter.onMerged) cfg.adapter.onMerged("savedWords");
        return "pulled";
      }
      var merged = mergeSavedWords(localSync, serverData);
      var serverChanged = !same(merged, serverData);
      var localChanged = !same(merged, localSync);
      var p = Promise.resolve();
      if (serverChanged) p = p.then(function () { return writeServerDoc(uid, "savedWords", merged); });
      return p.then(function () {
        if (serverChanged) markSeen("savedWords", now()); else markSeen("savedWords", serverAt);
        metaSet("savedWords", { removed: clone(merged.removed || {}) });
        if (localChanged) {
          cfg.adapter.writeLocal("savedWords", { words: merged.words, removed: merged.removed });
          if (cfg.adapter.onMerged) cfg.adapter.onMerged("savedWords");
        }
        return (serverChanged || localChanged) ? "merged" : "same";
      });
    });
  }

  /* ---------------- videos (tombstone trong meta, như savedWords) ----------------
   * Khác savedWords ở 1 điểm: adapter web trả null khi danh sách rỗng
   * (mobile luôn trả {mine:[]}). Khi local null mà meta còn tombstone thì
   * vẫn phải đẩy tombstone lên (không được rẽ nhánh pull rồi hồi sinh). */
  function syncVideos(uid) {
    var localRaw = cfg.adapter.readLocal("videos");
    if (localRaw === undefined) return Promise.resolve("skip");
    var meta = metaGet("videos") || {};
    var removed = clone(meta.removed || {});
    return readServerDoc(uid, "videos").then(function (env) {
      var serverData = env ? env.data : null;
      var serverAt = env ? num(env.updatedAt, 0) : 0;
      var localSync = null;
      if (localRaw != null) {
        localSync = { mine: clone(localRaw.mine || []), removed: removed };
      } else if (Object.keys(removed).length) {
        localSync = { mine: [], removed: removed }; // web: rỗng nhưng còn tombstone
      }
      if (!serverData && localSync == null) return "empty";
      if (!serverData) {
        return writeServerDoc(uid, "videos", localSync).then(function () {
          markSeen("videos", now()); return "pushed";
        });
      }
      if (localSync == null) {
        // Máy mới, chưa có video + không có tombstone: kéo server về.
        // Vẫn đi qua mergeVideos để tombstone phía server (nếu có) được áp dụng.
        var pulled = mergeVideos({ mine: [], removed: {} }, serverData);
        cfg.adapter.writeLocal("videos", { mine: pulled.mine });
        metaSet("videos", { removed: clone(pulled.removed || {}) });
        markSeen("videos", serverAt);
        if (cfg.adapter.onMerged) cfg.adapter.onMerged("videos");
        return "pulled";
      }
      var merged = mergeVideos(localSync, serverData);
      var serverChanged = !same(merged, serverData);
      var localChanged = !same(merged, localSync);
      var p = Promise.resolve();
      if (serverChanged) p = p.then(function () { return writeServerDoc(uid, "videos", merged); });
      return p.then(function () {
        if (serverChanged) markSeen("videos", now()); else markSeen("videos", serverAt);
        metaSet("videos", { removed: clone(merged.removed || {}) });
        if (localChanged) {
          cfg.adapter.writeLocal("videos", { mine: merged.mine });
          if (cfg.adapter.onMerged) cfg.adapter.onMerged("videos");
        }
        return (serverChanged || localChanged) ? "merged" : "same";
      });
    });
  }

  /* ---------------- đồng bộ đầy đủ + migration ---------------- */

  function allDocIds(uid) {
    var localVocab = [];
    try { localVocab = cfg.adapter.listVocabKeys() || []; } catch (_) {}
    return listServerDocIds(uid).then(function (serverIds) {
      var ids = FIXED_DOCS.slice();
      var seen = {};
      ids.forEach(function (id) { seen[id] = 1; });
      serverIds.forEach(function (id) {
        if (id.indexOf(VOCAB_PREFIX) === 0 && !seen[id]) { ids.push(id); seen[id] = 1; }
      });
      localVocab.forEach(function (k) {
        var id = VOCAB_PREFIX + k;
        if (!seen[id]) { ids.push(id); seen[id] = 1; }
      });
      return ids;
    });
  }

  function syncAllIds(uid, ids) {
    // Thứ tự: đẩy ví -> missions (clawback sửa ví) -> các doc còn lại -> kéo ví.
    // M-10: mỗi bước có catch riêng — 1 doc lỗi chỉ log rồi tiếp tục,
    // không abort các doc còn lại + pullWallet (trước đây 1 lỗi ở
    // plan30 làm mất cả jlpt/examBest/videos/settings/avatar/savedWords
    // + pullWallet). Bọc cả 2 đầu ví: lỗi đẩy ví không chặn các doc
    // khác, lỗi kéo ví không làm hỏng lần đồng bộ đã xong.
    function guarded(fn, label) {
      return function () {
        return Promise.resolve().then(fn).catch(function (err) {
          log("Đồng bộ lỗi (" + label + "): " + ((err && err.message) || err));
          return "error";
        });
      };
    }
    var chain = Promise.resolve();
    chain = chain.then(guarded(function () { return pushWallet(uid, false); }, "wallet-push"));
    chain = chain.then(guarded(function () { return syncMissions(uid); }, "missions"));
    ids.forEach(function (id) {
      if (id === "wallet" || id === "missions") return;
      if (id === "savedWords") { chain = chain.then(guarded(function () { return syncSavedWords(uid); }, id)); }
      else if (id === "videos") { chain = chain.then(guarded(function () { return syncVideos(uid); }, id)); }
      else { chain = chain.then(guarded(function () { return syncOne(uid, id); }, id)); }
    });
    chain = chain.then(guarded(function () { return pullWallet(uid); }, "wallet-pull"));
    return chain;
  }

  function ensureMigrated(uid) {
    if (lsGet(LS_MIGRATED)) return Promise.resolve(false);
    return listServerDocIds(uid).then(function (ids) {
      if (!ids.length) {
        // Server trống: đẩy toàn bộ local lên (ví: server = local).
        return pushWallet(uid, true).then(function () {
          var chain = Promise.resolve();
          FIXED_DOCS.forEach(function (id) {
            if (id === "wallet") return;
            chain = chain.then(function () {
              var raw = cfg.adapter.readLocal(id);
              if (raw === undefined || raw == null) return;
              if (id === "missions") {
                var meta = metaGet(id) || {};
                var conv = convert.missionsToSync(raw, meta);
                // A14: lưu meta (kèm sổ granted/clawback).
                var mMeta = conv.meta;
                mMeta.granted = clone(meta.granted || {});
                mMeta.clawback = clone(meta.clawback || {});
                return writeServerDoc(uid, id, conv.data).then(function () {
                  metaSet(id, mMeta);
                });
              }
              if (id === "savedWords") {
                return writeServerDoc(uid, id, { words: clone(raw.words || []), removed: {} }).then(function () {
                  metaSet(id, { removed: {} });
                });
              }
              // A14: lưu meta sau khi ghi (như nhánh push của syncOne)
              // — không lưu thì lần sau đóng dấu lại hết bằng now()
              // (gỡ ★ / gỡ đánh dấu ngữ pháp bị hồi sinh).
              var meta2 = metaGet(id);
              var data = toSyncData(id, raw, meta2);
              return writeServerDoc(uid, id, data).then(function () {
                metaSet(id, fromSyncData(id, data, meta2).meta);
              });
            });
          });
          var vocabKeys = [];
          try { vocabKeys = cfg.adapter.listVocabKeys() || []; } catch (_) {}
          vocabKeys.forEach(function (k) {
            chain = chain.then(function () {
              var id = VOCAB_PREFIX + k;
              var raw = cfg.adapter.readLocal(id);
              if (raw === undefined || raw == null) return;
              var vData = convert.vocabToSync(raw, {});
              return writeServerDoc(uid, id, vData).then(function () {
                metaSet(id, clone(vData)); // A14: lưu meta như syncOne
              });
            });
          });
          return chain;
        }).then(function () { lsSet(LS_MIGRATED, "1"); return true; });
      }
      // Server đã có: gộp lần đầu (ví dùng công thức local - SEED).
      return pushWallet(uid, true).then(function () {
        return allDocIds(uid);
      }).then(function (allIds) {
        var chain = Promise.resolve();
        chain = chain.then(function () { return syncMissions(uid); });
        allIds.forEach(function (id) {
          if (id === "wallet" || id === "missions") return;
          if (id === "savedWords") { chain = chain.then(function () { return syncSavedWords(uid); }); }
          else if (id === "videos") { chain = chain.then(function () { return syncVideos(uid); }); }
          else { chain = chain.then(function () { return syncOne(uid, id); }); }
        });
        return chain.then(function () { return pullWallet(uid); });
      }).then(function () { lsSet(LS_MIGRATED, "1"); return true; });
    });
  }

  /* ---------------- API công khai ---------------- */

  function init(options) {
    cfg = options || {};
    if (!cfg.db || !cfg.getUid || !cfg.adapter) {
      throw new Error("SKSync.init cần {db, getUid, adapter}");
    }
    getDeviceId();
    if (typeof window !== "undefined" && window.addEventListener) {
      window.addEventListener("online", function () { syncAll(); });
      window.addEventListener("pagehide", function () { flushPending(); });
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) flushPending();
      });
    }
  }

  function currentUid() {
    try { return cfg.getUid() || null; } catch (_) { return null; }
  }

  function syncAll() {
    if (!cfg) return Promise.resolve(false);
    if (!enabled) return Promise.resolve(false); // công tắc sync đang tắt
    var uid = currentUid();
    if (!uid) return Promise.resolve(false); // chưa đăng nhập: không đồng bộ
    if (syncingAll) return Promise.resolve(false);
    syncingAll = true;
    ensureParentDoc(uid); // fire-and-forget: tạo doc cha + createdAt nếu chưa có
    return ensureMigrated(uid).then(function (migrated) {
      if (migrated) return true;
      return allDocIds(uid).then(function (ids) { return syncAllIds(uid, ids); });
    }).then(function () {
      log("Đồng bộ xong.");
      return true;
    }).catch(function (err) {
      log("Đồng bộ lỗi: " + ((err && err.message) || err));
      return false;
    }).then(function (ok) { syncingAll = false; return ok; });
  }

  function pushDoc(docId) {
    if (!cfg) return Promise.resolve(false);
    if (!enabled) return Promise.resolve(false); // công tắc sync đang tắt
    var uid = currentUid();
    if (!uid) return Promise.resolve(false);
    if (docId === "wallet") {
      return pushWallet(uid, false).then(function () { return pullWallet(uid); });
    }
    if (docId === "missions") return syncMissions(uid);
    if (docId === "savedWords") return syncSavedWords(uid);
    if (docId === "videos") return syncVideos(uid);
    return syncOne(uid, docId);
  }

  function schedulePush(docId) {
    if (!enabled) return; // công tắc sync đang tắt
    if (pushTimers[docId]) clearTimeout(pushTimers[docId]);
    pushTimers[docId] = setTimeout(function () {
      pushTimers[docId] = null;
      pushDoc(docId);
    }, PUSH_DEBOUNCE_MS);
  }

  function flushPending() {
    // Đẩy gấp các doc đang chờ debounce (khi app sắp đóng). Best-effort.
    var ids = Object.keys(pushTimers).filter(function (id) { return pushTimers[id]; });
    ids.forEach(function (id) { clearTimeout(pushTimers[id]); pushTimers[id] = null; });
    ids.forEach(function (id) { pushDoc(id); });
  }

  function startListener() {
    if (!cfg) return;
    if (!enabled) return; // công tắc sync đang tắt
    stopListener();
    var uid = currentUid();
    if (!uid) return;
    unsubListener = coll(uid).onSnapshot(function (qs) {
      qs.docChanges().forEach(function (ch) {
        if (ch.type !== "added" && ch.type !== "modified") return;
        var env = ch.doc.data() || {};
        if (env.updatedBy === getDeviceId()) return; // chính mình ghi
        var seen = seenGet()[ch.doc.id] || 0;
        if (num(env.updatedAt, 0) <= seen) return;
        pushDoc(ch.doc.id); // kéo + gộp doc vừa đổi ở máy khác
      });
    }, function (err) { log("Listener lỗi: " + ((err && err.message) || err)); });
  }
  function stopListener() {
    if (unsubListener) { try { unsubListener(); } catch (_) {} unsubListener = null; }
  }

  /* App gọi khi user gỡ lưu 1 từ (kẻo union hồi sinh nó ở lần gộp sau). */
  function unsaveWord(word, reading) {
    var meta = metaGet("savedWords") || {};
    meta.removed = meta.removed || {};
    meta.removed[savedWordKey(word, reading)] = now();
    metaSet("savedWords", meta);
    schedulePush("savedWords");
  }

  /* App gọi khi user xóa 1 video tự tạo (kẻo union hồi sinh nó ở lần gộp sau). */
  function markVideoRemoved(id) {
    if (!id) return;
    var meta = metaGet("videos") || {};
    meta.removed = meta.removed || {};
    meta.removed[id] = now();
    metaSet("videos", meta);
    schedulePush("videos");
  }

  /* App gọi khi hoàn thành 1 nhiệm vụ (ghi sổ nhận thưởng để chống nhận 2 lần).
   * amount = số EXP thực nhận (đã nhân x2 nếu đang boost — M-14b) để
   * clawback trừ đúng khi 2 máy cùng nhận. Không có amount (bản app cũ)
   * thì ghi như cũ, không có amt — merge dùng thưởng gốc. */
  function grantMission(mission, amount) {
    var meta = metaGet("missions") || {};
    meta.granted = meta.granted || {};
    if (!meta.granted[mission]) {
      var e = { by: getDeviceId(), at: now() };
      var a = num(amount, 0);
      if (a > 0) e.amt = a;
      meta.granted[mission] = e;
    }
    metaSet("missions", meta);
    schedulePush("missions");
  }

  /* Xóa nhóm key đồng bộ khi đăng xuất (BẮT BUỘC — xem SYNC-DESIGN.md §8).
   * Giữ lại sk_device_id. App vẫn phải tự xóa biến RAM + premium cache
   * (đã có sẵn) và gọi stopListener(). */
  function clearLocalForLogout() {
    stopListener();
    Object.keys(pushTimers).forEach(function (id) { clearTimeout(pushTimers[id]); });
    pushTimers = {};
    SYNC_GROUP_KEYS.forEach(lsRemove);
    try {
      var keys = [];
      for (var i = 0; i < window.localStorage.length; i++) keys.push(window.localStorage.key(i));
      keys.forEach(function (k) {
        if (!k) return;
        if (k.indexOf("sk_vocab_prog_") === 0 || k.indexOf(LS_META) === 0) lsRemove(k);
      });
    } catch (_) {}
  }

  /* Bật/tắt đồng bộ (nối công tắc settings.sync). Tắt: dừng
   * listener + hủy các lần đẩy đang chờ debounce. Bật: mở lại
   * listener (đồng bộ đầy đủ do phía gọi — công tắc Cài đặt —
   * gọi syncAll ngay sau đó). */
  function setEnabled(on) {
    enabled = !!on;
    if (!enabled) {
      stopListener();
      Object.keys(pushTimers).forEach(function (id) { clearTimeout(pushTimers[id]); });
      pushTimers = {};
    } else {
      startListener();
    }
  }
  function isEnabled() { return enabled; }

  var api = {
    init: init,
    setEnabled: setEnabled,
    isEnabled: isEnabled,
    syncAll: syncAll,
    pushDoc: pushDoc,
    schedulePush: schedulePush,
    startListener: startListener,
    stopListener: stopListener,
    unsaveWord: unsaveWord,
    markVideoRemoved: markVideoRemoved,
    grantMission: grantMission,
    clearLocalForLogout: clearLocalForLogout,
    getDeviceId: getDeviceId,
    SYNC_SEED: SYNC_SEED,
    convert: convert,
    // Expose để test (node) — app không cần dùng trực tiếp.
    _merge: {
      missions: mergeMissions, plan30: mergePlan30, jlpt: mergeJlpt,
      kanji: MERGES.kanji, grammar: MERGES.grammar,
      maxMap: mergeMaxMap, videos: mergeVideos, settings: mergeSettings,
      shop: mergeShop, savedWords: mergeSavedWords, vocab: mergeVocab,
      stamped: mergeStamped, counterMap: mergeCounterMap, counterTotal: counterTotal
    },
    _stampDiff: stampDiff,
    _savedWordKey: savedWordKey,
    _ensureParentDoc: ensureParentDoc
  };

  global.SKSync = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(typeof window !== "undefined" ? window : globalThis);
