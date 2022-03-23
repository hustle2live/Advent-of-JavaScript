const inputsNodeList = document.querySelectorAll("input");

const inputName = document.querySelector("input#name");
const inputEmail = document.querySelector("input#email");
const inputPassword = document.querySelector("input#password");
const inputConfPassword = document.querySelector("input#confirm-password");

// console.log(inputsNodeList);

const validateUserName = (e) => {
  e.preventDefault();
  const usernameRegex = /^[a-zA-Z0-9-\s]+$/;

  if (!usernameRegex.test(e.key)) return false;
  e.target.value += e.key;
};

inputName.onkeypress = validateUserName;

const validateEmail = (e) => {
  // e.preventDefault();
  const emailRegex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/i;

  console.log(emailRegex.test(inputEmail.value));

  // if (!emailRegex.test(e.key)) return false;
  // e.target.value += e.key;
};

inputEmail.oninput = validateEmail;
