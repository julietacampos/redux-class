import { assert } from 'chai';
import deepFreeze from 'deep-freeze';

import {
  addTodo,
  removeTodo,
  toggleTodo
} from '../todos';

describe('addTodo', () => {
  it('Should not mutate the array', () => {
    const todos = [{
      id: 1,
      title: 'Clean up kitchen',
      description: 'ASAP',
      isComplete: false
    }];

    deepFreeze(todos);
    addTodo({}, todos);

  });

  it('Should add a todo at the beginning',() => {
    const todos = [{
      id: 1,
      title: 'Clean up kitchen',
      description: 'ASAP',
      isComplete: false
    }];

    deepFreeze(todos);

    const newTodo = [{
      id: 2,
      title: 'Vacuum',
      description: 'Can wait',
      isComplete: false
    }];

    deepFreeze(newTodo);

    const newTodos = addTodo(newTodo, todos);

    assert.lengthOf(newTodos, 2);
    assert.deepEqual(newTodos[0], newTodo);
  });
}); 

describe('removeTodo', () => {
  it('Should remove a todo', () => {
    const todos = [
      {
        id: 1,
        title: 'Clean up kitchen',
        description: 'ASAP',
        isComplete: false,
      },
      {
        id: 2,
        title: 'Vacuum',
        description: 'Can wait',
        isComplete: true,
      },
      {
        id: 3,
        title: 'Go to work',
        description: 'Monday to Friday',
        isComplete: true,
      }
    ];

    deepFreeze(todos);

    assert.sameDeepMembers(
      removeTodo(2, todos),
      [{
        id: 1,
        title: 'Clean up kitchen',
        description: 'ASAP',
        isComplete: false,
      },
      {
        id: 3,
        title: 'Go to work',
        description: 'Monday to Friday',
        isComplete: true,
      }]
    );

    assert.sameDeepMembers(
      removeTodo(1, todos),
      [{
        id: 2,
        title: 'Vacuum',
        description: 'Can wait',
        isComplete: true,
      },
      {
        id: 3,
        title: 'Go to work',
        description: 'Monday to Friday',
        isComplete: true,
      }]
    );

  });

  it('Should not remove if doesn\'t exist', () => {
    const todos = [
      {
        id: 1,
        title: 'Clean up kitchen',
        description: 'ASAP',
        isComplete: false,
      },
      {
        id: 2,
        title: 'Vacuum',
        description: 'Can wait',
        isComplete: true,
      },
      {
        id: 3,
        title: 'Go to work',
        description: 'Monday to Friday',
        isComplete: true,
      }
    ];

    deepFreeze(todos);

    assert.sameDeepMembers(
      removeTodo(5, todos),
      todos
    );
  });
});

describe('toggleTodo', () => {
  it('Should mark an incomplete todo as complete', () => {
    const todos = [{
        id: 1,
        title: 'Clean up kitchen',
        description: 'ASAP',
        isComplete: false,
      },
      {
        id: 2,
        title: 'Vacuum',
        description: 'Can wait',
        isComplete: false,
      },
      {
        id: 3,
        title: 'Go to work',
        description: 'Monday to Friday',
        isComplete: true,
      }];

      deepFreeze(todos);

      assert.deepEqual(
        toggleTodo(2, todos)[1],
        {
          id: 2,
          title: 'Vacuum',
          description: 'Can wait',
          isComplete: true,
        }
      );
  });



  it('Should mark a complete todo as incomplete', () => {
    const todos = [{
        id: 1,
        title: 'Clean up kitchen',
        description: 'ASAP',
        isComplete: false,
      },
      {
        id: 2,
        title: 'Vacuum',
        description: 'Can wait',
        isComplete: false,
      },
      {
        id: 3,
        title: 'Go to work',
        description: 'Monday to Friday',
        isComplete: true,
      }];

      deepFreeze(todos);

      assert.deepEqual(
        toggleTodo(3, todos)[2],
        {
          id: 3,
          title: 'Go to work',
          description: 'Monday to Friday',
          isComplete: false,
        }
      );
  });
});
