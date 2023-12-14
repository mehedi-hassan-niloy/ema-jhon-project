import { Carousel } from 'flowbite-react';
import React from 'react';
import img from "../../../../assets/banner.jpg.png"
import img1 from "../../../../assets/banner1.png"
import img2 from "../../../../assets/banner2.png"
import img3 from "../../../../assets/banner3.png"
import img5 from "../../../../assets/banner5.png"
import Work from '../Work/Work';

import Product from '../Product/Product';
import ProductAbout from '../ProductAbout/ProductAbout';
import Testimonial from '../Testimonail/Testimonial';
import Footer from '../Footer/Footer';

const Banner = () => {
    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96" style={{height: "650px"}}>
        <Carousel pauseOnHover>
          <img src={img} alt="..." />
          <img src={img1} alt="..." />
          <img src={img2} alt="..." />
          <img src={img3} alt="..." />
          <img src={img5} alt="..." />
        </Carousel>
      </div>
      <Work></Work>
      <Product></Product>
      <ProductAbout></ProductAbout>
      <Testimonial></Testimonial>
      <Footer></Footer>
        </div>
    );
};

export default Banner;