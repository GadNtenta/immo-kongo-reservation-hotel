// Récupération des éléments DOM pour les chambres
const stars = document.querySelectorAll(".rooms__star");
const ratingValueDisplay = document.getElementById("rating-value");
const slider = document.querySelector(".rooms__slider");
const leftArrow = document.querySelector(".rooms__arrow--left");
const rightArrow = document.querySelector(".rooms__arrow--right");
const roomsContainer = document.querySelector(".rooms__slider");
const popup = document.getElementById("reservation-popup");
const closePopupBtn = document.getElementById("close-popup");
const confirmReservationBtn = document.getElementById("confirm-reservation");
const cancelReservationBtn = document.getElementById("cancel-reservation");

// Gestion des étoiles de notation
function handleStarRating(stars, displayElement) {
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      const rating = index + 1;
      displayElement.textContent = `Note: ${rating}`;
      stars.forEach((s, i) => s.classList.toggle("selected", i < rating));
    });
  });
}

// Création des cartes de chambres
function generateRoomCards() {
  roomsContainer.innerHTML = ""; // Efface le contenu existant
  chambres.forEach((chambre) => {
    const roomCard = document.createElement("div");
    roomCard.classList.add("rooms__card");

    roomCard.innerHTML = `
      <div class="rooms__image-container">
        <img class="image__card rooms__image" src="${chambre.image}" alt="${
      chambre.nom
    }" />
        <div class="rooms__content">
          <h3 class="rooms__title">${chambre.nom}</h3>
          <div class="rooms__rating">${generateStars(chambre.note)}</div>
          <div class="rooms__rating_value">Note: ${chambre.note}</div>
        </div>
      </div>
      <div class="rooms__description-container">
        <p class="rooms__description">${chambre.description}</p>
        <div class="rooms__button">
          <button class="rooms__reserve-button">Réserver</button>
          <div class="rooms__price">
            <p class="rooms__price-value">${chambre.prix}</p>
            <p class="rooms__price-text">par nuit</p>
          </div>
        </div>
      </div>
    `;

    const starsInCard = roomCard.querySelectorAll(".rooms__star");
    const ratingDisplayInCard = roomCard.querySelector(".rooms__rating_value");

    // Appliquer la gestion de la notation par étoile
    handleStarRating(starsInCard, ratingDisplayInCard);

    const reserveButton = roomCard.querySelector(".rooms__reserve-button");
    reserveButton.addEventListener("click", () =>
      openReservationPopup(chambre.nom)
    );

    roomsContainer.appendChild(roomCard);
  });
}

// Génération des étoiles pour chaque note
function generateStars(note) {
  return Array.from(
    { length: 5 },
    (_, i) =>
      `<img class="rooms__star" src="Assets/icon/Star-${
        i < note ? "yellow" : "gray"
      }.svg" alt="Étoile" data-value="${i + 1}" />`
  ).join("");
}

// Ouverture du pop-up de réservation
function openReservationPopup(chambreNom) {
  popup.setAttribute("data-chambre-nom", chambreNom);
  popup.style.display = "flex";
}

// Fermeture du pop-up de réservation
function closePopup() {
  popup.style.display = "none";
}

// Confirmation de réservation
function confirmReservation() {
  const nom = document.getElementById("nom").value;
  const date = document.getElementById("date").value;
  const jours = document.getElementById("jours").value;
  const chambreNom = popup.getAttribute("data-chambre-nom");

  if (nom && date && jours && chambreNom) {
    const chambre = chambres.find((ch) => ch.nom === chambreNom);
    const message = `**Réservation confirmée !**\n\nCher(e) ${nom},\n\nDétails de votre séjour:\n- Chambre : ${chambreNom}\n- Date : ${date}\n- Durée : ${jours} nuit(s)\n- Prix total : ${jours} nuit(s) à ${chambre.prix}\n\nAppelez **+243 800 000 000** pour confirmer.`;

    const isWhatsAppAvailable = confirm("Envoyer via WhatsApp ?");
    const url = isWhatsAppAvailable
      ? `https://wa.me/qr/S3TAFHLND3UHL1?text=${encodeURIComponent(message)}`
      : `mailto:reservation@immokongo.com?subject=Confirmation de Réservation&body=${encodeURIComponent(
          message
        )}`;

    window.open(url, "_blank");
    closePopup();
  } else {
    alert("Veuillez remplir tous les champs.");
  }
}

// Gestion de la navigation dans le slider
function setupSliderNavigation() {
  let currentPosition = 0;
  const cardWidth = document.querySelector(".rooms__card").offsetWidth;
  const maxScrollLeft = slider.scrollWidth - slider.clientWidth;

  rightArrow.addEventListener("click", () => {
    if (currentPosition < maxScrollLeft) {
      currentPosition += cardWidth;
      slider.scrollTo({ left: currentPosition, behavior: "smooth" });
    }
  });

  leftArrow.addEventListener("click", () => {
    if (currentPosition > 0) {
      currentPosition -= cardWidth;
      slider.scrollTo({ left: currentPosition, behavior: "smooth" });
    }
  });
}

// Récupération des éléments DOM pour les hôtels
const hotelsStars = document.querySelectorAll(".hotels__star");
const hotelRatingValueDisplay = document.getElementById("hotel-rating-value");
const hotelSlider = document.querySelector(".hotels__slider");
const hotelLeftArrow = document.querySelector(".hotels__arrow--left");
const hotelRightArrow = document.querySelector(".hotels__arrow--right");
const hotelsContainer = document.querySelector(".hotels__slider");
const hotelPopup = document.getElementById("hotel-reservation-popup");
const hotelClosePopupBtn = document.getElementById("close-hotel-popup");
const hotelConfirmReservationBtn = document.getElementById(
  "confirm-hotel-reservation"
);
const hotelCancelReservationBtn = document.getElementById(
  "cancel-hotel-reservation"
);

