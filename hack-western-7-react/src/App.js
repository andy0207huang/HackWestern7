import './App.css';
import Transaction from "./Transaction";
import Tuition from "./Tuition";
import Expenses from "./Expenses";
import Quick from "./Quick";

function App() {
  return (
    <div className="App">
      <h3>Welcome back person!</h3>
      <Tuition/>
      <div className= "row">
        <Expenses expense="Housing Expense"/>
        <Expenses expense="Monthly Budget"/>
      </div>
      <h1>Quick Access</h1>
      <div className= "row">
        <Quick name="Tuition"/>
        <Quick name="Food"/>
        <Quick name="Rent"/>
        <Quick name="Osap"/>
        <Quick name="Job"/>
      </div>
      <Transaction date="02/11/2020" type="Job" amount ="$1000.95"/>
      <Transaction date="02/10/2020" type="Tuition" amount ="-$18334.95"/>
      <Transaction date="01/10/2020" type="Rent" amount ="-$900.95"/>
      <Transaction date="29/10/2019" type="Food" amount ="-$1.95"/>
    </div>
  );
}

export default App;
