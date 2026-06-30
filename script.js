function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
}

function showMessage() {
  const message = document.getElementById("message");
  message.textContent = "Thank you! You can contact me at your-email@example.com";
}
