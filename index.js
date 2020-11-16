// get menu items
const $burgerMenu = document.querySelector(".header__menu-icon");
const $closeMenu = document.querySelector(".icon-close");

//get slider items
const $slider = document.getElementById("slider");

//get buttons
const $prevButton = document.querySelector(".button--prev");
const $nextButton = document.querySelector(".button--next");

//add listeners to menu items
$burgerMenu.addEventListener("click", toggleMenu);
$closeMenu.addEventListener("click", toggleMenu);
$prevButton.addEventListener("click", () => getBackgroundUrl($slider));

//toggle class function
function toggleMenu() {
  const $headerNav = document.querySelector(".header__nav");
  $headerNav.classList.toggle("nav--active");
}

//slider functions

//get background from slider
function getBackgroundUrl($element) {
  const sliderBg =
    $element.currentStyle ||
    window
      .getComputedStyle($element, false)
      .getPropertyValue("background-image");
  console.log(sliderBg);
  return sliderBg;
}
