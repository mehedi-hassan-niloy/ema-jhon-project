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
        <div className='cart'>
            <div className="cart-container">
                <h4>Order summary</h4>
                <p>Selected Items : {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: {tax.toFixed(2)}</p>
                <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
                <button onClick={handelClearCart} className='btn-clear-cart'><span>Clear Cart</span>
                <FontAwesomeIcon className='delete-icon'icon={faTrashAlt}></FontAwesomeIcon>
                </button>
                {children}
            </div>
        </div>
    );
};

export default Cart;