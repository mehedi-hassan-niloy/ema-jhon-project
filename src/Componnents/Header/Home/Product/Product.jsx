import { useEffect, useState } from "react";

import { getShoppingCart } from "../../../../utilities/fakedb";
import { Link } from "react-router-dom";



const Product = () => {
    const [products, setProducts] = useState([]);


    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>  setProducts(data))
       }, []);
    

  
    return (
        <div className='mt-10'>
            <div className="mb-7">
            <h1 className=" text-3xl text-bold mb-3">Product</h1>
             <span className="w-20 h-1.5 bg-green-500 inline-block rounded-2xl flex justify-center items-center"></span>
            </div>
        <div className="grid gap-6 mb-8 lg:grid-cols-4 sm:grid-cols-2">

        {
               products.slice(0, 8).map(product=><div
               key={product.id}
                >
                <Link to='/shop'>
     
              <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
     
             <img src={product.img} 
                 alt="" 
                 className='object-cover w-full h-56 md:h-64 xl:h-80'
                 />
                 <div className='absolute inset-0 flex flex-col px-6 py-4 text-gray-300 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
                     <p>Name: {product.name}</p>
                     <br />
                     <p>Seller Name: {product.seller}</p>
                     <br />
                     <p className=''>Price:${product.price}</p>
                     <br />
                     <p className=''>Ratting: {product.ratings} Star</p>
                 </div>
              </div>
     
                </Link>
             </div>)
            }
          
        </div>
        <div className="flex justify-center">
        <Link to="/shop"><button class="btn btn-active bg-green-500 text-white hover:bg-green-700">All Product</button></Link>
        </div>
          
      </div>
      
    );
};

export default Product;