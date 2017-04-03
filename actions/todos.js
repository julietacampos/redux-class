import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from '../constants';

// Actions have a type which is the action to execute and in this case we're receiving
// a parameter and sending it to the reducer to execute directly along with the
// action.type instead of sending it all from the store.dispatch function
export const addTodo = todo => ({
  type: ADD_TODO,
  todo
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
