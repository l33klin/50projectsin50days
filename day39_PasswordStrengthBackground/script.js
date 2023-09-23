const password = document.getElementById("password");
const background = document.getElementById("background");

maxBlur = 20;
noBlurPasswordLen = 10;

changeBackgroundBlur();

password.addEventListener("input", function (e) {
  changeBackgroundBlur();
});

function changeBackgroundBlur() {
  passwordLength = password.value.length;
  if (passwordLength > noBlurPasswordLen) {
    background.style.filter = "blur(0px)";
  } else {
    background.style.filter = `blur(${
      maxBlur - scale(passwordLength, 0, noBlurPasswordLen, 0, maxBlur)
    }px)`;
  }
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
