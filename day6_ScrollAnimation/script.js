const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checBoxes);

checBoxes();

function checBoxes() {
  const trggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach(function (box) {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
