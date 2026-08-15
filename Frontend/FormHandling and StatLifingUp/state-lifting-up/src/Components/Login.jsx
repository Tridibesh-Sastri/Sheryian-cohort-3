import React from "react";
import { useState } from "react";
import Nav from "./Nav";

const Login = ({ setLogin,setPagePtr }) => {
  const [formData, setFormData] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
    <Nav setPagePtr={setPagePtr} />
    <div className="h-[calc(100vh-80px)] w-screen bg-slate-950 flex flex-col items-center justify-center " >
      <div className="h-3/4 w-2/7 flex justify-center items-center flex-col gap-15 rounded-4xl shadow-amber-500 shadow-2xl bg-slate-400">
        <h1 className="text-3xl font-bold text-amber-600">
          Login to your Account
        </h1>
        <form
          action=""
          className="w-2/3  py-7 h-1/2 flex flex-col gap-4 justify-between items-center "
          >
          <input
            name="username"
            onChange={handleInput}
            className="h-12 w-full px-4 focus:ring-amber-500 focus:ring-2 focus:outline-none focus:bg-blue-900 focus:text-amber-100 rounded-2xl bg-yellow-100"
            type="text"
            name=""
            id=""
            placeholder="Username"
            />
          <input
            name="password"
            onChange={handleInput}
            className="h-12 w-full px-4 focus:ring-amber-500 focus:ring-2 focus:outline-none focus:bg-blue-900 focus:text-amber-100 rounded-2xl bg-yellow-100"
            type="password"
            name=""
            id=""
            placeholder="Password"
            />
          <button className="h-12 w-1/3 rounded-2xl  bg-blue-500 text-white hover:bg-white hover:text-blue-900 hover:border-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900 active:border-0">
            Login
          </button>
        </form>
        <p>
          Didn't have an account?{" "}
          <span
            onClick={() => setLogin((prev) => !prev)}
            className="decoration-underline text-amber-700 hover:cursor-pointer hover:text-amber-900 hover:underline"
            >
            Register here
          </span>
        </p>
      </div>
    </div>
              </div>
  );
};

export default Login;
