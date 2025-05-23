import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from './todo.interface';
import { loadTodosFromLocalStorage } from './localStorage'; // Import the utility function

interface TodoState {
  todos: Todo[];
}

// Load persisted todos or use an empty array
const persistedTodos = loadTodosFromLocalStorage();
const initialState: TodoState = {
  todos: persistedTodos ? persistedTodos : [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now().toString(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
