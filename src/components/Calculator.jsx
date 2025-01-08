import React, { useState } from "react";
import "./Calculator.css"

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); 
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="buttons">
        {["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", ".", "=", "/"].map((item) => (
          <button
            key={item}
            onClick={() => (item === "=" ? calculateResult() : handleClick(item))}
          >
            {item}
          </button>
        ))}
        <button className="clear" onClick={clearInput}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Calculator;