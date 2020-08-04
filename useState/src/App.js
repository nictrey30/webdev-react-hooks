import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('green');
  function changeCount(amount) {
    setCount((prevCount) => prevCount + amount);
  }
  function reset() {
    setCount(0);
  }
  useEffect(() => {
    setTheme(count < 0 ? 'red' : 'green');
  }, [count]);
  return (
    <div className='counter'>
      <h1 style={{ color: theme }}>{count}</h1>
      <button onClick={() => changeCount(-1)}>-</button>
      <button onClick={() => reset()}>reset</button>
      <button onClick={() => changeCount(1)}>+</button>
    </div>
  );
}

export default App;
