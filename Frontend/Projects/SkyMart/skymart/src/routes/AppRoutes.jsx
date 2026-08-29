import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import PublicPage from "../pages/PublicPage";

import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Shop from "../pages/Shop";
import ProtectedRoute from "../layouts/ProtectedRoute";
import Consumers from "../pages/Consumers";
import Profile from "../pages/Profile";

import ProductDetails from "../pages/ProductDetails";
import CartTest1 from "../components/CartTest1";

import PublicRoute from "../layouts/PublicRoute";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicPage />
    },
    {
      path: "/auth",
      element: <PublicRoute />, // This component need Outlet to join the child routes with the parent route
      children: [
        {
          path: "/auth",
          element: <AuthLayout />, // This component need Outlet to join the child routes with the parent route
          children: [
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedRoute />, // This component need Outlet to join the child routes with the parent route
      children: [
        {
          path: "",
          element: <Layout />,
          children: [
            {
              path: "",
              element: <Home />,
            },
            {
              path: "about",
              element: <About />,
            },
            {
              path: "shop",
              element: <Shop />, // This component need Outlet to join the child routes with the parent route
              children: [
                {
                  path: "carttest",
                  element: <CartTest1 />,
                },
              ],
            },
            {
              path: "consumers",
              element: <Consumers />,
            },
            {
              path: "profile",
              element: <Profile />,
            },
            {
              path: "shop/:id",
              element: <ProductDetails />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
