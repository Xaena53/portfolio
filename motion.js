(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveals: direction and stagger per group
  var groups = [
    ['.sec__title, .sec__sub, .lede, .sub-h', ''],
    ['.tenets li, .rows .row, .stack > div, .log__row, .contact__list dl > div', '', 0.07],
    ['.trio > .tile:first-child, .split--case > div:first-child', 'rv--l'],
    ['.trio > .tile:not(:first-child), .kv', 'rv--r', 0.12],
    ['.sk', 'rv--z', 0.06],
    ['.cols3 article, .loop__row, .case, .chain, .seal, .band__in', '', 0.1]
  ];
  var items = [];
  groups.forEach(function (g) {
    var list = document.querySelectorAll(g[0]);
    list.forEach(function (el, i) {
      el.classList.add('rv');
      if (g[1]) el.classList.add(g[1]);
      if (g[2]) el.style.setProperty('--d', Math.min(i * g[2], 0.5) + 's');
      items.push(el);
    });
  });

  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  }

  // Light parallax, one rAF per frame
  var hero = document.querySelector('.hero');
  var bandQ = document.querySelector('.band__q');
  var root = document.documentElement;
  var ticking = false;
  function frame() {
    ticking = false;
    if (reduce) return;
    var y = window.scrollY;
    if (hero) hero.style.setProperty('--py', (y * 0.25).toFixed(1) + 'px');
    if (bandQ) {
      var r = bandQ.getBoundingClientRect();
      bandQ.style.setProperty('--by', ((r.top - innerHeight / 2) * -0.08).toFixed(1) + 'px');
    }
  }
  addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }, { passive: true });
  frame();

  // Smooth in-page navigation
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      var id = a.getAttribute('href').slice(1);
      var t = id ? document.getElementById(id) : null;
      if (!t) return;
      ev.preventDefault();
      t.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + id);
    });
  });
})();
