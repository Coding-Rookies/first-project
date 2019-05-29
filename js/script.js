let backdrop = document.querySelector(".backdrop");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

backdrop.addEventListener("click", function () {
    mobileNav.classList.remove("active");
    backdrop.classList.remove("active");
})

// Menu hamburger 
toggleButton.addEventListener("click", function () {
    mobileNav.classList.add("active");
    backdrop.classList.add("active");
})