// main.js
import { calculateInterest } from './interestRate.js';
import { calculateLoanPayment } from './loanPayment.js';
import { calculateInvestmentReturn } from './investmentReturn.js';

function isValidNumber(value) {
    return !isNaN(value) && value !== '';
}

window.calculateInterest = () => {
    const principal = document.getElementById('interestPrincipal').value;
    const rate = document.getElementById('interestRate').value;
    const time = document.getElementById('interestTime').value;
    
    if (!isValidNumber(principal) || !isValidNumber(rate) || !isValidNumber(time)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }
    
    const interest = calculateInterest(parseFloat(principal), parseFloat(rate) / 100, parseFloat(time));
    document.getElementById('interestResult').innerText = `Interest: ${interest.toFixed(2)}`;
};

window.calculateLoan = () => {
    const principal = document.getElementById('loanPrincipal').value;
    const rate = document.getElementById('loanRate').value;
    const years = document.getElementById('loanYears').value;
    
    if (!isValidNumber(principal) || !isValidNumber(rate) || !isValidNumber(years)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }
    
    const payment = calculateLoanPayment(parseFloat(principal), parseFloat(rate) / 100, parseFloat(years));
    document.getElementById('loanResult').innerText = `Monthly Payment: ${payment.toFixed(2)}`;
};

window.calculateInvestment = () => {
    const principal = document.getElementById('investmentPrincipal').value;
    const rate = document.getElementById('investmentRate').value;
    const timesCompounded = document.getElementById('investmentTimesCompounded').value;
    const years = document.getElementById('investmentYears').value;
    
    if (!isValidNumber(principal) || !isValidNumber(rate) || !isValidNumber(timesCompounded) || !isValidNumber(years)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }
    
    const futureValue = calculateInvestmentReturn(parseFloat(principal), parseFloat(rate) / 100, parseFloat(timesCompounded), parseFloat(years));
    document.getElementById('investmentResult').innerText = `Future Value: ${futureValue.toFixed(2)}`;
};
