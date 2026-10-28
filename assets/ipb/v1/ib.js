// 內頁橫幅（10/28 ipbanner，入口網站 assets/ipb/v1）：五個內頁橫幅＝首頁同門群島對應島嶼的細節版（2× 高清）
// 公告＝公告島、學術活動＝學術活動島、我的資料＝會員村、會員地圖＝地圖島（台灣地形桌 map2）、意見信箱＝郵筒小屋島。
// 四季＋每個節日各有重畫的整張島；11/19 用安靜版（只有白花）；白天／黃昏／夜晚＝CSS 濾鏡＋光層。回憶頁不在這裡（照舊 memo/v1）。
// 由主程式（JavaScript.html 的 ibLoad）在首頁閒置後或進到這五頁時才載入；季節／節日／時段／生日都由主程式的 window.__IB3.env() 提供（跟首頁群島同一套判斷）。
// 只有圖片與版位，不含任何會員資料；數字（新公告數、地圖醫師數）也是主程式當下算給的。
(function () {
  var C = window.__IB3 || {};
  var ASSET = C.asset || '';
  var MAN = {"event-autumn":{"crop":[298,24,974,701],"parts":{"balloon":[837,325,900,393],"bell":[743,257,785,314],"kid":[592,252,712,478],"lit":[503,175,845,352]}},"event-cny":{"crop":[306,16,971,699],"parts":{"balloon":[838,327,900,393],"bell":[744,253,785,311],"kid":[592,250,719,493],"lit":[503,165,845,352]}},"event-dentist":{"crop":[268,32,1003,699],"parts":{"balloon":[833,325,895,393],"bell":[741,255,782,303],"kid":[594,249,726,481],"lit":[503,175,851,352]}},"event-doctor":{"crop":[297,24,975,701],"parts":{"balloon":[838,325,900,393],"bell":[743,257,786,313],"kid":[592,251,712,478],"lit":[502,175,845,352]}},"event-duanwu":{"crop":[269,30,1005,698],"parts":{"balloon":[836,331,897,397],"bell":[741,253,782,311],"kid":[593,259,724,487],"lit":[502,175,851,352]}},"event-lantern":{"crop":[287,27,984,697],"parts":{"balloon":[832,340,894,406],"bell":[741,254,783,312],"kid":[594,267,713,495],"lit":[502,175,851,352]}},"event-mem1119":{"crop":[298,24,974,701],"parts":{"balloon":[838,325,900,392],"bell":[743,257,786,315],"kid":[593,252,712,478],"lit":[502,174,845,352]}},"event-midautumn":{"crop":[268,32,1004,699],"parts":{"balloon":[833,325,896,392],"bell":[740,255,782,312],"kid":[594,231,723,481],"lit":[502,175,851,352]}},"event-newyear":{"crop":[306,14,971,700],"parts":{"balloon":[838,322,900,387],"bell":[744,254,786,311],"kid":[594,227,723,475],"lit":[502,166,845,352]}},"event-nye":{"crop":[305,16,971,700],"parts":{"balloon":[837,323,899,387],"bell":[743,255,785,313],"kid":[593,230,721,475],"lit":[502,165,845,352]}},"event-qixi":{"crop":[269,32,1003,699],"parts":{"balloon":[834,325,896,392],"bell":[741,255,783,313],"kid":[592,249,725,481],"lit":[501,175,851,352]}},"event-spring":{"crop":[288,28,984,700],"parts":{"balloon":[835,324,897,390],"bell":[741,256,783,314],"kid":[592,248,713,477],"lit":[502,175,863,352]}},"event-summer":{"crop":[268,32,1003,699],"parts":{"balloon":[833,325,896,393],"bell":[740,255,782,313],"kid":[594,249,726,481],"lit":[502,175,851,352]}},"event-teacher":{"crop":[269,32,1004,699],"parts":{"balloon":[833,325,895,392],"bell":[739,255,783,319],"kid":[594,249,726,481],"lit":[502,175,851,352]}},"event-winter":{"crop":[305,16,971,701],"parts":{"balloon":[838,323,899,388],"bell":[743,255,786,313],"kid":[593,229,723,475],"lit":[502,165,863,352]}},"event-xmas":{"crop":[306,16,971,700],"parts":{"balloon":[837,323,900,388],"bell":[743,254,785,312],"kid":[593,241,740,475],"lit":[502,165,845,352]}},"mail-autumn":{"crop":[243,22,1026,720],"parts":{"balloon":[469,66,573,179],"kid":[379,183,594,470],"lit":[583,114,899,342]}},"mail-cny":{"crop":[245,18,1027,720],"parts":{"balloon":[469,64,572,176],"kid":[369,166,602,497],"lit":[584,108,902,342]}},"mail-dentist":{"crop":[189,21,1026,720],"parts":{"balloon":[470,64,574,177],"kid":[375,185,594,470],"lit":[583,115,900,342]}},"mail-doctor":{"crop":[244,19,1026,720],"parts":{"balloon":[469,64,572,177],"kid":[379,181,592,474],"lit":[580,108,898,342]}},"mail-duanwu":{"crop":[189,21,1025,720],"parts":{"balloon":[470,64,573,176],"kid":[375,185,594,470],"lit":[583,114,900,342]}},"mail-lantern":{"crop":[221,22,1024,720],"parts":{"balloon":[470,66,572,179],"kid":[382,184,610,473],"lit":[582,110,900,342]}},"mail-mem1119":{"crop":[243,21,1027,720],"parts":{"balloon":[469,66,573,179],"kid":[379,184,593,470],"lit":[582,112,899,342]}},"mail-midautumn":{"crop":[190,21,1025,720],"parts":{"balloon":[470,63,573,176],"kid":[381,179,594,471],"lit":[583,112,900,342]}},"mail-newyear":{"crop":[251,17,1027,720],"parts":{"balloon":[468,63,572,176],"kid":[367,166,591,467],"lit":[583,108,902,342]}},"mail-nye":{"crop":[250,17,1038,720],"parts":{"balloon":[468,63,571,176],"kid":[367,166,592,467],"lit":[583,108,902,342]}},"mail-qixi":{"crop":[189,21,1026,720],"parts":{"balloon":[470,64,573,176],"kid":[375,185,594,508],"lit":[583,111,900,342]}},"mail-spring":{"crop":[221,22,1025,720],"parts":{"balloon":[470,66,573,179],"kid":[382,184,594,469],"lit":[581,110,899,342]}},"mail-summer":{"crop":[189,21,1026,720],"parts":{"balloon":[470,64,573,176],"kid":[375,185,594,470],"lit":[583,111,900,342]}},"mail-teacher":{"crop":[189,21,1026,720],"parts":{"balloon":[470,64,573,177],"kid":[375,185,593,510],"lit":[583,111,900,342]}},"mail-winter":{"crop":[250,17,1027,720],"parts":{"balloon":[468,63,572,176],"kid":[368,166,592,467],"lit":[583,108,902,342]}},"mail-xmas":{"crop":[250,17,1027,720],"parts":{"balloon":[468,62,572,175],"kid":[365,158,594,481],"lit":[583,108,902,342]}},"map2-autumn":{"crop":[238,38,1022,720],"parts":{"balloon":[707,13,811,122],"kid":[708,89,932,392],"lit":[431,150,805,557]}},"map2-cny":{"crop":[257,49,1035,719],"parts":{"balloon":[708,14,812,122],"kid":[709,88,927,392],"lit":[428,146,822,557]}},"map2-dentist":{"crop":[240,39,1025,720],"parts":{"balloon":[705,13,808,122],"kid":[706,89,932,389],"lit":[428,154,822,557]}},"map2-doctor":{"crop":[238,37,1023,720],"parts":{"balloon":[706,13,812,122],"kid":[709,88,933,393],"lit":[428,149,810,557]}},"map2-duanwu":{"crop":[241,39,1057,720],"parts":{"balloon":[704,13,808,122],"kid":[705,89,932,389],"lit":[428,154,822,556]}},"map2-lantern":{"crop":[222,17,1044,720],"parts":{"balloon":[707,15,810,123],"kid":[707,103,917,387],"lit":[428,146,822,557]}},"map2-mem1119":{"crop":[238,37,1022,720],"parts":{"balloon":[707,13,812,122],"kid":[708,89,932,392],"lit":[431,150,822,557]}},"map2-midautumn":{"crop":[240,38,1025,720],"parts":{"balloon":[705,12,809,121],"kid":[702,73,932,389],"lit":[428,154,822,557]}},"map2-newyear":{"crop":[256,49,1021,720],"parts":{"balloon":[709,12,813,120],"kid":[710,67,944,390],"lit":[428,147,822,557]}},"map2-nye":{"crop":[257,49,1020,719],"parts":{"balloon":[709,13,813,121],"kid":[710,65,944,390],"lit":[428,146,822,557]}},"map2-qixi":{"crop":[241,39,1057,720],"parts":{"balloon":[704,13,808,121],"kid":[706,89,932,389],"lit":[428,154,822,557]}},"map2-spring":{"crop":[222,17,1025,720],"parts":{"balloon":[707,14,811,123],"kid":[709,103,917,387],"lit":[428,146,822,557]}},"map2-summer":{"crop":[241,39,1025,720],"parts":{"balloon":[705,13,808,122],"kid":[706,89,933,389],"lit":[428,154,822,557]}},"map2-teacher":{"crop":[240,39,1025,720],"parts":{"balloon":[705,13,808,122],"kid":[706,89,933,390],"lit":[428,154,822,557]}},"map2-winter":{"crop":[256,49,1020,719],"parts":{"balloon":[709,13,813,121],"kid":[710,76,944,390],"lit":[428,146,822,557]}},"map2-xmas":{"crop":[254,15,1020,720],"parts":{"balloon":[709,8,813,118],"kid":[710,75,946,390],"lit":[428,146,822,557]}},"member-autumn":{"crop":[245,33,1000,719],"parts":{"balloon":[940,169,1037,275],"cat":[599,36,765,155],"kid":[646,220,781,482],"lit":[394,124,920,400]}},"member-birthday-autumn":{"crop":[245,9,1000,719],"parts":{"balloon":[940,169,1037,275],"cat":[598,13,765,155],"kid":[645,221,780,482],"lit":[361,127,911,401]}},"member-birthday-spring":{"crop":[239,8,1001,718],"parts":{"balloon":[940,166,1038,274],"cat":[600,11,758,156],"kid":[644,236,780,482],"lit":[360,123,922,402]}},"member-birthday-summer":{"crop":[240,9,999,720],"parts":{"balloon":[939,167,1035,274],"cat":[599,13,740,149],"kid":[644,222,776,481],"lit":[375,123,920,401]}},"member-birthday-winter":{"crop":[246,11,1002,713],"parts":{"balloon":[941,165,1038,272],"cat":[597,14,765,150],"kid":[645,218,772,476],"lit":[360,122,922,402]}},"member-cny":{"crop":[246,30,1002,713],"parts":{"balloon":[941,166,1038,273],"cat":[597,32,765,150],"kid":[645,219,772,476],"lit":[360,123,922,402]}},"member-dentist":{"crop":[240,31,999,720],"parts":{"balloon":[940,167,1036,274],"cat":[594,34,763,153],"kid":[644,221,777,481],"lit":[375,124,918,400]}},"member-doctor":{"crop":[245,33,1000,718],"parts":{"balloon":[940,168,1037,274],"cat":[599,36,765,151],"kid":[646,220,780,481],"lit":[373,122,904,401]}},"member-duanwu":{"crop":[240,31,1000,720],"parts":{"balloon":[940,167,1036,274],"cat":[595,34,764,153],"kid":[644,222,776,481],"lit":[375,124,918,400]}},"member-lantern":{"crop":[239,30,1000,718],"parts":{"balloon":[940,166,1038,274],"cat":[599,33,765,153],"kid":[644,236,781,481],"lit":[360,123,922,402]}},"member-mem1119":{"crop":[245,33,1000,719],"parts":{"balloon":[940,169,1037,275],"cat":[599,36,765,155],"kid":[646,220,781,482],"lit":[361,125,920,402]}},"member-midautumn":{"crop":[241,17,1000,720],"parts":{"balloon":[941,167,1036,274],"cat":[574,26,756,153],"kid":[644,210,770,481],"lit":[375,124,920,401]}},"member-newyear":{"crop":[246,30,1002,713],"parts":{"balloon":[941,165,1039,272],"cat":[598,32,766,150],"kid":[645,217,773,476],"lit":[360,122,922,402]}},"member-nye":{"crop":[246,31,1000,713],"parts":{"balloon":[940,166,1037,273],"cat":[597,33,765,151],"kid":[645,215,786,477],"lit":[360,123,922,402]}},"member-qixi":{"crop":[241,28,999,720],"parts":{"balloon":[940,167,1036,274],"cat":[596,32,772,153],"kid":[644,221,777,481],"lit":[375,124,918,400]}},"member-spring":{"crop":[240,30,1000,718],"parts":{"balloon":[940,166,1038,274],"cat":[599,33,765,153],"kid":[645,237,780,481],"lit":[360,123,922,402]}},"member-summer":{"crop":[241,32,1000,720],"parts":{"balloon":[940,167,1036,274],"cat":[596,34,764,153],"kid":[644,222,777,481],"lit":[375,123,918,400]}},"member-teacher":{"crop":[241,32,999,720],"parts":{"balloon":[940,167,1036,274],"cat":[595,34,764,152],"kid":[645,222,777,481],"lit":[375,124,918,400]}},"member-winter":{"crop":[246,30,999,713],"parts":{"balloon":[941,165,1037,272],"cat":[598,33,766,150],"kid":[645,218,773,475],"lit":[360,123,922,402]}},"member-xmas":{"crop":[247,15,1002,713],"parts":{"balloon":[941,164,1038,271],"cat":[599,19,764,150],"kid":[645,212,798,475],"lit":[360,123,922,402]}},"notice-autumn":{"crop":[272,40,981,720],"parts":{"balloon":[938,154,1026,249],"kid":[709,144,892,441],"lit":[893,287,939,323]}},"notice-cny":{"crop":[276,34,985,720],"parts":{"balloon":[938,151,1025,249],"kid":[707,136,890,440],"lit":[893,285,939,322]}},"notice-dentist":{"crop":[223,35,980,720],"parts":{"balloon":[937,151,1025,247],"kid":[708,139,894,437],"lit":[893,286,939,334]}},"notice-doctor":{"crop":[270,39,982,720],"parts":{"balloon":[938,153,1026,249],"kid":[709,144,892,440],"lit":[893,287,939,322]}},"notice-duanwu":{"crop":[268,34,981,720],"parts":{"balloon":[938,150,1026,247],"kid":[708,139,894,437],"lit":[893,285,939,334]}},"notice-lantern":{"crop":[267,38,982,720],"parts":{"balloon":[937,152,1029,250],"kid":[709,147,901,440],"lit":[893,286,939,334]}},"notice-mem1119":{"crop":[271,40,981,720],"parts":{"balloon":[938,154,1026,249],"kid":[709,144,892,441],"lit":[893,287,939,322]}},"notice-midautumn":{"crop":[268,34,981,720],"parts":{"balloon":[938,149,1026,246],"kid":[710,130,889,437],"lit":[893,285,936,320]}},"notice-newyear":{"crop":[275,32,984,720],"parts":{"balloon":[938,149,1026,246],"kid":[708,118,898,439],"lit":[893,284,939,334]}},"notice-nye":{"crop":[275,34,982,720],"parts":{"balloon":[938,150,1025,247],"kid":[708,136,890,439],"lit":[893,284,939,333]}},"notice-qixi":{"crop":[269,22,981,720],"parts":{"balloon":[938,149,1026,246],"kid":[707,137,895,437],"lit":[893,285,939,334]}},"notice-spring":{"crop":[267,39,982,720],"parts":{"balloon":[937,152,1028,250],"kid":[709,147,901,440],"lit":[893,285,939,325]}},"notice-summer":{"crop":[268,35,981,720],"parts":{"balloon":[938,150,1026,247],"kid":[708,139,894,437],"lit":[893,285,938,334]}},"notice-teacher":{"crop":[268,34,981,720],"parts":{"balloon":[938,151,1026,247],"kid":[708,139,894,437],"lit":[893,286,939,325]}},"notice-winter":{"crop":[275,33,983,720],"parts":{"balloon":[938,149,1026,246],"kid":[707,118,898,438],"lit":[893,284,939,330]}},"notice-xmas":{"crop":[275,33,984,720],"parts":{"balloon":[938,150,1026,246],"kid":[708,133,913,438],"lit":[893,284,937,334]}}};
  var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var PAGES = { news: 'notice', events: 'event', profile: 'member', map: 'map2', feedback: 'mail' };
  var GO = { notice: 'news', event: 'events', member: 'profile', map: 'map', mail: 'feedback' };   // 首頁島代號 → 頁面
  var ART = { notice: 'notice', event: 'event', member: 'member', map: 'map2', mail: 'mail' };
  // 節日圖畫在哪一季（天空跟著那一季）
  var FSE = { newyear: 'winter', cny: 'winter', xmas: 'winter', nye: 'winter', lantern: 'spring', dentist: 'summer', duanwu: 'summer', qixi: 'summer', midautumn: 'summer', teacher: 'summer', doctor: 'autumn', mem1119: 'autumn' };
  var X = {   // 手動校正（1280×720 主圖座標；各版已 ECC 對齊主圖）
    notice: { a: [940, 372], k: [975, 238], note: [652, 250, -5], pin: [694, 258], halo: [916, 306, 70], tap: [410, 40, 760, 360], egg: [640, 228, 748, 350] },
    event: { a: [855, 440], k: [862, 386], halo: [826, 296, 56], halo2: [560, 250, 120], waves: [790, 262], tap: [560, 120, 900, 360], egg: [728, 240, 800, 330] },
    member: { a: [957, 398], k: [968, 264], slot: [606, 358], heart: [672, 30], tap: [560, 30, 900, 470], egg: [568, 330, 652, 470], peek: [606, 345] },
    map2: { a: [757, 181], k: [750, 118], tap: [700, 60, 1020, 420], egg: [470, 160, 712, 545],
      drops: [[672, 287], [651, 352], [609, 428]],
      wire: [[645, 208], [628, 224], [612, 236], [594, 246], [574, 258], [555, 305], [546, 325], [537, 342], [526, 365], [520, 388], [535, 402], [550, 418], [562, 436], [572, 452]],
      wireDoc: [[650, 208], [634, 224], [618, 238], [602, 248], [586, 258], [568, 270], [553, 314], [546, 334], [538, 352], [518, 402], [532, 414], [546, 428], [558, 442], [570, 462]] },
    mail: { a: [520, 384], k: [522, 174], slot: [636, 262], win: [746, 165, 40], tap: [380, 40, 960, 540], egg: [586, 196, 776, 456] }
  };
  function todOf() { var h = new Date(Date.now() + 8 * 36e5).getUTCHours(); return h >= 19 || h < 5 ? 'night' : h >= 17 ? 'dusk' : h < 7 ? 'dawn' : 'day'; }   // 台北時間
  function env() {
    if (typeof C.env === 'function') { var o = C.env() || {}; return { se: o.se || 'autumn', fk: o.fk || '', tod: o.tod || todOf(), bd: !!o.bd }; }
    var w = document.getElementById('islWrap') || document.getElementById('hm');
    var fk = C.fk !== undefined ? C.fk : ((w && w.getAttribute('data-fest')) || '');
    var se = C.se || (w && w.getAttribute('data-season')) || 'autumn';
    var tod = C.tod || (w && w.getAttribute('data-tod')) || todOf();
    return { se: se, fk: fk, tod: tod };
  }
  function variant(pg, e) {   // 11/19 → 安靜版；本人生日 → 只有我的資料換生日版（依季節）；節日 → 節日版；其他 → 季節版
    var fk = e.fk;
    if (e.bd && fk !== 'mem1119' && pg === 'member' && MAN['member-birthday-' + e.se]) return 'member-birthday-' + e.se;
    if (fk === 'birthday') { if (pg === 'member' && MAN['member-birthday-' + e.se]) return 'member-birthday-' + e.se; fk = ''; }
    if (fk && MAN[pg + '-' + fk]) return pg + '-' + fk;
    return MAN[pg + '-' + e.se] ? pg + '-' + e.se : pg + '-autumn';
  }
  function skySe(e) { return (e.fk && FSE[e.fk]) || e.se; }
  var rnd = function (n) { var x = Math.sin(n * 91.7 + 2.3) * 43758.5453; return x - Math.floor(x); };
  function img(src, box, cls, extra) { return '<img class="' + (cls || '') + '" alt="" src="' + src + '" style="left:' + box[0] + 'px;top:' + box[1] + 'px;width:' + (box[2] - box[0]) + 'px;height:' + (box[3] - box[1]) + 'px;' + (extra || '') + '" decoding="async">'; }
  function top(m) { var t = m.crop[1]; Object.keys(m.parts).forEach(function (k) { t = Math.min(t, m.parts[k][1]); }); return t; }
  function string(a, k, dx) { var q = ((a[0] + k[0]) / 2 + dx) + ' ' + ((a[1] + k[1]) / 2), d = 'M' + a[0] + ' ' + a[1] + ' Q' + q + ' ' + k[0] + ' ' + k[1]; return '<svg width="1" height="1"><path d="' + d + '" fill="none" stroke="#EDE6DA" stroke-width="3.2" stroke-linecap="round"/><path d="' + d + '" fill="none" stroke="#C9BBA6" stroke-width="1.6" stroke-dasharray="2.5 3"/></svg>'; }
  // ── 彩蛋用的小圖（SVG，黏土感配色：象牙、咖啡金、銀） ──
  function svgBracket(w, wire) {   // 一顆矯正器（翼＋槽），wire=true 時槽裡有一條金色弓絲
    return '<svg class="eg-brk" viewBox="0 0 100 100" width="' + w + '" height="' + w + '"><defs><linearGradient id="egS" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F4F6F8"/><stop offset=".55" stop-color="#C3CAD2"/><stop offset="1" stop-color="#8E98A4"/></linearGradient><linearGradient id="egG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFE7A6"/><stop offset=".5" stop-color="#D9A94E"/><stop offset="1" stop-color="#A9772F"/></linearGradient></defs>' +
      '<rect x="18" y="18" width="64" height="64" rx="14" fill="url(#egS)" stroke="#7F8994" stroke-width="2.5"/><rect x="10" y="26" width="16" height="16" rx="5" fill="url(#egS)" stroke="#7F8994" stroke-width="2"/><rect x="74" y="26" width="16" height="16" rx="5" fill="url(#egS)" stroke="#7F8994" stroke-width="2"/><rect x="10" y="58" width="16" height="16" rx="5" fill="url(#egS)" stroke="#7F8994" stroke-width="2"/><rect x="74" y="58" width="16" height="16" rx="5" fill="url(#egS)" stroke="#7F8994" stroke-width="2"/>' +
      '<rect x="18" y="44" width="64" height="12" fill="#6F7984" opacity=".55"/>' +
      (wire ? '<path class="eg-wire" d="M-40 50 L140 50" stroke="url(#egG)" stroke-width="7" stroke-linecap="round"/><path class="eg-wire" d="M-40 48 L140 48" stroke="#FFF6D8" stroke-width="1.6" opacity=".8"/>' : '') +
      '<path d="M26 24 Q40 20 52 24" stroke="#FFFFFF" stroke-width="3" fill="none" opacity=".85" stroke-linecap="round"/></svg>';
  }
  function svgMolar() {   // 鐘舌＝一顆戴著矯正器的小臼齒
    return '<svg class="eg-molar" viewBox="0 0 60 70" width="22" height="26"><path d="M10 14 Q8 3 20 4 Q30 8 40 4 Q52 3 50 14 Q50 28 45 36 Q43 52 38 64 Q34 68 32 58 Q30 46 28 58 Q26 68 22 64 Q17 52 15 36 Q10 28 10 14Z" fill="#FFFDF5" stroke="#B8946A" stroke-width="2.4"/><path d="M16 10 Q22 8 26 12" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/><rect x="22" y="17" width="16" height="12" rx="3" fill="#C9D0D8" stroke="#7F8994" stroke-width="1.6"/><path d="M4 23 L56 23" stroke="#D4A24C" stroke-width="2.6" stroke-linecap="round"/></svg>';
  }
  function svgLetter() {   // 信的背面：咖啡金蠟封，蠟封上壓著一顆矯正器、弓絲穿過
    return '<div class="eg-flip"><div class="eg-face eg-front"></div><div class="eg-face eg-back"><svg viewBox="0 0 120 80" width="100%" height="100%"><rect x="2" y="2" width="116" height="76" rx="6" fill="#FBF3E4" stroke="#C9A875" stroke-width="2.5"/><path d="M4 6 L60 44 L116 6" fill="none" stroke="#D9C29A" stroke-width="2.5"/>' +
      '<circle cx="60" cy="44" r="17" fill="#C79A46" stroke="#9C7231" stroke-width="2"/><circle cx="60" cy="44" r="12.5" fill="none" stroke="#E8C57A" stroke-width="1.6" opacity=".9"/>' +
      '<rect x="53" y="37" width="14" height="14" rx="3" fill="#F1E3BF" stroke="#8F6A2E" stroke-width="1.4"/><rect x="49" y="38.5" width="5" height="4" rx="1.2" fill="#F1E3BF" stroke="#8F6A2E" stroke-width="1"/><rect x="66" y="38.5" width="5" height="4" rx="1.2" fill="#F1E3BF" stroke="#8F6A2E" stroke-width="1"/><rect x="49" y="45.5" width="5" height="4" rx="1.2" fill="#F1E3BF" stroke="#8F6A2E" stroke-width="1"/><rect x="66" y="45.5" width="5" height="4" rx="1.2" fill="#F1E3BF" stroke="#8F6A2E" stroke-width="1"/>' +
      '<path class="eg-wire" d="M28 44 Q60 40 92 44" fill="none" stroke="#FFF1C4" stroke-width="2.6" stroke-linecap="round"/></svg><i class="eg-glint"></i></div></div>';
  }
  function fxHtml(e, pg) {   // 季節粒子：秋落葉、春花瓣、冬雪、夏天只有螢火蟲（夜）；元旦／春節／聖誕／跨年／醫師節加金星；11/19 全部沒有
    var fx = '', fk = e.fk, s = skySe(e), night = e.tod === 'night';
    if (fk === 'mem1119') return '';
    var items = [];
    if (s === 'autumn') items = fk === 'doctor' ? ['leaf1', 'pet1', 'leaf2', 'pet3', 'leaf4', 'pet2'] : ['leaf1', 'leaf2', 'leaf3', 'leaf4', 'leaf2'];
    if (s === 'spring') items = ['pet1', 'pet2', 'pet3', 'pet2', 'pet1', 'pet3'];
    if (night) items = items.slice(0, 3);
    items.forEach(function (it, i) {
      fx += '<i class="ib-fall" style="--x:' + (40 + rnd(i + 17) * 56).toFixed(1) + '%;--d:' + (11 + rnd(i + 13) * 7).toFixed(1) + 's;--dl:' + (-rnd(i + 21) * 16).toFixed(1) + 's;--w:' + (/^pet/.test(it) ? 8 + rnd(i + 5) * 4 : 12 + rnd(i + 5) * 7).toFixed(0) + 'px"><img alt="" src="' + ASSET + 'common/' + it + '.webp"></i>';
    });
    if (s === 'winter') for (var n = 0; n < (night ? 10 : 16); n++) fx += '<i class="ib-fall ib-snow" style="--x:' + (30 + rnd(n + 71) * 68).toFixed(1) + '%;--d:' + (9 + rnd(n + 73) * 8).toFixed(1) + 's;--dl:' + (-rnd(n + 79) * 16).toFixed(1) + 's;--w:' + (3 + rnd(n + 83) * 4).toFixed(1) + 'px"><b></b></i>';
    if (/^(doctor|newyear|nye|xmas|cny)$/.test(fk)) [[.6, .2], [.84, .3], [.72, .64], [.92, .12]].forEach(function (p, i) { fx += '<img class="ib-spark" alt="" src="' + ASSET + 'common/star' + (i % 2 + 1) + '.webp" style="left:' + p[0] * 100 + '%;top:' + p[1] * 100 + '%;--w:' + (12 + i * 2) + 'px;--dl:' + (i * .7) + 's">'; });
    if (s === 'summer' || s === 'autumn' || s === 'spring') for (var j = 0; j < (s === 'summer' ? 6 : 4); j++) fx += '<i class="ib-ffly" style="left:' + (62 + rnd(j + 44) * 32).toFixed(1) + '%;top:' + (35 + rnd(j + 54) * 45).toFixed(1) + '%;--dl:' + (-j * 1.4) + 's"></i>';
    return fx;
  }
  function ensureFeedbackBanner() {   // 意見信箱頁原本沒有橫幅：在頁首前補一個（同其他頁的 th-banner 結構）
    var p = document.getElementById('page-feedback'); if (!p || !p.querySelector('.page-head') || p.querySelector('figure.th-banner')) return;
    p.insertAdjacentHTML('afterbegin', '<figure class="th-banner th-banner-feedback"><div class="ed-shade"></div><figcaption><span class="ed-no">Letters</span><span class="ed-title">Letters &amp;<br class="ib-mbr"> Ideas.</span></figcaption></figure>');
  }
  function num(f) { try { return typeof f === 'function' ? +f() || 0 : +f || 0; } catch (x) { return 0; } }
  function build(fig, pg) {
    var e = env(), vk = variant(pg, e), m = MAN[vk]; if (!m) return;
    var nNew = num(C.newNote), course = num(C.courseDay) > 0;
    var x = X[pg], dir = ASSET + vk + '/', quiet = e.fk === 'mem1119', doc = e.fk === 'doctor';
    fig.classList.add('ib', 'ib2', 'ib3'); fig.setAttribute('data-ib', pg); fig.setAttribute('data-season', skySe(e)); fig.setAttribute('data-tod', e.tod); fig.setAttribute('data-v', vk);
    if (e.fk) fig.setAttribute('data-fest', e.fk); else fig.removeAttribute('data-fest');
    var stars = ''; for (var i = 0; i < 26; i++) stars += '<i class="ib-star" style="left:' + (rnd(i + 3) * 72).toFixed(1) + '%;top:' + (rnd(i + 63) * 70).toFixed(1) + '%;--s:' + (1.2 + rnd(i + 120) * 1.8).toFixed(1) + 'px;animation-delay:' + (-rnd(i + 180) * 4).toFixed(1) + 's"></i>';
    var P = m.parts, art = '<div class="ib-float"><div class="ib-art">' + img(dir + 'base.webp', m.crop);
    if (P.bell) art += img(dir + 'bell.webp', P.bell, 'ib-bell');
    if (P.cat) art += img(dir + 'cat.webp', P.cat, 'ib-cat');
    if (pg === 'notice') art += '<img class="ib-note" alt="" src="' + ASSET + 'common/' + (doc ? 'noteh' : 'note1') + '.webp" style="left:' + x.note[0] + 'px;top:' + x.note[1] + 'px;width:84px;--r:' + x.note[2] + 'deg">';
    if (pg === 'map2') x.drops.forEach(function (d, i) { var h = doc && i === 0; art += '<i class="ib-pinpop ib-pinring" style="left:' + (d[0] - 26) + 'px;top:' + (d[1] - 12) + 'px;width:52px;height:24px"></i><img class="ib-pin ib-cpin" alt="" src="' + ASSET + 'common2/' + (h ? 'clinicpinh' : 'clinicpin') + '.webp" style="left:' + (d[0] - 23) + 'px;top:' + (d[1] - (h ? 64 : 78)) + 'px;width:' + (h ? 44 : 46) + 'px">'; });
    if (pg === 'member') art += '<div class="ib-peek" style="left:' + (x.peek[0] - 42) + 'px;top:' + (x.peek[1] - 80) + 'px;width:84px;height:80px"><img alt="" src="' + ASSET + 'common2/eggtooth.webp" style="width:66px;left:9px;top:80px"></div>';
    if (pg === 'member' || pg === 'mail') art += '<img class="ib-env" alt="" src="' + ASSET + 'common2/env.webp" style="left:' + (x.slot[0] - 18) + 'px;top:' + (x.slot[1] - 14) + 'px;width:36px">';
    var topL = '';   // 彩蛋放在燈光層之上（夜晚燈光層不會蓋住放大的鈴／信）
    if (pg === 'mail') topL += '<div class="ib-letter" style="left:' + (x.slot[0] - 30) + 'px;top:' + (x.slot[1] - 20) + 'px">' + svgLetter() + '</div>';
    art += img(dir + 'kid.webp', P.kid, 'ib-kid');
    if (P.balloon) art += '<div class="ib-bal" style="transform-origin:' + x.a[0] + 'px ' + x.a[1] + 'px">' + string(x.a, x.k, pg === 'mail' ? 6 : 10) + img(dir + 'balloon.webp', P.balloon) + '</div>';
    if (pg === 'map2') art += '<div class="ib-wire">' + ((doc && x.wireDoc) || x.wire).map(function (w, i) { return '<i style="left:' + (w[0] - 20) + 'px;top:' + (w[1] - 20) + 'px;animation-delay:' + (i * 80) + 'ms"></i>'; }).join('') + '</div>';
    if (pg === 'member' && !quiet) art += '<img class="ib-heart" alt="" src="' + ASSET + 'common2/heart.webp" style="left:' + x.heart[0] + 'px;top:' + x.heart[1] + 'px;width:26px">';
    if (pg === 'member') art += '<span class="ib-egglbl" style="left:' + (x.peek[0] - 60) + 'px;top:' + (x.peek[1] - 128) + 'px">嗨～我也戴牙套</span>';
    if (pg === 'notice') topL += '<div class="ib-loupe" style="left:' + (x.pin[0] - 58) + 'px;top:' + (x.pin[1] - 58) + 'px"><div class="eg-lens">' + svgBracket(84, true) + '<i class="eg-glint"></i></div><i class="eg-handle"></i></div>';
    if (pg === 'event' && P.bell) { var bb = P.bell; topL += '<div class="ib-bellz" style="left:' + bb[0] + 'px;top:' + bb[1] + 'px;width:' + (bb[2] - bb[0]) + 'px;height:' + (bb[3] - bb[1]) + 'px"><span class="eg-clap" style="left:' + ((bb[2] - bb[0]) / 2 - 11) + 'px;top:' + ((bb[3] - bb[1]) * .62) + 'px">' + svgMolar() + '</span><img alt="" src="' + dir + 'bell.webp"></div>'; }
    art += '</div><div class="ib-glow">' + (P.lit ? img(dir + 'lit.webp', P.lit, 'ib-lit') : '');
    [x.halo, x.halo2].forEach(function (h) { if (h) art += '<i class="ib-halo" style="left:' + (h[0] - h[2]) + 'px;top:' + (h[1] - h[2]) + 'px;width:' + h[2] * 2 + 'px;height:' + h[2] * 2 + 'px"></i>'; });
    if (pg === 'mail') art += '<i class="ib-halo ib-winhalo" style="left:' + (x.win[0] - x.win[2]) + 'px;top:' + (x.win[1] - x.win[2]) + 'px;width:' + x.win[2] * 2 + 'px;height:' + x.win[2] * 2 + 'px"></i>';
    if (x.waves) art += '<i class="ib-wave" style="left:' + (x.waves[0] - 4) + 'px;top:' + (x.waves[1] - 10) + 'px"></i><i class="ib-wave w2" style="left:' + (x.waves[0] + 6) + 'px;top:' + (x.waves[1] - 10) + 'px"></i>';
    if (pg === 'notice') art += '<i class="ib-pinpop" style="left:' + (x.note[0] + 7) + 'px;top:' + (x.note[1] - 30) + 'px"></i>';
    art += '</div>' + (topL ? '<div class="ib-art ib-top">' + topL + '</div>' : '') + '</div>';
    var clouds = '<img class="ib-cloud" alt="" src="' + ASSET + 'common/cloud1.webp" style="left:8%;top:12%;width:9%;min-width:46px;--dx:38vw;animation-duration:90s;animation-delay:-40s">' +
      '<img class="ib-cloud" alt="" src="' + ASSET + 'common/cloud1.webp" style="left:30%;top:60%;width:6%;min-width:32px;--dx:30vw;animation-duration:120s;animation-delay:-20s;transform:scaleX(-1)">';
    if (pg === 'map2') {
      clouds += '<img class="ib-cloud ib-mid" alt="" src="' + ASSET + 'common/cloud1.webp" style="left:40%;top:14%;width:5.2%;--dx:9vw;animation-duration:70s;animation-delay:-30s">' +
        '<img class="ib-cloud ib-mid" alt="" src="' + ASSET + 'common/cloud1.webp" style="left:52%;top:58%;width:3.6%;--dx:7vw;animation-duration:85s;animation-delay:-12s;transform:scaleX(-1)">';
      (quiet ? [[49, 30, 30, 2]] : [[45, 26, 34, 1], [50.5, 40, 26, 2], [55, 20, 22, 3]]).forEach(function (b, i) { clouds += '<span class="ib-bird" style="left:' + b[0] + '%;top:' + b[1] + '%;width:' + b[2] + 'px;animation-delay:' + (-i * 2.3) + 's"><img alt="" src="' + ASSET + 'common2/bird' + b[3] + '.webp" style="animation-delay:' + (-i * .37) + 's"></span>'; });
    }
    fig.insertAdjacentHTML('afterbegin', '<div class="ib-sky"></div><div class="ib-stars">' + stars + '<i class="ib-moon"></i></div><div class="ib-clouds">' + clouds + '</div><div class="ib-stage">' + art + '</div><div class="ib-fx">' + fxHtml(e, pg) + '</div><div class="ib-shade"></div>');
    var cap = fig.querySelector('figcaption');
    if (cap && pg === 'notice' && nNew) cap.insertAdjacentHTML('beforeend', '<span class="ib-chip"><i>新</i>' + nNew + ' 則新公告</span>');
    if (cap && pg === 'event' && course) cap.insertAdjacentHTML('beforeend', '<span class="ib-chip"><i>今</i>今天有課程</span>');
    if (cap && pg === 'member') cap.insertAdjacentHTML('beforeend', '<span class="ib-chip"><i>家</i>歡迎回家</span>');
    if (cap && pg === 'mail') cap.insertAdjacentHTML('beforeend', '<span class="ib-chip"><i>信</i>歡迎來信</span>');
    if (cap && pg === 'map2') { var mc = num(C.mapCount); if (mc) cap.insertAdjacentHTML('beforeend', '<span class="ib-chip"><i>' + mc + '</i>位同門在地圖上</span>'); }
    var lab = { notice: ['看看公告島', '看看新便條上的大頭針'], event: ['敲一下學術活動島的鐘', '仔細看看那口鐘'], member: ['看看會員村', '敲敲信箱'], map2: ['看看地圖島', '點點台灣地圖'], mail: ['寄一封信到郵筒', '看看郵筒投信口'] }[pg];
    fig.insertAdjacentHTML('beforeend', '<button type="button" class="ib-tap" aria-label="' + lab[0] + '"></button><button type="button" class="ib-tap ib-eggtap" aria-label="' + lab[1] + '"></button>');
    layout(fig);
    fig.querySelector('.ib-eggtap').addEventListener('click', function (ev) { ev.stopPropagation(); egg(fig, pg); });
    fig.querySelector('.ib-tap').addEventListener('click', function () { act(fig, pg, true); });
    if (!fig._ro) { fig._ro = new ResizeObserver(function () { layout(fig); }); fig._ro.observe(fig); }
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { es.forEach(function (en) { fig.classList.toggle('ib-off', !en.isIntersecting); }); }).observe(fig);
    var ch = fig.querySelector('.ib-chip');
    if (RM) { ch && ch.classList.add('on'); fig.querySelectorAll('.ib-pin').forEach(function (p0) { p0.classList.add('pinned'); }); if (nNew) { var nn = fig.querySelector('.ib-note'); nn && nn.classList.add('pinned'); } return; }
    if (window.__ibFlying) fig.classList.add('ib-hold');
    if (!fig.classList.contains('ib-hold')) { fig.classList.add('ib-enter'); setTimeout(function () { act(fig, pg, false); }, 1000); }
  }
  function layout(fig) {   // 島放右邊；一般頁高度約 1.3 倍（岩石自然出框）；會員地圖的扁橫幅放大只露出上半部
    var r = fig.getBoundingClientRect(), pg = fig.getAttribute('data-ib'), m = MAN[fig.getAttribute('data-v')], c = m.crop, x = X[pg], t0 = top(m);
    var W = r.width, H = r.height, mob = W < 560, flat = W / H > 4.2;
    var k = flat ? H * (mob ? 1.62 : 1.42) / (c[3] - t0) : H * (mob ? (pg === 'mail' ? 1.0 : pg === 'notice' ? 1.03 : pg === 'member' ? 1.04 : 1.14) : pg === 'notice' || pg === 'event' ? 1.32 : 1.3) / (c[3] - t0);
    var right = W - (mob ? W * (pg === 'notice' ? .012 : pg === 'event' ? .045 : pg === 'mail' ? -.035 : pg === 'member' ? -.005 : .03) : W * .05), tx = right - c[2] * k, ty = H * (flat ? .03 : mob && (pg === 'notice' || pg === 'event') ? .05 : .03) - t0 * k;
    var st = fig.querySelector('.ib-stage'); st.style.transform = 'translate(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px) scale(' + k.toFixed(4) + ')';
    fig._k = { k: k, tx: tx, ty: ty }; fig.classList.toggle('ib-flat', flat);
    [['.ib-eggtap', x.egg], ['.ib-tap:not(.ib-eggtap)', x.tap]].forEach(function (q) { var b = fig.querySelector(q[0]), p = q[1]; if (!b || !p) return; var t1 = Math.max(0, ty + p[1] * k); b.style.left = (tx + p[0] * k) + 'px'; b.style.top = t1 + 'px'; b.style.width = ((p[2] - p[0]) * k) + 'px'; b.style.height = Math.max(0, Math.min(H - t1, ty + p[3] * k - t1)) + 'px'; });
    var lb = fig.querySelector('.ib-egglbl'); if (lb) lb.style.fontSize = ((mob ? 11.5 : 13) / k).toFixed(1) + 'px';
    fig.style.setProperty('--fh', H + 'px');
  }
  function re(el, c) { if (!el) return; el.classList.remove(c); void el.offsetWidth; el.classList.add(c); }
  function act(fig, pg, manual) {
    var quiet = fig.getAttribute('data-fest') === 'mem1119', nNew = num(C.newNote), course = num(C.courseDay) > 0, ch = fig.querySelector('.ib-chip'), kid = fig.querySelector('.ib-kid');
    if (ch) ch.classList.add('on');
    if (pg === 'notice') {   // 新便條飛進來釘上 → 波紋 → 小醫師跳一下
      if (!nNew && !manual) return;
      var n = fig.querySelector('.ib-note'), pp = fig.querySelector('.ib-pinpop');
      n.classList.remove('pinned', 'fly'); void n.offsetWidth; n.classList.add('fly');
      setTimeout(function () { re(pp, 'go'); re(kid, 'hop'); }, 1650);
      setTimeout(function () { n.classList.remove('fly'); n.classList.add('pinned'); kid.classList.remove('hop'); }, 2400);
    } else if (pg === 'event') {   // 敲鐘：鐘擺三下、聲波、燈亮
      if (!manual) { if (course) fig.classList.add('ib-course'); return; }
      re(fig.querySelector('.ib-bell'), 'ring'); fig.querySelectorAll('.ib-wave').forEach(function (w) { re(w, 'go'); }); re(kid, 'hop'); fig.classList.add('ib-course');
    } else if (pg === 'member') {   // 信飛進信箱 → 屋裡燈亮 → 貓伸懶腰、小愛心 → 小醫師跳一下
      re(fig.querySelector('.ib-env'), 'fly');
      setTimeout(function () { re(fig, 'ib-home'); }, 1250);
      setTimeout(function () { re(fig.querySelector('.ib-cat'), 'purr'); if (!quiet) re(fig.querySelector('.ib-heart'), 'up'); }, 1500);
      setTimeout(function () { re(kid, 'hop'); }, 1700);
      setTimeout(function () { fig.classList.remove('ib-home'); kid && kid.classList.remove('hop'); }, 4600);
    } else if (pg === 'map2') {   // 小醫師拿放大鏡找一找 → 東岸三根新的診所大頭針依序落下 → 路線亮一下
      re(kid, 'hop');
      var pins = fig.querySelectorAll('.ib-cpin'), rings = fig.querySelectorAll('.ib-pinring');
      pins.forEach(function (pn, i) { setTimeout(function () { pn.classList.remove('pinned'); re(pn, 'drop'); }, 500 + i * 420); setTimeout(function () { re(rings[i], 'go'); }, 1050 + i * 420); });
      setTimeout(function () { re(fig, 'ib-found'); }, 1500);
      setTimeout(function () { pins.forEach(function (pn) { pn.classList.remove('drop'); pn.classList.add('pinned'); }); kid && kid.classList.remove('hop'); }, 2900);
    } else if (pg === 'mail') {   // 一封信從左上飛進郵筒投信口 → 投信口和小屋窗戶亮一下 → 小醫師跳一下
      if (!manual && quiet) return;
      re(fig.querySelector('.ib-env'), 'fly');
      setTimeout(function () { re(fig, 'ib-home'); }, 1250);
      setTimeout(function () { re(kid, 'hop'); }, 1450);
      setTimeout(function () { fig.classList.remove('ib-home'); kid && kid.classList.remove('hop'); }, 4400);
    }
  }
  function egg(fig, pg) {
    if (fig._egg) return; fig._egg = 1;
    var T = 3600, kid = fig.querySelector('.ib-kid');
    if (pg === 'member') { re(fig.querySelector('.ib-egglbl'), 'on'); re(fig.querySelector('.ib-peek'), 'on'); }   // 信箱後探頭的牙齒「嗨～我也戴牙套」
    else if (pg === 'map2') { re(fig.querySelector('.ib-wire'), 'on'); setTimeout(function () { re(fig, 'ib-found'); }, 600); }   // 西岸矯正器由北到南亮起（不出字）
    else if (pg === 'notice') {   // 放大鏡湊近新便條的大頭針：原來是一顆矯正器，弓絲滑進槽裡、閃一下
      var n = fig.querySelector('.ib-note'); if (n && !n.classList.contains('pinned') && !n.classList.contains('fly')) n.classList.add('pinned');
      re(fig.querySelector('.ib-loupe'), 'on'); T = 3400;
    } else if (pg === 'event') {   // 鐘放大、擺三下：鐘舌是一顆戴矯正器的小臼齒
      re(fig.querySelector('.ib-bellz'), 'on'); fig.querySelectorAll('.ib-wave').forEach(function (w) { re(w, 'go'); }); T = 3400;
    } else if (pg === 'mail') {   // 投信口彈出一封信、翻面：咖啡金蠟封上壓著一顆矯正器，弓絲穿過、閃一下，再滑回去
      re(fig.querySelector('.ib-letter'), 'on'); setTimeout(function () { re(fig, 'ib-home'); }, 300); setTimeout(function () { fig.classList.remove('ib-home'); }, 3400); T = 3800;
    }
    setTimeout(function () { fig._egg = 0; ['.ib-egglbl', '.ib-peek', '.ib-wire', '.ib-loupe', '.ib-bellz', '.ib-letter'].forEach(function (q) { var el = fig.querySelector(q); el && el.classList.remove('on'); }); }, T);
  }
  function scan() {
    ensureFeedbackBanner();
    Object.keys(PAGES).forEach(function (p) { var f = document.querySelector('#page-' + p + ' figure.th-banner:not(.ib)'); if (f) build(f, PAGES[p]); });
  }
  var scanQ = 0;
  new MutationObserver(function () { if (!scanQ) { scanQ = 1; requestAnimationFrame(function () { scanQ = 0; scan(); }); } }).observe(document.body, { childList: true, subtree: true });
  scan();
  // 時段每分鐘依台北時間更新（跟首頁群島同一個 env）
  setInterval(function () { var t = env().tod; document.querySelectorAll('figure.ib3[data-tod]').forEach(function (f) { if (f.getAttribute('data-tod') !== t) f.setAttribute('data-tod', t); }); }, 60000);
  // 預載：只抓「今天這一版」的主圖，而且只在使用者指向／按下某座島或某頁的選單時才抓那一頁（不一次抓全部）
  var pre = {};
  function preload(page) { var pg = PAGES[page]; if (!pg) return; var vk = variant(pg, env()); if (!MAN[vk] || pre[vk]) return; pre[vk] = 1; var im = new Image(); im.decoding = 'async'; im.src = ASSET + vk + '/base.webp'; }
  function intent(ev) { var t = ev.target; if (!t || !t.closest) return; var s = t.closest('.isl-spot[data-isl]'); if (s) { preload(GO[s.getAttribute('data-isl')]); return; } var g = t.closest('[data-go]'); if (g) preload(g.getAttribute('data-go')); }
  document.addEventListener('pointerdown', intent, true);
  document.addEventListener('mouseover', intent, { passive: true });
  // ── 首頁點島 → 鏡頭推進 → 落在頁面橫幅（回憶頁不在這批，照原本直接切頁） ──
  document.addEventListener('click', function (ev) {
    var s = ev.target.closest && ev.target.closest('.isl-spot[data-isl]'); if (!s || RM) return;
    var key = s.getAttribute('data-isl'); if (!GO[key] || !document.querySelector('#page-home .isl-scene')) return;
    ev.preventDefault(); ev.stopPropagation();
    if (window.__ibFlying) return; window.__ibFlying = true; fly(s, key);
  }, true);
  function fly(spot, key) {
    var pg = ART[key], e = env(), vk = variant(pg, e), m = MAN[vk], c = m.crop, sc = document.querySelector('#page-home .isl-scene');
    var R = spot.getBoundingClientRect(), S = sc.getBoundingClientRect(), cx = R.left + R.width / 2, cy = R.top + R.height / 2, Z = 2.3;
    sc.style.transformOrigin = (cx - S.left) + 'px ' + (cy - S.top) + 'px'; sc.classList.add('ib-zoom'); sc.style.transform = 'scale(' + Z + ')';
    var tmp = document.createElement('figure'); tmp.className = 'ib'; tmp.setAttribute('data-season', skySe(e)); tmp.setAttribute('data-tod', e.tod); tmp.style.cssText = 'position:fixed;inset:0;margin:0;z-index:35;opacity:0;pointer-events:none;transition:opacity .26s';
    tmp.innerHTML = '<div class="ib-sky"></div><div class="ib-stars" style="opacity:' + (e.tod === 'night' ? 1 : 0) + '"></div>';
    var sn = document.querySelector('#sideNav'), snr = sn && sn.getBoundingClientRect(); if (snr && snr.width > 0 && snr.height > 0 && snr.left < 5) tmp.style.left = snr.right + 'px';
    document.body.appendChild(tmp);
    var im = document.createElement('img'); im.className = 'ib-tr-img'; im.src = ASSET + vk + '/base.webp'; document.body.appendChild(im);
    var iw = c[2] - c[0], ih = c[3] - c[1], k0 = Math.min(R.width * Z * 1.05 / iw, R.height * Z * 1.05 / ih);
    im.style.width = iw + 'px'; im.style.height = ih + 'px'; im.style.transform = 'translate(' + (cx - iw * k0 / 2) + 'px,' + (cy - ih * k0 / 2 + R.height * .1) + 'px) scale(' + k0 + ')';
    if (e.tod === 'night') im.style.filter = 'brightness(.6) saturate(.72) contrast(1.05)';
    setTimeout(function () { tmp.style.opacity = 1; im.style.transition = 'opacity .22s'; im.style.opacity = 1; }, 230);
    setTimeout(function () {
      var b = document.createElement('button'); b.setAttribute('data-go', GO[key]); b.style.display = 'none'; document.body.appendChild(b);
      b.click(); b.remove(); sc.classList.remove('ib-zoom'); sc.style.transform = ''; window.scrollTo(0, 0);
      requestAnimationFrame(function () {
        scan(); var fig = document.querySelector('#page-' + GO[key] + ' figure.th-banner.ib'); if (!fig) { cleanup(); return; }
        fig.classList.add('ib-hold'); layout(fig);
        var fr = fig.getBoundingClientRect(), K = fig._k;
        im.style.transition = 'transform .72s cubic-bezier(.2,.75,.2,1), opacity .2s'; im.style.transform = 'translate(' + (fr.left + K.tx + c[0] * K.k) + 'px,' + (fr.top + K.ty + c[1] * K.k) + 'px) scale(' + K.k + ')';
        tmp.style.transition = 'opacity .55s ease .12s'; tmp.style.opacity = 0;
        setTimeout(function () { fig.classList.remove('ib-hold'); im.style.opacity = 0; setTimeout(function () { act(fig, pg, false); }, 500); setTimeout(cleanup, 260); }, 740);
      });
      function cleanup() { im.remove(); tmp.remove(); window.__ibFlying = false; }
    }, 470);
  }
  window.IB3 = { v: 'ipb1', act: act, scan: scan, egg: egg, variant: variant, env: env, preload: preload, man: function () { return MAN; } };
})();
