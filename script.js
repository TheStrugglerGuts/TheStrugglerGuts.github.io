// Example: you can use this to log clicks on areas
document.querySelectorAll("area").forEach(area => {
  area.addEventListener("click", event => {
    console.log(`Clicked on: ${area.alt}`);
    // You can also add custom behavior here
  });
});
