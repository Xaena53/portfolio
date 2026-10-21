// Hero background: slow domain-warped noise, plain WebGL (no library).
// Renders at half resolution, pauses off-screen / hidden tab, one still frame for reduced motion.
(function () {
  'use strict';
  var cv = document.getElementById('flow');
  if (!cv) return;
  var gl = cv.getContext('webgl', { antialias: false, alpha: true, premultipliedAlpha: false });
  if (!gl) { cv.remove(); return; }

  var VS = 'attribute vec2 p;varying vec2 v;void main(){v=p*.5+.5;gl_Position=vec4(p,0.,1.);}';
  var FS = [
    'precision mediump float;varying vec2 v;uniform float t;uniform vec2 r;uniform vec3 c1;uniform vec3 c2;',
    'vec2 h(vec2 p){p=vec2(dot(p,vec2(127.1,311.7)),dot(p,vec2(269.5,183.3)));return -1.+2.*fract(sin(p)*43758.5453);}',
    'float n(vec2 p){const float K1=.366025404,K2=.211324865;vec2 i=floor(p+(p.x+p.y)*K1);vec2 a=p-i+(i.x+i.y)*K2;',
    'vec2 o=a.x>a.y?vec2(1.,0.):vec2(0.,1.);vec2 b=a-o+K2;vec2 c=a-1.+2.*K2;',
    'vec3 q=max(.5-vec3(dot(a,a),dot(b,b),dot(c,c)),0.);vec3 m=q*q*q*q*vec3(dot(a,h(i)),dot(b,h(i+o)),dot(c,h(i+1.)));return dot(m,vec3(70.));}',
    'float f(vec2 p){float s=0.,a=.5;for(int i=0;i<3;i++){s+=a*n(p);p*=2.;a*=.5;}return s*.5+.5;}',
    'void main(){vec2 st=v*vec2(r.x/r.y,1.)*1.4;float k=t*.035;',
    'vec2 q=vec2(f(st+vec2(0.,.2*k)),f(st+vec2(1.2,-.3*k)));float x=f(st+q*1.7+vec2(.15*k,0.));',
    'x=smoothstep(.25,.85,x);vec3 col=mix(c1,c2,x);',
    'float edge=smoothstep(0.,.6,v.y);',
    'gl_FragColor=vec4(col,edge*.85);}'
  ].join('');

  function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; }
  var pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, VS)); gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, FS));
  gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) { cv.remove(); return; }
  gl.useProgram(pr);
  var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  var loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  var uT = gl.getUniformLocation(pr, 't'), uR = gl.getUniformLocation(pr, 'r');
  var uC1 = gl.getUniformLocation(pr, 'c1'), uC2 = gl.getUniformLocation(pr, 'c2');

  var hex = function (h) { return [parseInt(h.substr(1, 2), 16) / 255, parseInt(h.substr(3, 2), 16) / 255, parseInt(h.substr(5, 2), 16) / 255]; };
  function renk() {
    var koyu = document.documentElement.getAttribute('data-theme') === 'dark';
    gl.uniform3fv(uC1, hex(koyu ? '#0b0b0d' : '#ececef'));
    gl.uniform3fv(uC2, hex(koyu ? '#1f1c18' : '#dfd8cc'));
  }

  function boyut() {
    var w = cv.clientWidth, h = cv.clientHeight, d = Math.min(window.devicePixelRatio || 1, 1.5) * 0.5;
    cv.width = Math.max(1, Math.round(w * d)); cv.height = Math.max(1, Math.round(h * d));
    gl.viewport(0, 0, cv.width, cv.height); gl.uniform2f(uR, cv.width, cv.height);
  }

  var sakin = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var gorunur = true, t0 = performance.now(), raf = 0;
  function ciz(now) {
    gl.uniform1f(uT, (now - t0) / 1000 + 40);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
  function dongu(now) { ciz(now); raf = gorunur && !document.hidden ? requestAnimationFrame(dongu) : 0; }
  function baslat() { if (sakin) { ciz(performance.now()); return; } if (!raf) raf = requestAnimationFrame(dongu); }

  renk(); boyut(); baslat();
  cv.classList.add('is-on');
  addEventListener('resize', function () { boyut(); if (sakin) ciz(performance.now()); });
  document.addEventListener('tema', function () { renk(); if (sakin) ciz(performance.now()); });
  document.addEventListener('visibilitychange', function () { if (!document.hidden) baslat(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) { gorunur = e[0].isIntersecting; if (gorunur) baslat(); }).observe(cv);
  }
})();
