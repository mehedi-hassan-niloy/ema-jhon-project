import React from 'react';
import img from '../../../../assets/productshose.jpg'
import img1 from '../../../../assets/product1.png'
import img2 from '../../../../assets/productcap.png'
import img3 from '../../../../assets/productbag.jpg'

import { motion } from 'framer-motion'
import { fadeIn } from '../../../../Variants';
import { Link } from 'react-router-dom';

const ProductAbout = () => {

    return (
        <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}

            className=' md:m-36'>
            <div className='grid gap-20 mb-8 md:grid-cols-2'>
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='flex'>
                    <div>
                        <img className=' w-[500px] h-[250px]' src={img} alt="" />
                        <div className='flex'>
                            <img className='w-[200px] h-[250px]' src={img3} alt="" />
                            <img className='w-[200px] h-[250px]' src={img2} alt="" />
                        </div>
                    </div>
                    <img className='w-[150px] h-[500px]' src={img1} alt="" />

                </motion.div>

                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <div>
                        <h4 className='text-2xl text-extrabold text-green-500 tracking-widest'>THE PRODUCTS</h4>
                        <h1 className='text-5xl text-extrabold text-lime-500 mt-2 mb-6 tracking-widest'>All About Ema-Jhon</h1>
                        <span className="w-20 h-1.5 bg-green-500 inline-block rounded-2xl"></span>
                        <p className='mt-7 tracking-widest text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            to make a type specimen book.</p>
                    </div>
                    <ul className='mt-10'>
                        <div className='grid mb-8 grid-cols-2 md:mr-96'>
                            <li><span className='text-5xl text-green-500'>.</span> T-Shirt</li>
                            <li><span className='text-5xl text-green-500'>.</span> Cap</li>
                            <li><span className='text-5xl text-green-500'>.</span> Shoose</li>
                            <li><span className='text-5xl text-green-500'>.</span> Bag</li>
                        </div>
                    </ul>
                    <Link to="/shop"><div className="bg-white min-h-[200px] ">
                        <button className="rounded px-6 py-2 font-medium bg-green-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                            Shop Now
                        </button>
                    </div></Link>
                </motion.div>
            </div>

        </motion.div>
    );
};

export default ProductAbout;