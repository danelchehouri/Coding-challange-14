// loanPayment.js
export function calculateLoanPayment(principal, rate, years) {
    const monthlyRate = rate / 12;
    const n = years * 12;
    const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, n);
    const denominator = Math.pow(1 + monthlyRate, n) - 1;
    return numerator / denominator;
}
