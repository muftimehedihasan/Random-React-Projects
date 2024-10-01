import { useState } from 'react';
import PropTypes from 'prop-types';

function ExpenseForm({ onAddExpense }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Convert amount to a number before passing it to onAddExpense
    const expense = { name, amount: parseFloat(amount) };
    
    onAddExpense(expense);
    setName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Expense Name"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

ExpenseForm.propTypes = {
  onAddExpense: PropTypes.func.isRequired,
};

export default ExpenseForm;
