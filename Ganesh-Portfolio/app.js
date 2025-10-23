const sipAmount = document.querySelector('.sip-amount');
const percentage = document.querySelector('.percentage');
const years = document.querySelector('.years');
const returnResult = document.querySelector('.return');


function calculate() {
    let annualRate = parseFloat(percentage.value) / 100;

    // Calculate monthly interest rate as a number
    let monthlyRate = Math.pow(1 + annualRate, 1 / 12) - 1;

    const n = parseInt(years.value) * 12;  // total number of months
    const sip = parseFloat(sipAmount.value);

    // SIP future value formula
    const M = sip * (((Math.pow(1 + monthlyRate, n) - 1) / monthlyRate) * (1 + monthlyRate));

    // Format result in INR
    const formattedAmount = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 2
    }).format(M);

    // Display result
    returnResult.textContent = formattedAmount;

    // Clear inputs
    sipAmount.value = '';
    percentage.value = '';
    years.value = '';
}
