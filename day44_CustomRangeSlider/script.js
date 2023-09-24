const range = document.getElementById("range");

range.addEventListener("input", function (e) {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  const rangeWidth = getComputedStyle(e.target).getPropertyValue("width");
  const labelWidth = getComputedStyle(label).getPropertyValue("width");

  const rangeWidthNum = +rangeWidth.substring(0, rangeWidth.length - 2);
  const labelWidthNum = +labelWidth.substring(0, labelWidth.length - 2);

  const max = +e.target.max;
  const min = +e.target.min;
  const thumbWidthHalf = 24 / 2; // Don't know how to get the width of thumb

  let labelLeftOffset =
    (rangeWidthNum * value) / max -
    labelWidthNum / 2 +
    scale(value, min, max, thumbWidthHalf, -thumbWidthHalf);
  label.style.left = `${labelLeftOffset}px`;

  console.log(labelLeftOffset);

  label.innerHTML = value;
});

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
