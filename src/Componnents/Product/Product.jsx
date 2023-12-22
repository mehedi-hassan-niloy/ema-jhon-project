import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import {motion, useMotionValue, useSpring, useTransform} from 'framer-motion'
import { fadeIn } from '../../Variants';

const Product = (props) => {
    const {img, name, seller, price, ratings} = props.product;
    const handelAddToCart = props.handelAddToCart;

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
        variants={fadeIn("right", 0.2)}
        initial= "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        >
         <button onClick={() =>handelAddToCart(props.product)}>

       <div className='sm:w-full relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>

      <img
       style={{
        transform: "translateZ(50px)",
      }}
      
      src={img} 
          alt="" 
          className='object-cover w-max h-max md:h-64 xl:h-80'
          />
          <div className='absolute inset-0 flex flex-col px-6 py-4 text-white transition-opacity duration-200 bg-green-600 bg-opacity-75 opacity-0 hover:opacity-100'>
              <p>Name: {name}</p>
              <br />
              <p>Brand Name: {seller}</p>
              <br />
              <p className=''>Price:${price}</p>
              <br />
              <p className=''>Ratting: {ratings} Star</p>
              <h4 className='mt-5'>Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} /></h4>
          </div>
       </div>

         </button>
      </motion.div>
    );
};

export default Product;