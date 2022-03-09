const passwordInput = document.getElementById("password");

const passwordLength = document.querySelector("#length");
const selectSymbols = document.querySelector("#symbols");
const selectNumbers = document.querySelector("#numbers");
const selectLowerCase = document.querySelector("#lowercase");
const selectUpperCase = document.querySelector("#uppercase");
const selectSimilar = document.querySelector("#similar");

const newPasswordArr = [];

passwordInput.onkeydown = showSymbol;

function showSymbol(e) {
  console.log(getRandomFromChartCode(10, 48));

  // console.log(String.fromCharCode(getRandomNumber()));
}

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
} // 11, 48

function getRandomFromChartCode(quantity, startFrom) {
  return String.fromCharCode(Math.floor(Math.random() * quantity) + startFrom);
}
