import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [name, setName] = useState('');
  // a ref is very similar to state, in that it persists between renders of your component, but the important thing to know about refs vs state is that refs do not cause your component to re-update when it gets changed
  const renderCount = useRef(1); // {current: 0} -> the current property of renderCount persists between renders

  const inputRef = useRef(); // case2
  const prevName = useRef(''); // case3 -> persist values between renders without causing a re-render

  useEffect(() => {
    renderCount.current += 1;
  });

  function focus() {
    // console.log(inputRef.current); // case2
    inputRef.current.focus();
  }

  // case3: storing the prevoius value of your state
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  // case2: the biggest use case of refs is to reference elements inside of your html
  return (
    <div>
      <label htmlFor='name'>Name: </label>
      {/* case2: whenever our input gets rendered on our screen it's gonna set the inputRef variable = input element*/}
      <input
        ref={inputRef}
        type='text'
        name=''
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is: {name} and it used to be: {prevName.current}
      </div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>focus</button>
    </div>
  );
}

export default App;
