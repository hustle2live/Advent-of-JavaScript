const array = JSON.parse(localStorage.getItem("array"));
const playAgainButton = document.querySelector(".play-again");
const playerDiv = document.querySelector(".your-pick img");
const PCDiv = document.querySelector(".computer-pick img");

const setWinner = (winner) => {
  document.body.classList.add(winner);
};

const valuePic = (a) => a.toLowerCase();

const playerValue = valuePic(array[0]);
const PCValue = valuePic(array[1]);

function setUpPictures(player, pc) {
  playerDiv.setAttribute("src", `./images/${player}.png`);
  PCDiv.setAttribute("src", `./images/${pc}.png`);
}

setUpPictures(playerValue, PCValue);

if (playerValue === PCValue) {
  setWinner("tie-game");
  tieGame();
  console.log("tie-Game");
} else if (
  (playerValue === "paper" && PCValue === "rock") ||
  (playerValue === "scissors" && PCValue === "paper") ||
  (playerValue === "rock" && PCValue === "scissors")
) {
  setWinner("you-win");
  console.log("Player-Win");
} else {
  setWinner("computer-wins");
  console.log("Computer-Win");
}

function tieGame() {
  const tie = document.createElement("h1");
  tie.style.position = "absolute";
  tie.innerHTML = "It's a tie game";
  tie.style.top = "150px";
  document.body.appendChild(tie);
}

const stateObj = { foo: "winner.html" };

playAgainButton.onclick = () => {
  history.replaceState(stateObj, "", "index.html");
  location.reload();
};
