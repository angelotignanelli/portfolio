/* Movimiento del sitio. Solo actúa si el <head> marcó html.motion
   (el sistema no pide reducir movimiento). Ver motion.css. */
(function () {
  var root = document.documentElement;
  window.__motionReady = true;
  if (!root.classList.contains('motion')) return;

  /* ---------- 1 · Entrada del hero ---------- */
  var hero = document.querySelector('.hero');
  var h1 = hero && hero.querySelector('h1');

  // Envuelve cada palabra en <span class="w"><span>…</span></span>, sin tocar
  // los elementos internos (el resaltado <i class="hl"> sigue siendo uno solo).
  function splitWords(el) {
    Array.prototype.slice.call(el.childNodes).forEach(function (node) {
      if (node.nodeType === 3) {
        var parts = node.textContent.split(/(\s+)/);
        var frag = document.createDocumentFragment();
        parts.forEach(function (p) {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
          var w = document.createElement('span'); w.className = 'w';
          var inner = document.createElement('span'); inner.textContent = p;
          w.appendChild(inner); frag.appendChild(w);
        });
        node.parentNode.replaceChild(frag, node);
      } else if (node.nodeType === 1) {
        splitWords(node);
      }
    });
  }

  function startHero() {
    if (!h1) return;
    h1.querySelectorAll('[data-lang]').forEach(splitWords);
    h1.classList.add('split');
    // Retraso por línea, medido en el idioma visible.
    var tops = [], lines = 0;
    h1.querySelectorAll('.w').forEach(function (w) {
      if (!w.offsetParent) return;
      var t = w.offsetTop, i = tops.indexOf(t);
      if (i === -1) { tops.push(t); i = tops.length - 1; }
      w.style.setProperty('--d', (120 + i * 90) + 'ms');
      lines = Math.max(lines, i + 1);
    });
    var after = 120 + lines * 90 + 250;
    hero.style.setProperty('--after', after + 'ms');
    hero.querySelectorAll('.hl').forEach(function (hl) { hl.style.setProperty('--hd', (after + 150) + 'ms'); });
    void h1.offsetWidth; // fija el estado inicial antes de disparar las transiciones
    h1.classList.add('in'); hero.classList.add('in');
    hero.querySelectorAll('.hl').forEach(function (hl) { hl.classList.add('in'); });
  }

  if (hero) {
    var fontsReady = (document.fonts && document.fonts.ready) || Promise.resolve();
    Promise.race([fontsReady, new Promise(function (r) { setTimeout(r, 900); })]).then(startHero);
  }

  /* ---------- 2 · Al hacer scroll ---------- */
  function countUp(b) {
    var m = b.textContent.match(/^(\d+)(.*)$/);
    if (!m) return;
    var to = parseInt(m[1], 10), suffix = m[2], t0 = null, dur = 1200;
    b.textContent = '0' + suffix;
    function step(t) {
      if (t0 === null) t0 = t;
      var k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      b.textContent = Math.round(to * e) + suffix;
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var targets = [];
  document.querySelectorAll('.shead, .opinion, .clients').forEach(function (el) { targets.push(el); });
  // Portadas en cascada dentro de cada fila.
  document.querySelectorAll('.row1, .row2').forEach(function (row) {
    row.querySelectorAll('.story').forEach(function (s, i) { s.style.setProperty('--sd', (i * 120) + 'ms'); targets.push(s); });
  });
  // Resaltados fuera del hero: se pasan cuando entran en pantalla.
  document.querySelectorAll('.hl').forEach(function (el) { if (!el.closest('.hero')) targets.push(el); });
  document.querySelectorAll('.stats').forEach(function (el) { targets.push(el); });

  if (!('IntersectionObserver' in window)) { root.classList.add('reveal-all'); return; }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      var el = en.target;
      io.unobserve(el);
      if (el.matches('.hl')) { el.style.setProperty('--hd', '250ms'); }
      if (el.matches('.stats')) { el.querySelectorAll('b').forEach(countUp); return; }
      el.classList.add('in');
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
  targets.forEach(function (el) { io.observe(el); });
})();