// Gestion des étoiles de notation pour les hôtels
function handleHotelStarRating(stars, displayElement) {
  stars.forEach((star, index) => {
    star.addEventListener("click", () => {
      const rating = index + 1;
      displayElement.textContent = `Note: ${rating}`;
      stars.forEach((s, i) => s.classList.toggle("selected", i < rating));
    });
  });
}

// Création des cartes d'hôtels
function generateHotelCards() {
  hotelsContainer.innerHTML = ""; // Efface le contenu existant
  hotels.forEach((hotel) => {
    const hotelCard = document.createElement("div");
    hotelCard.classList.add("hotels__card");

    hotelCard.innerHTML = `
      <div class="hotels__image-container">
        <img class="image__card hotels__image" src="${hotel.image}" alt="${
      hotel.nom
    }" />
        <div class="hotels__content">
          <h3 class="hotels__title">${hotel.nom}</h3>
          <div class="hotels__rating">${generateHotelStars(hotel.note)}</div>
          <div class="hotels__rating_value">Note: ${hotel.note}</div>
        </div>
      </div>
      <div class="hotels__description-container">
        <p class="hotels__description">${hotel.description}</p>
        <div class="hotels__button">
          <button class="hotels__reserve-button">Voir les chambres</button>
          <div class="hotels__price">
            <p class="hotels__price-text">À partir de</p>
            <p class="hotels__price-value">${hotel.prix}</p>
          </div>
        </div>
      </div>
    `;

    const hotelStarsInCard = hotelCard.querySelectorAll(".hotels__star");
    const hotelRatingDisplayInCard = hotelCard.querySelector(
      ".hotels__rating_value"
    );

    // Appliquer la gestion de la notation par étoile
    handleHotelStarRating(hotelStarsInCard, hotelRatingDisplayInCard);
    const reserveButton = hotelCard.querySelector(".hotels__reserve-button");
    reserveButton.addEventListener("click", () => {
      // Rediriger vers la page des chambres avec le nom de l'hôtel comme paramètre
      window.location.href = `chambres.html?hotel=${encodeURIComponent(
        hotel.nom
      )}`;
    });

    hotelsContainer.appendChild(hotelCard);
  });
}

// Génération des étoiles pour chaque note d'hôtel
function generateHotelStars(note) {
  return Array.from(
    { length: 5 },
    (_, i) =>
      `<img class="hotels__star" src="Assets/icon/Star-${
        i < note ? "yellow" : "gray"
      }.svg" alt="Étoile" data-value="${i + 1}" />`
  ).join("");
}

// Ouverture du pop-up de réservation pour les hôtels
function openHotelReservationPopup(hotelNom) {
  hotelPopup.setAttribute("data-hotel-nom", hotelNom);
  hotelPopup.style.display = "flex";
}

// Fermeture du pop-up de réservation pour les hôtels
function closeHotelPopup() {
  hotelPopup.style.display = "none";
}

// Confirmation de réservation pour les hôtels
function confirmHotelReservation() {
  const nom = document.getElementById("hotel-nom").value;
  const date = document.getElementById("hotel-date").value;
  const nuits = document.getElementById("hotel-nuits").value;
  const hotelNom = hotelPopup.getAttribute("data-hotel-nom");

  if (nom && date && nuits && hotelNom) {
    const message = `**Réservation confirmée !**\n\nCher(e) ${nom},\n\nDétails de votre séjour:\n- Hôtel : ${hotelNom}\n- Date : ${date}\n- Durée : ${nuits} nuit(s)\n\nAppelez **+243 800 000 000** pour confirmer.`;

    const isWhatsAppAvailable = confirm("Envoyer via WhatsApp ?");
    const url = isWhatsAppAvailable
      ? `https://wa.me/qr/S3TAFHLND3UHL1?text=${encodeURIComponent(message)}`
      : `mailto:reservation@immokongo.com?subject=Confirmation de Réservation&body=${encodeURIComponent(
          message
        )}`;

    window.open(url, "_blank");
    closeHotelPopup();
  } else {
    alert("Veuillez remplir tous les champs.");
  }
}

// Gestion de la navigation dans le slider des hôtels
function setupHotelSliderNavigation() {
  let currentPosition = 0;
  const hotelCardWidth = document.querySelector(".hotels__card").offsetWidth;
  const maxHotelScrollLeft = hotelSlider.scrollWidth - hotelSlider.clientWidth;

  hotelRightArrow.addEventListener("click", () => {
    if (currentPosition < maxHotelScrollLeft) {
      currentPosition += hotelCardWidth;
      hotelSlider.scrollTo({ left: currentPosition, behavior: "smooth" });
    }
  });

  hotelLeftArrow.addEventListener("click", () => {
    if (currentPosition > 0) {
      currentPosition -= hotelCardWidth;
      hotelSlider.scrollTo({ left: currentPosition, behavior: "smooth" });
    }
  });
}

// Initialisation
handleStarRating(stars, ratingValueDisplay);
generateRoomCards();
setupSliderNavigation();

handleHotelStarRating(hotelsStars, hotelRatingValueDisplay);
generateHotelCards();
setupHotelSliderNavigation();

// Événements de fermeture de pop-up
closePopupBtn.addEventListener("click", closePopup);
confirmReservationBtn.addEventListener("click", confirmReservation);
cancelReservationBtn.addEventListener("click", closePopup);

hotelClosePopupBtn.addEventListener("click", closeHotelPopup);
hotelConfirmReservationBtn.addEventListener("click", confirmHotelReservation);
hotelCancelReservationBtn.addEventListener("click", closeHotelPopup);
