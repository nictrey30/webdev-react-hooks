import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const renderCount = useRef(1);
  // useRef returns an object, which looks like this { current: 1 aka the value we passed as an argument to useRef}

  const inputRef = useRef();

  const prevName = useRef('');

  // useEffect(() => {
  //   setRenderCount((prevCount) => prevCount + 1);
  // }); - will throw an infinite loop

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  // ref vs state: a ref is very similar to state, in that it persists between renders of your component, but unlike state, ref does not cause your component to re-update when it gets changed

  // the second use case for useRef is to reference elements inside your html

  // a third use case for useRef is to store the previous value of your state
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  function focus() {
    inputRef.current.focus();
  }
  return (
    <>
      <input
        // whenever our input gets rendered on the screen, it's going to set the inputRef variable equal to the input element itself
        ref={inputRef}
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}

export default App;
