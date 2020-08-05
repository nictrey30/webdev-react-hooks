import React, { useState, useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
  CHANGE_COUNT: 'change-count'
};

// instead of having a setCount function we have a dispatch function which allows us to call the reducer function we pass to useReducer
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RESET:
      return { count: 0 };
    case ACTIONS.CHANGE_COUNT:
      return { count: state.count + action.payload.amount };
    default:
      return state;
  }
}

function App() {
  // const [count, setCount] = useState(0);

  // function changeCount(amount) {
  //   setCount((prevCount) => prevCount + amount);
  // }

  // function resetCount() {
  //   setCount(0);
  // }

  //  the reducer function takes in a current state as well as an action to perform on the state and it returns the new state.
  // const [count, dispatch] = useReducer(reducer, 0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  // What happens if you want to pass data to your reducer, though? This is actually really simple. Since we can pass anything we want to dispatch we can just add our data to the object we pass to dispatch. The common practice is to put all your data inside a property called payload on your object.
  return (
    <>
      <span>{state.count}</span>
      <br />
      <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>-</button>
      <button
        onClick={() =>
          dispatch({ type: ACTIONS.CHANGE_COUNT, payload: { amount: 5 } })
        }
      >
        Add 5
      </button>
      <button onClick={() => dispatch({ type: ACTIONS.RESET })}>reset</button>
    </>
  );
}

export default App;
