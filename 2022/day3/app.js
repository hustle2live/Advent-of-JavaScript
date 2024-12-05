const whiteKeysNodeList = document.querySelectorAll(".white-keys");
const blackKeysNodeList = document.querySelectorAll(".black-keys");

const pianoDiv = document.querySelector(".piano");

// const aKeysNodeList = document.querySelectorAll("a");
const aKeysNodeList = document.getElementsByTagName("a");

// console.log(whiteKeysNodeList);
// console.log(blackKeysNodeList);
// console.log(pianoDiv);
console.log(aKeysNodeList);

pianoDiv.addEventListener("click", playOn);

function playOn(event) {}

function setAttribToKeys() {
  for (let i = 0; i < aKeysNodeList.length; i++) {
    aKeysNodeList[i].setAttribute("href", `audio/key-${i + 1}.mp3`);
    console.log(aKeysNodeList[i]);
    aKeysNodeList[i].onclick = aKeysNodeList[i].play();
  }
}

setAttribToKeys();

pianoDiv.addEventListener("canplaythrough", (event) => {
  /* аудио может быть воспроизведено; проиграть, если позволяют разрешения */
  for (let i = 0; i <= aKeysNodeList.length; i++) {
    aKeysNodeList[i].setAttribute("href", `audio/key-${i}.mp3`);
    aKeysNodeList[i].onclick = play();
  }
  //   aKeysNodeList.play();
});
