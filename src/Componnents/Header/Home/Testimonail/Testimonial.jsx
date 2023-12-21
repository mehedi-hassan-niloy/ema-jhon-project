import { Card, Rating } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="my-20 md:mr-32 md:ml-32">
            <div className=''>
                <h1 className='text-center text-3xl text-green-500 text-bold mb-6'>Coustomer Review</h1>
            </div>

            <Swiper
                slidesPerView={2}
                centeredSlides={true}
                spaceBetween={40}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                {
                    reviews.map(review => <SwiperSlide
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
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;