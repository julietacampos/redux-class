import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO
} from '../constants'; // importing the constants that will define our actions cases, these can also be included inside this file
import {
  addTodo,
  removeTodo,
  toggleTodo
} from '../todos'; // we import our pure functions to be used in our actions

// Reducers
export const todos = (state = [], action) => {
  // Reducers are used with a switch function, and each action has a type and we use that type to determine
  // which action was called and which function we use to change the state
  switch (action.type) {
    case ADD_TODO: return addTodo(action.todo, state);
    case REMOVE_TODO: return removeTodo(action.id, state);
    case TOGGLE_TODO: return toggleTodo(action.id, state);
    default:
      return state;
  }
}