// Footer dynamic year + last modified
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  if (nav.style.display === 'flex') {
    nav.style.display = 'none';
    hamburger.textContent = '☰'; // hamburger icon
  } else {
    nav.style.display = 'flex';
    hamburger.textContent = '✖'; // close icon
  }
});
