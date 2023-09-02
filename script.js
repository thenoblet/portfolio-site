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
