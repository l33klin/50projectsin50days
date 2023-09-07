const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let currentActiveSlide = 0;

function setBgtoBody() {
  body.style.backgroundImage = slides[currentActiveSlide].style.backgroundImage;
}

setBgtoBody();

leftBtn.addEventListener("click", (e) => {
  currentActiveSlide--;
  if (currentActiveSlide < 0) {
    currentActiveSlide = slides.length - 1;
  }
  setActiveSlide();
  setBgtoBody();
});

rightBtn.addEventListener("click", (e) => {
  currentActiveSlide++;
  if (currentActiveSlide >= slides.length) {
    currentActiveSlide = 0;
  }
  setActiveSlide();
  setBgtoBody();
});

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentActiveSlide].classList.add("active");
}
