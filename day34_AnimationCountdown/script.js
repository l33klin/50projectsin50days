const nums = document.querySelectorAll(".nums span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const replay = document.querySelector("#replay");

runAnimate();

function resetDOM() {
  counter.classList.remove("hide");
  finalMessage.classList.remove("show");
  nums.forEach(function (n) {
    n.classList.value = "";
  });

  nums[0].classList.add("in");
}

function runAnimate() {
  nums.forEach(function (num, index) {
    const nextToLast = nums.length - 1;

    console.log(index, num);

    num.addEventListener("animationend", function (e) {
      if (e.animationName === "rotatein" && index !== nextToLast) {
        num.classList.add("out");
        num.classList.remove("in");
      } else if (e.animationName === "rotateout" && num.nextElementSibling) {
        num.nextElementSibling.classList.add("in");
      } else {
        counter.classList.add("hide");
        finalMessage.classList.add("show");
      }
    });
  });
}

replay.addEventListener("click", function (event) {
  resetDOM();
  runAnimate();
});
