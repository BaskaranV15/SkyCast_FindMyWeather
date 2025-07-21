import React, { useState } from 'react'

const CounterComponent = () => {
    
    const [count, setCount] = useState(0);

    const handleClick = () => {
      setCount((count) => count + 1);
    }
  
  const handleReset = () => {
    setCount(0);
    }
  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p>Count is {count}</p>
      <p>
        {count%2==0?"Even Number":"Odd Number"}
      </p>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default CounterComponent