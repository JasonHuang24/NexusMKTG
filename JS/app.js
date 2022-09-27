const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");

const navSlide = () => {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    //Burger animation
    burger.classList.toggle('toggle');
  });
}
navSlide();

let widthMatch = window.matchMedia("(min-width: 1080px)");
// mm in the function arg is the matchMedia object, passed back into the function
widthMatch.addEventListener('change', function(mm) {
    if (mm.matches) {
        // it matches the media query: that is, min-width is >= 1080px
        nav.classList.remove("nav-active");
        burger.classList.remove('toggle');
        }
    });
