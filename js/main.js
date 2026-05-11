document.addEventListener('DOMContentLoaded', function () {
  // Menú hamburguesa
  var hamburger = document.getElementById('hamburger');
  var menuList = document.getElementById('menu-list');

  if (hamburger && menuList) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('activo');
      menuList.classList.toggle('activo');
    });
  }

  // Rotación automática de testimonios
  var slider = document.getElementById('testimonios-slider');
  if (slider) {
    var testimonios = slider.children;
    var total = testimonios.length;
    var index = 0;

    function nextTestimonio() {
      index = (index + 1) % total;
      testimonios[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start'
      });
    }

    // Cambiar cada 5 segundos
    setInterval(nextTestimonio, 5000);
  }
});