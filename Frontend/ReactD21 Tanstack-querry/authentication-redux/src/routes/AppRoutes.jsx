import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App.jsx";
import AuthProtected from "./protected/AuthProtected.jsx";
import MainProtected from "./protected/MainProtected.jsx";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ShopPage from "../pages/ShopPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import RegisterPage from "../pages/RegisterPage.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import { useDispatch } from "react-redux";
import { addUser } from "../features/authSlice.jsx";
import { useEffect } from "react";
import { toast } from "react-toastify";

const AppRoutes = () => {
  const dispatch = useDispatch();

  const hydrateUser = () => {
    console.log("Hydrating user from localStorage...");
    let user = JSON.parse(localStorage.getItem("user")) || null;

    if (user) {
      dispatch(addUser(user));
    } else {
      toast.error("Please login to continue");
    }
  };
  useEffect(() => {
    hydrateUser();
  }, []);

  let router = createBrowserRouter([
    {
      path: "/",
      element: <AuthProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
            {
              path: "shop",
              element: <ShopPage />,
            }
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
