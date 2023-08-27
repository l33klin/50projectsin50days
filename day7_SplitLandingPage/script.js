const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", (evt) => {
  console.log(evt);
  left.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  left.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  right.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  right.classList.remove("hover-right");
});
