const passwordElem = document.getElementById("password");

const lengthElem = document.querySelector("#length");
const lengthTextElem = document.querySelector("#lengthText");

const addSymbols = document.querySelector("#symbols");
const addNumbers = document.querySelector("#numbers");
const addLowerCase = document.querySelector("#lowercase");
const addUpperCase = document.querySelector("#uppercase");
const addSimilar = document.querySelector("#similar");

const copyButton = document.querySelector(".copy");
const copySpan = document.querySelector(".copy span");

const newPasswordArr = [];

function showSymbol() {
  const hasSymbols = addSymbols.checked;
  const hasNumbers = addNumbers.checked;
  const hasLowerCase = addLowerCase.checked;
  const hasUpperCase = addUpperCase.checked;
  const hasSimilar = addSimilar.checked;

  console.log(hasSymbols, hasNumbers, hasLowerCase, hasUpperCase, hasSimilar);

  hideCopiedMessage();

  newPasswordArr.length = 0;

  const lengthValue = lengthElem.value;
  // const allowLength = newPasswordArr.length < lengthValue;

  while (newPasswordArr.length < lengthValue) {
    if (hasSymbols) {
      if (newPasswordArr.length < lengthValue)
        newPasswordArr.push(getRandomSymbol());
    }
    if (hasNumbers) {
      if (newPasswordArr.length < lengthValue)
        newPasswordArr.push(getRandomFromChartCode(10, 48));
    }
    if (hasLowerCase) {
      if (newPasswordArr.length < lengthValue)
        newPasswordArr.push(getRandomFromChartCode(26, 97));
    }
    if (hasUpperCase) {
      if (newPasswordArr.length < lengthValue)
        newPasswordArr.push(getRandomFromChartCode(26, 65));
    }
    if (hasSimilar) {
      if (newPasswordArr.length < lengthValue)
        newPasswordArr.push(getRandomSimilar());
    }
  }

  passwordElem.value = newPasswordArr.join("");
  lengthTextElem.innerHTML =
    lengthElem.value + " length: (" + passwordElem.value.length + ") ";
}

function getRandomFromChartCode(quantity, startFrom) {
  return String.fromCharCode(Math.floor(Math.random() * quantity) + startFrom);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function getRandomSimilar() {
  const similar = "il1Lo0O";
  return similar[Math.floor(Math.random() * similar.length)];
}

const showCopiedMessage = () => (copySpan.style.display = "block");
const hideCopiedMessage = () => (copySpan.style.display = "none");

copyButton.addEventListener("click", () => {
  const input = passwordElem.value;

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(input);
  showCopiedMessage();
});

lengthElem.addEventListener("input", () => showSymbol());
