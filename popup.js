const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close-btn');

  // Popup nach 4 Sekunden anzeigen
  setTimeout(() => {
    popup.style.display = 'flex';
  }, 4000);

  // Funktion zum Schließen des Popups
  function closeBtn() {
    popup.style.display = 'none';
  }

  // Klick-Event
  closeButton.addEventListener('click', closeBtn);
