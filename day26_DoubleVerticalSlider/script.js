const sliderContainer = document.querySelector(".slider-container");
const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");
const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlide = 0;

slideLeft.style.top = `${-(slidesLength - 1) * 100}vh`;

function slideMove(direction) {
  console.log("slideMove: ", direction);
  if (direction === "up") {
    activeSlide++;
    if (activeSlide >= slidesLength) activeSlide = 0;
  } else if (direction === "down") {
    activeSlide -= 1;
    if (activeSlide < 0) activeSlide = slidesLength - 1;
  }
  console.log(activeSlide);
  slideRight.style.transform = `translateY(${-activeSlide * 100}%)`;
  slideLeft.style.transform = `translateY(${activeSlide * 100}%)`;
}

upBtn.addEventListener("click", () => {
  slideMove("up");
});
downBtn.addEventListener("click", () => {
  slideMove("down");
});
