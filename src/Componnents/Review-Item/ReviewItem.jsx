import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';


const ReviewItem = ({product, handelRemoveFromCart}) => {
    const {id, img, price, name, quantity} = product;

    return (
        <div className='review-item'>
            
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price : <span className='Orange-text'>{price}</span></p>
                <p>Order Quantity : <span className='Orange-text'>{quantity}</span></p>
               

            </div>
            <button onClick={()=>handelRemoveFromCart(id)} className='button-delete'>
                <FontAwesomeIcon className='delete-icon'icon={faTrashAlt}></FontAwesomeIcon>
            </button>
           
        </div>
    );
};

export default ReviewItem;