import { Card, Rating } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import { motion, useTransform, useScroll } from 'framer-motion'
import { fadeIn } from '../../../../Variants'

const Testimonial = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const x = useTransform(scrollYProgress, [0, 1], ["-95%", "1%"]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="mb-10 md:mr-32 md:ml-32">
            <div className="text-center md:px-12 mb-10">
                <h1 className="text-4xl font-bold mb-3 text-green-600 italic">Coustomer<span className="text-lime-600">Rivews</span></h1>
                <span className="w-28 h-1.5 bg-green-500 inline-block rounded-2xl mr-1.5"></span>
            </div>

            <section ref={targetRef} className="relative h-[600px] bg-white">
                <div className="sticky top-0 flex h-max items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex gap-4">

                        {
                            reviews.map(review => <div
                                key={review._id}
                                className="group relative h-[450px] w-[450px] overflow-hidden bg-green-500">
                                <div

                                    className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
                                ></div>
                                <div className="absolute inset-0 z-10 grid place-content-center">
                                    <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-md font-black uppercase text-white backdrop-blur-lg">
                                        {review.name}
                                    </p>
                                    <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 italic uppercase text-white backdrop-blur-lg">
                                        {review.details}
                                    </p>
                                    <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 italic uppercase text-white backdrop-blur-lg">
                                        {review.rating}
                                        <Rating>
                                            <Rating.Star />
                                            <Rating.Star />
                                            <Rating.Star />
                                            <Rating.Star />
                                            <Rating.Star filled={false} />
                                        </Rating>
                                    </p>
                                </div>
                            </div>




                                /*  <SwiperSlide
                    key={review._id}
                >
                    <Card href="#" className="md:w-[600px]">
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{review.name}</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">{review.details}</p>
                        <p className='flex gap-5'>{review.rating}
                            <Rating>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star filled={false} />
                            </Rating>
                        </p>
                    </Card>
                </SwiperSlide> */)
                        }
                    </motion.div>
                </div>
            </section >
        </motion.section >
    );
};

export default Testimonial;