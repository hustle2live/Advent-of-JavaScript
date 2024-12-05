const tipAmountElement = document.getElementById("tip-amount"),
  totalPerPersonElement = document.getElementById("total-per-person"),
  tipPercentages = document.querySelectorAll("input[type=radio]"),
  calculateButton = document.getElementById("calculate");

const getPercentage = () => {
  for (key of tipPercentages) {
    if (key.checked) return +key.value.slice(0, -1);
  }
};

function TipsCalculate() {
  let BillAmount = +document.getElementById("bill-amount").value,
    numberOfPeople = +document.getElementById("number-of-people").value,
    tipAmount = (BillAmount / 100) * getPercentage(),
    totalPerPerson = (BillAmount + tipAmount) / numberOfPeople;

  tipAmountElement.innerHTML = tipAmount.toFixed(2);
  totalPerPersonElement.innerHTML = totalPerPerson.toFixed(2);
}

calculateButton.addEventListener("click", TipsCalculate);
