/* 同門會 圖示通知＋推播（正式入口的 service worker；範圍 /tongmen/）
 * iOS 規定：每次收到推播都必須顯示一則通知，否則 Apple 會撤銷訂閱；所以這裡一定先 showNotification。
 * 數字：推播內容的 n＝這位會員目前未讀公告數 → setAppBadge(n)。內容由瀏覽器金鑰加密，推播服務看不到。 */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('push', function (e) {
  var d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = {}; }
  var title = String(d.title || '同門會'), body = String(d.body || '有新消息，點開查看'), n = Number(d.n);
  var jobs = [self.registration.showNotification(title, { body: body, tag: String(d.tag || 'tm'), icon: 'icon-192.png', data: { url: './' } })];
  if (n >= 0 && self.navigator && self.navigator.setAppBadge) jobs.push((n > 0 ? self.navigator.setAppBadge(n) : self.navigator.clearAppBadge()).catch(function () {}));
  e.waitUntil(Promise.all(jobs));
});
// 11/19：入口頁一打開就把「裝置憑證＋入口的平台網址」交給這裡，由這裡（不會因入口換頁而中斷）問伺服器目前的未讀數、設定／清除圖示數字。
// 以前只靠入口頁等快速啟動的回覆；入口頁馬上換成平台，回覆來不及處理，數字就清不掉。只用唯讀的 pushstate。
self.addEventListener('message', function (e) {
  var d = e.data || {};
  if (d.t !== 'badge' || !/^https:\/\/script\.google\.com\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(String(d.u)) || !/^[DM][0-9a-f]{10}\.[0-9a-f]{64}$/.test(String(d.dc))) return;
  e.waitUntil(fetch(d.u, { method: 'POST', body: JSON.stringify({ op: 'pushstate', dc: d.dc, s: 'sw' }), headers: { 'Content-Type': 'text/plain;charset=utf-8' }, credentials: 'omit', cache: 'no-store' })
    .then(function (r) { return r.json(); })
    .then(function (j) {
      if (!j || !j.ok || !j.allowed || !self.navigator || !self.navigator.setAppBadge) return;
      var n = j.on ? Math.max(0, Number(j.n) || 0) : 0, dg = j.dg === 1;
      // 11/19 診斷：只有伺服器回 dg=1（推播名單內的測試者）才回報結果（swok／swer＋數字）
      var ack = function (t) { return dg ? fetch(d.u, { method: 'POST', body: JSON.stringify({ op: 'pushstate', dc: d.dc, s: t + Math.min(99, n) }), headers: { 'Content-Type': 'text/plain;charset=utf-8' }, credentials: 'omit', cache: 'no-store' }).catch(function () {}) : null; };
      return (n > 0 ? self.navigator.setAppBadge(n) : self.navigator.clearAppBadge()).then(function () { return ack('swok'); }, function () { return ack('swer'); });
    }).catch(function () {}));
});
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) if ('focus' in list[i]) return list[i].focus();
    return self.clients.openWindow('./');
  }));
});
