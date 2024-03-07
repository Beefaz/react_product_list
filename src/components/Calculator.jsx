import '../styles/calculator.css'
import Button from "../components/Button.jsx";
import {useState} from "react";
import {evaluate} from "mathjs";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const actions = ['+', '-', '*', '/', 'C', '='];
const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (symbol) => {
    if (symbol === 'C') return setInput('');
    if (input.includes('=')) return;

    if (symbol === '=') try {
      return setInput(`${input} = ${evaluate(input)}`);
    } catch {
      return setInput(`Error`);
    }
    if (actions.includes(symbol)) return setInput(`${input} ${symbol} `);
    return setInput(`${input}${symbol}`);
  }

  const renderButtons = (arr) =>
    arr.map((symbol, index) =>
      <Button
        key={index}
        onClick={() => handleClick(symbol)}>
        {symbol === '*' ? '∗' : symbol}
      </Button>);

  return (
    <div className="calc">
      <div className="calc-controller">
        <div className="input">{input}</div>
        <div className="numbers">
          {renderButtons(numbers)}
        </div>
        {renderButtons(actions)}
      </div>
    </div>
  );
}

export default Calculator;
