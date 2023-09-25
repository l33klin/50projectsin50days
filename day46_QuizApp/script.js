const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: {
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
    },
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    options: {
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
    },
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    options: {
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
    },
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    options: {
      a: "1996",
      b: "1995",
      d: "none of the above",
    },
    correct: "b",
  },
];

const quizHeader = document.querySelector(".quiz-header");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let answer = [];
createQuiz(quizData[currentQuiz]);

function createQuiz(data) {
  console.log(data);
  quizHeader.innerHTML = `<h2>${data.question}</h2>`;

  const ulEl = document.createElement("ul");

  for (const key in data.options) {
    ulEl.innerHTML += `<li>
          <input type="radio" name="answer" id="${key}" class="answer">
          <label for="${key}" id="${key}_text">${data.options[key]}</label>
        </li>`;
  }
  quizHeader.appendChild(ulEl);
}

function createFinal() {
  quizHeader.innerHTML = `
  <h2>Congratulations, you completed all the questions!</h2>
  <label>Your answer: </label><br>
  ${answer.join("<br>")}
  `;
  submitBtn.innerText = "Retry";
}

submitBtn.addEventListener("click", function (e) {
  if (currentQuiz === quizData.length) {
    currentQuiz = 0;
    answer = [];
    createQuiz(quizData[currentQuiz]);
    return;
  }

  const selected = document.querySelector('input[type="radio"]:checked');
  if (selected !== null && selected.id) {
    console.log(selected.id);
    console.log(quizData[currentQuiz].options[selected.id]);
    answer.push(quizData[currentQuiz].options[selected.id]);
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      createQuiz(quizData[currentQuiz]);
    } else {
      createFinal();
    }
  } else {
    alert("Please select a option");
  }
});
