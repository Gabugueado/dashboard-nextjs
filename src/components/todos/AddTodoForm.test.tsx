import { render, screen, fireEvent } from '@testing-library/react';
import { AddTodoForm } from './AddTodoForm';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // For mocking store
import { addTodo } from '@/store/todos/todoSlice';

// Mock Redux store
const mockStore = configureStore([]);

describe('AddTodoForm', () => {
  let store: any;

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn(); // Mock dispatch function
  });

  test('renders the input field and button', () => {
    render(
      <Provider store={store}>
        <AddTodoForm />
      </Provider>
    );

    expect(screen.getByPlaceholderText('Add new todo')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add todo/i })).toBeInTheDocument();
  });

  test('typing in the input updates its value', () => {
    render(
      <Provider store={store}>
        <AddTodoForm />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('Add new todo') as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'New Todo Test' } });
    expect(inputElement.value).toBe('New Todo Test');
  });

  test('submitting the form dispatches addTodo action and clears input', () => {
    render(
      <Provider store={store}>
        <AddTodoForm />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('Add new todo') as HTMLInputElement;
    const addButton = screen.getByRole('button', { name: /add todo/i });

    // Type in the input
    fireEvent.change(inputElement, { target: { value: 'Submit Test' } });
    expect(inputElement.value).toBe('Submit Test');

    // Click the add button
    fireEvent.click(addButton);

    // Check if dispatch was called with addTodo action
    // The addTodo action creator will be called with 'Submit Test'
    // The actual action object will have a payload and a type.
    // We expect that the first argument to dispatch is an action where payload is 'Submit Test'.
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    const dispatchedAction = store.dispatch.mock.calls[0][0];
    expect(dispatchedAction.type).toBe(addTodo.type);
    expect(dispatchedAction.payload).toBe('Submit Test');


    // Check if input is cleared
    expect(inputElement.value).toBe('');
  });

  test('does not dispatch addTodo action if input is empty or whitespace', () => {
    render(
      <Provider store={store}>
        <AddTodoForm />
      </Provider>
    );

    const inputElement = screen.getByPlaceholderText('Add new todo') as HTMLInputElement;
    const addButton = screen.getByRole('button', { name: /add todo/i });

    // Test with empty input
    fireEvent.click(addButton);
    expect(store.dispatch).not.toHaveBeenCalled();

    // Test with whitespace
    fireEvent.change(inputElement, { target: { value: '   ' } });
    fireEvent.click(addButton);
    expect(store.dispatch).not.toHaveBeenCalled(); // trim() logic in component prevents this
  });
});
