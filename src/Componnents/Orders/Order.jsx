import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../Review-Item/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Footer from '../Header/Home/Footer/Footer';

const Order = () => {
    const saveCart = useLoaderData();
    const [cart, setCart]=useState(saveCart)
    const handelRemoveFromCart = (id) =>{
    const remaining = cart.filter(product => product.id !==id)
    setCart(remaining);  
    removeFromDb(id) 
    }
    const handelClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
      <div>
          <div className='grid gap-6  lg:grid-cols-2 sm:grid-cols'>
            <div className='review-container'>
            {
                cart.map(product =><ReviewItem
                key={product.id}
                product={product}
                handelRemoveFromCart={handelRemoveFromCart}
                />)
            }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handelClearCart={handelClearCart}
                >
                    <Link className='proceed-link'  to={"/checkout"}>
                        <button className='btn-proceed p-3 rounded bg-lime-500'>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>

        </div>
        <Footer></Footer>
      </div>
    );
};

export default Order;