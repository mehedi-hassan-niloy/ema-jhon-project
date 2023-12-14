import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {img, name, seller, price, ratings} = props.product;
    const handelAddToCart = props.handelAddToCart;
  
    return (

        <div>
         <button onClick={() =>handelAddToCart(props.product)}>

       <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>

      <img src={img} 
          alt="" 
          className='object-cover w-full h-56 md:h-64 xl:h-80'
          />
          <div className='absolute inset-0 flex flex-col px-6 py-4 text-gray-300 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
              <p>Name: {name}</p>
              <br />
              <p>Seller Name: {seller}</p>
              <br />
              <p className=''>Price:${price}</p>
              <br />
              <p className=''>Ratting: {ratings} Star</p>
              <h4 className='mt-5'>Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} /></h4>
          </div>
       </div>

         </button>
      </div>
    );
};

export default Product;