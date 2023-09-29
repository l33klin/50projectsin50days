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
let select_obj = {};

startBtn.addEventListener("click", () => {
  screens[0].classList.add("up");
});
