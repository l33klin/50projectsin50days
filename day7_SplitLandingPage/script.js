const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", (evt) => {
  console.log(evt);
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", (evt) => {
  console.log(evt);
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", (evt) => {
  console.log(evt);
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", (evt) => {
  console.log(evt);
  container.classList.remove("hover-right");
});
