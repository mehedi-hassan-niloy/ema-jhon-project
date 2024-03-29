import { useEffect, useState } from "react";

import { getShoppingCart } from "../../../../utilities/fakedb";
import { Link } from "react-router-dom";

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { fadeIn } from "../../../../Variants";



const Product = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

   
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
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className='mt-10'>
            <div className="text-center md:px-12 mb-10">
                <h1 className="text-4xl font-bold mb-3 text-green-600 italic">Pro<span className="text-lime-600">duct</span></h1>
                <span className="w-28 h-1.5 bg-green-500 inline-block rounded-2xl mr-1.5"></span>
            </div>
            <div className="grid gap-6 mb-2 lg:grid-cols-4 sm:grid-cols-2">

                {
                    products.slice(0, 8).map(product => <motion.div
                        key={product.id}
                        
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
                        }}
                    >
                        <Link to='/shop'>

                            <div
                             className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>

                                <img src={product.img}
                                    alt=""
                                    className='object-cover w-full h-56 md:h-64 xl:h-80'
                                />
                                <div className='absolute inset-0 flex flex-col px-6 py-4 text-white transition-opacity duration-200 bg-green-600 bg-opacity-75 opacity-0 hover:opacity-100'>
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
                    </motion.div>)
                }

            </div>

            <Link to="/shop"><div className="bg-white min-h-[200px] flex items-center justify-center">
                <button className="rounded px-6 py-2 font-medium bg-green-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                    All Product
                </button>
            </div></Link>


        </motion.div>

    );
};

export default Product;