//validation function
function inputValidation() {
  const inputValue = document.getElementById("input-money").value;
  if (inputValue == "") {
    return "please, enter the ammount that you want to deposite or withdraw";
  } else if (isNaN(inputValue)) {
    return "string is not valid ammount, please enter a vilid ammount";
  } else if (parseInt(inputValue) < 0) {
    return "negative number is not valid ammount, please enter a vilid ammount";
  }
}
//validation function
function ammountValidation() {
  const inputWithdrawBalance = parseFloat(
    document.getElementById("input-money").value
  );
  const totalBalence = parseFloat(
    document.getElementById("balance-total").innerText
  );
  if (totalBalence > 200000 && inputWithdrawBalance > 200000) {
    return `sorry! you have exceed your withdraw limit. enter the ammount equal or less than 2 lakh once a time`;
  } else if (inputWithdrawBalance > totalBalence) {
    return (
      "sorry! you have not sufficient balance for withdraw " +
      inputWithdrawBalance +
      " taka"
    );
  }
}
//get input Balance
function getInputAmmount(inputBalanceId) {
  const inputBalance = parseFloat(
    document.getElementById(inputBalanceId).value
  );
  document.getElementById(inputBalanceId).value = "";
  return inputBalance;
}
//get current Balance
function getCurrentAmmount(currentBalanceId, inputBalance) {
  const currentAmmount = parseFloat(
    document.getElementById(currentBalanceId).innerText
  );
  document.getElementById(currentBalanceId).innerText = parseFloat(
    currentAmmount + inputBalance
  );
}
// deposite button event handler
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    if (inputValidation()) {
      alert(inputValidation());
      document.getElementById("input-money").value = "";
      return;
    } else {
      const inputBalance = getInputAmmount("input-money");
      getCurrentAmmount("deposite-total", inputBalance);
      getCurrentAmmount("balance-total", inputBalance);
    }
  });
// withdraw button event handler
const withdrawBtn = document.getElementById("withdraw-button");
withdrawBtn.addEventListener("click", function () {
  if (inputValidation()) {
    alert(inputValidation());
    document.getElementById("input-money").value = "";
    return;
  }
  if (ammountValidation()) {
    alert(ammountValidation());
    document.getElementById("input-money").value = "";
    return;
  } else {
    const inputBalance = getInputAmmount("input-money");
    getCurrentAmmount("withdraw-total", inputBalance);
    getCurrentAmmount("balance-total", -inputBalance);
  }
});
