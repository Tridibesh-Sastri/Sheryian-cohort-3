import React from "react";
// import { productHook } from "../hooks/productHook";

const Filters = ({filterProduct}) => {

    // const {filterProduct} = productHook()
 
  return (

    <div className="flex gap-4 items-center border-gray-500 border-2 justify-between p-4  rounded-lg">
      <div className="flex w-full gap-8 items-center justify-around">
        <input 
        onChange={(e=>{
            filterProduct(e.target.value)
        })}
        type="text " className="p-2 w-full text-black bg-gray-300 outline-none" placeholder="Search products..." />
        <button className="bg-slate-700 border-2 text-white p-2 rounded-lg hover:bg-yellow-600">Search</button>
        <select name="" id="" className="p-2 text-black bg-gray-300 outline-none">
          <option value="">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
