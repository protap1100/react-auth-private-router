import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/AuthProvider';
import Orders from './Components/Orders';
import PrivateRoutes from './Routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/home',
        element : <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path :'/register',
        element : <Register></Register>
      },
      {
        path :'/orders',
        element : <PrivateRoutes>
          <Orders></Orders>
        </PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
