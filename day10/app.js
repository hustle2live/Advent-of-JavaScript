const passwordFields = document.querySelectorAll("input");
const verifyButton = document.querySelector("button");
const fields = document.querySelector(".fields");

let userPass = [];

for (let i = 0; i < passwordFields.length; i++) {
  passwordFields[i].onkeypress = function getKey(event) {
    userPass[i] = event.key;
    console.log(userPass);
    passwordFields[i].value = "*";
    if (i === passwordFields.length - 1) {
      verifyButton.focus();
    } else passwordFields[i + 1].focus();
  };
}

verifyButton.onclick = function passwordVerify() {
  if (userPass.join("") === "2819") alert("Welcome");
  else alert("Incorrect password!");
};
