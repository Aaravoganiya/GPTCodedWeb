// Select the menu button and menu content
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Toggle the menu visibility when the menu button is clicked
menuToggle.addEventListener('click', function() {
    menu.classList.toggle('show');
    // Change the appearance of the menu button (hamburger icon) when clicked
    menuToggle.classList.toggle('open');
});

// Add functionality to close the menu if a menu item is clicked
const menuItems = document.querySelectorAll('#menu a');
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        menu.classList.remove('show');
        menuToggle.classList.remove('open');
    });
});
