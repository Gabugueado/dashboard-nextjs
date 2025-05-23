'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/store/todos/todoSlice';

export const AddTodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addTodo(text.trim()));
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new todo"
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
      />
      <button
        type="submit"
        className="flex-shrink-0 p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
      >
        Add Todo
      </button>
    </form>
  );
};
