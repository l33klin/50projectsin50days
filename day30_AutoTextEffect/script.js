const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");

const text = "We love programming...";

let idx = 1;
let speed = 300 / speedEl.value;

wirteText();

function wirteText() {
  console.log(idx);
  textEl.innerText = text.slice(0, idx);

  idx = idx + 1;

  if (idx > text.length) idx = 1;

  setTimeout(function () {
    wirteText();
  }, speed);
}

speedEl.addEventListener("input", function () {
  speed = 300 / speedEl.value;
});
