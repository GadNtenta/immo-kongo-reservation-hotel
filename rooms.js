// chambres.js

// Récupération du nom de l'hôtel à partir de l'URL
const urlParams = new URLSearchParams(window.location.search);
const hotelName = urlParams.get("hotel");

// Afficher le nom de l'hôtel
document.getElementById("hotel-name").textContent = hotelName;

const hotelDescription = (document.getElementById(
  "hotel-description"
).textContent = hotels.find((hotel) => hotel.nom === hotelName).description);

// Filtrer les chambres de l'hôtel sélectionné
const hotelRooms = chambres.filter((chambre) => chambre.hotel === hotelName);

// Générer les cartes de chambres
function generateRoomCards() {
  const roomsContainer = document.getElementById("rooms-container");
  roomsContainer.innerHTML = ""; // Effacer le contenu existant

  hotelRooms.forEach((chambre) => {
    const roomCard = document.createElement("div");
    roomCard.classList.add("room-card");
    roomCard.innerHTML = `
            <h3>${chambre.nom}</h3>
            <img src="${chambre.image}" alt="${chambre.nom}">
            <p>${chambre.description}</p>
            <p>Prix: ${chambre.prix} $</p>
            <button class="reserve-button">Réserver</button> <!-- Bouton Réserver -->
        `;
    roomsContainer.appendChild(roomCard);
  });
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  generateRoomCards();
});
