/* SoraKanji — service worker
   File này nằm trong assets/ cùng manifest và icon.
   Khi phát hành thật, đặt một bản sao của file này cạnh index.html
   (cùng thư mục gốc) để service worker kiểm soát được toàn bộ app;
   bản trong assets/ vẫn được đăng ký dự phòng cho các file tĩnh. */
var CACHE = "sorakanji-pwa-v3";
var CORE = [
  "../index.html",
  "./manifest.webmanifest",
  "./chibi.png",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(CORE.map(function (u) {
        return new Request(u, { cache: "reload" });
      })).catch(function () {
        /* Từng file lỗi (ví dụ font ngoài) không được làm hỏng cài đặt */
        return Promise.all(CORE.map(function (u) {
          return cache.add(u).catch(function () {});
        }));
      });
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;

  /* Audio (.mp3/.m4a/.wav/.ogg) và mọi request có header Range: KHÔNG qua
     service worker — để trình duyệt tải thẳng từ mạng. Cache/Range qua SW
     từng làm iOS kẹt lỗi phát ở từng file riêng lẻ (bản cache hỏng cho 1 file
     khiến đúng câu đó không phát được, bấm Nghe lại vẫn lỗi như cũ). */
  var reqUrl = new URL(req.url);
  if (/\.(mp3|m4a|wav|ogg|oga|opus)(\?|#|$)/i.test(reqUrl.pathname) ||
      req.headers.has("range") ||
      req.destination === "audio") {
    return;
  }

  /* Điều hướng: mạng trước, mất mạng thì dùng bản đã lưu */
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (cache) { cache.put("../index.html", copy); });
        return res;
      }).catch(function () {
        return caches.match("../index.html", { ignoreSearch: true })
          .then(function (hit) { return hit || caches.match(req, { ignoreSearch: true }); });
      })
    );
    return;
  }

  /* File tĩnh cùng nguồn: lấy từ cache trước, tải mới ở nền */
  var url = new URL(req.url);
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req, { ignoreSearch: true }).then(function (hit) {
        var network = fetch(req).then(function (res) {
          if (res && res.status === 200) {
            var copy = res.clone();
            caches.open(CACHE).then(function (cache) { cache.put(req, copy); });
          }
          return res;
        }).catch(function () { return hit; });
        return hit || network;
      })
    );
  }
});
