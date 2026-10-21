// Fluid field: slow, low-contrast warm smoke from a domain-warped fBm (q → r → f).
// One small WebGL1 canvas behind the hero and one behind the contact block, half resolution,
// drawn only while on screen, one still frame for reduced motion. Without WebGL the CSS
// gradient on .fluid-bg stays as a static fallback.
(function () {
  'use strict';
  var canvases = document.querySelectorAll('canvas[data-fluid]');
  if (!canvases.length) return;
  var root = document.documentElement;
  var sakin = matchMedia('(prefers-reduced-motion: reduce)').matches;

  var VS = 'attribute vec2 p;varying vec2 v;void main(){v=p*.5+.5;gl_Position=vec4(p,0.,1.);}';
  var FS = [
    'precision highp float;varying vec2 v;uniform float t;uniform vec2 r;uniform vec3 bg;uniform vec3 bg2;uniform vec3 ac;uniform float amt;uniform vec2 off;',
    'vec2 h(vec2 p){p=vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3)));return -1.+2.*fract(sin(p)*43758.5453);}',
    'float n(vec2 p){const float K1=.366025404,K2=.211324865;vec2 i=floor(p+(p.x+p.y)*K1);vec2 a=p-i+(i.x+i.y)*K2;',
    'vec2 o=a.x>a.y?vec2(1.,0.):vec2(0.,1.);vec2 b=a-o+K2;vec2 c=a-1.+2.*K2;',
    'vec3 q=max(.5-vec3(dot(a,a),dot(b,b),dot(c,c)),0.);vec3 m=q*q*q*q*vec3(dot(a,h(i)),dot(b,h(i+o)),dot(c,h(i+1.)));return dot(m,vec3(70.));}',
    'float f(vec2 p){float s=0.,a=.5;for(int i=0;i<3;i++){s+=a*n(p);p=p*2.03+vec2(1.7,9.2);a*=.5;}return s*.5+.5;}',
    'float d(vec2 c){return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453);}',
    'void main(){',
    ' float asp=r.x/r.y; vec2 st=v*vec2(asp,1.)*.62+off;',
    ' vec2 q=vec2(f(st+.03*t),f(st+vec2(5.2,1.3)-.02*t));',
    ' vec2 w=vec2(f(st+2.4*q+vec2(1.7,9.2)+.012*t),f(st+2.4*q+vec2(8.3,2.8)-.01*t));',
    ' float k=f(st+2.6*w);',
    ' vec3 col=mix(bg,mix(bg2,ac,clamp(k*k*1.6,0.,1.)),smoothstep(.2,.9,k)*amt);',
    ' col=mix(col,bg2,clamp(length(q)*.18,0.,.25)*amt);',
    ' col+=(d(gl_FragCoord.xy)-.5)/255.;',
    ' gl_FragColor=vec4(col,1.);}'
  ].join('\n');

  var hex = function (h) { h = (h || '').trim(); return [parseInt(h.substr(1, 2), 16) / 255, parseInt(h.substr(3, 2), 16) / 255, parseInt(h.substr(5, 2), 16) / 255]; };
  var mix = function (a, b, k) { return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k]; };

  function alan(cv, ofs) {
    var gl = cv.getContext('webgl', { antialias: false, alpha: false, depth: false, preserveDrawingBuffer: true });
    if (!gl) { cv.remove(); return null; }
    function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; }
    var pr = gl.createProgram();
    gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS));
    gl.linkProgram(pr);
    if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { cv.remove(); return null; }
    gl.useProgram(pr);
    var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    var loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    var U = {};
    ['t', 'r', 'bg', 'bg2', 'ac', 'amt', 'off'].forEach(function (k) { U[k] = gl.getUniformLocation(pr, k); });
    gl.uniform2f(U.off, ofs[0], ofs[1]);

    var host = cv.parentNode, gorunur = false, raf = 0, t0 = performance.now();
    function renk() {
      var cs = getComputedStyle(root), light = root.getAttribute('data-theme') === 'light';
      var bg = hex(cs.getPropertyValue('--bg') || (light ? '#F3F0EA' : '#0C0B0A'));
      var acc = hex(cs.getPropertyValue('--accent') || (light ? '#8C7656' : '#C2AD8A'));
      gl.uniform3fv(U.bg, bg);
      gl.uniform3fv(U.bg2, light ? mix(bg, [0.86, 0.83, 0.77], .55) : mix(bg, [0.13, 0.12, 0.105], .9));
      gl.uniform3fv(U.ac, mix(bg, acc, light ? .34 : .22));
      gl.uniform1f(U.amt, light ? .75 : .85);
    }
    function boyut() {
      var w = host.clientWidth || innerWidth, h = host.clientHeight || innerHeight, d = Math.min(window.devicePixelRatio || 1, 1.5) * 0.5;
      cv.width = Math.max(1, Math.round(w * d)); cv.height = Math.max(1, Math.round(h * d));
      gl.viewport(0, 0, cv.width, cv.height); gl.uniform2f(U.r, cv.width, cv.height);
    }
    function ciz(now) { gl.uniform1f(U.t, ((now - t0) / 1000 + 20) * 0.9); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); }
    function dongu(now) { ciz(now); raf = gorunur && !document.hidden ? requestAnimationFrame(dongu) : 0; }
    function baslat() { if (sakin) { ciz(performance.now()); return; } if (!raf && gorunur && !document.hidden) raf = requestAnimationFrame(dongu); }

    renk(); boyut(); ciz(performance.now());
    requestAnimationFrame(function () { cv.classList.add('is-on'); });
    if ('ResizeObserver' in window) new ResizeObserver(function () { boyut(); ciz(performance.now()); }).observe(host);
    else addEventListener('resize', function () { boyut(); ciz(performance.now()); });
    document.addEventListener('tema', function () { renk(); ciz(performance.now()); });
    document.addEventListener('visibilitychange', function () { if (!document.hidden) baslat(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) { gorunur = es[0].isIntersecting; if (gorunur) baslat(); }, { threshold: 0 }).observe(host);
    } else { gorunur = true; baslat(); }
    return true;
  }

  var ofsler = { hero: [0, 0], contact: [3.1, 7.4] };
  canvases.forEach(function (cv) {
    var ok = alan(cv, ofsler[cv.getAttribute('data-fluid')] || [0, 0]);
    if (!ok) root.classList.add('no-gl');
  });
})();
