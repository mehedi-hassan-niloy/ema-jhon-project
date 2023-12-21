import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';
import { Button, Card } from 'flowbite-react';


const ReviewItem = ({ product, handelRemoveFromCart }) => {
    const { id, img, price, name, quantity } = product;

    return (
        /*    <div className='review-item'>
               
               <img src={img} alt="" />
               <div className='review-details'>
                   <p className='product-title'>{name}</p>
                   <p>Price : <span className='Orange-text'>{price}</span></p>
                   <p>Order Quantity : <span className='Orange-text'>{quantity}</span></p>
                  
   
               </div>
               <button onClick={()=>handelRemoveFromCart(id)} className='button-delete'>
                   <FontAwesomeIcon className='delete-icon'icon={faTrashAlt}></FontAwesomeIcon>
               </button>
              
           </div> */

        <div>
            <Card className="max-w-sm" imgSrc={img} horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Price : {price}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">Quantity : {quantity}</p>

                <Button onClick={()=>handelRemoveFromCart(id)}>Delete
                <FontAwesomeIcon className='delete-icon pl-3'icon={faTrashAlt}></FontAwesomeIcon>
                </Button >
            </Card>
        </div>
    );
};

export default ReviewItem;