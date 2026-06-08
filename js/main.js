const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const MOBILE_BREAKPOINT = 768;

function setNavOpen(open) {
  if (!toggle || !links) return;
  links.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('nav-open', open);
}

function closeNav() {
  setNavOpen(false);
}

if (toggle && links) {
  toggle.addEventListener('click', () => {
    setNavOpen(!links.classList.contains('open'));
  });

  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > MOBILE_BREAKPOINT) closeNav();
  });
}
