import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Componnents/Shop/Shop';
import Home from './Componnents/Layout/Home';
import Order from './Componnents/Orders/Order';
import Inventory from './Componnents/Inventory/Inventory';
import Login from './Componnents/Login/Login';
import cartProductsLoder from './Loders/cartProduct';
import CheckOut from './Componnents/Checkout/CheckOut';
import SignUp from './Componnents/SignUp/SignUp';
import AuthProvider from './Componnents/Providers/AuthProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element: <Order />,
        loader: cartProductsLoder

      },
      {
        path: 'inventory',
        element: <Inventory />
      },
      {
        path: 'checkout',
        element: <CheckOut></CheckOut>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
