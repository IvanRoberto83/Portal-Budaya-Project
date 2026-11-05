(function (Drupal, once) {
  Drupal.behaviors.portalBudaya = {
    attach(context) {
      // Mobile navigation
      once("portal-menu", "[data-menu-toggle]", context).forEach((button) => {
        button.addEventListener("click", () => {
          const navigation = document.querySelector("[data-main-navigation]");
          const isOpen = navigation.classList.toggle("is-open");

          button.setAttribute("aria-expanded", String(isOpen));
          button.textContent = isOpen ? "×" : "☰";
        });
      });

      // Light / Dark theme
      once("portal-theme", "[data-theme-toggle]", context).forEach((button) => {
        const root = document.documentElement;

        const savedTheme = localStorage.getItem("portal-theme");

        if (savedTheme) {
          root.dataset.theme = savedTheme;
        }

        button.addEventListener("click", () => {
          const currentTheme = root.dataset.theme || "light";
          const nextTheme = currentTheme === "dark" ? "light" : "dark";

          root.dataset.theme = nextTheme;
          localStorage.setItem("portal-theme", nextTheme);

          button.textContent = nextTheme === "dark" ? "☀" : "☾";
        });

        button.textContent = root.dataset.theme === "dark" ? "☀" : "☾";
      });
    },
  };
})(Drupal, once);
