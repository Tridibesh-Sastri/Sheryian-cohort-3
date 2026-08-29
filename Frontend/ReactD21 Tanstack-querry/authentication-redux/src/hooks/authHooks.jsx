import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import {toast} from 'react-toastify';
import { useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { addUser } from "../features/authSlice.jsx";

export const useAuth = () => {
  // State to store registered users, initialized from localStorage or an empty array
  const [registerUsers, setRegisterUsers] = useState(
    JSON.parse(localStorage.getItem("registerUsers")) || []
  );


  // Access the Redux store's auth state and dispatch function
  const LoginUser = useSelector((store) => store.auth.user)
  const dispatch = useDispatch()
 
  // Initialize the useForm hook with validation mode and default values
  let {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {
    name: "",
    email: "",
    contactNumber: "",
    password: "",
    confirmPassword: "",
    terms: false,
  },
  });

  // Initialize the useNavigate hook for navigation
  let navigate = useNavigate();

  // Function to handle ****Login form submission*******
  const onLogin = (data) => {
    console.log("Login Data:", data);
    let user = registerUsers.find((user) => user.email === data.email && user.password === data.password);
    if (!user) {
      // alert("Invalid email or password");
      toast.error("Invalid email or password", {
        position: "top-right",
        autoClose: 3000,
      });
    }else{
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(addUser(user));
      toast.success("Login successful")
      reset();
    }


  };

  // Function to handle ******Registration form submission*******
  const onRegister = async (data) => {
    console.log("Registration Data:", data);
    let arr = [...registerUsers, data];
    setRegisterUsers(arr);
    localStorage.setItem("registerUsers", JSON.stringify(arr));
    // Example:
    // await axios.post("/api/register", data);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    reset();

    console.log("Registration successful");
  };


  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    isValid,
    isSubmitting,
    onLogin,
    watch,
    onRegister,
  };
};
