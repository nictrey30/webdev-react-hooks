import React, { useState } from 'react';
import './App.css';

function App() {
  // we are going to pass to useState what the default state is
  // useState is going to return an array of 2 values
  // useState can be initialized in normal way or with the function version, in the function version runs only the first time the component renders

  // object version of the state
  // const [state, setState] = useState({ count: 0, theme: 'blue' });
  // function changeCount(amount) {
  //   setState((prevState) => {
  //     return { ...prevState, count: prevState.count + amount };
  //   });
  // }

  const [count, setCount] = useState(0);
  // const [count, setCount] = useState(() => {
  //   console.log('initialize state once with the function version of useState');
  //   return 0;
  // });
  const [theme, setTheme] = useState('blue');
  const changeCount = (amount) => {
    // any time you are modifying state where you actually are using the previous value of your state to create the new value you need to use the function version for setting your state with the prevValue
    setCount((prevCount) => prevCount + amount);
  };
  function reset() {
    setCount(0);
  }
  return (
    <div className='counter'>
      <h1>{count}</h1>
      <h4>theme: {theme}</h4>
      <button onClick={() => changeCount(-1)}>-</button>
      <button onClick={reset}>reset</button>
      <button onClick={() => changeCount(1)}>+</button>
    </div>
  );
}

export default App;
