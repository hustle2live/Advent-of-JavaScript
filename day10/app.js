const passwordFields = document.querySelectorAll('input[type="text"]');
const verifyButton = document.querySelector("button");
const fields = document.querySelector(".fields");

let userPass = [];

for (let i = 0; i < passwordFields.length; i++) {
  const cell = passwordFields[i];
  const nextCell = passwordFields[i + 1];

  cell.oninput = () => {
    if (cell.value.length >= cell.maxLength) {
      if (i === passwordFields.length - 1) verifyButton.focus();
      else nextCell.focus();
    }
  };

  cell.onpaste = function pastePassword(data) {
    const paste = (data.clipboardData || window.clipboardData).getData("text");
    let k = 0;

    while (i < passwordFields.length) {
      passwordFields[i].value = "";
      passwordFields[i].value = paste.slice(k, k + 1);

      if (i === passwordFields.length - 1) {
        verifyButton.focus();
      } else passwordFields[i + 1].focus();

      k++;
      i++;
    }
  };

  cell.classList.add("pincode");
}

function passwordVerify(password) {
  userPass = [];
  for (let i = 0; i < passwordFields.length; i++)
    userPass[i] = passwordFields[i].value;

  if (userPass.join("") === password) alert("Welcome");
  else alert("Incorrect password!");
}

verifyButton.addEventListener("click", () => passwordVerify("2819"));
