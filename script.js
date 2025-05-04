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

function showClusterASection(section) {
  const video = document.getElementById('clusterA-video-section');
  const gallery = document.getElementById('clusterA-gallery-section');

  if (section === 'video') {
    video.style.display = 'block';
    gallery.style.display = 'none';
  } else if (section === 'gallery') {
    video.style.display = 'none';
    gallery.style.display = 'block';
  }
}

let currentClusterAImageIndex = 0;

const clusterAImages = [
  "HEAT MAPS TADECO/CLUSTER A/First.png",
  "HEAT MAPS TADECO/CLUSTER A/Second.png",
  "HEAT MAPS TADECO/CLUSTER A/Third.png",
  "HEAT MAPS TADECO/CLUSTER A/Fourth.png",
  "HEAT MAPS TADECO/CLUSTER A/Fifth.png",
  "HEAT MAPS TADECO/CLUSTER A/Sixth.png",
  "HEAT MAPS TADECO/CLUSTER A/Seventh.png",
  "HEAT MAPS TADECO/CLUSTER A/Eighth.png",
  "HEAT MAPS TADECO/CLUSTER A/Nineth.png",
  "HEAT MAPS TADECO/CLUSTER A/Tenth.png",
  "HEAT MAPS TADECO/CLUSTER A/Eleventh.png",
  "HEAT MAPS TADECO/CLUSTER A/Twelveth.png",
  "HEAT MAPS TADECO/CLUSTER A/Thirteenth.png",
  "HEAT MAPS TADECO/CLUSTER A/Fourtheenth.png",
  "HEAT MAPS TADECO/CLUSTER A/Fiftheenth.png",
  "HEAT MAPS TADECO/CLUSTER A/Sixteenth.png",
  "HEAT MAPS TADECO/CLUSTER A/Seventeenth.png",
  "HEAT MAPS TADECO/CLUSTER A/Eightheenth.png",
  "HEAT MAPS TADECO/CLUSTER A/Ninetheenth.png"

];

const clusterALabels = [
  "Cluster A 05/04/25 4:12PM",
  "Cluster A 05/04/25 8:00PM",
  "Cluster A 06/04/25 12:00AM",
  "Cluster A 06/04/25 4:00AM",
  "Cluster A 06/04/25 8:00AM",
  "Cluster A 06/04/25 12:00PM",
  "Cluster A 06/04/25 4:00PM",
  "Cluster A 06/04/25 8:00PM",
  "Cluster A 07/04/25 12:00AM",
  "Cluster A 07/04/25 4:00AM",
  "Cluster A 07/04/25 8:00AM",
  "Cluster A 07/04/25 12:00PM",
  "Cluster A 07/04/25 4:00PM",
  "Cluster A 07/04/25 8:00PM",
  "Cluster A 08/04/25 12:00AM",
  "Cluster A 08/04/25 4:00AM",
  "Cluster A 08/04/25 8:00AM",
  "Cluster A 08/04/25 12:00PM",
  "Cluster A 08/04/25 4:00PM",
];

function showClusterASection(section) {
  const video = document.getElementById('clusterA-video-section');
  const gallery = document.getElementById('clusterA-gallery-section');

  if (section === 'video') {
    video.style.display = 'block';
    gallery.style.display = 'none';
  } else if (section === 'gallery') {
    video.style.display = 'none';
    gallery.style.display = 'block';
    updateClusterAImage(); // Ensure correct image shows when switching
  }
}



function updateClusterAImage() {
  const img = document.getElementById('clusterA-image');
  const label = document.getElementById('clusterA-label');
  img.src = clusterAImages[currentClusterAImageIndex];
  label.textContent = clusterALabels[currentClusterAImageIndex];
}

function nextClusterAImage() {
  currentClusterAImageIndex = (currentClusterAImageIndex + 1) % clusterAImages.length;
  updateClusterAImage();
}

function prevClusterAImage() {
  currentClusterAImageIndex = (currentClusterAImageIndex - 1 + clusterAImages.length) % clusterAImages.length;
  updateClusterAImage();
}

let currentClusterBImageIndex = 0;

const clusterBImages = [
  "HEAT MAPS TADECO/CLUSTER B/First.png",
  "HEAT MAPS TADECO/CLUSTER B/Second.png",
  "HEAT MAPS TADECO/CLUSTER B/Third.png",
  "HEAT MAPS TADECO/CLUSTER B/Fourth.png",
  "HEAT MAPS TADECO/CLUSTER B/Fifth.png",
  "HEAT MAPS TADECO/CLUSTER B/Sixth.png",
  "HEAT MAPS TADECO/CLUSTER B/seventh.png",
  "HEAT MAPS TADECO/CLUSTER B/Eighth.png",
  "HEAT MAPS TADECO/CLUSTER B/Nineth.png",
  "HEAT MAPS TADECO/CLUSTER B/Tenth.png",
  "HEAT MAPS TADECO/CLUSTER B/eleventh.png",
  "HEAT MAPS TADECO/CLUSTER B/Twelveth.png",
  "HEAT MAPS TADECO/CLUSTER B/Thirteen.png",
  "HEAT MAPS TADECO/CLUSTER B/Fourtheen.png",
  "HEAT MAPS TADECO/CLUSTER B/Fiftheen.png",
  "HEAT MAPS TADECO/CLUSTER B/Sixteenth.png",
  "HEAT MAPS TADECO/CLUSTER B/Seventheen.png",
  "HEAT MAPS TADECO/CLUSTER B/eighteenth.png",
  "HEAT MAPS TADECO/CLUSTER B/Ninetheen.png"

];

const clusterBLabels = [
  "Cluster B 05/04/25 4:12PM",
  "Cluster B 05/04/25 8:00PM",
  "Cluster B 06/04/25 12:00AM",
  "Cluster B 06/04/25 4:00AM",
  "Cluster B 06/04/25 8:00AM",
  "Cluster B 06/04/25 12:00PM",
  "Cluster B 06/04/25 4:00PM",
  "Cluster B 06/04/25 8:00PM",
  "Cluster B 07/04/25 12:00AM",
  "Cluster B 07/04/25 4:00AM",
  "Cluster B 07/04/25 8:00AM",
  "Cluster B 07/04/25 12:00PM",
  "Cluster B 07/04/25 4:00PM",
  "Cluster B 07/04/25 8:00PM",
  "Cluster B 08/04/25 12:00AM",
  "Cluster B 08/04/25 4:00AM",
  "Cluster B 08/04/25 8:00AM",
  "Cluster B 08/04/25 12:00PM",
  "Cluster B 08/04/25 4:00PM",
];

function showClusterBSection(section) {
  const video = document.getElementById('clusterB-video-section');
  const gallery = document.getElementById('clusterB-gallery-section');

  if (section === 'video') {
    video.style.display = 'block';
    gallery.style.display = 'none';
  } else if (section === 'gallery') {
    video.style.display = 'none';
    gallery.style.display = 'block';
    updateClusterBImage(); // Ensure correct image shows when switching
  }
}



function updateClusterBImage() {
  const img = document.getElementById('clusterB-image');
  const label = document.getElementById('clusterB-label');
  img.src = clusterBImages[currentClusterBImageIndex];
  label.textContent = clusterBLabels[currentClusterBImageIndex];
}

function nextClusterBImage() {
  currentClusterBImageIndex = (currentClusterBImageIndex + 1) % clusterBImages.length;
  updateClusterBImage();
}

function prevClusterBImage() {
  currentClusterBImageIndex = (currentClusterBImageIndex - 1 + clusterBImages.length) % clusterBImages.length;
  updateClusterBImage();
}