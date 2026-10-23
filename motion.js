// Motion and live mini-UIs. Progressive enhancement: the HTML/CSS render every final state;
// this file only hides what is below the fold (when anime.js is present) and replays the demos.
(function () {
  'use strict';
  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var A = window.anime && window.anime.animate ? window.anime : null;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var lang = function () { return root.getAttribute('lang') === 'tr' ? 'tr' : 'en'; };
  var hasIO = 'IntersectionObserver' in window;

  /* ---------------- static decoration built once ---------------- */
  // waveform: 64 bars, speech clusters under the two subtitle blocks
  var wave = $('#wave');
  if (wave) {
    var H = [3, 4, 3, 5, 4, 3, 6, 14, 22, 30, 26, 34, 28, 20, 31, 24, 18, 26, 12, 6, 4, 3, 5, 4, 3, 4, 6, 3, 4, 5, 3, 4,
      7, 16, 27, 33, 25, 36, 30, 22, 28, 34, 26, 19, 29, 24, 31, 22, 14, 18, 10, 5, 4, 3, 5, 4, 3, 4, 3, 5, 4, 3, 4, 3];
    var svg = '';
    H.forEach(function (h, i) { svg += '<rect' + (h > 9 ? ' class="sp"' : '') + ' x="' + (i * 4 + .8) + '" y="' + (20 - h / 2) + '" width="2.4" height="' + h + '" rx="1.2"/>'; });
    wave.innerHTML = svg;
  }
  // QR: fixed pseudo-random pattern with three finder squares
  var qr = $('#qr');
  if (qr) {
    var s = 7, out = '', N = 21;
    var rnd = function () { s = (s * 16807) % 2147483647; return s / 2147483647; };
    var finder = function (x, y) { return '<path d="M' + x + ' ' + y + 'h7v7h-7z M' + (x + 1) + ' ' + (y + 1) + 'v5h5v-5z" fill-rule="evenodd"/><rect x="' + (x + 2) + '" y="' + (y + 2) + '" width="3" height="3"/>'; };
    for (var y = 0; y < N; y++) for (var x = 0; x < N; x++) {
      var inF = (x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12);
      if (!inF && rnd() > .52) out += '<rect x="' + x + '" y="' + y + '" width="1" height="1"/>';
    }
    qr.innerHTML = out + finder(0, 0) + finder(14, 0) + finder(0, 14);
  }
  // Çakmak Pen: 23 page ticks
  var pagesT = $('.pages__ticks');
  if (pagesT) { var t = ''; for (var k = 0; k < 23; k++) t += '<i class="is-on"></i>'; pagesT.innerHTML = t; }

  /* ---------------- number formatting ---------------- */
  function fmt(v, dec, pct) {
    var l = lang() === 'tr' ? 'tr-TR' : 'en-US';
    if (pct) return new Intl.NumberFormat(l, { style: 'percent', minimumFractionDigits: dec, maximumFractionDigits: dec }).format(v / 100);
    return new Intl.NumberFormat(l, { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(v);
  }
  var counters = $$('.cnt');
  function paintCounters() { counters.forEach(function (el) { if (!el._busy) el.textContent = fmt(+el.dataset.to, +el.dataset.dec, !!el.dataset.pct); }); }
  function paintTicker() { var n = $('#tick-n'), c = $('#tick-c'); if (n && !n._busy) n.textContent = fmt(1765, 0); if (c) c.textContent = fmt(83.19, 2, true); }
  paintCounters(); paintTicker();
  document.addEventListener('dil', function () { paintCounters(); paintTicker(); });

  function tween(from, to, dur, onUpd, done) {
    if (A) {
      var o = { v: from };
      A.animate(o, { v: to, duration: dur, ease: 'outQuart', onUpdate: function () { onUpd(o.v); }, onComplete: function () { onUpd(to); done && done(); } });
      return;
    }
    var t0 = performance.now();
    (function f(now) { var p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 4); onUpd(from + (to - from) * e); if (p < 1) requestAnimationFrame(f); else done && done(); })(t0);
  }
  function countUp(el) {
    el._busy = true;
    var to = +el.dataset.to, dec = +el.dataset.dec, pct = !!el.dataset.pct;
    tween(0, to, 1400, function (v) { el.textContent = fmt(v, dec, pct); }, function () { el._busy = false; });
  }

  /* ---------------- tiny pausable sequencer ---------------- */
  function seq(steps, onEnd) {
    var i = 0, timer = 0, paused = false, remaining = 0, started = 0, cur = null, done = false;
    function next() { if (i >= steps.length) { done = true; onEnd && onEnd(); return; } cur = steps[i++]; remaining = cur[0]; schedule(); }
    function schedule() { started = performance.now(); timer = setTimeout(function () { cur[1](); next(); }, Math.max(0, remaining)); }
    return {
      play: function () { next(); },
      pause: function () { if (done || paused || !cur) return; paused = true; clearTimeout(timer); remaining -= performance.now() - started; },
      resume: function () { if (!paused || done) return; paused = false; schedule(); }
    };
  }

  /* ---------------- demos (interactive, always on) ---------------- */
  var sw = $('#sw'), demo = $('.demo');
  if (sw) sw.addEventListener('click', function () {
    var on = sw.getAttribute('aria-checked') !== 'true';
    sw.setAttribute('aria-checked', String(on)); demo.classList.toggle('is-on', on);
  });

  /* ---------------- experience line (scroll-synced) ---------------- */
  var tl = $('#tl'), fill = $('#tl-fill'), ents = $$('.tl__e');
  function tlPaint() {
    if (!tl) return;
    var r = tl.getBoundingClientRect(), vh = innerHeight;
    var p = reduce ? 1 : Math.min(1, Math.max(0, (vh * .7 - r.top) / (r.height * .78)));
    fill.style.setProperty('--p', p.toFixed(3));
    var lim = r.top + p * r.height;
    ents.forEach(function (e) { e.classList.toggle('is-past', e.getBoundingClientRect().top + 8 <= lim + 1); });
  }
  var tlTick = false;
  addEventListener('scroll', function () { if (!tlTick) { tlTick = true; requestAnimationFrame(function () { tlTick = false; tlPaint(); }); } }, { passive: true });
  addEventListener('resize', tlPaint);
  tlPaint();

  /* ---------------- mini-UI players ---------------- */
  var pipe = $('#pipe');
  var KU = [['TR', 'Son tren gece yarısı kalkıyor.'], ['EN', 'The last train leaves at midnight.'], ['ES', 'El último tren sale a medianoche.'], ['DE', 'Der letzte Zug fährt um Mitternacht.']];

  var MINIS = {
    // Any step list (.pipe__list): wait → run → done, row by row, twice.
    steps: function (el, runMs) {
      var lis = $$('.pipe__list li', el), res = $('.pipe__res', el), steps = [];
      var st = function (k, v) { lis[k].setAttribute('data-st', v); };
      for (var c = 0; c < 2; c++) {
        steps.push([c ? 2600 : 0, function () { lis.forEach(function (_, k) { st(k, 'wait'); }); if (res) res.classList.remove('is-on'); }]);
        lis.forEach(function (_, k) {
          steps.push([k ? 60 : 400, function () { st(k, 'run'); }]);
          steps.push([(runMs && runMs[k]) || 900, function () { st(k, 'done'); }]);
        });
        if (res) steps.push([260, function () { res.classList.add('is-on'); }]);
      }
      return seq(steps);
    },
    // Phone mockups: cycle the real mobile screens of each live site.
    ph: function (el) {
      var imgs = $$('.ph__screen img', el), steps = [];
      var show = function (i) { return function () { imgs.forEach(function (m, k) { m.classList.toggle('is-on', k === i); }); }; };
      for (var c = 0; c < 3; c++) imgs.forEach(function (_, i) { steps.push([c === 0 && i === 0 ? 1200 : 2600, show((i + 1) % imgs.length)]); });
      return seq(steps);
    },
    // RepChat: the phone cycles priority card → topic picker → email code.
    rc: function (el) {
      var imgs = $$('.rc__screen img', el), tabs = $$('.rc__steps li', el), steps = [];
      var show = function (i) { return function () { imgs.forEach(function (m, k) { m.classList.toggle('is-on', k === i); }); tabs.forEach(function (t, k) { t.classList.toggle('is-on', k === i); }); }; };
      for (var c = 0; c < 3; c++) [1, 2, 0].forEach(function (i, j) { steps.push([c === 0 && j === 0 ? 1400 : 2600, show(i)]); });
      return seq(steps);
    },
    ku: function () {
      var line = $('#ku-line'), code = $('#ku-lang'), steps = [];
      var swap = function (i) {
        return function () {
          line.classList.add('is-out');
          setTimeout(function () {
            line.classList.remove('is-out'); line.classList.add('is-in');
            line.textContent = KU[i][1]; code.textContent = KU[i][0];
            void line.offsetWidth; line.classList.remove('is-in');
          }, 220);
        };
      };
      for (var c = 0; c < 2; c++) [1, 2, 3, 0].forEach(function (i, j) { steps.push([c === 0 && j === 0 ? 900 : 1800, swap(i)]); });
      return seq(steps);
    },
    sync: function () {
      var s = $('#sync'), v = $('#sync-v');
      var w = function (x) { v.textContent = (x > 0.004 ? '+' : '') + fmt(x, 2) + ' s'; };
      return seq([
        [0, function () { s.classList.add('is-off'); w(0.42); }],
        [900, function () { s.classList.remove('is-off'); tween(0.42, 0, 600, w); }]
      ]);
    },
    cert: function () {
      var c = $('#cert');
      return seq([[0, function () { c.setAttribute('data-st', 'wait'); }], [1300, function () { c.setAttribute('data-st', 'ok'); }]]);
    },
    pages: function () {
      var ticks = $$('.pages__ticks i'), n = $('#pages-n'), steps = [[0, function () { ticks.forEach(function (i) { i.classList.remove('is-on'); }); n.textContent = '0'; }]];
      ticks.forEach(function (tk, i) { steps.push([i ? 48 : 300, function () { tk.classList.add('is-on'); n.textContent = String(i + 1); }]); });
      return seq(steps);
    },
    tick: function () {
      var list = $('.tick__list'), n = $('#tick-n'), box = $('#tick');
      return seq([
        [0, function () { n._busy = true; n.textContent = fmt(0, 0); }],
        [200, function () {
          var dist = Math.max(0, list.scrollHeight - box.clientHeight);
          list.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(' + (-dist) + 'px)' }, { transform: 'translateY(0)' }], { duration: 2600, easing: 'cubic-bezier(.65,0,.35,1)' });
          tween(0, 1765, 1600, function (v) { n.textContent = fmt(Math.round(v), 0); }, function () { n._busy = false; });
        }]
      ]);
    },
    frag: function (el) {
      var txt = el.textContent, i = 0, steps = [[0, function () { el.textContent = ''; el.classList.add('is-typing'); }]];
      for (var k = 0; k < txt.length; k++) steps.push([28, function () { el.textContent = txt.slice(0, ++i); }]);
      steps.push([0, function () { el.classList.remove('is-typing'); }]);
      return seq(steps);
    }
  };

  // Each mini runs once when 40% visible; pauses while hovered or scrolled away.
  function bindMini(el, make, host, loops) {
    host = host || el.closest('.cell') || el;
    var p = null;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && !p) { p = make(el); p.play(); }
        else if (p && loops) { e.isIntersecting ? p.resume() : p.pause(); }
      });
    }, { threshold: .4 });
    io.observe(el);
    host.addEventListener('pointerenter', function () { p && p.pause(); });
    host.addEventListener('pointerleave', function () { p && p.resume(); });
    host.addEventListener('focusin', function () { p && p.pause(); });
    host.addEventListener('focusout', function () { p && p.resume(); });
  }

  // Orbit runs only on screen.
  var orbit = $('.orbit');
  if (orbit && hasIO) new IntersectionObserver(function (e) { orbit.classList.toggle('is-paused', !e[0].isIntersecting); }).observe(orbit);

  if (reduce || !hasIO) return;   // final states are already in the markup

  if (pipe) bindMini(pipe, function (el) { return MINIS.steps(el); }, null, true);
  if ($('#bdflow')) bindMini($('#bdflow'), function (el) { return MINIS.steps(el, [700, 1300, 800]); }, null, true);
  if ($('#gate')) bindMini($('#gate'), function (el) { return MINIS.steps(el, [600, 1600, 700, 600]); }, null, true);
  if ($('#ku-line')) bindMini($('.ku'), MINIS.ku, null, true);
  if ($('#rc')) bindMini($('#rc'), MINIS.rc, null, true);
  $$('.ph').forEach(function (f) { bindMini(f, MINIS.ph, f.closest('article'), true); });
  if ($('#sync')) bindMini($('#sync'), MINIS.sync);
  if ($('#cert')) bindMini($('#cert'), MINIS.cert);
  if ($('#pages')) bindMini($('#pages'), MINIS.pages);
  if ($('#tick')) bindMini($('#tick'), MINIS.tick);
  $$('.frag').forEach(function (f) { bindMini(f, MINIS.frag, f.closest('article')); });

  // Counters count up once when seen.
  var cio = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } });
  }, { threshold: .6 });
  counters.forEach(function (c) { cio.observe(c); });

  /* ---------------- hero plane: flattens a little as the page scrolls ---------------- */
  var hero = $('.hero'), plane = $('#plane');
  if (hero && plane) {
    var hpTick = false;
    var hp = function () { hpTick = false; var r = hero.getBoundingClientRect(); var p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height))); hero.style.setProperty('--hp', p.toFixed(3)); };
    addEventListener('scroll', function () { if (!hpTick) { hpTick = true; requestAnimationFrame(hp); } }, { passive: true });
    hp();
  }

  /* ---------------- anime.js choreography ---------------- */
  if (!A) { return; }
  var animate = A.animate, stagger = A.stagger, utils = A.utils;

  try {
    // Hero entrance
    var l1 = $('.hero__h .l1');
    var words = l1.textContent.trim().split(/\s+/);
    l1.innerHTML = words.map(function (w) { return '<span style="display:inline-block;overflow:clip;overflow-clip-margin:.1em;vertical-align:top"><span class="hw" style="display:inline-block">' + w + '</span></span>'; }).join(' ');
    var heroBits = ['.hero__eyebrow', '.hero__h .l2', '.hero__lead', '.hero .cta-row'];
    utils.set('.hw', { y: '110%' });
    utils.set(heroBits.join(','), { opacity: 0, y: 14 });
    utils.set('.facts > div', { opacity: 0 });
    var shots = $$('.shot');
    utils.set(shots, { opacity: 0, y: 70 });

    var heroTl = A.createTimeline({ defaults: { ease: 'outExpo' } });
    heroTl.add('.hero__eyebrow', { opacity: 1, y: 0, duration: 700 }, 0)
      .add('.hw', { y: '0%', duration: 1100, delay: stagger(60) }, 80)
      .add('.hero__h .l2', { opacity: 1, y: 0, duration: 800 }, 420)
      .add('.hero__lead, .hero .cta-row', { opacity: 1, y: 0, duration: 700, delay: stagger(80) }, 560)
      .add('.facts > div', { opacity: 1, duration: 500, delay: stagger(60) }, 820)
      .add(shots, { opacity: 1, y: 0, duration: 1300, delay: stagger(90, { from: 'last' }) }, 200);
    /* clear the inline transform only after the last card has finished (it depends on how many cards there are), otherwise it overrides the :hover lift */
    var shotsDone = 200 + (shots.length - 1) * 90 + 1300 + 300;
    var shotsClear = function () { shots.forEach(function (el) { el.style.transform = ''; el.style.opacity = ''; }); };
    setTimeout(shotsClear, shotsDone);
    setTimeout(shotsClear, shotsDone + 700);
    setTimeout(function () { l1.textContent = words.join(' '); }, 1800);

    // Section reveals: only what is below the fold starts hidden.
    var groups = $$('.sec__head, .cell, .disc article, .princ__l, .tenets li, .tl__e, .more, .log__row, .orbit, .stack, .contact__in > :not(.sr-only)');
    var below = groups.filter(function (el) { return el.getBoundingClientRect().top > innerHeight * .92; });
    utils.set(below, { opacity: 0, y: 28 });
    var queue = [], qTimer = 0;
    var flush = function () {
      qTimer = 0;
      var batch = queue.splice(0);
      animate(batch, { opacity: 1, y: 0, duration: 720, ease: 'outExpo', delay: stagger(70) });
      batch.forEach(function (el) {
        if (el.classList.contains('cell--warden')) animate($('.ms__bar i', el), { scaleX: [0, 1], duration: 900, ease: 'outExpo', delay: 400 });
        if (el.classList.contains('log__row')) animate($('.log__node', el), { scale: [.6, 1], duration: 280, ease: 'outBack', delay: 200 });
      });
    };
    var rio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { queue.push(e.target); rio.unobserve(e.target); } });
      if (queue.length && !qTimer) qTimer = requestAnimationFrame(flush);
    }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
    below.forEach(function (el) { rio.observe(el); });
  } catch (err) {
    // Never leave content hidden.
    $('[style*="opacity"]').forEach(function (el) { el.style.opacity = ''; el.style.transform = ''; });
  }
})();
