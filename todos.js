import findIndex from 'lodash/findIndex';

// Pure functions that do all the works the redux actions will dispatch
// As you can see, we're always returning new objects, no mutations here

export const addTodo = (newTodo = {}, todos = []) => {
  return [
    newTodo, // we always add the new todo to the top of the array
    ...todos,
  ];
};

export const removeTodo = (id, todos) => {
  const index = findIndex(todos, (todo) => todo.id === id);
  return [
    ...todos.slice(0, index), // We skip the todo to remove and leave it out of the new array
    ...todos.slice(index + 1, todos.length),
  ];
};

export const toggleTodo = (id, todos) => {
  const index = findIndex(todos, (todo) => todo.id === id);
  const currentTodo = todos[index];
  return[
    ...todos.slice(0, index),
    Object.assign({}, currentTodo, {
      isComplete: !currentTodo.isComplete,
    }), // We just add a new todo object with the isComplete property toggled
    ...todos.slice(index + 1, todos.length),
  ];
};