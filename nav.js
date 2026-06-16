(function () {
  var ham = document.querySelector('.ham');
  var menu = document.querySelector('.nav .right');
  var nav = document.querySelector('.nav');
  if (!ham || !menu) return;

  function openMenu() {
    menu.classList.add('nav-open');
    nav.classList.add('menu-open');
    ham.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('nav-open');
    nav.classList.remove('menu-open');
    ham.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  ham.addEventListener('click', function () {
    menu.classList.contains('nav-open') ? closeMenu() : openMenu();
  });

  // Close on link click
  menu.querySelectorAll('.links a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('nav-open')) closeMenu();
  });
})();
