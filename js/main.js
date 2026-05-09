document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.getElementById('hamburger');
  var menuList = document.getElementById('menu-list');

  if (hamburger && menuList) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('activo');
      menuList.classList.toggle('activo');
    });
  }
});