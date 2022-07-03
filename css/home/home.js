// Slide
let timer = 3000,
  currentImageIndex = 0,
  images = document.querySelectorAll(".slide-container li"),
  max = images.length;

function slider() {
  images[currentImageIndex].classList.remove("active");

  currentImageIndex++;
  if (currentImageIndex >= max) {
    currentImageIndex = 0;
  }

  images[currentImageIndex].classList.add("active");
}

function start() {
  setInterval(() => {
    slider();
  }, timer);
}

window.addEventListener("load", start);
