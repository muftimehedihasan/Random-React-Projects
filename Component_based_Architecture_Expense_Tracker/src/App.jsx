import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';  // Assuming ExpenseForm is in the same folder
import ExpenseList from './ExpenseList';  // Assuming ExpenseList is in the same folder

function App() {
  const [expenses, setExpenses] = useState([]);

  // Function to handle adding a new expense
  const handleAddExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);
  };

  return (
    <>
      <h1>Expense Tracker</h1>
      {/* Pass handleAddExpense as the onAddExpense prop */}
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} />
    </>
  );
}

export default App;
