import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  // slowFunction is called every time we render our App component
  // const doubleNumber = slowFunction(number); -> without memoization
  // the function that we pass to useMemo is the thing that we actually memoize
  // if our number doesn't change we don't need to re-run the slowFunction code
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // Referential Equality
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    };
  }, [dark]);
  useEffect(() => {
    console.log('theme changed');
  }, [themeStyles]);
  return (
    <div>
      <input
        type='number'
        name=''
        id=''
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />
      <button
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}
      >
        change theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}
function slowFunction(num) {
  console.log('calling slow function');
  for (let i = 0; i < 1e9; i++) {}
  return num * 2;
}

export default App;
