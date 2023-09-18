const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  uppercase: getRandomUpperCase,
  lowercase: getRandomLowerCase,
  numbers: getRandomNumbers,
  symbols: getRandomSymbols,
};

generateEl.addEventListener("click", function (e) {
  const length = +lengthEl.value;
  const hasUpperCase = uppercaseEl.checked;
  const hasLowerCase = lowercaseEl.checked;
  const hasNumbers = numbersEl.checked;
  const hasSymbols = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    length,
    hasUpperCase,
    hasLowerCase,
    hasNumbers,
    hasSymbols
  );
});

function generatePassword(length, uppercase, lowercase, numbers, symbols) {
  let generatedPassword = "";
  const typesArr = [
    { uppercase },
    { lowercase },
    { numbers },
    { symbols },
  ].filter((type) => Object.values(type)[0]);
  for (let i = 0; i < length; i += typesArr.length) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  return shuffle(generatedPassword.slice(0, length));
}

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumbers() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbols() {
  const symbols = "!@#$%^&*(){}[]=<>,./";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function shuffle(array) {
  var a = array.split(""),
    n = a.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}
