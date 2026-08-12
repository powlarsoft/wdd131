// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
}

// Dynamic copyright year
const yearSpan = document.querySelector('#current-year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}