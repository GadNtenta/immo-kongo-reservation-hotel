document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".header__nav-link");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    // Compare le chemin de la page actuelle avec celui du lien
    if (linkPath === currentPath || currentPath.endsWith(linkPath)) {
      link.classList.add("active");
    }
  });
});
