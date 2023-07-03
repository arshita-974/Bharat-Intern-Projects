const btn = document.getElementById("convert");
const cToFBtn = document.getElementById("CtoF");
const fToCBtn = document.getElementById("FtoC");
const cValue = document.getElementById("TinC");
const fValue = document.getElementById("TinF");
const result = document.getElementById("result");
const output = document.getElementById("output");
const reset = document.getElementById("reset");

function cToF(celsius) {
  var cTemp = celsius;
  var cToFahr = (cTemp * 9) / 5 + 32;
  cToFahr = cToFahr.toFixed(2);
  var message = cTemp + "\xb0C is " + cToFahr + "\xb0F.";
  return message;
}

function fToC(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = ((fTemp - 32) * 5) / 9;
  fToCel = fToCel.toFixed(2);
  var message = fTemp + "\xb0F is " + fToCel + "\xb0C.";
  return message;
}

btn.addEventListener("click", () => {
  output.style.display = "flex";
  reset.style.display = "block";

  if (cToFBtn.checked == true) {
    result.innerText = cToF(cValue.value);
  } else if (fToCBtn.checked == true) {
    result.innerText = fToC(fValue.value);
  }
});

reset.addEventListener("click", () => {
  output.style.display = "none";
  reset.style.display = "none";

  cValue.value = "";
  fValue.value = "";

  cToFBtn.checked = false;
  fToCBtn.checked = false;

  result.innerText = "";
});
