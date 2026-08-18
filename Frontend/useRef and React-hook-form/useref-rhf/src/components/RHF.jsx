import React from 'react'
import {useForm} from "react-hook-form"


const RHF = () => {
    console.log("RHF rendering...")

    let {register, handleSubmit, reset, formState: {errors}} = useForm();


    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

  return (
        <div className="h-screen flex justify-center ">
      <form
     
     className="mt-10 w-80 h-[50%] flex flex-col gap-4  bg-slate-200 p-4 rounded-md"
     >
          <h1 className="text-xl font-bold">RHF Form</h1>
        <input
          {...register("productName",{required:true})}
          className="border border-gray-500 p-2  rounded-lg"
          type="text"
          placeholder="Product Name"
        />
        <input
        {...register("productCategory",{required:false})}
          className="border border-gray-500 p-2  rounded-lg"
          type="text"
          placeholder="Product Category"
        />
        <input
          {...register("productPrice", {required: true})}
          className="border border-gray-500 p-2  rounded-lg"
          type="number"
          placeholder="Product Price"
        />

        <input
          {...register("productImage", {required: true})}
          className="border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500  p-2 rounded-lg"
          type="text"
          placeholder="Product Image URL"
        />
        <button 
        onClick = {handleSubmit(onSubmit)}
        className="bg-blue-500 text-white p-2 rounded-md">
          Create
        </button>
      </form>
    </div>
  )
}

export default RHF
