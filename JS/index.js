const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const burgerDivEle = document.querySelector("nav").lastElementChild;
const navUlEle = document.getElementById("navUl");

console.log(burgerDivEle); //helpful information
console.log(navUlEle); //helpful information

const navSlide = () => {
  burger.addEventListener("click", () => {

    if (!burgerDivEle.classList.contains('on') && !navUlEle.classList.contains('nav-active')) {
    nav.classList.add("nav-active");
    //Burger animation
    burger.classList.add('on');
    }
    else {
      nav.classList.remove("nav-active");
      burger.classList.remove('on');
    }
  });
}
navSlide();


let widthMatch = window.matchMedia("(min-width: 1080px)");
let widthMatch2 = window.matchMedia("(max-width: 1080px)");
// mm in the function arg is the matchMedia object, passed back into the function

widthMatch.addEventListener('change', function(mm) {
  if (mm.matches) {
    // it matches the media query: that is, min-width is >= 1080px
    if (burgerDivEle.classList.contains('on') && navUlEle.classList.contains('nav-active')) { //bigger than 1080p clean up classes, so the nav bar is in the original state.
      nav.classList.remove("nav-active");
      burger.classList.remove('on');
      nav.classList.add('been-removed')
      burger.classList.add('been-removed')
    }
  }
  });

  widthMatch2.addEventListener('change', function(mm) { //shrink it back down to 1080p, re-add it, only under the condition that we removed it first.
    if (mm.matches) {
      if (burgerDivEle.classList.contains('been-removed') && navUlEle.classList.contains('been-removed')) {
      nav.classList.add("nav-active");
      burger.classList.add('on');
      nav.classList.remove("been-removed");
      burger.classList.remove('been-removed');
    }
    }
  });
