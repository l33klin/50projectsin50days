const buttons = document.querySelectorAll(".ripple");

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const x = event.clientX;
    const y = event.clientY;

    const buttonLeft = event.target.offsetLeft;
    const buttonTop = event.target.offsetTop;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    console.log(xInside, yInside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setInterval(function () {
      circle.remove();
    }, 500);
  });
});
