'use client';

import { Todo } from '@/store/todos/todo.interface';
import { TodoItem } from './TodoItem';

interface Props {
  todos: Todo[];
}

export const TodoList = ({ todos }: Props) => {
  if (todos.length === 0) {
    return (
      <div className="mt-4 text-center text-gray-500">
        No todos yet!
      </div>
    );
  }

  return (
    <ul className="mt-4 space-y-2">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
