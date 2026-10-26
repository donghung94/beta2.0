/* SoraKanji — service worker (bản phát hành, đặt cạnh index.html trong mobile/)
   Bản này là bản sao đã chỉnh đường dẫn của assets/sw.js trong bản xem thử:
   đường dẫn tương đối ở đây tính từ mobile/, để service worker kiểm soát
   toàn bộ app (scope mobile/) và học offline áp cho trang chính. */
var CACHE = "sorakanji-pwa-v1";
var CORE = [
  "./index.html",
  "./assets/manifest.webmanifest",
  "./assets/chibi.png",
  "./assets/icon-192.png",
  "./assets/icon-512.png",
  "./assets/icon-maskable-512.png",
  "./assets/apple-touch-icon.png"
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

  /* Điều hướng: mạng trước, mất mạng thì dùng bản đã lưu */
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (cache) { cache.put("./index.html", copy); });
        return res;
      }).catch(function () {
        return caches.match("./index.html", { ignoreSearch: true })
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
