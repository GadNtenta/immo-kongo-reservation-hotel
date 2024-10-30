document.addEventListener("DOMContentLoaded", function () {
  function showPopup() {
    document.getElementById("reservationPopup").style.display = "flex";
  }

  function closePopup() {
    const popup = document.getElementById("reservationPopup");
    if (popup) {
      popup.style.display = "none";
    } else {
      console.error("Popup element not found");
    }
  }

  function launchSearch() {
    closePopup(); // Close the popup after launching the search
    // Add your search logic here
  }

  // Assign these functions to your buttons
  document
    .getElementById("showPopupButton")
    .addEventListener("click", showPopup);
  document
    .getElementById("closePopupButton")
    .addEventListener("click", closePopup);
  document
    .getElementById("launchSearchButton")
    .addEventListener("click", launchSearch);
});
