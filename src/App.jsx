import React from 'react';
//import TodoItem from './component/TodoItem.jsx';
import TodoList from './component/TodoList.jsx';
import {Outlet, useLocation} from 'react-router-dom'
import {getTotalDoneSelector,getTotalDueSelector,getTotalQuantitySelector} from '../src/slicers/todoslicer.js'
import {useSelector} from 'react-redux'

const App = () => {

  const location = useLocation();
  const dueTasks = useSelector(getTotalDueSelector);
  const TotalTasks = useSelector(getTotalQuantitySelector);
  const doneTasks = useSelector(getTotalDoneSelector);

  return (
    <>
      <div className="w-full mx-auto bg-pink-200 bg-opacity-50 rounded-md shadow-md p-4">
  <div className="flex flex-col justify-center items-center">
    <h1 className="text-4xl italic text-center text-red-950 mb-4">My Todo</h1>
    {/* Add TodoItem components below */}
    {/* <TodoItem /> */}
    <div className="p-4 w-full flex justify-between items-center bg-white rounded-md shadow-sm">
      <h2 className="text-lg font-semibold text-gray-700">Total: {TotalTasks}</h2>
      <h2 className="text-lg font-semibold text-gray-700">Due: {dueTasks}</h2>
      <h2 className="text-lg font-semibold text-gray-700">Done: {doneTasks}</h2>
    </div>
  </div>
</div>

      <TodoList />
      {location.pathname==='/newTodo'}
      <Outlet/>
    </>
  );
};

export default App;
