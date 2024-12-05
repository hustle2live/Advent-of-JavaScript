const gameList = document.querySelectorAll("button img");
const variables = document.querySelectorAll("ul img");
const stateObj = { foo: "index.html" };

const getRandomInt = (max) => Math.floor(Math.random() * max);

const playPics = [];

gameList.forEach((button) => button.addEventListener("click", startGame));

let playerValue = "2";
let PCValue = "3";

function startGame(e) {
  const playerChoise = e.target;

  const PCRandomChoise = variables[getRandomInt(3)];

  playerValue = playerChoise.getAttribute("alt");
  PCValue = PCRandomChoise.getAttribute("alt");

  playPics[0] = playerValue;
  playPics[1] = PCValue;

  console.log(playPics);

  localStorage.setItem("array", JSON.stringify(playPics));

  history.replaceState(stateObj, "", "winner.html");
  location.reload();
}
