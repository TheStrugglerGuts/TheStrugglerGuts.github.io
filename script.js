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
  "CLuster A/Slide1.JPG",
  "CLuster A/Slide2.JPG",
  "CLuster A/Slide3.JPG",
  "CLuster A/Slide4.JPG",
  "CLuster A/Slide5.JPG",
  "CLuster A/Slide6.JPG",
  "CLuster A/Slide7.JPG",
  "CLuster A/Slide8.JPG",
  "CLuster A/Slide9.JPG",
  "CLuster A/Slide10.JPG",
  "CLuster A/Slide11.JPG",
  "CLuster A/Slide12.JPG",
  "CLuster A/Slide13.JPG",
  "CLuster A/Slide14.JPG",
  "CLuster A/Slide15.JPG",
  "CLuster A/Slide16.JPG",
  "CLuster A/Slide17.JPG",
  "CLuster A/Slide18.JPG",
  "CLuster A/Slide19.JPG"
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
  "CLuster b/Slide1.JPG",
  "CLuster b/Slide2.JPG",
  "CLuster b/Slide3.JPG",
  "CLuster b/Slide4.JPG",
  "CLuster b/Slide5.JPG",
  "CLuster b/Slide6.JPG",
  "CLuster b/Slide7.JPG",
  "CLuster b/Slide8.JPG",
  "CLuster b/Slide9.JPG",
  "CLuster b/Slide10.JPG",
  "CLuster b/Slide11.JPG",
  "CLuster b/Slide12.JPG",
  "CLuster b/Slide13.JPG",
  "CLuster b/Slide14.JPG",
  "CLuster b/Slide15.JPG",
  "CLuster b/Slide16.JPG",
  "CLuster b/Slide17.JPG",
  "CLuster b/Slide18.JPG",
  "CLuster b/Slide19.JPG"

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