(function (Drupal, once) {
  Drupal.behaviors.portalBudayaMenu = {
    attach: function (context) {
      once('portal-budaya-menu', '.pb-menu-toggle', context).forEach(function (button) {
        button.addEventListener('click', function () {
          var nav = document.getElementById(button.getAttribute('aria-controls'));
          var expanded = button.getAttribute('aria-expanded') === 'true';
          button.setAttribute('aria-expanded', String(!expanded));
          if (nav) {
            nav.classList.toggle('is-open', !expanded);
          }
        });
      });
    }
  };
})(Drupal, once);
