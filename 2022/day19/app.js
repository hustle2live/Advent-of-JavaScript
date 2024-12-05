const inputName = document.querySelector("input#name");
const inputEmail = document.querySelector("input#email");
const inputPassword = document.querySelector("input#password");
const inputConfPassword = document.querySelector("input#confirm-password");

const divsError = document.querySelectorAll(".error");
const divsSuccess = document.querySelectorAll(".success");

const buttonsShowHide = document.querySelectorAll(".show-hide");
const submitButton = document.querySelector('input[type="submit"]');

const success = true;
const error = false;
const fieldsValid = [error, error, error, error];

const statusMessageDiv = document.createElement("span");
document.querySelector("h1").appendChild(statusMessageDiv);

const writeMessageOnSubmit = (innerText) => {
  statusMessageDiv.innerHTML = innerText;
  statusMessageDiv.style.color = "orange";
  statusMessageDiv.style.position = "absolute";
  statusMessageDiv.style.top = "220px";
  return statusMessageDiv;
};

buttonsShowHide.forEach((button) =>
  button.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentNode.classList.toggle("show");
    e.target.parentNode.childNodes[1].classList.toggle("security");
  })
);

const validateUserName = (e) => {
  e.preventDefault();
  const usernameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ0-9-\s]+$/;
  if (!usernameRegex.test(e.key)) return false;
  e.target.value += e.key;
  renderInput();
};
const validateEmail = (e) => {
  const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i;
  if (emailRegex.test(inputEmail.value.trim())) {
    renderFieldStatus(divsSuccess[1], divsError[1]);
    fieldsValid[1] = success;
  } else {
    renderFieldStatus(divsError[1], divsSuccess[1]);
    fieldsValid[1] = error;
  }
};
const renderInput = () => {
  inputName.onkeypress = validateUserName;
  if (inputName.value.trim() === "") {
    renderFieldStatus(divsError[0], divsSuccess[0]);
    fieldsValid[0] = error;
  } else {
    renderFieldStatus(divsSuccess[0], divsError[0]);
    fieldsValid[0] = success;
  }
};
const validatePassword = (e) => {
  const passwordRegex = /^[\S]{6,36}$/;
  if (passwordRegex.test(inputPassword.value)) {
    renderFieldStatus(divsSuccess[2], divsError[2]);
    fieldsValid[2] = success;
  } else {
    renderFieldStatus(divsError[2], divsSuccess[2]);
    fieldsValid[2] = error;
  }
  validatePasswordConfirm();
};
const validatePasswordConfirm = (e) => {
  if (
    (inputPassword.value !== "") &
    (inputPassword.value === inputConfPassword.value)
  ) {
    renderFieldStatus(divsSuccess[3], divsError[3]);
    fieldsValid[3] = success;
  } else {
    renderFieldStatus(divsError[3], divsSuccess[3]);
    fieldsValid[3] = error;
  }
};
const renderFieldStatus = (divShow, divHide) => {
  divHide.classList.add("hide");
  divShow.classList.remove("hide");
};

inputName.oninput = renderInput;
inputEmail.oninput = validateEmail;
inputPassword.oninput = validatePassword;
inputConfPassword.oninput = validatePasswordConfirm;

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const isValidForms = fieldsValid.every((field) => field);
  if (isValidForms) writeMessageOnSubmit("Welcome!");
  else writeMessageOnSubmit("Authentafication failed");
});
