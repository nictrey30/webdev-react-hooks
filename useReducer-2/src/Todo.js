import React from 'react';
import { ACTIONS } from './App';

// function Todo({todo, dispatch}) { -> object destructuring in props
function Todo(props) {
  return (
    <div>
      <span style={{ color: props.todo.complete ? '#aaa' : '#000' }}>
        {props.todo.name}
      </span>
      <button
        onClick={() =>
          props.dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: { id: props.todo.id }
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          props.dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: { id: props.todo.id }
          })
        }
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
