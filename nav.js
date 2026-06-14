(function () {
  var ham = document.querySelector('.ham');
  var menu = document.querySelector('.nav .right');
  if (!ham || !menu) return;

  ham.addEventListener('click', function () {
    var isOpen = menu.classList.contains('nav-open');
    menu.classList.toggle('nav-open');
    ham.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  // Close on link click
  menu.querySelectorAll('.links a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('nav-open');
      ham.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('nav-open')) {
      menu.classList.remove('nav-open');
      ham.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();
