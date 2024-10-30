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
    closePopup(); 
  }

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
