import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import {motion, useMotionValue, useSpring, useTransform} from 'framer-motion'
import { fadeIn } from '../../Variants';
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


    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
  
    const rotateX = useTransform(
      mouseYSpring,
      [-0.5, 0.5],
      ["17.5deg", "-17.5deg"]
    );
    const rotateY = useTransform(
      mouseXSpring,
      [-0.5, 0.5],
      ["-17.5deg", "17.5deg"]
    );
  
    const handleMouseMove = (e) => {
      const rect = e.target.getBoundingClientRect();
  
      const width = rect.width;
      const height = rect.height;
  
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
  
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
  
      x.set(xPct);
      y.set(yPct);
    };
  
    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
        <motion.div
        variants={fadeIn("left", 0.2)}
        initial= "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }} className='cart bg-green-500 mt-10'>
            <div className="cart-container">
                <motion.h4 
                 variants={fadeIn("down", 0.2)}
                 initial= "hidden"
                 whileInView={"show"}
                 viewport={{once: false, amount: 0.7}}
                className='text-2xl text-white text-center'>Order summary</motion.h4>
                <p className='text-lg text-white pt-2'>Total Price: ${total}</p>
                <p className='text-lg text-white pt-2'>Selected Items : {quantity}</p>
                <p className='text-lg text-white pt-2'>Total Shipping: ${totalShipping}</p>
                <p className='text-lg text-white pt-2'>Tax: {tax.toFixed(2)}</p>
                <h6 className='text-lg text-white pt-2'>Grand Total: {grandTotal.toFixed(2)}</h6>
                <button onClick={handelClearCart} className='btn-clear-cart p-3 rounded bg-emerald-500'><span>Clear Cart</span>
                <FontAwesomeIcon className='delete-icon 'icon={faTrashAlt}></FontAwesomeIcon>
                </button>
                {children}
            </div>
        </motion.div>
    );
};

export default Cart;