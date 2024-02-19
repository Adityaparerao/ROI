// Calculation Functions (You provided these, no changes needed)
function calculateLumpSum(investmentAmount, returnRate, tenure) {
    let futureValue = investmentAmount * (1 + returnRate/100)**tenure;
    return futureValue.toFixed(2);
}

function calculateSIP(monthlyInvestment, returnRate, tenure) {
    let futureValue = monthlyInvestment * (((1 + returnRate/100)**(tenure * 12) - 1) / (returnRate/100));  
    return futureValue.toFixed(2);
}

// Event Handling
document.getElementById('calculate').addEventListener('click', () => {
    // Gather input values
    const investmentAmount = parseFloat(document.getElementById('investmentAmount').value);
    const returnRate = parseFloat(document.getElementById('returnRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);
    const sipAmount = parseFloat(document.getElementById('sipAmount').value);

     // Error Handling (Basic Example)
    if (isNaN(investmentAmount) || isNaN(returnRate) || isNaN(tenure) || isNaN(sipAmount)) {
        alert("Please enter valid numbers for all fields.");
        return; // Stop execution 
    }

    // Calculations
    const lumpSumResult = calculateLumpSum(investmentAmount, returnRate, tenure);
    const sipResult = calculateSIP(sipAmount, returnRate, tenure);

    // Update Result Display
    const results = document.getElementById('results');
    results.innerHTML = `
        <h3>Results</h3>
        <p>Lump Sum Future Value: INR ${lumpSumResult}</p>
        <p>SIP Future Value: INR ${sipResult}</p>
    `;
});
