import { $todoStore } from 'store';
import { addTodo } from 'store/events';
import { updateTodo } from 'store/events';
import { removeTodo } from 'store/events';

const updatedTodo = <T>(todo: T, newTodo: T): T => ({
  ...todo,
  ...newTodo,
});

export const todoAPI = () => {
  $todoStore.on(addTodo, (todos, newTodo) => [...todos, newTodo]);

  $todoStore.on(updateTodo, (todos, { id, data }) =>
    todos.map((todo) => (todo.id === id ? updatedTodo(todo, data) : todo)),
  );

  $todoStore.on(removeTodo, (todos, index) =>
    todos.filter((todo) => todo.id !== index),
  );

  return {
    $todoStore,
    addTodo,
    updateTodo,
    removeTodo,
  };
};
