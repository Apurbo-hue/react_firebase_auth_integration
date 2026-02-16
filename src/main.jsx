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
import Orders from './assets/Components/Orders/Orders.jsx'
import Profiles from './assets/Components/Profiles/Profiles.jsx'
import PrivateRoute from './assets/Components/Routes/PrivateRoute.jsx'
import Dashboard from './assets/Components/Dashboard/Dashboard.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "register", Component: Register },
      { path: "login", Component: Login },
      { path: "orders", element:<PrivateRoute><Orders></Orders></PrivateRoute> },
      { path: "profiles", element: <PrivateRoute><Profiles></Profiles></PrivateRoute> },
      {path:"dashboard", element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router}> </RouterProvider>
    </AuthProvider>

  </StrictMode>
)
