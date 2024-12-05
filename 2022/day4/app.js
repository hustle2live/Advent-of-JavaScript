const keyButtons = document.querySelectorAll("button");

function keyboardEvent(event) {
  keyButtons.forEach((key) => {
    if (
      key.className.includes("jiggle") &&
      key.getAttribute("data-key") === event.key.toUpperCase()
    ) {
      key.classList.remove("jiggle");
      keyButtons[
        Math.floor(Math.random() * (keyButtons.length - 1))
      ].classList.add("jiggle");
    }
  });
}

document.body.addEventListener("keydown", keyboardEvent);
