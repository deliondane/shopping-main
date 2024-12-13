import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Today = () => {
  return (
    <div className='today'>
      <h4>오늘출발.오늘도착.새벽도착🚚</h4>
      <h2>오늘출발</h2>
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide><img src="{process.env.PUBLIC_URL' + '/img/slide1.gif'}" alt="" /></SwiperSlide>
        <SwiperSlide><img src="{process.env.PUBLIC_URL' + '/img/slide2.gif'}" alt="" /></SwiperSlide>
        <SwiperSlide><img src="{process.env.PUBLIC_URL' + '/img/slide3.gif'}" alt="" /></SwiperSlide>
        <SwiperSlide><img src="{process.env.PUBLIC_URL' + '/img/slide4.gif'}" alt="" /></SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Today;