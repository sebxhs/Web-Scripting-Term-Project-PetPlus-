
// Navigation Menu
  const menuclose = document.getElementById('close-menu-toggle');
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const slidingMenu = document.getElementById('mobile-sliding-menu');
  const menuOverlay = document.getElementById('menu-overlay');


menuToggle.addEventListener('click', (e) => {
  e.preventDefault();
  slidingMenu.classList.add('open'); 
  menuOverlay.classList.add('active'); 
});


menuclose.addEventListener('click', (e) => {
  e.preventDefault();
  slidingMenu.classList.remove('open'); 
  menuOverlay.classList.remove('active'); 
});


menuOverlay.addEventListener('click', () => {
  slidingMenu.classList.remove('open'); 
  menuOverlay.classList.remove('active'); 
});

// Pop-up Plugin

$(document).ready(function () {

  $('#openPopup').click(function () {
      $('#popup').fadeIn();
      $('#overlay').fadeIn(); 
  });


  $('#closePopup').click(function (e) {
      e.preventDefault();
      $('#popup').fadeOut();
      $('#overlay').fadeOut();
  });

  $('#overlay').click(function () {
      $('#popup').fadeOut();
      $('#overlay').fadeOut();
  });
});

