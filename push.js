/* 同門會 圖示通知數字＋推播（正式入口；只在主畫面 App 運作，一般瀏覽器分頁完全不動）
 * - 快速啟動的回覆會帶 bdOn／badge（只有被開放的會員才有）→ 記下「有開放」、設定圖示數字；偏好關 → 退訂、清掉數字。
 * - 已知有開放、還沒決定通知、沒按過「之後再說」（7 天）→ 這次打開先停在入口顯示邀請條；按「開啟」→ 系統詢問 → 訂閱送到伺服器後才進平台。
 * - 沒開放的會員：什麼都不顯示、不多送任何請求。 */
(function () {
  var VK = 'BNAenwWAuyeefdBjPpA6qhZiSln3Nbr5UPaaDTqaTVm_UvpXzHE5Vv9HDTV-cTOf7K0k2KcP3duDhZBBOoR9Ozs';
  var SA = false; try { SA = navigator.standalone === true || matchMedia('(display-mode: standalone)').matches || matchMedia('(display-mode: fullscreen)').matches; } catch (e) {}
  var SUP = 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window, BADGE = 'setAppBadge' in navigator;
  var RE = /^[DM][0-9a-f]{10}\.[0-9a-f]{64}$/, LATER = 'tm_bd_later', OKK = 'tm_bd_ok', SUBK = 'tm_bd_sub', CHK = 'tm_bd_chk';
  function g(k) { try { return localStorage.getItem(k) || ''; } catch (e) { return ''; } }
  function st(k, v) { try { if (v) localStorage.setItem(k, v); else localStorage.removeItem(k); } catch (e) {} }
  function dk() { var d = g('tm_dk'); return RE.test(d) ? d : ''; }
  function el(i) { return document.getElementById(i); }
  function U() { var a = el('go'); return a ? String(a.getAttribute('href') || '') : ''; }
  function snoozed() { var t = +g(LATER) || 0; return t && Date.now() - t < 7 * 864e5; }
  function perm() { try { return Notification.permission; } catch (e) { return 'denied'; } }
  function cand() { return !!(SA && SUP && !window.__tmReleased && perm() === 'default' && dk() && !snoozed()); }
  // 還不知道這位會員有沒有開放（這支手機第一次）：等快速啟動的回覆（最多 6 秒、只等這一次），以免邀請條永遠不出現
  function unknown() { var c = +g(CHK) || 0; return g(OKK) !== '1' && !(c && Date.now() - c < 30 * 864e5); }
  var pending = false;
  window.__tmHold = function () {
    if (!cand()) return false;
    if (g(OKK) === '1') { show(); return true; }
    if (unknown()) { if (!pending) { pending = true; setTimeout(function () { if (pending) { pending = false; st(CHK, String(Date.now() - 29 * 864e5)); release(); } }, 6000); } return true; }   // 逾時：1 天後再試
    return false;
  };
  function show() { var m = el('more'); if (m) m.className = 'more on'; var s = el('st'); if (s) s.textContent = '開啟之後，按下方按鈕進入會員平台。'; bar(true); }
  function release() { window.__tmReleased = true; var x = window.__tmHeld; window.__tmHeld = null; if (!x) return; if (Date.now() - (window.__tmHeldAt || 0) > 90000 && window.__tmGo) window.__tmGo(); else location.replace(x); }
  function setBadge(n) { if (!BADGE || !SUP || perm() !== 'granted') return; try { (n > 0 ? navigator.setAppBadge(n) : navigator.clearAppBadge()).catch(function () {}); } catch (e) {} }
  function post(op, x) {
    var o = { op: op, dc: dk() }; for (var k in x) o[k] = x[k];
    var f = fetch(U(), { method: 'POST', body: JSON.stringify(o), headers: { 'Content-Type': 'text/plain;charset=utf-8' }, credentials: 'omit', cache: 'no-store', keepalive: true }).then(function (r) { return r.json(); });
    return Promise.race([f, new Promise(function (_, no) { setTimeout(function () { no(new Error('timeout')); }, 25000); })]);
  }
  function u8(s) { s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '='; var r = atob(s), o = new Uint8Array(r.length); for (var i = 0; i < r.length; i++) o[i] = r.charCodeAt(i); return o; }
  function ua() { var s = navigator.userAgent || ''; return /iPhone/.test(s) ? 'iPhone' : /iPad/.test(s) ? 'iPad' : /Android/.test(s) ? 'Android' : /Mac/.test(s) ? 'Mac' : /Windows/.test(s) ? 'Windows' : 'other'; }
  function reg() { return navigator.serviceWorker.register('sw.js', { scope: './' }).then(function (r) { return navigator.serviceWorker.ready.then(function () { return r; }); }); }
  function subscribe() {   // 訂閱並送到伺服器；成功才記下（之後打開不再重送）
    var opt = { userVisibleOnly: true, applicationServerKey: u8(VK) };
    return reg().then(function (r) { return r.pushManager.subscribe(opt).catch(function () { return r.pushManager.getSubscription().then(function (o) { return (o ? o.unsubscribe() : Promise.resolve()).then(function () { return r.pushManager.subscribe(opt); }); }); }); })
      .then(function (s) { return post('pushsub', { sub: s.toJSON(), ua: ua() }); }).then(function (r) { if (r && r.ok) st(SUBK, String(Date.now())); return r; });
  }
  function unsubscribe() { st(SUBK, ''); if (!SUP) return; navigator.serviceWorker.getRegistration('./').then(function (r) { return r ? r.pushManager.getSubscription() : null; }).then(function (s) { if (s) s.unsubscribe(); }).catch(function () {}); setBadge(0); try { navigator.clearAppBadge && navigator.clearAppBadge(); } catch (e) {} }
  // 快速啟動／領回的回覆（index.html 的 apply 會呼叫）
  window.__tmBd = function (on, n) {
    if (!SA || !SUP) return;
    var wasPending = pending; pending = false;
    if (on === undefined) { st(OKK, ''); st(CHK, String(Date.now())); if (wasPending) release(); return; }   // 沒開放：30 天內不再等
    if (!on) { st(OKK, ''); st(CHK, String(Date.now())); unsubscribe(); if (wasPending) release(); return; }
    st(OKK, '1'); st(CHK, '');
    if (wasPending) { if (cand()) show(); else release(); }
    if (perm() === 'granted') { setBadge(+n || 0); if (!g(SUBK)) subscribe().catch(function () {}); }
  };
  function bar(on, msg) { var b = el('bdBar'); if (b) b.style.display = on ? '' : 'none'; var m = el('bdMsg'); if (m) { m.style.display = msg ? '' : 'none'; if (msg) m.textContent = msg; } }
  function enable() {
    var p; try { p = Notification.requestPermission(); } catch (e) { p = Promise.resolve('denied'); }
    Promise.resolve(p).then(function (r) {
      if (r !== 'granted') { bar(false, '沒有開啟也沒關係，之後想開再到「我的資料」或手機設定。'); st(LATER, String(Date.now())); setTimeout(release, 1200); return; }
      bar(false, '已開啟，正在完成設定…');
      var done = false, fin = function () { if (done) return; done = true; bar(false, '已開啟。'); setTimeout(release, 500); };
      subscribe().then(fin, fin); setTimeout(fin, 15000);
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    var y = el('bdYes'), l = el('bdLater');
    if (y) y.addEventListener('click', enable);
    if (l) l.addEventListener('click', function () { st(LATER, String(Date.now())); bar(false); release(); });
    document.addEventListener('click', function (e) { var t = e.target; if (t && t.closest && t.closest('#go')) window.__tmReleased = true; }, true);
  });
})();
