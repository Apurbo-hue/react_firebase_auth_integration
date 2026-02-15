import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Layout/Root.jsx'
import Home from './assets/Components/Home/Home.jsx'
import Register from './assets/Components/Register/Register.jsx'
import Login from './assets/Components/LogIn/Login.jsx'
import AuthProvider from './assets/Components/Contexts/AuthContext/AuthProvider.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "register", Component: Register },
      { path: "login", Component: Login }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router}> </RouterProvider>
    </AuthProvider>



  </StrictMode>,
)
