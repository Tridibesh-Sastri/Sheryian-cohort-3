import React from "react";
import { useState } from "react";

const Form = () => {
  // ******************** brute force method to handle form data
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // console.log(name, email, password);

  // return(
  //     <div className = "flex flex-col gap-4 bg-slate-700  items-center">
  //         <input onChange={(e)=>setName(e.target.value)} className="border-amber-300 border-2 border-solid w-70" type="text" placeholder="Enter your name" />
  //         <input onChange={(e)=>setEmail(e.target.value)} className="border-amber-300 border-2 border-solid w-70" type="text" placeholder="Enter your email" />
  //         <input onChange={(e)=>setPassword(e.target.value)} className="border-amber-300 border-2 border-solid w-70" type="text" placeholder="Enter your password" />
  //         <button >Submit</button>
  //         <p className="text-[#71c9f5]">{name} {email} {password}</p>

  //     </div>
  // )

  //***************** using single state object to handle form data better approach
  // const [formData, setFormData] = useState({})

  // console.log(formData);

  // return(
  //     <div className = "flex flex-col gap-4 bg-slate-700  items-center">
  //         <input onChange={(e)=>setFormData({...formData, name: e.target.value})} className="border-amber-300 border-2 border-solid w-70" type="text" placeholder="Enter your name" />
  //         <input onChange={(e)=>setFormData({...formData, email: e.target.value})} className="border-amber-300 border-2 border-solid w-70" type="text" placeholder="Enter your email" />
  //         <input onChange={(e)=>setFormData({...formData, password: e.target.value})} className="border-amber-300 border-2 border-solid w-70" type="text" placeholder="Enter your password" />
  //         <button >Submit</button>
  //         <p className="text-[#71c9f5]">{formData.name} {formData.email} {formData.password}</p>

  //     </div>
  // )

  //**************** Using optimized approach to handle form data using single state object and a single onChange handler function
  const [formData, setFormData] = useState({});

  const handleChange = (e) =>{
    const { name, value}  = e.target;

    setFormData({ ...formData, [name]: value });
    }
  return (
    <div className="flex flex-col gap-4 bg-slate-700  items-center">
      <input
        name="name"
        onChange={handleChange}
        className="border-amber-300 border-2 border-solid w-70"
        type="text"
        placeholder="Enter your name"
      />
      <input
        name="email"
        onChange={handleChange}
        className="border-amber-300 border-2 border-solid w-70"
        type="text"
        placeholder="Enter your email"
      />
      <input
        name="password"
        onChange={handleChange}
        className="border-amber-300 border-2 border-solid w-70"
        type="text"
        placeholder="Enter your password"
      />
      <button >Submit</button>


        <p className="text-[#71c9f5]">  
            name -> {formData.name}</p>
        <p className="text-[#71c9f5]">  
            email -> {formData.email}</p>
        <p className="text-[#71c9f5]">  
            password -> {formData.password}</p>
    </div>
  );
};

export default Form;
