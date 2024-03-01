import '../styles/calculator.css'
import Button from "../components/Button.jsx";
import {useState} from "react";
import {evaluate} from "mathjs";

const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
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

  const getButtonClasses = (symbol) => {
    if (numbers.includes(symbol)) return `num-${symbol}`;
    return undefined;
  }

  const generateButtons = (arr) =>
    arr.map((symbol, index) =>
      <Button
        key={index}
        className={getButtonClasses(symbol)}
        onClick={() => handleClick(symbol)}>
        {symbol === '*' ? '∗' : symbol}
      </Button>);

  return (
    <div className="calc">
      <div className="calc-controller">
        <div className="input">{input}</div>
        <div className="numbers">
          {generateButtons(numbers)}
        </div>
        {generateButtons(actions)}
      </div>
    </div>
  );
}

export default Calculator;
