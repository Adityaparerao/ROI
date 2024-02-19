// Calculation Functions
function calculateFD(principal, interestRate, tenure) {
    let maturityAmount = principal * (1 + (interestRate/100) * tenure);
    return maturityAmount.toFixed(2); // Return with 2 decimal places
}

function calculateSIP(monthlyInvestment, returnRate, tenure) {
    let futureValue = monthlyInvestment * (((1 + returnRate/100)**(tenure * 12) - 1) / (returnRate/100));  
    return futureValue.toFixed(2); 
}

// Event Handling
document.getElementById('calculate').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('principal').value);
    const fdRate = parseFloat(document.getElementById('fdRate').value);
    const sipAmount = parseFloat(document.getElementById('sipAmount').value);
    const sipRate = parseFloat(document.getElementById('sipRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    const fdResult = calculateFD(principal, fdRate, tenure);
    const sipResult = calculateSIP(sipAmount, sipRate, tenure); 

    // Update Result Display
    document.getElementById('results').innerHTML = `
        <h3>Results</h3>
        <p>FD Maturity Amount: INR ${fdResult}</p>
        <p>SIP Future Value: INR ${sipResult}</p>
    `;
});
