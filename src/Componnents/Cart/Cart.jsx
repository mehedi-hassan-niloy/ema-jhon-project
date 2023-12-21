import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = (props) => {
     const {cart, handelClearCart, children} = props;
    let total = 0;
    let totalShipping = 0;
    let quantity =0;
    for (const product of cart){
        product.quantity = product.quantity || 1 ;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping ;
        quantity = quantity + product.quantity;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;
    return (
        <div className='cart bg-green-500 mt-10'>
            <div className="cart-container">
                <h4 className='text-2xl text-white text-center'>Order summary</h4>
                <p className='text-lg text-white pt-2'>Selected Items : {quantity}</p>
                <p className='text-lg text-white pt-2'>Total Price: ${total}</p>
                <p className='text-lg text-white pt-2'>Total Shipping: ${totalShipping}</p>
                <p className='text-lg text-white pt-2'>Tax: {tax.toFixed(2)}</p>
                <h6 className='text-lg text-white pt-2'>Grand Total: {grandTotal.toFixed(2)}</h6>
                <button onClick={handelClearCart} className='btn-clear-cart p-3 rounded bg-emerald-500'><span>Clear Cart</span>
                <FontAwesomeIcon className='delete-icon 'icon={faTrashAlt}></FontAwesomeIcon>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Cart;