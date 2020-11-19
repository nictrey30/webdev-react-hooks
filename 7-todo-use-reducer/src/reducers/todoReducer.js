import { ACTIONS } from '../actions';

const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload];
    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

export default todoReducer;
