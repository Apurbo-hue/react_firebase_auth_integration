import { Component,  StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Components/Home/Home';
import Root from './Layouts/Root';
import Login from './Login/Login';
import Register from './Register/Register';
import AuthProvider from './Contexts/AuthContext/AuthProvider';

import PrivateRoute from './Components/Routes/PrivateRoute';
import Orders from './Components/Orders/Orders';
import Profile from './Components/Profile/Profile';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
      { path: "orders", element:<PrivateRoute><Orders></Orders></PrivateRoute> },
      { path: "profile", element:<PrivateRoute><Profile></Profile></PrivateRoute>}
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
    </AuthProvider>

   
  </StrictMode>,
)
