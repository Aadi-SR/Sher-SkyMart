import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Login from '../pages/Login'
import Register from '../pages/Register'

const AuthRoutes = () => {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Navigate to="/login" replace />
      },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
    ])
  return (
    <RouterProvider router={router} />
  )
}

export default AuthRoutes