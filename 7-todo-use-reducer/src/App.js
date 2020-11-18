import React, { useReducer, useState } from 'react';
import todoReducer from './reducers/todoReducer';
import { ACTIONS } from './actions';

const newTodo = (name) => {
  return {
    id: Date.now(),
    name,
    complete: false
  };
};

export default function App() {
  const [name, setName] = useState('');
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // we pass to dispatch the "type" - the thing we want the reducer to do and the "payload" - an obj that contains all the values we need to perform that action
    dispatch({ type: ACTIONS.ADD_TODO, payload: newTodo(name) });
    setName('');
  };

  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          name=''
          id=''
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </>
  );
}
