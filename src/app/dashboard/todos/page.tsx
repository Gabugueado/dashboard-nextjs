'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store'; // Adjust if your RootState is elsewhere
import { AddTodoForm } from '@/components/todos/AddTodoForm';
import { TodoList } from '@/components/todos/TodoList';

export default function TodosPage() {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
      
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <AddTodoForm />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}
