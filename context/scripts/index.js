let $ = document;
const menuItems = $.querySelectorAll(".has-sub-menu");
const subMenu = $.querySelectorAll(".sub-menu");
const hamburgerMenu = $.querySelector(".hamburger-menu");
const navbar = $.querySelector(".navbar");
const sliderContainer = $.querySelector(".slider-container");
const dataS = [
  { id: 2, src: "./images/barbers-image-2.jpg" },
  { id: 4, src: "./images/barbers-image-4.jpg" },
  { id: 5, src: "./images/barbers-image-5.avif" },
  { id: 6, src: "./images/barbers-image-6.png" },
];
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    menuItem.querySelector(".sub-menu").classList.toggle("show");
  });
});

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");

  if (hamburgerMenu.classList.contains("open")) {
    navbar.classList.add("open");
  } else {
    navbar.classList.remove("open");
  }
});

dataS.forEach((data) => {
  const image = $.createElement("img");
  image.src = data.src;
  image.className = "navbar-image";

  sliderContainer.append(image);
});

let index = 0; // از تابع slider خارج شده است

function slider() {
  const sliderImages = $.querySelectorAll(".navbar-image");
  sliderImages.forEach((sliderImage) => {
    sliderImage.classList.remove("active");
  });
  sliderImages[index].classList.add("active");
  index++;
  if (index >= sliderImages.length) {
    index = 0;
  }
}

setInterval(slider, 2000);
