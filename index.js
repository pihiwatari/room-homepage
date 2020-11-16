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
$prevButton.addEventListener("click", () => changeBackground($slider, -1));
$nextButton.addEventListener("click", () => changeBackground($slider, 1));

//toggle class function
function toggleMenu() {
  const $headerNav = document.querySelector(".header__nav");
  $headerNav.classList.toggle("nav--active");
}

//slider functions

//change background function
function changeBackground($element, index) {
  let newId;

  //get bg background url
  let backgroundUrl = getBackgroundUrl($element);

  //regex for background id split
  const regex = /[0-9]\.jpg/g;

  //get the substring with the id nunmber and format then get only the id number
  let substringIndex = backgroundUrl.search(regex);
  let id = parseInt(backgroundUrl.charAt(substringIndex));

  //if index <0 we reduce by 1 the id number
  if (index < 0) {
    newId = id - 1;
  } else {
    newId = id + 1;
  }
  //if id < 1 we change it back to 3
  if (newId < 1) {
    newId = 3;
  }

  if (newId > 3) {
    newId = 1;
  }

  //replace backgroundUrl
  let newBg = backgroundUrl.replace(regex, `${newId}.jpg`);
  $element.style.backgroundImage = newBg;
}

//get background from slider
function getBackgroundUrl($element) {
  const backgroundUrl =
    $element.currentStyle ||
    window
      .getComputedStyle($element, false)
      .getPropertyValue("background-image");
  return backgroundUrl;
}
