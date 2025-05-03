function loadPage(pageId) {
  // Hide everything first
  document.querySelectorAll('.hidden-page, #home-layout, #home-page').forEach(el => {
    el.style.display = 'none';
  });

  // Show correct content
  if (pageId === 'home') {
    document.getElementById('home-layout').style.display = 'flex';  // layout includes the image + list
    document.getElementById('home-page').style.display = 'block';   // make sure map/image is also shown
  } else {
    const page = document.getElementById(`${pageId}-page`);
    if (page) page.style.display = 'block';
  }
}