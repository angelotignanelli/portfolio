document.addEventListener('DOMContentLoaded', function () {
  var sidenav = document.getElementById('cs-sidenav');
  if (!sidenav) return;

  var lang = document.documentElement.lang || 'en';
  var sections = document.querySelectorAll('.cs-sections .cs-section[id]');
  if (!sections.length) return;

  var nav = document.createElement('nav');
  sidenav.appendChild(nav);

  var links = [];
  sections.forEach(function (sec) {
    var span = sec.querySelector('h2 span[data-lang="' + lang + '"]') ||
               sec.querySelector('h2 span') ||
               sec.querySelector('h2');
    var label = span ? span.textContent.trim() : sec.id;

    var a = document.createElement('a');
    a.href = '#' + sec.id;
    a.className = 'cs-nav-link';

    /* section number badge */
    var numEl = sec.querySelector('.cs-head .ey .n');
    if (numEl) {
      var badge = document.createElement('span');
      badge.className = 'nav-num';
      badge.textContent = numEl.textContent.trim();
      a.appendChild(badge);
    }

    /* bilingual: two spans so lang-toggle CSS works */
    var enSpan = sec.querySelector('h2 span[data-lang="en"]');
    var esSpan = sec.querySelector('h2 span[data-lang="es"]');
    if (enSpan && esSpan) {
      var sEn = document.createElement('span');
      sEn.setAttribute('data-lang', 'en');
      sEn.textContent = enSpan.textContent.trim();
      var sEs = document.createElement('span');
      sEs.setAttribute('data-lang', 'es');
      sEs.textContent = esSpan.textContent.trim();
      a.appendChild(sEn);
      a.appendChild(sEs);
    } else {
      a.textContent = label;
    }

    nav.appendChild(a);
    links.push({ el: sec, a: a });
  });

  /* smooth scroll */
  nav.addEventListener('click', function (e) {
    var anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    e.preventDefault();
    var target = document.getElementById(anchor.getAttribute('href').slice(1));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  /* active highlight via IntersectionObserver */
  var active = null;
  function setActive(a) {
    if (active === a) return;
    if (active) active.classList.remove('active');
    active = a;
    if (active) active.classList.add('active');
  }

  if (!links.length) return;
  setActive(links[0].a);

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var found = links.find(function (l) { return l.el === entry.target; });
        if (found) setActive(found.a);
      }
    });
  }, { rootMargin: '-10% 0px -60% 0px', threshold: 0 });

  links.forEach(function (l) { observer.observe(l.el); });

  /* lang toggle: update active lang on html[lang] change */
  new MutationObserver(function () {}).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
});
