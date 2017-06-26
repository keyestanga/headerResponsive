'use strict';
var toggleMenu = function () {
  var menu = document.getElementById('js-menu-small');
  if (menu.classList.contains('hide')) {
    menu.classList.remove('hide');
  } else {
    menu.classList.add('hide');
  }
};

document.getElementById('js-button-burguer').addEventListener('click', toggleMenu);
