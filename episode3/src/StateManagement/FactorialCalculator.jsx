import React, { useState, useMemo } from "react";
function FactorialCalculator() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");
  function calculateFactorial(n) {
    console.log("Calculating factorial...");
    if (n === 0 || n === 1) return 1;

    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  const factorial = useMemo(() => calculateFactorial(number), [number]);

  function handleNumberChange(e) {
    const value = parseInt(e.target.value, 10);
    setNumber(isNaN(value) ? 0 : value);
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>Factorial Calculator</h1>
      <div>
        <label> Number: 
            <input type="number" value={number} onChange={handleNumberChange} min="0" />
        </label>
      </div>

      <div>
        <strong>Factorial:</strong> {factorial}
      </div>

      <div>
        <label> Unrelated Text:
          <input type="text" value={text} onChange={handleTextChange} />
        </label>
      </div>
    </div>
  );
}

export default FactorialCalculator;