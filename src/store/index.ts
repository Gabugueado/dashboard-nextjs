import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter/counterSlice';
import todoReducer from './todos/todoSlice';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { saveTodosToLocalStorage } from './todos/localStorage'; // Import the save utility

// Renaming original store function to avoid naming conflict
const configureAppStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
      todos: todoReducer,
    },
  });
};

export const store = configureAppStore(); // Create the store instance

// Subscribe to store changes to save todos
store.subscribe(() => {
  const state = store.getState();
  if (state.todos && state.todos.todos) { // Ensure todos state and array exist
    saveTodosToLocalStorage(state.todos.todos);
  }
});

// Infer the type of store
export type AppStore = ReturnType<typeof configureAppStore>; // Use the function for type inference
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()