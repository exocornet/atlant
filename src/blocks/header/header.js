let buttonBurger = document.querySelector('.burger-menu');
let menu = document.querySelector('.header__menu');

buttonBurger.addEventListener('click', function () {
  this.classList.toggle('burger-menu_active');
  menu.classList.toggle('header__menu_mobile');
});
