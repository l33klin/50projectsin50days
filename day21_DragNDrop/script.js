const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("drop", dragDrop);
});

function dragStart() {
  this.className += " hold";
  // this.classlist.add("hold");
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}
