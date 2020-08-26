const burger = document.querySelector('.burger-menu');
const nav = document.querySelector('.navbar-list');

burger.addEventListener('click', navSlide);

function navSlide() {
  nav.classList.toggle('navbar-list-active');

  burger.classList.toggle('toggle');
}
