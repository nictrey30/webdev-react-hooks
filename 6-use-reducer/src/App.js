import './App.css';
import React, { useReducer } from 'react';
import { countReducer } from './reducers/countReducer';
import { DECREMENT, INCREMENT } from './constants';

function App() {
  // const [count, dispatch] = useReducer(countReducer, 0);
  // the dispatch function is what we call in order to update our state
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div className='App'>
      <button onClick={() => dispatch({ type: DECREMENT })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: INCREMENT })}>+</button>
    </div>
  );
}

export default App;
