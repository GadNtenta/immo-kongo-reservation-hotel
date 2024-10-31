function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  const menuIcon = document.getElementById("menuIcon");

  // Basculer la classe active sur le menu pour afficher/masquer
  navMenu.classList.toggle("active");

  // Changer l'icône du menu en fonction de l'état du menu
  if (navMenu.classList.contains("active")) {
    menuIcon.src = "https://raw.githubusercontent.com/GadNtenta/immo-kongo-reservation-hotel/refs/heads/main/Assets/menu-humberger-open1_1.webp"; // Icône ouverte
  } else {
    menuIcon.src = "https://raw.githubusercontent.com/GadNtenta/immo-kongo-reservation-hotel/refs/heads/main/Assets/menu-humberger1_1.webp"; // Icône fermée
  }
}
