function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu.classList.contains("open")) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    } else {
        menu.classList.add("open");
        icon.classList.add("open");
    }
}

// Add an event listener to close the menu when a list item is clicked
const menuLinks = document.querySelectorAll(".menu-links a");

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.remove("open");
        icon.classList.remove("open");
    });
});

// Close the menu when clicking anywhere outside of it
document.addEventListener("click", (event) => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
        menu.classList.remove("open");
        icon.classList.remove("open");
    }
});
