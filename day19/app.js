const inputsNodeList = document.querySelectorAll("input");

const inputName = document.querySelector("input#name");
const inputEmail = document.querySelector("input#email");
const inputPassword = document.querySelector("input#password");
const inputConfPassword = document.querySelector("input#confirm-password");

const divsError = document.querySelectorAll(".error");
const divsSuccess = document.querySelectorAll(".success");

const validateUserName = (e) => {
  e.preventDefault();
  const usernameRegex = /^[a-zA-Zа-яА-ЯїЇєЄґҐ0-9-\s]+$/;
  if (!usernameRegex.test(e.key)) return false;
  e.target.value += e.key;
  renderInput();
};
const validateEmail = (e) => {
  const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i;
  if (emailRegex.test(inputEmail.value))
    renderFieldStatus(divsSuccess[1], divsError[1]);
  else renderFieldStatus(divsError[1], divsSuccess[1]);
};
const renderInput = () => {
  if (inputName.value === "") renderFieldStatus(divsError[0], divsSuccess[0]);
  else renderFieldStatus(divsSuccess[0], divsError[0]);
};
const renderFieldStatus = (divShow, divHide) => {
  divHide.classList.add("hide");
  divShow.classList.remove("hide");
};
const validatePassword = (e) => {
  const passwordRegex = /^[\S]{6,36}$/;
  if (passwordRegex.test(inputPassword.value))
    renderFieldStatus(divsSuccess[2], divsError[2]);
  else renderFieldStatus(divsError[2], divsSuccess[2]);
  validatePasswordConfirm();
};

const validatePasswordConfirm = (e) => {
  if (
    (inputPassword.value !== "") &
    (inputPassword.value === inputConfPassword.value)
  )
    renderFieldStatus(divsSuccess[3], divsError[3]);
  else renderFieldStatus(divsError[3], divsSuccess[3]);
};

inputName.onkeypress = validateUserName;
inputName.oninput = renderInput;

inputEmail.oninput = validateEmail;
inputPassword.oninput = validatePassword;
inputConfPassword.oninput = validatePasswordConfirm;
