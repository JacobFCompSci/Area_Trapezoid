// Trapezoid Calculator

// Listener

var calc = document.getElementById("calculate");

calc.addEventListener("click", calcArea);
// Function

function calcArea() {
  // INPUT

  let base1 = +document.getElementById("topbase").value;
  let base2 = +document.getElementById("bottombase").value;
  let height = +document.getElementById("height").value;
  let rounding = +document.getElementById("rounded").value;
  // PROCESS

  let area = 0.5 * (base1 + base2) * height;

  area = area.toFixed(rounding);
  // OUTPUT

  document.getElementById("answer").innerHTML = area;

  document.getElementById("topbase").value = "";
  document.getElementById("bottombase").value = "";
  document.getElementById("height").value = "";
  document.getElementById("rounded").value = "";
}
