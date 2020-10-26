import React, { useState, useMemo, useEffect } from 'react';
import './App.css';

// useMemo cases
// 1. when we want to make a slow function to don't recompute every single time we render the component, just when the dependency changes
// 2. referencial equality - we only update the reference of that object whenever the actual contents of the object change instead of updating every single time we render

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // slowFunction will be called every time the App gets rendered, including when we change only the theme, so in order to avoid that when our number doesn't change we can use useMemo to cache the result of the function when the number doesn't change
  // const doubleNumber = slowFunction(number);
  const doubleNumber = useMemo(() => {
    // when our number changes we need to re-run the code inside the useMemo hook
    return slowFunction(number);
  }, [number]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    };
    // if ur dark variable doesn't change we don't re-update our themeStyles, so we get the exact same reference as we had the previous time we render our App
  }, [dark]);

  useEffect(() => {
    // this will get triggered every time because the themeStyles is an object and it is not equal with the new themeStyles object with the same values
    console.log('theme changed');
  }, [themeStyles]);

  return (
    <>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div className='output' style={themeStyles}>
        {doubleNumber}
      </div>
    </>
  );
}

function slowFunction(num) {
  console.log('Calling slow function');
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default App;
