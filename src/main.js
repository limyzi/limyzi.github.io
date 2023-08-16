const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
// header scroll dark css
document.addEventListener('scroll', () => {
  if(window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
})

const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
// home scroll transparent css
document.addEventListener('scroll', () => {
  if(homeHeight > window.scrollY) {
    home.style.opacity = (homeHeight - window.scrollY)/homeHeight;
  }
})

const arrowUp = document.querySelector('.arrow-up');
// arrow up show css
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight/2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
})

// Navbar toggle click
const navbarMenu = document.querySelector('.header__menu');
const navbarToggle  = document.querySelector('.header__toggle');
navbarToggle.addEventListener('click', (event) => {
  navbarMenu.classList.toggle('open');
})

// Navbar menu click
navbarMenu.addEventListener('click', () => {
  navbarMenu.classList.remove('open');
})