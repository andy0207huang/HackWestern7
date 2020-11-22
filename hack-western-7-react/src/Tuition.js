import './App.css';
import girl from './girl.png';

function Tuition() {
  return (
    <div className = "tuition">
        <p>Tuition Expense Fee:</p>
        <h3>$11754.25</h3>
        <img src={girl} alt = "girl"/>
        
    </div>
  );
}

export default Tuition;