import React from "react";
import { useForm } from "react-hook-form";

const Register = ({ setUsers, setShowRegister }) => {
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode:"onChange",
    
  });

  const onSubmit = (data) => {
    setUsers((prevUsers) => [...prevUsers, data]);
    setShowRegister((prev) => !prev); // Close the register form after submission
    resetForm(); // Reset the form after submission  
  };

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full gap-4'>

    <div className ='flex flex-col justify-around items-center h-2/3 w-1/3 bg-linear-to-b from-slate-950 to-blue-800 rounded-2xl shadow-xl shadow-blue-700 border border-slate-800 overflow-hidden p-3 gap-4'>
      <form 
      className='flex flex-col justify-around items-center h-full w-full gap-4'
      onSubmit={handleSubmit(onSubmit)}
      >

        <h1 className='text-2xl font-bold text-blue-400'>Create User</h1>

        <input className='w-[80%] text-xl text-slate-950 bg-slate-100 rounded-2xl p-3 ring-2 ring-blue-400 focus:ring-amber-400 focus:outline-none' 
        type="text"
        placeholder="Full Name"
        {...register(
            "fullname", 
            { 
                required: "Name is required" ,
                pattern : {
                    value: /^(?!\s*$).+/,
                    message: "Name cannot be empty or whitespace"
                }
            })}
        />
       
        {errors.fullname && <p className ='text-left w-[80%] text-red-500 text-sm'>{errors.fullname.message}</p>}
       
        <input className='w-[80%] text-xl text-slate-950 bg-slate-100 rounded-2xl p-3 ring-2 ring-blue-400 focus:ring-amber-400 focus:outline-none'
          type="text"
          placeholder="Username"
          {...register("username", 
            { 
                required: "Username is required",
                minLength:{ value: 3, message: "Username must be at least 3 characters long" },
                maxLength:{ value: 15,
                message: "Username cannot exceed 15 characters" }
            })}
          />
       
        {errors.username && <p className ='text-left w-[80%] text-red-500 text-sm'>{errors.username.message}</p>}
       
        <input className='w-[80%] text-xl text-slate-950 bg-slate-100 rounded-2xl p-3 ring-2 ring-blue-400 focus:ring-amber-400 focus:outline-none'
          type="email"
          placeholder="Email"
          {...register(
            "email", 
            { required: "Email is required" ,
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address"
                }
            })}
          />
       
        {errors.email && <p className ='text-left w-[80%] text-red-500 text-sm'>{errors.email.message}</p>}   
       
        <input className='w-[80%] text-xl text-slate-950 bg-slate-100 rounded-2xl p-3 ring-2 ring-blue-400 focus:ring-amber-400 focus:outline-none'
          type="password"
          placeholder="Password"
          {...register("password", { required: "Password is required" })}
        />
        
        {errors.password && <p className ='text-left w-[80%] text-red-500 text-sm'>{errors.password.message}</p>}
        
        <input className='w-[80%] text-xl text-slate-950 bg-slate-100 rounded-2xl p-3 ring-2 ring-blue-400 focus:ring-amber-400 focus:outline-none'
          type="url" 
          placeholder="Image URL" 
          {...register("image", { required: "Image URL is required" })} 
        />
        
        {errors.image && <p className ='text-left w-[80%] text-red-500 text-sm'>{errors.image.message}</p>}
        
        <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xlw-[80%] ' type="submit">Create User</button>
      </form>
    </div>
    </div>
  );
};

export default Register;
