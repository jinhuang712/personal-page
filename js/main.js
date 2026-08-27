/* 皮影戏台 · 操影脚本
   光标即签手：人偶关节以缓动插值追随；每幕一套姿势。 */
(function () {
  'use strict';

  var root = document.body;
  var silk = document.getElementById('silk');
  var tags = Array.prototype.slice.call(document.querySelectorAll('.act-tag'));
  var acts = Array.prototype.slice.call(document.querySelectorAll('.act'));
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 姿势库（每幕一套，单位：度）── */
  var POSES = [
    /* 1 开场：端立 */   { neck: 0,  torso: 0,  fs: -8,  fe: -18, rs: 10,  re: 14 },
    /* 2 关于：扬臂引述 */ { neck: 3,  torso: -1, fs: -42, fe: -52, rs: 16,  re: 20 },
    /* 3 手作：拱手亮单 */ { neck: -2, torso: 1,  fs: -24, fe: -34, rs: 6,   re: 10 },
    /* 4 联络：一揖 */   { neck: 18, torso: 14, fs: 8,   fe: -6,  rs: 22,  re: 26 }
  ];

  var cur = Object.assign({}, POSES[0]);
  var tgt = Object.assign({}, POSES[0]);
  var mx = 0, my = 0, tmx = 0, tmy = 0;   /* 光标 -1..1 */

  function lerp(a, b, k) { return a + (b - a) * k; }
  function clamp1(v) { return Math.max(-1, Math.min(1, v)); }

  if (!reduced && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', function (e) {
      tmx = clamp1((e.clientX / window.innerWidth) * 2 - 1);
      tmy = clamp1((e.clientY / window.innerHeight) * 2 - 1);
    });
  }

  function apply() {
    var s = root.style;
    s.setProperty('--neck', cur.neck.toFixed(2) + 'deg');
    s.setProperty('--torso', cur.torso.toFixed(2) + 'deg');
    s.setProperty('--fs', cur.fs.toFixed(2) + 'deg');
    s.setProperty('--fe', cur.fe.toFixed(2) + 'deg');
    s.setProperty('--rs', cur.rs.toFixed(2) + 'deg');
    s.setProperty('--re', cur.re.toFixed(2) + 'deg');
    s.setProperty('--rod-n', (cur.torso * 0.45 + cur.neck * 0.25).toFixed(2) + 'deg');
    s.setProperty('--rod-h', (cur.fs * 0.3 + cur.fe * 0.2).toFixed(2) + 'deg');
  }

  function frame(t) {
    /* 呼吸与 sway：让影人在无操作时也活着 */
    var sway = Math.sin(t / 900) * 1.6;
    var breathe = Math.sin(t / 1400) * 0.8;
    var sleeveIdle = Math.sin(t / 700) * 1.5;

    var k = 0.055;
    cur.neck  = lerp(cur.neck,  tgt.neck  + mx * 5 + my * 2 + breathe, k);
    cur.torso = lerp(cur.torso, tgt.torso + mx * 1.5 + sway * 0.5, k);
    cur.fs    = lerp(cur.fs,    tgt.fs    + mx * -6 + my * -3, k);
    cur.fe    = lerp(cur.fe,    tgt.fe    + my * 3 + sleeveIdle, k);
    cur.rs    = lerp(cur.rs,    tgt.rs    + mx * 3, k);
    cur.re    = lerp(cur.re,    tgt.re    + my * 2, k);

    mx = lerp(mx, tmx, 0.06);
    my = lerp(my, tmy, 0.06);

    apply();
    requestAnimationFrame(frame);
  }

  if (!reduced) requestAnimationFrame(frame);
  else apply();

  /* ── 换幕 ── */
  var current = 1;

  function goAct(n) {
    if (n === current) return;
    current = n;
    root.setAttribute('data-act', String(n));

    tags.forEach(function (tag) {
      if (Number(tag.getAttribute('data-go')) === n) {
        tag.setAttribute('aria-current', 'true');
      } else {
        tag.removeAttribute('aria-current');
      }
    });

    acts.forEach(function (act) {
      act.classList.toggle('is-live', Number(act.getAttribute('data-act')) === n);
    });

    tgt = Object.assign({}, POSES[n - 1]);

    /* 灯焰轻晃（尊重动效偏好） */
    if (!reduced) {
      silk.classList.remove('flicker');
      void silk.offsetWidth;           /* 重新触发动画 */
      silk.classList.add('flicker');
    }
  }

  tags.forEach(function (tag) {
    tag.addEventListener('click', function () {
      goAct(Number(tag.getAttribute('data-go')));
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll('[data-go]'), function (el) {
    if (el.classList.contains('act-tag')) return;
    el.addEventListener('click', function () {
      goAct(Number(el.getAttribute('data-go')));
    });
  });

  /* 键盘左右翻幕 */
  document.addEventListener('keydown', function (e) {
    if (e.target.closest('input, textarea')) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goAct(Math.min(4, current + 1));
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goAct(Math.max(1, current - 1));
  });

  /* 初始：第一幕（或按 hash 定幕） */
  var hashToAct = { '': 1, 'kaichang': 1, 'guanyu': 2, 'shoudan': 3, 'lianluo': 4 };
  var h = (location.hash || '').replace('#', '');
  var start = hashToAct[h] || 1;

  acts.forEach(function (act) {
    act.classList.toggle('is-live', Number(act.getAttribute('data-act')) === start);
  });
  tags.forEach(function (tag) {
    if (Number(tag.getAttribute('data-go')) === start) tag.setAttribute('aria-current', 'true');
    else tag.removeAttribute('aria-current');
  });
  current = start;
  tgt = Object.assign({}, POSES[start - 1]);
  Object.assign(cur, POSES[start - 1]);
  apply();
})();
