function loadPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.map-container, .hidden-page, #home-layout').forEach(el => {
    el.style.display = 'none';
  });


 // Show the selected page
 if (pageId === 'home') {
  document.getElementById('home-layout').style.display = 'flex';
} else {
  document.getElementById(`${pageId}-page`).style.display = 'block';
}
}