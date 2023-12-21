import { Card } from 'flowbite-react';
import React from 'react';
import pic from "../../../../assets/icons8-free-shipping-50.png"
import pic1 from "../../../../assets/icons8-us-dollar-circled-50.png"
import pic2 from "../../../../assets/icons8-person-50.png"
import pic3 from "../../../../assets/icons8-gift-box-50.png"

import {motion} from 'framer-motion'
import {fadeIn} from '../../../../Variants'

const Work = () => {
    return (
        <motion.div
        variants={fadeIn("up", 0.2)}
        initial= "hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        
        className='mt-10'>
            <div className='text-center mb-10'>
                <h1 className='text-4xl text-bold'>How To Shop</h1>
            </div>
            <div className='md:flex gap-12 justify-center'>
                <Card className="md:w-[300px] transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex flex-col items-center pb-10">
                        <img
                            alt="Bonnie image"
                            height="96"
                            src={pic}
                            width="96"
                            className="mb-3 rounded-full shadow-lg "
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white hover:text-orange-500 tracking-widest">Shipping</h5>
                        <span className="text-lg text-gray-500 dark:text-gray-400 text-center tracking-widest">Lorem Ipsum is simply dummy text of the Testing online.</span>
                    </div>
                </Card>
                <Card className="md:w-[300px] transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex flex-col items-center pb-10">
                        <img
                            alt="Bonnie image"
                            height="96"
                            src={pic1}
                            width="96"
                            className="mb-3 rounded-full shadow-lg"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white hover:text-orange-500 tracking-widest">Way to Buy</h5>
                        <span className="text-lg text-gray-500 dark:text-gray-400 text-center tracking-widest">Lorem Ipsum is simply dummy text of the Testing online.</span>
                    </div>
                </Card>
                <Card className="md:w-[300px] transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex flex-col items-center pb-10">
                        <img
                            alt="Bonnie image"
                            height="96"
                            src={pic2}
                            width="96"
                            className="mb-3 rounded-full shadow-lg"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white hover:text-orange-500 tracking-widest">Personal</h5>
                        <span className="text-lg text-gray-500 dark:text-gray-400 text-center tracking-widest">Lorem Ipsum is simply dummy text of the Testing online.</span>
                    </div>
                </Card>
                <Card className="md:w-[300px] transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <div className="flex flex-col items-center pb-10">
                        <img
                            alt="Bonnie image"
                            height="96"
                            src={pic3}
                            width="96"
                            className="mb-3 rounded-full shadow-lg"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white hover:text-orange-500 tracking-widest">Gift Voucher</h5>
                        <span className="text-lg text-gray-500 dark:text-gray-500 text-center tracking-widest">Lorem Ipsum is simply dummy text of the Testing online.</span>
                    </div>
                </Card>
            </div>
        </motion.div>
    );
};

export default Work;