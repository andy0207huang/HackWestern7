import './App.css';

function Expenses({expense}) {
  return (
    <div className = "expenses">
        <p>{expense}</p>
        <h3>$11754.25</h3>
        
    </div>
  );
}

export default Expenses;