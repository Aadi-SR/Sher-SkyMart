import React from 'react'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AuthLayout from '../layouts/AuthLayout'
import MainLayout from '../layouts/MainLayout'

const AppRoutes = () => {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <AuthLayout />,
        // with replace, the current entry in the history stack will be replaced with the new one, so that the user cannot navigate back to the previous page using the back button.  
        children:[
        {
            path: "",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
      ]
      },

      {
        path: "/main",
        element: <MainLayout />,
        children:[
          {

          }
        ]
      }
        
    ])
  return (
    <RouterProvider router={router} />
    
  )
}

export default AppRoutes