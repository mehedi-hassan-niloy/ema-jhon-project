import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../Review-Item/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

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
        <div className='shop-container'>
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
                        <button className='btn-proceed'>Proceed Checkout</button>
                    </Link>
                </Cart>
            </div>

        </div>
    );
};

export default Order;