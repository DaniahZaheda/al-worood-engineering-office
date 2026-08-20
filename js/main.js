// ==================== Elements ====================

const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


// ==================== Header on Scroll ====================

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ==================== Mobile Menu ====================

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    if (isOpen) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// ==================== Close Mobile Menu ====================

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});