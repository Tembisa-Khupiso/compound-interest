var principal = 0;
var interestRate = 0;
var timesCompounded = 0;
var termOfLoan = 0;
var amount = 0;

function simpleInterest() {
  event.preventDefault();
  var principal = parseFloat(document.getElementById("principalSimple").value);
  var interestRate = parseFloat(document.getElementById("interestSimple").value);
  interestRate = interestRate / 100;
  var termOfLoan = parseFloat(document.getElementById("termSimple").value);
  var simpleInt = principal * interestRate * termOfLoan;
  var amount = (principal + simpleInt).toFixed(2);
  document.getElementById("siOutput-01").innerHTML = "Interest: $" + simpleInt.toFixed(2);
  document.getElementById("siOutput-02").innerHTML = "Total plus interest: $" + amount;
}