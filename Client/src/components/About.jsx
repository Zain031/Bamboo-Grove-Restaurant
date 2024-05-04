import image1 from "../assets/Borcelle.png";
import image2 from "../assets/Borcelle1.png";
import image3 from "../assets/Borcelle2.png";
import image4 from "../assets/Borcelle3.png";
import image5 from "../assets/Borcelle4.png";
import image6 from "../assets/Borcelle5.png";



import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
    <div className=" pt-80 md:pt-24">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         <SwiperSlide>
          <img src={image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={image3} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={image5} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img src={image6} />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
