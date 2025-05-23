import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from './TodoItem';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // For mocking store
import { toggleTodo, deleteTodo } from '@/store/todos/todoSlice';
import { Todo } from '@/store/todos/todo.interface';

// Mock Redux store
const mockStore = configureStore([]);

describe('TodoItem', () => {
  let store: any;
  const mockTodo: Todo = { id: '1', text: 'Test Todo Item', completed: false };
  const mockTodoCompleted: Todo = { id: '2', text: 'Completed Todo', completed: true };

  beforeEach(() => {
    store = mockStore({});
    store.dispatch = jest.fn(); // Mock dispatch function
  });

  test('renders the todo text', () => {
    render(
      <Provider store={store}>
        <TodoItem todo={mockTodo} />
      </Provider>
    );
    expect(screen.getByText('Test Todo Item')).toBeInTheDocument();
  });

  test('checkbox state reflects todo.completed (false)', () => {
    render(
      <Provider store={store}>
        <TodoItem todo={mockTodo} />
      </Provider>
    );
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  test('checkbox state reflects todo.completed (true)', () => {
    render(
      <Provider store={store}>
        <TodoItem todo={mockTodoCompleted} />
      </Provider>
    );
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });

  test('applies line-through style when todo is completed', () => {
    render(
      <Provider store={store}>
        <TodoItem todo={mockTodoCompleted} />
      </Provider>
    );
    // The <li> element is the parent of the text and checkbox
    // We check if its class list contains 'line-through'
    const listItem = screen.getByText('Completed Todo').closest('li');
    expect(listItem).toHaveClass('line-through');
  });
  
  test('does not apply line-through style when todo is not completed', () => {
    render(
      <Provider store={store}>
        <TodoItem todo={mockTodo} />
      </Provider>
    );
    const listItem = screen.getByText('Test Todo Item').closest('li');
    expect(listItem).not.toHaveClass('line-through');
  });


  test('clicking checkbox dispatches toggleTodo action', () => {
    render(
      <Provider store={store}>
        <TodoItem todo={mockTodo} />
      </Provider>
    );
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    const dispatchedAction = store.dispatch.mock.calls[0][0];
    expect(dispatchedAction.type).toBe(toggleTodo.type);
    expect(dispatchedAction.payload).toBe(mockTodo.id);
  });

  test('clicking delete button dispatches deleteTodo action', () => {
    render(
      <Provider store={store}>
        <TodoItem todo={mockTodo} />
      </Provider>
    );
    // The delete button is identified by its content (IoTrashOutline icon)
    // We can find it by its role or a more specific test ID if added.
    // For now, assuming it's the only button in the item.
    const deleteButton = screen.getByRole('button'); 
    fireEvent.click(deleteButton);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    const dispatchedAction = store.dispatch.mock.calls[0][0];
    expect(dispatchedAction.type).toBe(deleteTodo.type);
    expect(dispatchedAction.payload).toBe(mockTodo.id);
  });
});
