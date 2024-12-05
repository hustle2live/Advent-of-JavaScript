const inputElement = document.querySelector("input");
const outPutElement = document.querySelector(".dollars");

function changeTheRange() {
  if (inputElement.value < 1000) {
    outPutElement.innerHTML = `0${inputElement.value.slice(
      0,
      -2
    )}.${inputElement.value.slice(-2)}`;
  } else {
    outPutElement.innerHTML = `${inputElement.value.slice(
      0,
      -2
    )}.${inputElement.value.slice(-2)}`;
  }
}

inputElement.onclick = changeTheRange;
inputElement.onmousemove = changeTheRange;
