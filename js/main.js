/* =====================================================
   Al-Worood Engineering Office
   Main JavaScript
===================================================== */


/* ==================== Elements ==================== */

const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


/* =====================================================
   Header on Scroll
===================================================== */

function handleHeaderScroll() {

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", handleHeaderScroll);

handleHeaderScroll();


/* =====================================================
   Mobile Navigation
===================================================== */

function closeMobileMenu() {

    if (!navMenu || !menuToggle) return;

    navMenu.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

    const icon = menuToggle.querySelector("i");

    if (icon) {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

}


function openMobileMenu() {

    if (!navMenu || !menuToggle) return;

    navMenu.classList.add("active");

    menuToggle.setAttribute("aria-expanded", "true");

    const icon = menuToggle.querySelector("i");

    if (icon) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    }

}


/* ==================== Menu Toggle ==================== */

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navMenu.classList.contains("active");

        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }

    });

}


/* =====================================================
   Close Menu After Clicking a Link
===================================================== */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        closeMobileMenu();

    });

});


/* =====================================================
   Close Menu When Clicking Outside
===================================================== */

document.addEventListener("click", (event) => {

    if (!navMenu || !menuToggle) return;

    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (
        navMenu.classList.contains("active") &&
        !clickedInsideMenu &&
        !clickedToggle
    ) {

        closeMobileMenu();

    }

});


/* =====================================================
   Close Menu With Escape Key
===================================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMobileMenu();

    }

});


/* =====================================================
   Close Mobile Menu When Screen Gets Larger
===================================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 800) {

        closeMobileMenu();

    }

});


/* =====================================================
   Active Navigation Link
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");


function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const target = link.getAttribute("href");

        if (target === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}


window.addEventListener("scroll", updateActiveLink);

updateActiveLink();


/* =====================================================
   Smooth Scroll
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        const headerHeight = header
            ? header.offsetHeight
            : 0;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

        window.scrollTo({

            top: targetPosition,

            behavior: "smooth"

        });

    });

});


/* =====================================================
   Prevent Body Scroll When Mobile Menu Is Open
===================================================== */

function updateBodyScroll() {

    if (!navMenu) return;

    if (
        window.innerWidth <= 800 &&
        navMenu.classList.contains("active")
    ) {

        document.body.style.overflow = "hidden";

    } else {

        document.body.style.overflow = "";

    }

}


/* Update when menu changes */

if (menuToggle) {

    menuToggle.addEventListener("click", updateBodyScroll);

}

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", updateBodyScroll);

});

window.addEventListener("resize", updateBodyScroll);


/* =====================================================
   End
===================================================== */