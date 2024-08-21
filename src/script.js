// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// Navbar Fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector('#toTop');

  if (window.scrollY > fixedNav) {
    header.classList.add('navbar-fixed');
    toTop.classList.remove('hidden');
    toTop.classList.add('block');
  } else {
    header.classList.remove('navbar-fixed');
    toTop.classList.remove('block');
    toTop.classList.add('hidden');
  };
};

// Klik diluar hamburger
window.addEventListener('click', e => {
  if(e.target != navMenu && e.target != hamburger) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', () => {
 if (darkToggle.checked) {
  html.classList.add('dark');
  localStorage.theme = 'dark';
 } else {
  html.classList.remove('dark');
  localStorage.theme = 'light';
 }
});

// Pindahkan toggle sesuai mode 
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}