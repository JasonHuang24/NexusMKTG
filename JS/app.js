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
      window.location.reload(); //fixes bug where window resizing if statement fires even after toggling the class to be removed.
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
          widthMatch2.addEventListener('change', function(mm) { //shrink it back down to 1080p, re-add it, only under the condition that we removed it first.
              if(mm.matches) {
              nav.classList.add("nav-active");
              burger.classList.add('on');
            }
          });
        }
      }
  });

//filter functions for gallery on home page.
filterSelection("all");

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterFigure");
  if (c == "all") c = "";
   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
