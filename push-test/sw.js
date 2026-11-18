/* 同門會 圖示通知＋推播（測試入口 push-test 的 service worker；範圍只限 /push-test/）
 * iOS 規定：每次收到推播都必須顯示一則通知，否則 Apple 會撤銷訂閱；所以這裡一定先 showNotification。
 * 數字：推播內容的 n＝這位會員目前未讀公告數 → setAppBadge(n)。內容由瀏覽器金鑰加密，推播服務看不到。 */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('push', function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = {}; }
  var title = String(d.title || '同門會'), body = String(d.body || '有新消息，點開查看'), n = Number(d.n);
  var jobs = [self.registration.showNotification(title, { body: body, tag: String(d.tag || 'tm'), icon: '../icon-192.png', data: { url: './' } })];
  if (n >= 0 && self.navigator && self.navigator.setAppBadge) jobs.push((n > 0 ? self.navigator.setAppBadge(n) : self.navigator.clearAppBadge()).catch(function () {}));
  e.waitUntil(Promise.all(jobs));
});
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) if ('focus' in list[i]) return list[i].focus();
    return self.clients.openWindow('./');
  }));
});
