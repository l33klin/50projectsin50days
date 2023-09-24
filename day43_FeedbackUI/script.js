const choices = document.querySelectorAll(".choice");
const sendBtn = document.getElementById("submit");
const feedbackContainer = document.querySelector(".feedback-container");

let selected = "Satisfied";

choices.forEach(function (choice) {
  choice.addEventListener("click", function (e) {
    choices.forEach(function (c) {
      c.classList.remove("selected");
    });
    choice.classList.add("selected");
    selected = choice.querySelector("span").innerText;
  });
});

sendBtn.addEventListener("click", function (e) {
  console.log("Submit: ", selected);
  feedbackContainer.innerHTML = `
  <i class="fas fa-heart"></i>
  <strong>Thank You!</strong> <br>
  <strong>Your Feedback: ${selected}</strong> <br>
  <strong>We will continue to provide a better customer support!</strong>
  `;
});
