const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
// header scroll dark css
document.addEventListener('scroll', (event) => {
  if(window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
})

const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;
// home scroll transparent css
document.addEventListener('scroll', (event) => {
  if(homeHeight > window.scrollY) {
    home.style.opacity = (homeHeight - window.scrollY)/homeHeight;
  }
})