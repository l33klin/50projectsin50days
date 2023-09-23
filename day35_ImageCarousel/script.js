const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

totalImgs = document.querySelectorAll("#imgs img").length;
currentImageIdx = 0;

function slideToImage(idx) {
  console.log(currentImageIdx);
  imgs.style.transform = `translateX(${-currentImageIdx * 500}px)`;
}

leftBtn.addEventListener("click", function (e) {
  currentImageIdx--;
  if (currentImageIdx < 0) {
    currentImageIdx = totalImgs - 1;
  }
  slideToImage(currentImageIdx);
});

rightBtn.addEventListener("click", function (e) {
  currentImageIdx++;
  if (currentImageIdx >= totalImgs) {
    currentImageIdx = 0;
  }
  slideToImage(currentImageIdx);
});
