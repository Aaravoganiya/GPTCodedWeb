// Toggle the navigation menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");

  // Toggle the animation of the hamburger icon
  const bars = document.querySelectorAll(".bar");
  bars.forEach(bar => bar.classList.toggle("animated"));
}

// Contact Form Submission (just a mock for now)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Your message has been successfully sent!");
});
