import React from "react";
import { useState } from "react";
import Nav from "./Nav";

const Register = ({ setLogin, setUsers, setPagePtr }) => {
  const [formData, setFormData] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;

    // console.log(e.target); // Log the input element
    // console.log("Input changed:", name, value); // Log the input change
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    console.log("Submitting formData to API:", formData); // Log the formData before submission
    setUsers((prevUsers) => [...prevUsers, formData]); // Add the new user data to the users array
    // console.log("Updated users array:", users); // Log the updated users array
    setFormData({
      fullname: "",
      username: "",
      email: "",
      image: "",
      password: "",
    });

    setPagePtr(1); // Navigate to the AllUsers page after registration
  };

  return (
    <div>
    <Nav setPagePtr={setPagePtr} />
    <div className="h-[calc(100vh-80px)] w-screen bg-slate-950 flex flex-col items-center justify-center " >
      <div className="h-3/4 w-2/7 flex justify-center items-center flex-col gap-15 rounded-4xl shadow-amber-500 shadow-2xl bg-slate-400">
        <h1 className="text-3xl font-bold text-amber-600">
          Register for an Account
        </h1>
        <form
          method="GET"
          onSubmit={handleSubmit}
          action=""
          className="w-2/3  py-7 h-1/2 flex flex-col gap-4 justify-between items-center "
        >
          <input
            required
            value={formData.fullname || ""}
            name="fullname"
            onChange={handleInput}
            className="h-12 w-full px-4 focus:ring-amber-500 focus:ring-2 focus:outline-none focus:bg-blue-900 focus:text-amber-100 rounded-2xl bg-yellow-100"
            type="text"
            id=""
            placeholder="Full Name"
          />
          <input
            name="username"
            value={formData.username || ""}
            required
            onChange={handleInput}
            className="h-12 w-full px-4 focus:ring-amber-500 focus:ring-2 focus:outline-none focus:bg-blue-900 focus:text-amber-100 rounded-2xl bg-yellow-100"
            type="text"
            id=""
            placeholder="Username"
          />
          <input
            name="email"
            value={formData.email || ""}
            required
            onChange={handleInput}
            className="h-12 w-full px-4 focus:ring-amber-500 focus:ring-2 focus:outline-none focus:bg-blue-900 focus:text-amber-100 rounded-2xl bg-yellow-100"
            type="text"
            id=""
            placeholder="email@domain.com"
          />
          <input
            name="image"
            value={formData.image || ""}
            required
            onChange={handleInput}
            className="h-12 w-full px-4 focus:ring-amber-500 focus:ring-2 focus:outline-none focus:bg-blue-900 focus:text-amber-100 rounded-2xl bg-yellow-100"
            type="text"
            id=""
            placeholder="Image URL"
          />

          <input
            name="password"
            value={formData.password || ""}
            required
            onChange={handleInput}
            className="h-12 w-full px-4 focus:ring-amber-500 focus:ring-2 focus:outline-none focus:bg-blue-900 focus:text-amber-100 rounded-2xl bg-yellow-100"
            type="password"
            id=""
            placeholder="Password"
          />
          <button
            type="submit"
            className="h-12 w-1/3 rounded-2xl  bg-blue-500 text-white hover:bg-white hover:text-blue-900 hover:border-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-900 active:border-0"
          >
            Register
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <span
            onClick={() => setLogin((prev) => !prev)}
            className="decoration-underline text-amber-700 hover:cursor-pointer hover:text-amber-900 hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Register;
