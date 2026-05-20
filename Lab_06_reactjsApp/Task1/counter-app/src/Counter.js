import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => Math.max(0, prevCount - 1));
  const reset = () => setCount(0);

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <button onClick={increment} style={{ margin: '5px' }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: '5px' }}>
        Decrement
      </button>
      <button onClick={reset} style={{ margin: '5px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
