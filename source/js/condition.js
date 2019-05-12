var navMain = document.querySelector('.main-nav');
var navMenu = document.querySelector('.main-nav__menu');
var headerToggle = document.querySelector('.header');
navMain.classList.remove('main-nav--nojs');
navMenu.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    headerToggle.classList.remove('header--closed');
    headerToggle.classList.add('header--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    headerToggle.classList.add('header--closed');
    headerToggle.classList.remove('header--opened');
  }
});
