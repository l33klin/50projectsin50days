const loveMe = document.querySelector(".love-me");
const times = document.getElementById("times");

let lastClickTime = 0;
let clickTimes = 0;

loveMe.addEventListener("click", (e) => {
  if (lastClickTime === 0) {
    lastClickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - lastClickTime < 800) {
      addHeart(e.clientX - e.target.offsetLeft, e.clientY - e.target.offsetTop);
      lastClickTime = 0;
      clickTimes++;

      times.innerText = `${clickTimes}`;
    } else {
      lastClickTime = new Date().getTime();
    }
  }
});

function addHeart(x, y) {
  const heartInImage = document.createElement("i");
  heartInImage.classList.add("fas");
  heartInImage.classList.add("fa-heart");
  heartInImage.style.left = `${x}px`;
  heartInImage.style.top = `${y}px`;
  loveMe.appendChild(heartInImage);

  setTimeout(() => {
    heartInImage.remove();
  }, 600);
}
