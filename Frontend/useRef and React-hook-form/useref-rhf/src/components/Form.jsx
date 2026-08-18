import React from "react";
import {useRef} from "react"    
const Form = () => {
    const inputName = useRef();
   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputName.current.value);
   }


  return (
    <div className="h-screen flex justify-center ">
      <form
     
        className="mt-10 w-80 h-[50%] flex flex-col gap-4  bg-slate-200 p-4 rounded-md"
      >
        <input
          ref={inputName}
          className="border border-gray-500 p-2  rounded-lg"
          type="text"
          placeholder="Product Name"
        />
        <input

          className="border border-gray-500 p-2  rounded-lg"
          type="text"
          placeholder="Product Description"
        />
        <input
          className="border border-gray-500 p-2  rounded-lg"
          type="number"
          placeholder="Product Price"
        />
        <span>Select Product Category</span>
        <select>
          <option value="MENS">Men's</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids'</option>
        </select>
        <input
          className="border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500  p-2 rounded-lg"
          type="text"
          placeholder="Product Image URL"
        />
        <button 
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded-md">
          Create
        </button>
      </form>
    </div>
  );
};

export default Form;
