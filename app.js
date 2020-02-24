document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value)/1200;
  const calculateNumberOfPayment = parseFloat(years.value)*12;

  const paymentPlusInterestUpAmount = Math.pow(1 + calculateInterest, calculateNumberOfPayment);

  const monthly = (principal * calculateInterest * paymentPlusInterestUpAmount)/(paymentPlusInterestUpAmount - 1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculateNumberOfPayment).toFixed(2);
    totalInterest.value = ((monthly * calculateNumberOfPayment) - principal).toFixed(2);
  } else {
    console.log("Pleas entry value");
  }

  e.preventDefault();
}