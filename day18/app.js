const passwordElem = document.getElementById("password"),
  lengthElem = document.querySelector("#length"),
  lengthTextElem = document.querySelector("#lengthText"),
  addSymbolsElem = document.querySelector("#symbols"),
  addNumbersElem = document.querySelector("#numbers"),
  addLowerCaseElem = document.querySelector("#lowercase"),
  addUpperCaseElem = document.querySelector("#uppercase"),
  addSimilarElem = document.querySelector("#similar"),
  copyButtonElem = document.querySelector(".copy"),
  copyButtonTextElem = document.querySelector(".copy span");

const newPassword = [];

function showSymbol() {
  newPassword.length = 0;
  hideCopiedMessage();

  const lengthValue = +lengthElem.value,
    hasSymbols = addSymbolsElem.checked,
    hasNumbers = addNumbersElem.checked,
    hasLowerCase = addLowerCaseElem.checked,
    hasUpperCase = addUpperCaseElem.checked,
    hasSimilar = addSimilarElem.checked;

  const checkboxesCounter =
    hasSymbols + hasNumbers + hasLowerCase + hasUpperCase + hasSimilar;

  if (checkboxesCounter === 0) {
    passwordElem.value = "select an option";
  } else {
    while (newPassword.length < lengthValue) {
      if (hasSymbols) newPassword.push(getRandomSymbol());
      if (hasNumbers) newPassword.push(getRandomFromChartCode(10, 48));
      if (hasLowerCase) newPassword.push(getRandomFromChartCode(26, 97));
      if (hasUpperCase) newPassword.push(getRandomFromChartCode(26, 65));
      if (hasSimilar) newPassword.push(getRandomSimilar());
    }
    const generatedPassword = newPassword.join("");
    const finalPassword = generatedPassword.slice(0, lengthValue);
    passwordElem.value = finalPassword;
  }

  lengthTextElem.textContent = lengthElem.value;
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

const showCopiedMessage = () => (copyButtonTextElem.style.display = "block");
const hideCopiedMessage = () => (copyButtonTextElem.style.display = "none");

copyButtonElem.addEventListener("click", () => {
  const input = passwordElem.value;

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(input);
  showCopiedMessage();
});

lengthElem.addEventListener("input", () => showSymbol());
