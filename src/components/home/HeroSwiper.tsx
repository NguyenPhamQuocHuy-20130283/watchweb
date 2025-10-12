'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';
import { swiperData } from '@/data/dummy';
import 'swiper/css';
import 'swiper/css/scrollbar';

export default function HeroSwiper() {
  return (
    <div className="banner mt-10 lg:-mt-4 flex items-center justify-center">
      <Swiper
        modules={[Autoplay, Scrollbar]}
        grabCursor={true}
        autoplay={{ delay: 5000 }}
        scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
        className="w-4/5 h-[40vh] lg:h-[60vh] rounded-xl"
      >
        {swiperData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="cursor-pointer w-full h-full rounded-xl flex items-center"
            style={{ 
              backgroundImage: `url('${item.avatar}')`,
              backgroundPosition: 'center',
              backgroundSize: 'cover'
            }}
          >
            <div className="w-3/4 md:w-1/2 lg:ml-10 p-6 bg-gray-300/50 lg:bg-transparent rounded-xl flex flex-col justify-start items-start gap-2 ml-4">
              <h3 className="text-red-500 text-lg font-semibold lg:font-bold lg:text-xl">
                {item.title}
              </h3>
              <h1 className="text-gray-800 text-2xl lg:text-4xl font-extrabold">
                {item.info}
              </h1>
              <h4 className="text-gray-500 lg:text-xl lg:mb-4">
                {item.price}
              </h4>
              <button className="font-semibold px-3 py-2 text-xs text-white bg-red-400 rounded-xl hover:bg-red-500" type="button">
                {item.button}
              </button>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-scrollbar"></div>
      </Swiper>
    </div>
  );
}