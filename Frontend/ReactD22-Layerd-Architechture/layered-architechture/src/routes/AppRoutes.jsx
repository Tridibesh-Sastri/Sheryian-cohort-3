import React from 'react'
import { useEffect } from 'react';
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'


import PublicProtected from './protected/PublicProtected'
import MainProtected from './protected/MainProtected'

import AuthLayout from '../app/layouts/AuthLayout'
import MainLayout from '../app/layouts/MainLayout'

import PublicLayout from '../app/layouts/PublicLayout'

import LoginPage from '../features/auth/ui/pages/LoginPage'
import RegisterPage from '../features/auth/ui/pages/RegisterPage'
import ProfilePage from '../features/auth/ui/pages/ProfilePage'
import ProductPage from '../features/products/ui/pages/ProductPage'
import ProductDetailsPage from '../features/products/ui/pages/ProductDetailsPage'
import OrderPage from '../features/orders/ui/pages/OrderPage'
import CartPage from '../features/cart/ui/pages/CartPage'

import HomePage from '../shared/ui/pages/HomePage'
import AboutPage from '../shared/ui/pages/AboutPage'

// **************Hydration imports***************/

// **************inside Hydration imports***************/
//import { hydrateUserApi } from '../features/auth/api/authApi';
//import { useDispatch } from 'react-redux';
//import { addUser } from '../features/auth/state/authSlice';

// **************Outside Hydration imports using hooks***************/
import {useUtilsHook} from '../utils/hooks/useUtilsHook';


console.log("AppRoutes.jsx file rendering....");


const appRoutes = () => {
    const {hydratedUser} = useUtilsHook();

    
    
    // const dispatch = useDispatch();

    // const hydratedUser = async ()=>{
    //     console.log("Hydrating user from localStorage...");
    //     try {
    //         let res =  await hydrateUserApi();
    //         console.log("Hydrated user data:", res);
    //         dispatch(addUser(res)); // Dispatch the action to add user data to the Redux store
    //     }catch (error) {
    //         console.error("Error occurred while hydrating user:", error);
    //     }
        
    // }

 useEffect(() => {
    hydratedUser();
  }, []);


 let routs = createBrowserRouter([
    {
        path: '/',
        element: <PublicProtected/>,
        children: [
            {
                path: '',
                element: <AuthLayout/>,
                children: [
                    {
                        path: '',
                        element: <PublicLayout/>,
                        children: [
                            {
                                path: '',
                                element: <HomePage/>
                            },
                            {
                                path: 'about',
                                element: <AboutPage/>
                            },
                            {
                                path: 'product',
                                element: <ProductPage/>
                            }
                        ]
                    },
                    {
                        path: 'login',
                        element: <LoginPage/>
                    },
                    {
                        path: 'register',
                        element: <RegisterPage/>
                    }
                ] 
            }

        ]
    },
    {
        path: '/main',
        element: <MainProtected/>,
        children: [
            {
                path: '',
                element: <MainLayout/>,
                children: [
                    {
                        path: '',
                        element: <HomePage/>
                    },
                    {
                        path: 'product',
                        element: <ProductPage/>
                    },
                    {
                        path: 'product/:id',
                        element: <ProductDetailsPage/>
                    },
                    {
                        path: 'about',
                        element: <AboutPage/>
                    },
                    {
                        path: 'cart',
                        element: <CartPage/>
                    },
                    {
                        path: 'order',
                        element: <OrderPage/>
                    },
                    {
                        path: 'profile',
                        element: <ProfilePage/>
                    }
                ]
            }
        ]
    }
 ])

  return <RouterProvider router={routs} />
}

export default appRoutes
