import { INCREMENT, DECREMENT } from '../constants';

// the reducer takes as parameters the current state and an action
// the action is what we pass into the dispatch function
export const countReducer = (state, action) => {
  const { count } = state;
  switch (action.type) {
    case INCREMENT:
      return { count: count + 1 };
    case DECREMENT:
      return { count: count - 1 };
    default:
      return { count };
  }
};
