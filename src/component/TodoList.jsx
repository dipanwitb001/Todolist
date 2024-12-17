import React from 'react';
import TodoItem from './TodoItem';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getItemsSelector, getStatusSelector } from '../slicers/todoslicer.js';
import { formUpdate } from '../slicers/todoslicer.js';
import TodoForm from './TodoForm.jsx';

const TodoList = () => {
  const todo = useSelector(getItemsSelector);
  const showForm = useSelector(getStatusSelector);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Form Always at the Top */}
      {showForm && (
        <div className="mb-6">
          <TodoForm />
        </div>
      )}

      {/* No Todos State */}
      {(!todo || todo.length === 0) && (
        <div className="flex flex-col items-center justify-center space-y-6 p-10 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
          <h2 className="text-center text-gray-600 text-4xl italic font-bold drop-shadow-md">
            No todo to display
          </h2>
          <Link
            to="/newTodo"
            type="button"
            className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 hover:shadow-2xl transition-transform transform hover:scale-110"
            onClick={() => dispatch(formUpdate())}
          >
            <h1 className="text-3xl">+</h1>
          </Link>
        </div>
      )}

      {/* Todo List with Add Button */}
      {todo && todo.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {todo.map((item) => (
            <TodoItem key={item.id} todo={item} />
          ))}

          {/* Add Todo Button */}
          {!showForm && (
            <div
              className="flex items-center justify-center w-full h-32 border border-gray-300 rounded-lg shadow-lg bg-blue-100 cursor-pointer hover:bg-blue-200 transition-colors"
              onClick={() => dispatch(formUpdate(true))} // Show form
            >
              <h1 className="text-4xl text-blue-600 font-bold">+</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;
