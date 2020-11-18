import { ACTIONS } from '../actions';

const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoReducer;
