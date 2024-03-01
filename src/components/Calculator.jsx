import '../styles/calculator.css'
import Button from "../components/Button.jsx";
import {useState} from "react";
import {evaluate} from "mathjs";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const actions = ['+', '-', '*', '/', 'C', '='];

const generateButtons = (arr, state, setState) =>
  arr.map((symbol, index) =>
    <Button
      key={index}
      onClick={() => handleClick(symbol, state, setState)}>
      {symbol === '*' ? '∗' : symbol}
    </Button>);

const handleClick = (symbol, state, setState) => {
  if (symbol === 'C') return setState('');
  if (state.includes('=')) return;

  if (symbol === '=') try {
    return setState(`${state} = ${evaluate(state)}`);
  } catch {
    return setState(`Error`);
  }
  if (actions.includes(symbol)) return setState(`${state} ${symbol} `);
  return setState(`${state}${symbol}`);
}

const Calculator = () => {
  const [input, setInput] = useState('');

  return (
    <div className="calc">
      <div className="calc-controller">
        <div className="input">{input}</div>
        <div className="numbers">
          {generateButtons(numbers, input, setInput)}
        </div>
        {generateButtons(actions, input, setInput)}
      </div>
    </div>
  );
}

export default Calculator;
