const screens = document.querySelectorAll(".screen");
const chooseObjBtns = document.querySelectorAll(".choose-obj-btn");
const startBtn = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message");

// screens[0].classList.add("up");

let seconds = 0;
let score = 0;
let selected_obj = {};

startBtn.addEventListener("click", () => {
  screens[0].classList.add("up");
});

chooseObjBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const img = btn.querySelector("img");
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");
    selected_obj = { src: src, alt: alt };
    screens[1].classList.add("up");
    setTimeout(createObj, 1000);
    startGame();
  });
});

function createObj() {
  const obj = document.createElement("div");
  obj.classList.add("potrait");
  const { x, y } = getRandomLocation();
  obj.style.top = y + "px";
  obj.style.left = x + "px";
  obj.innerHTML = `<img src="${selected_obj.src}" alt="${
    selected_obj.alt
  }" style="transform: rotate(${Math.random() * 360}deg)"/>`;
  obj.addEventListener("click", (e) => catchObj(obj));
  console.log("created", obj);
  gameContainer.appendChild(obj);
}

function getRandomLocation() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
}

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
}

function catchObj(obj) {
  increaseScore();
  console.log("catchObj");
  obj.classList.add("caught");
  setTimeout(function () {
    obj.remove();
  }, 2000);
  addObjs();
}

function addObjs() {
  setTimeout(createObj, 1000);
  setTimeout(createObj, 1500);
}

function increaseScore() {
  score++;
  if (score > 19) {
    messageEl.classList.add("visible");
  }
  scoreEl.innerHTML = "Score: " + score;
}
