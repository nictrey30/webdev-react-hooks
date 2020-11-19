import React, { useState, useCallback } from 'react';
import List from './List';

export default function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // useCallback only recreates our getItems function when the number changes
  // the one big difference between useMemo and useCallback is that useMemo takes a function and it's going to retun to you the return value of that function, but useCallback takes a function, but that is actually what useCallback returns
  // in this case getImes it is set to the whole function. If we used useMemo, getItems it would be set to the array of numbers returned by the function
  const getItems = useCallback(
    (incrementer) => {
      return [
        number + incrementer,
        number + incrementer + 1,
        number + incrementer + 2
      ];
    },
    [number]
  );

  const theme = {
    backgroundColor: dark ? '#333' : '#fff',
    color: dark ? '#fff' : ' #333'
  };

  return (
    <div style={theme}>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}
