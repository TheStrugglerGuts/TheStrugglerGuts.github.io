document.querySelectorAll(".map-outline").forEach(area => {
  area.addEventListener("click", e => {
    console.log("Clicked region:", area.href);
  });
});
