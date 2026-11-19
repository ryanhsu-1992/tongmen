/* 同門會 重要公告通知（正式入口的 service worker；範圍 /tongmen/）
 * iOS 規定：每次收到推播都必須顯示一則通知，否則 Apple 會撤銷訂閱；所以這裡一定先 showNotification。
 * 11/19（H Ryan t735u）：不再設定圖示上的未讀數字；收到推播時順手清掉以前留下的數字。 */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('push', function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = {}; }
  var title = String(d.title || '同門會'), body = String(d.body || '有新消息，點開查看');
  var jobs = [self.registration.showNotification(title, { body: body, tag: String(d.tag || 'tm'), icon: 'icon-192.png', data: { url: './' } })];
  if (self.navigator && self.navigator.clearAppBadge) jobs.push(self.navigator.clearAppBadge().catch(function () {}));
  e.waitUntil(Promise.all(jobs));
});
// 11/19：入口頁一打開就請這裡清掉圖示上的數字（這裡不會因入口馬上換成平台而中斷）。不送任何網路請求。
self.addEventListener('message', function (e) {
  var d = e.data || {};
  if (d.t !== 'clear' || !self.navigator || !self.navigator.clearAppBadge) return;
  e.waitUntil(self.navigator.clearAppBadge().catch(function () {}));
});
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) if ('focus' in list[i]) return list[i].focus();
    return self.clients.openWindow('./');
  }));
});
