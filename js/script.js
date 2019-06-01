let backdrop = document.querySelector(".backdrop");
let toggleButton = document.querySelector(".toggle-button");
let mobileNav = document.querySelector(".mobile-nav");

backdrop.addEventListener("click", function () {
    mobileNav.classList.remove("active");
    setTimeout(function () {
        backdrop.classList.remove("active");
    }, 500);
})

// Menu hamburger 
toggleButton.addEventListener("click", function () {
    mobileNav.classList.toggle("active");
    // backdrop.classList.toggle("active");
    setTimeout(function () {
        backdrop.classList.toggle("active");
    }, 500)
})