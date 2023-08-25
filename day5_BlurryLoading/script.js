const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let progress = 0;

let tick = setInterval(blurrying, 30);

function blurrying() {
  progress++;

  if (progress >= 100) {
    clearInterval(tick);
  }
  loadText.innerText = `${progress}%`;
  loadText.style.opacity = scale(progress, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(progress, 0, 100, 30, 0)}px)`;
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
