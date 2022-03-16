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

const checkboxes = document.querySelectorAll("input[type=checkbox]");

const characters = {
  symbols: "!@#$%^&*(){}[]=<>/,.",
  similar: "il1Lo0O",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789"
};

const showSymbol = () => {
  const newPassword = [];
  hideCopiedMessage();

  const lengthValue = +lengthElem.value,
    hasSymbols = addSymbolsElem.checked,
    hasNumbers = addNumbersElem.checked,
    hasLowerCase = addLowerCaseElem.checked,
    hasUpperCase = addUpperCaseElem.checked,
    hasSimilar = addSimilarElem.checked;

  const options = [
    hasSymbols,
    hasNumbers,
    hasLowerCase,
    hasUpperCase,
    hasSimilar
  ];

  const noOptionChecked = options.every((option) => !option);

  if (noOptionChecked) {
    passwordElem.value = "select an option";
  } else {
    while (newPassword.length < lengthValue) {
      for (const box in checkboxes) {
        if (checkboxes[box].checked)
          newPassword.push(getRandomCharacter(checkboxes[box].name));
      }
    }

    const shuffledFinalPassword = newPassword
      .sort((a, b) => 0.5 - Math.random())
      .join("")
      .slice(0, lengthValue);

    passwordElem.value = shuffledFinalPassword;
  }

  lengthTextElem.textContent = lengthElem.value;
};

const getRandomCharacter = (optionName) => {
  return characters[optionName][
    Math.floor(Math.random() * characters[optionName].length)
  ];
};

const showCopiedMessage = () => (copyButtonTextElem.style.display = "block");
const hideCopiedMessage = () => (copyButtonTextElem.style.display = "none");

copyButtonElem.addEventListener("click", () => {
  const input = passwordElem.value;

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(input);
  showCopiedMessage();
});

lengthElem.addEventListener("input", () => showSymbol());
