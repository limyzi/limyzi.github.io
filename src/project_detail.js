'use strict';

const projectPartDescLi = document.querySelectorAll('.project__part__desc li');

window.addEventListener('load', () => {
  projectPartDescLi.forEach((li, index) => {
    setTimeout(() => {
      li.classList.add('active');
    }, index*100);
  })
})