(function () {
  document.documentElement.className += ' js';

  var burger = document.querySelector('.hamburger');
  var drawer = document.getElementById('mob-drawer');
  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = drawer.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var drops = document.querySelectorAll('.has-drop');
  Array.prototype.forEach.call(drops, function (d) {
    var b = d.querySelector('.navbtn');
    if (!b) return;
    b.addEventListener('click', function (e) {
      e.stopPropagation();
      var o = d.classList.toggle('open');
      b.setAttribute('aria-expanded', o ? 'true' : 'false');
    });
  });
  document.addEventListener('click', function () {
    Array.prototype.forEach.call(drops, function (d) {
      d.classList.remove('open');
      var b = d.querySelector('.navbtn');
      if (b) b.setAttribute('aria-expanded', 'false');
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      Array.prototype.forEach.call(drops, function (d) { d.classList.remove('open'); });
      if (drawer && drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        if (burger) { burger.setAttribute('aria-expanded', 'false'); burger.focus(); }
      }
    }
  });

  var qs = document.querySelectorAll('.faq-q');
  Array.prototype.forEach.call(qs, function (q) {
    var pa = document.getElementById(q.getAttribute('aria-controls'));
    if (pa && q.getAttribute('aria-expanded') !== 'true') pa.setAttribute('hidden', '');
    q.addEventListener('click', function () {
      var a = document.getElementById(q.getAttribute('aria-controls'));
      var open = q.getAttribute('aria-expanded') === 'true';
      q.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (!a) return;
      if (open) { a.style.maxHeight = '0px'; a.setAttribute('hidden', ''); }
      else { a.removeAttribute('hidden'); a.style.maxHeight = a.scrollHeight + 'px'; }
    });
  });
})();
