// ============================================================
// Shared site behavior: mobile nav, hero reticle, scroll reveal,
// contact form validation. No external dependencies.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- mobile nav toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navList.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- hero reticle: coordinate readout on cursor ---------- */
  const hero = document.querySelector('.hero');
  const reticle = document.querySelector('.reticle');
  if (hero && reticle) {
    const tag = reticle.querySelector('.coord-tag');
    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);
      reticle.style.transform = `translate(${x}px, ${y}px)`;
      if (tag) tag.textContent = `X:${String(x).padStart(4,'0')} Y:${String(y).padStart(4,'0')}`;
    });
    hero.addEventListener('mouseleave', () => {
      if (tag) tag.textContent = '';
    });
  }

  /* ---------- scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- contact form (client-side only, no backend wired) ---------- */
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');
  if (form && status) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.querySelector('#name');
      const email = form.querySelector('#email');
      const message = form.querySelector('#message');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        status.textContent = 'Please fill in every field before sending.';
        status.dataset.state = 'error';
        return;
      }
      if (!emailPattern.test(email.value.trim())) {
        status.textContent = 'That email address doesn\'t look right — double check it.';
        status.dataset.state = 'error';
        return;
      }

      // NOTE: No backend is connected yet. Wire this up to your form
      // handler of choice (Formspree, Netlify Forms, a serverless function, etc.)
      status.textContent = 'Message ready to send — connect a form handler to finish setup.';
      status.dataset.state = 'success';
      form.reset();
    });
  }

  /* ---------- current year in footer ---------- */
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

});
