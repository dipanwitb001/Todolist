import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo,formUpdate,getStatusSelector} from '../slicers/todoslicer.js'


const TodoForm = () => {

    const dispatch = useDispatch();

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [count,setCount] = useState(0);
    //const [showForm, setshowForm] = useState(true);
    //let count=0;

    // const handleAddTodo = () => {
    //   if(title.trim)
    // }
    const showForm = useSelector(getStatusSelector);
    const handleSubmit = () => {

      if(!title || !description)
      {
        alert("Please fill out all fields!");
        return;
      }

      dispatch(
        addTodo({
          id:Date.now(),
          title,
          description,
          completed: false
        })
      );
      setTitle("");
      setDescription("");
    }

    if(showForm) {
      return (
        <div className="bg-amber-900 w-full max-w-lg h-auto p-6 rounded-md border-2 border-black mx-auto mt-10 shadow-lg mb-2">
          <h1 className="text-center text-4xl italic text-white mb-6">New Todo</h1>
    
          {/* Title Input */}
          <div className="mb-6">
            <label 
              htmlFor="title" 
              className="block text-xl italic text-yellow-200 mb-2"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              required
              onChange={(e)=> setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
    
          {/* Description Input */}
          <div className="mb-6">
            <label 
              htmlFor="description" 
              className="block text-xl italic text-yellow-200 mb-2"
            >
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows="4"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>
    
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition"
              onClick ={(e) => handleSubmit()}
            >
              Add Todo
            </button>
          </div>
        </div>
      );
    }

 
};

export default TodoForm;
