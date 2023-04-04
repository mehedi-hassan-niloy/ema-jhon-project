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

const router = createBrowserRouter([
  {
    path: '/',
    element : <Home></Home>,
    children :[
      {
        path : '/',
        element: <Shop></Shop>
      },
      {
        path: '/orders',
        element:<Order/>,
        loader : cartProductsLoder
        
      },
      {
        path:'inventory',
        element:<Inventory/>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
