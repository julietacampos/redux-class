import { createStore, combineReducers } from 'redux';
import { todos } from './reducers';
import { addTodo, removeTodo, toggleTodo } from './actions';

// This is a sample reducer just to show that reducers can be combined
// As you can see it has its own initial state and a default action
const user = (state = {
  name: 'Vic',
  lastName: 'Quiroz'
}, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

// Create a rootReducer to manage all the different reducers on the application
// Each reducer can have its own properties and actions
const rootReducer = combineReducers({
  todos,
  user
});

// The store is the single source of truth. This store can include many reducers 
const store = createStore(rootReducer); //When the store is created, it receives a function as a main parameter

// You can subscribe to the store to monitor any changes to it
store.subscribe(() => {
  console.log('-----------\n');
  console.log(store.getState());
  console.log('\n\n');
});

// Actions can be dispatched wherever the store is called
// since our actions are programmed to get a parameter and then
// send the action.type and the parameter to the reducer
// we don't need to specify an action.type here
store.dispatch(addTodo({
  id: 1,
  title: 'Redux Class',
  isComplete: false
}));

store.dispatch(addTodo({
  id: 2,
  title: 'Watch new Vikings season',
  isComplete: true
}));

store.dispatch(removeTodo(2));

store.dispatch(toggleTodo(1));
