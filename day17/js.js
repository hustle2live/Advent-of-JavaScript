const argumentOne = document.querySelector(".first");
const argumentTwo = document.querySelector(".second");
const submitButton = document.querySelector(".submit");
const symbolsRadio = document.querySelectorAll("input[type=radio]");
const divOut = document.querySelector(".out");

submitButton.addEventListener("click", () => {
  for (key of symbolsRadio) {
    if (key.checked)
      divOut.innerHTML = Math.round(
        eval(argumentOne.value + key.value + argumentTwo.value)
      );
  }
});
