(function () {
  function apply(l) {
    document.documentElement.lang = l;
    try { localStorage.setItem('lang', l); } catch (e) {}
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('on', b.dataset.l === l);
      b.setAttribute('aria-pressed', b.dataset.l === l ? 'true' : 'false');
    });
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.lang button');
    if (b) { e.preventDefault(); apply(b.dataset.l); }
  });
  apply(document.documentElement.lang || 'en');

  // Nav: transparent at hero top, blurred when scrolled
  var nav = document.querySelector('.nav');
  if (nav) {
    function updateNav() {
      if (window.scrollY > 72) {
        nav.classList.add('nav--scrolled');
      } else {
        nav.classList.remove('nav--scrolled');
      }
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }
})();
