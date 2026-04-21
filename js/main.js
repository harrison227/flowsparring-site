// ===========================
// Flow Sparring — Site Logic
// ===========================

(function () {
  'use strict';

  // ---- Sticky nav shadow on scroll ----
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Mobile menu toggle ----
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
      const open = document.body.classList.contains('menu-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
      });
    });
  }

  // ---- Intersection-observer scroll reveals ----
  const reveals = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  // ---- Contact form (client-only demo) ----
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const success = form.querySelector('.form-success');
      if (success) {
        success.classList.add('show');
        success.textContent = "Thanks — we'll be in touch within 24 hours.";
      }
      form.reset();
      setTimeout(() => success && success.classList.remove('show'), 6000);
    });
  }

  // ---- Current year in footer ----
  const yr = document.querySelector('[data-year]');
  if (yr) yr.textContent = new Date().getFullYear();

  // ---- Hero parallax (subtle) ----
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg && window.matchMedia('(min-width: 768px)').matches) {
    window.addEventListener('scroll', () => {
      const y = Math.min(window.scrollY, 800);
      heroBg.style.transform = `translateY(${y * 0.25}px)`;
    }, { passive: true });
  }
})();
