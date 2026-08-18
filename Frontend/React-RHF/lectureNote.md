## Constructive Distraction
### System thinking

### Other project
### Ongoing Task

## Specials / Extra (revise tagging)

## General Discussion

## Core 

 import { useForm } from "react-hook-form";
 
 let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode:"onChange", // this make error occurs when typing start on the input field
  });

  const onSubmit = (data) => {
    setUsers((prevUsers) => [...prevUsers, data]);
    setShowRegister(false);
    reset();
  };

  <input {...register("fullname", { required: "Name is required" })}>

  <input 
  {...register("username", 
            { required: "Username is required",
                minLength:{ value: 3, message: "Username must be at least 3 characters long" },
                maxLength:{ value: 15,
                message: "Username cannot exceed 15 characters" }
            }
           )}
  >

  <input
  {...register(
            "email", 
            { required: "Email is required" ,
                pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email address"
                }
            })}
  >

  <input
  {...register("password", { required: "Password is required" })}
  >

  <input
  {...register("image", { required: "Image URL is required" })}
  >
