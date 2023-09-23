const codes = document.querySelectorAll(".code");

codes[0].focus();
codes.forEach(function (code, idx) {
  code.addEventListener("keydown", function (e) {
    if (e.key >= 0 && e.key < 9) {
      codes[idx].value = "";
      setTimeout(function () {
        if (idx === codes.length - 1) {
          setTimeout(submit, 1000);
        }
        if (idx < codes.length - 1) {
          codes[idx + 1].focus();
        }
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(function () {
        codes[idx - 1].focus();
      }, 10);
    }
  });
});

function submit() {
  let result = "";
  codes.forEach(function (code, idx) {
    console.log(idx, code.value);
    result += code.value;
  });
  console.log(result);
}
