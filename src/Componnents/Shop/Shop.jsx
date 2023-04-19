import React, { useEffect, useState } from 'react';
import {addToDb, deleteShoppingCart, getShoppingCart} from '../../utilities/fakedb'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect( () =>{
     fetch('products.json')
     .then(res => res.json())
     .then(data =>  setProducts(data))
    }, []);

    useEffect( () =>{
        const storedCart = getShoppingCart();
        const saveCart = []
        for (const id in storedCart){
            const addedProduct = products.find(product => product.id === id);

            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
            console.log('addedProduct',addedProduct); 
        }

        setCart(saveCart);

    } ,[products])

    const handelAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
        
       }
       const handelClearCart = () =>{
        setCart([]);
        deleteShoppingCart();
       }

    return (
        <div className='shop-container'>
            <div className="products-container">
            {
                products.map(product => <Product
                key={product.id}
                product = {product}
                handelAddToCart = {handelAddToCart}
                
                ></Product>)
            }
            </div>
            <Cart 
             cart ={cart}
             handelClearCart = {handelClearCart}
            >
               <Link className='proceed-link' to={"/orders"}>
                <button className='btn-proceed'>Review Order</button>
               </Link>
            </Cart>
        </div>
    );
};

export default Shop;