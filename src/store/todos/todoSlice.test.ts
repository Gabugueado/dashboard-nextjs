import todoReducer, { addTodo, toggleTodo, deleteTodo } from './todoSlice';
import { Todo } from './todo.interface';

// Initial state for tests, mirroring the slice's initial state structure
const initialState: { todos: Todo[] } = {
  todos: [],
};

// Mock localStorage for tests
let mockLocalStorageStore: { [key: string]: string } = {};

const mockLocalStorage = {
  getItem: (key: string) => mockLocalStorageStore[key] || null,
  setItem: (key: string, value: string) => {
    mockLocalStorageStore[key] = value;
  },
  removeItem: (key: string) => {
    delete mockLocalStorageStore[key];
  },
  clear: () => {
    mockLocalStorageStore = {};
  },
};

// @ts-ignore
global.localStorage = mockLocalStorage;


describe('todoSlice', () => {
  beforeEach(() => {
    // Clear localStorage before each test to ensure isolation
    localStorage.clear();
    // Reset initial state if necessary, though reducers should handle this
  });

  test('should return the initial state', () => {
    expect(todoReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  describe('addTodo', () => {
    test('should add a new todo', () => {
      const action = addTodo('Test Todo');
      const newState = todoReducer(initialState, action);
      expect(newState.todos.length).toBe(1);
      expect(newState.todos[0].text).toBe('Test Todo');
      expect(newState.todos[0].completed).toBe(false);
      expect(newState.todos[0].id).toBeDefined();
    });

    test('should add a new todo even if text is whitespace (current behavior)', () => {
      const action = addTodo('   ');
      const newState = todoReducer(initialState, action);
      expect(newState.todos.length).toBe(1);
      expect(newState.todos[0].text).toBe('   ');
    });
  });

  describe('toggleTodo', () => {
    test('should toggle the completed status of a todo', () => {
      // Add a todo first
      let state = todoReducer(initialState, addTodo('Test Toggle'));
      const todoId = state.todos[0].id;

      // Toggle it
      state = todoReducer(state, toggleTodo(todoId));
      expect(state.todos[0].completed).toBe(true);

      // Toggle it back
      state = todoReducer(state, toggleTodo(todoId));
      expect(state.todos[0].completed).toBe(false);
    });

    test('should do nothing if todo id is not found', () => {
      const stateWithTodo = todoReducer(initialState, addTodo('Test Toggle'));
      const originalState = JSON.parse(JSON.stringify(stateWithTodo)); // Deep copy

      const newState = todoReducer(stateWithTodo, toggleTodo('non-existent-id'));
      expect(newState).toEqual(originalState);
    });
  });

  describe('deleteTodo', () => {
    test('should remove a todo', () => {
      // Add two todos
      let state = todoReducer(initialState, addTodo('Todo 1'));
      state = todoReducer(state, addTodo('Todo 2'));
      const idToDelete = state.todos[0].id;
      const idToKeep = state.todos[1].id;

      state = todoReducer(state, deleteTodo(idToDelete));
      expect(state.todos.length).toBe(1);
      expect(state.todos[0].id).toBe(idToKeep);
    });

    test('should do nothing if todo id is not found', () => {
      const stateWithTodo = todoReducer(initialState, addTodo('Test Delete'));
      const originalState = JSON.parse(JSON.stringify(stateWithTodo)); // Deep copy

      const newState = todoReducer(stateWithTodo, deleteTodo('non-existent-id'));
      expect(newState).toEqual(originalState);
    });
  });
});
