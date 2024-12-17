import React from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {removeTodo,toggleTask} from '../slicers/todoslicer.js'
import { useDispatch } from 'react-redux';

const TodoItem = ({todo}) => {
 
  // const [title, setTitle] = useState("");
  // const [description,setDescription] = useState("");

  const dispatch = useDispatch();

  return (
    <div className='w-full max-w-sm border-2 border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col'>
      {/* Title Section */}
      <div className='w-full bg-yellow-400 rounded-t-lg flex items-center justify-between p-3'>
        <h1 className='text-center text-lg font-semibold text-gray-800 p-3'>{todo.title}</h1>
        <button
          className='text-gray-800 hover:text-red-600 transition-colors duration-200'
        >
          <RemoveCircleOutlineIcon 
          onClick = {(e) => dispatch(removeTodo({id : todo.id, title : todo.title,description : todo.description}))}
          />
        </button>
      </div>
      {/* Description Section */}
      <div className='p-4 flex items-start space-x-3'>
        <input
          type='checkbox'
          id='todo-checkbox'
          checked={todo.completed}
          onChange={(e) => dispatch(toggleTask({id:todo.id}))}
          className='w-5 h-5 mt-1 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400'
        />
        <label
          htmlFor='todo-checkbox'
          className='text-sm text-gray-700 flex-1 overflow-hidden text-ellipsis cursor-pointer'
        >
          {todo.description}
        </label>
      </div>
    </div>
  );
};

export default TodoItem;
