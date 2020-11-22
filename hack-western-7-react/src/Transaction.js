import './App.css';

function Transaction({date, type, amount}) {
  return (
    <div className = "transaction">
        <p>Date: {date}</p>
        <p>Type: {type}</p>
        <h3>{amount}</h3>
    </div>
  );
}

export default Transaction;