function calculateBudget() {
    var income = parseFloat(document.getElementById('income').value);
    var expenses = parseFloat(document.getElementById('expenses').value);
    var savings = parseFloat(document.getElementById('savings').value);

    if (isNaN(income) || isNaN(expenses) || isNaN(savings)) {
        document.getElementById('result').innerHTML = "Por favor, introduce números válidos";
        return;
    }

    var budget = income - expenses - savings;
    document.getElementById('result').innerHTML = "Tu Presupuesto es: $" + budget.toFixed(2);
}
