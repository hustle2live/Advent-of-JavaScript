const passwordInput = document.getElementById("password");

const passwordLengthElement = document.querySelector("#length");
// const passwordLength = passwordLengthElement.value;
const passwordLengthText = document.querySelector("#lengthText");

const selectSymbols = document.querySelector("#symbols").checked;
const selectNumbers = document.querySelector("#numbers").checked;
const selectLowerCase = document.querySelector("#lowercase").checked;
const selectUpperCase = document.querySelector("#uppercase").checked;
const selectSimilar = document.querySelector("#similar").checked;

const newPasswordArr = [];

// passwordInput.onkeydown = showSymbol;
passwordLengthElement.addEventListener("input", () => showSymbol());

// passwordLength.oninput = () => console.log(passwordLength.value);

function showSymbol() {
  newPasswordArr.length = 0;
  // console.log(passwordLengthElement.value);

  for (let i = 0; i <= passwordLengthElement.value; i++) {
    if (selectSymbols) {
      newPasswordArr.push(getRandomFromChartCode(15, 33));
      i++;
    }
    if (selectNumbers && i <= passwordLengthElement.value) {
      newPasswordArr.push(getRandomFromChartCode(10, 48));
      i++;
    }
    if (selectLowerCase && i <= passwordLengthElement.value) {
      newPasswordArr.push(getRandomFromChartCode(26, 97));
      i++;
    }
    if (selectUpperCase && i <= passwordLengthElement.value) {
      newPasswordArr.push(getRandomFromChartCode(26, 65));
      i++;
    }
    // if (selectSimilar) {
    //   newPasswordArr.push(getRandomFromChartCode(15, 33));
    //   i++;
    // }
  }

  passwordInput.value = newPasswordArr.join("");
  passwordLengthText.innerHTML = passwordLengthElement.value;
}

// console.log(passwordLengthElement.value);

function getRandomLower() {
  return Math.floor(Math.random() * 26) + 97;
} // 26, 97

function getRandomUpper() {
  return Math.floor(Math.random() * 26) + 65;
} // 26, 65

function getRandomSymbol() {
  return Math.floor(Math.random() * 15) + 33;
} // 15, 33

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 48;
} // 10, 48

function getRandomFromChartCode(quantity, startFrom) {
  return String.fromCharCode(Math.floor(Math.random() * quantity) + startFrom);
}
