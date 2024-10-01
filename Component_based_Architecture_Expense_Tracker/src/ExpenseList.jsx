import PropTypes from 'prop-types';

function ExpenseList({ expenses }) {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          {expense.name} - ${expense.amount}
        </li>
      ))}
    </ul>
  );
}

// Adding PropTypes validation
ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default ExpenseList;
