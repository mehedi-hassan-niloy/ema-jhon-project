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
import PrivetRoute from './routes/PrivetRoute';
import Banner from './Componnents/Header/Home/Home/Banner';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path:'/',
        element: <Banner></Banner>
      },
      {
        path: 'shop',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element: <Order />,
        loader: cartProductsLoder

      },
      {
        path: 'inventory',
        element: <PrivetRoute><Inventory /></PrivetRoute>
      },
      {
        path: 'checkout',
        element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>
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
