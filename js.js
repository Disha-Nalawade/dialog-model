function openModel() {
  const overlayElement = document.getElementById("overlay");
  overlayElement.style.display = "flex";
}
function closeModel() {
  const overlayElement = document.getElementById("overlay");

  overlayElement.style.display = "none";
}
function confirmModel() {
  const overlayElement = document.getElementById("overlay");
  overlayElement.style.display = "flex";

  prompt("Enter your name");
}
