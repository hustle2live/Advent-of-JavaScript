const timerMinutsInput = document.querySelector(".time .minutes input");
const timerSecondsInput = document.querySelector(".time .seconds input");

const startButton = document.querySelector(".start");
const settingButton = document.querySelector(".settings");

const ringCircle = document.querySelector(".ring");

let timeMinutsInSeconds;
let timeSeconds;
let startStopCounter = 0;
let timerOnStart;

function showAlert() {
  alert("Time is out");
}

function timer() {
  seconds = (timeMinutsInSeconds + timeSeconds) % 60;
  minutes = ((timeMinutsInSeconds + timeSeconds) / 60) % 60;

  // Условие если время закончилось то...
  if (seconds <= 0 && minutes <= 0) {
    timerSecondsInput.value = seconds < 10 ? `0${seconds}` : seconds;
    clearInterval(timerOnStart);
    window.setTimeout(showAlert, 500);
    ringCircle.classList.add("ending");
  } else {
    // Выводим строку в блок для показа таймера
    let strTimerMinuts = Math.trunc(minutes);
    timerSecondsInput.value = seconds < 10 ? `0${seconds}` : seconds;
    timerMinutsInput.value =
      strTimerMinuts < 10 ? `0${strTimerMinuts}` : strTimerMinuts;
  }

  --timeMinutsInSeconds; // Уменьшаем таймер
}

startButton.addEventListener("click", () => {
  if (startStopCounter % 2 === 0) {
    timeMinutsInSeconds = parseInt(timerMinutsInput.value) * 60;
    timeSeconds = parseInt(timerSecondsInput.value);
    disableSettings();
    timerOnStart = setInterval(timer, 1000);
    startButton.innerHTML = "stop";
  } else {
    clearInterval(timerOnStart);
    startButton.innerHTML = "start";
  }
  ringCircle.classList.remove("ending");
  startStopCounter++;
});

function enableSettings() {
  timerMinutsInput.removeAttribute("disabled");
  timerSecondsInput.removeAttribute("disabled");
}

function disableSettings() {
  timerMinutsInput.setAttribute("disabled", "");
  timerSecondsInput.setAttribute("disabled", "");
}

settingButton.onclick = enableSettings;
