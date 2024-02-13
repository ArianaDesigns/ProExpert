function calculateBudget() {
    var income = parseFloat(document.getElementById('income').value);
    var expenses = parseFloat(document.getElementById('expenses').value);
    var savings = parseFloat(document.getElementById('savings').value);

    if (isNaN(income) || isNaN(expenses) || isNaN(savings)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers for income, expenses, and savings.";
        return;
    }

    var budget = income - expenses - savings;
    document.getElementById('result').innerHTML = "Your budget is: $" + budget.toFixed(2);
}
