'use strict';
/**
 * firebase-messaging-sw.js — Service Worker nhận push FCM cho chat 1:1
 * admin (SoraKanji, admin-chat v1, 2026-11-22).
 *
 * Vị trí deploy: cạnh mobile/index.html (repo: mobile/firebase-messaging-sw.js),
 * scope mặc định /mobile/ — bao phủ toàn app mobile. KHÔNG đặt dưới assets/
 * (SW hiện tại assets/sw.js chỉ bao /mobile/assets/).
 *
 * Firebase JS SDK compat 10.12.2 (khớp SDK startup của app).
 * Config là config public của project donghung-3208d (lấy từ SVU_FB_CONFIG
 * trong mobile/index.html — cùng apiKey đã public trong trang app).
 */
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// VAPID public key (public — được nhúng client). SW dùng sender config
// (messagingSenderId) để nhận push; VAPID dùng ở getToken() phía trang app
// (SKAdminChat.ensurePush) khi đăng ký token.
var VAPID_PUBLIC_KEY = 'BPICdAcAQrh5USYs7EUC5XUW4YUpmUa-JUBcuSEZwxGAiHDHjO_fI39UVI4obh9nC290SdphngpjEARS0pcJLKA';

firebase.initializeApp({
  apiKey: "AIzaSyALblbqW_VrZh2r7sPJ8Q6XT2fGbk0dsFg",
  authDomain: 'donghung-3208d.firebaseapp.com',
  projectId: 'donghung-3208d',
  storageBucket: 'donghung-3208d.firebasestorage.app',
  messagingSenderId: '753379492663',
  appId: '1:753379492663:web:baff34f2c0bac00e02d0b2'
});

var messaging = firebase.messaging();
var CHAT_URL = '/mobile/?open=adminchat';

// Tin push đến khi app chạy nền / đã đóng: hiện notification hệ thống.
messaging.onBackgroundMessage(function (payload) {
  var notification = (payload && payload.notification) || {};
  var title = notification.title || 'SoraKanji';
  var body = notification.body || 'Bạn có tin nhắn mới.';
  return self.registration.showNotification(title, {
    body: body,
    icon: 'assets/icon-192.png',
    data: { url: CHAT_URL }
  });
});

// Bấm notification: focus tab app nếu đã mở, không thì mở tab mới —
// luôn tới khung chat admin (?open=adminchat).
self.addEventListener('notificationclick', function (event) {
  event.notification.close();
  var url = (event.notification && event.notification.data && event.notification.data.url) || CHAT_URL;
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url.indexOf('/mobile/') !== -1 && 'focus' in client) {
          if (client.url.indexOf('open=adminchat') === -1 && 'navigate' in client) {
            return client.navigate(url).then(function (c) { return c.focus(); });
          }
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(url);
      return undefined;
    })
  );
});
