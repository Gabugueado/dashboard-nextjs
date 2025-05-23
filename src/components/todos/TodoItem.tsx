'use client';

import { Todo } from '@/store/todos/todo.interface';
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '@/store/todos/todoSlice';
import { IoTrashOutline } from 'react-icons/io5';

interface Props {
  todo: Todo;
}

export const TodoItem = ({ todo }: Props) => {
  const dispatch = useDispatch();

  const onToggleTodo = () => {
    dispatch(toggleTodo(todo.id));
  };

  const onDeleteTodo = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className={`flex items-center justify-between p-2 border-b ${todo.completed ? 'line-through text-gray-500' : ''}`}>
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggleTodo}
          className="mr-2 form-checkbox h-5 w-5 text-blue-600"
        />
        <span>{todo.text}</span>
      </div>
      <button
        onClick={onDeleteTodo}
        className="text-red-500 hover:text-red-700"
      >
        <IoTrashOutline size={20} />
      </button>
    </li>
  );
};
