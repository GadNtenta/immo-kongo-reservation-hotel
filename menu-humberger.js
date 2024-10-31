function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  const menuIcon = document.getElementById("menuIcon");

  // Basculer la classe active sur le menu pour afficher/masquer
  navMenu.classList.toggle("active");

  // Changer l'icône du menu en fonction de l'état du menu
  if (navMenu.classList.contains("active")) {
    menuIcon.src = "Assets/menu-humberger-open1.png"; // Icône ouverte
  } else {
    menuIcon.src = "Assets/menu-humberger1.png"; // Icône fermée
  }
}
