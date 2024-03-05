import '../styles/states.css'
import Button from "../components/Button.jsx";
import {useState} from "react";
import Calculator from "../components/Calculator.jsx";
import PasswordGenerator from "../components/PasswordGenerator.jsx";

const States = () => {
  const [count, setCount] = useState(0);

  const handleClick = (number) => {
    if (count + number > 100 || count + number < 0) return;
    setCount(count + number);
  }


  return (
    <section>
      <hr/>
      <div className="counter">
        <Button onClick={() => handleClick(-1)}>-</Button>
        {count}
        <Button onClick={() => handleClick(1)}>+</Button>
      </div>
      <hr/>
      <Calculator/>
      <hr/>
      <PasswordGenerator/>
      <hr/>
    </section>
  );
}

export default States;
