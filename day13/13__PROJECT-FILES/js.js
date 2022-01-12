const modalWindow = document.querySelector(".overlay");

modalWindow.classList.add("hide");

document.querySelector(".close").onclick = () =>
  modalWindow.classList.add("hide");

document.querySelector(".dot").onclick = () =>
  modalWindow.classList.remove("hide");
