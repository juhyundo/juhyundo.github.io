/* ============================================================
   Juhyun Do — site interactions (vanilla, no dependencies)
   ============================================================ */
(function () {
  'use strict';

  /* ---- Typewriter tagline ---------------------------------- */
  var phrases = [
    'Avid learner & critical thinker.',
    'Chasing clock cycles & clean abstractions.',
    'From transistors to transformers.',
    'Building hardware that thinks.'
  ];
  var typedEl = document.getElementById('typed');
  if (typedEl && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var p = 0, c = 0, deleting = false;
    (function tick() {
      var word = phrases[p];
      typedEl.textContent = word.substring(0, c);
      if (!deleting && c < word.length) { c++; setTimeout(tick, 55); }
      else if (!deleting && c === word.length) { deleting = true; setTimeout(tick, 2200); }
      else if (deleting && c > 0) { c--; setTimeout(tick, 28); }
      else { deleting = false; p = (p + 1) % phrases.length; setTimeout(tick, 400); }
    })();
  } else if (typedEl) {
    typedEl.textContent = phrases[0];
  }

  /* ---- Nav background on scroll ---------------------------- */
  var nav = document.querySelector('.nav');
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Scroll reveal --------------------------------------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e, i) {
        if (e.isIntersecting) {
          e.target.style.transitionDelay = (Math.min(i, 4) * 70) + 'ms';
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---- Modals ---------------------------------------------- */
  var lastFocused = null;
  function openModal(id) {
    var modal = document.getElementById(id);
    if (!modal) return;
    lastFocused = document.activeElement;
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    var closeBtn = modal.querySelector('.modal__close');
    if (closeBtn) closeBtn.focus();
  }
  function closeModal(modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll('[data-modal]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      openModal(trigger.getAttribute('data-modal'));
    });
  });

  document.querySelectorAll('.modal').forEach(function (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal(modal);
    });
    var x = modal.querySelector('.modal__close');
    if (x) x.addEventListener('click', function () { closeModal(modal); });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var open = document.querySelector('.modal.is-open');
      if (open) closeModal(open);
    }
  });

  /* ---- Galleries (self-contained carousel) ----------------- */
  document.querySelectorAll('[data-gallery]').forEach(function (gallery) {
    var imgs = Array.prototype.slice.call(gallery.querySelectorAll('img'));
    var dotsWrap = gallery.querySelector('.gallery__dots');
    var idx = 0;

    imgs.forEach(function (_, i) {
      var d = document.createElement('button');
      d.type = 'button';
      d.setAttribute('aria-label', 'Slide ' + (i + 1));
      if (i === 0) d.classList.add('is-active');
      d.addEventListener('click', function () { go(i); });
      dotsWrap.appendChild(d);
    });
    var dots = Array.prototype.slice.call(dotsWrap.children);

    function go(n) {
      imgs[idx].classList.remove('is-active');
      dots[idx].classList.remove('is-active');
      idx = (n + imgs.length) % imgs.length;
      imgs[idx].classList.add('is-active');
      dots[idx].classList.add('is-active');
    }
    gallery.querySelector('.gallery__prev').addEventListener('click', function () { go(idx - 1); });
    gallery.querySelector('.gallery__next').addEventListener('click', function () { go(idx + 1); });
  });
})();
