const choices = document.querySelectorAll(".choice");
const sendBtn = document.getElementById("submit");

choices.forEach(function (choice) {
  choice.addEventListener("click", function (e) {
    choices.forEach(function (c) {
      c.classList.remove("selected");
    });
    choice.classList.add("selected");
  });
});

sendBtn.addEventListener("click", function (e) {
  const selected = document.querySelector(".choice.selected");
  console.log("Submit: ", selected.id);
});
