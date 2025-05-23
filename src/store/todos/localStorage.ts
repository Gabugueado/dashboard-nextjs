import { Todo } from './todo.interface';

export const loadTodosFromLocalStorage = (): Todo[] | undefined => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const serializedTodos = window.localStorage.getItem('todos');
      if (serializedTodos === null) {
        return undefined;
      }
      return JSON.parse(serializedTodos);
    } catch (error) {
      console.error("Could not load todos from localStorage", error);
      return undefined;
    }
  }
  return undefined;
};

export const saveTodosToLocalStorage = (todos: Todo[]): void => {
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const serializedTodos = JSON.stringify(todos);
      window.localStorage.setItem('todos', serializedTodos);
    } catch (error) {
      console.error("Could not save todos to localStorage", error);
    }
  }
};
