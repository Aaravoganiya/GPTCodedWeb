function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
}

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your message has been sent!");
});
