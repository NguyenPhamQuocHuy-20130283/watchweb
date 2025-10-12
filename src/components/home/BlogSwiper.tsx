'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { blogSwiper } from '@/data/dummy';
import 'swiper/css';
import 'swiper/css/scrollbar';

export default function BlogSwiper() {
  return (
    <div className="w-full mx-auto flex my-10">
      <Swiper
        modules={[Scrollbar]}
        grabCursor={true}
        slidesPerView={4}
        spaceBetween={20}
        breakpoints={{
          400: { slidesPerView: 1 },
          460: { slidesPerView: 2 },
          800: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }
        }}
        scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
        className="w-[85%] h-80"
      >
        {blogSwiper.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="rounded-lg w-full h-40"
              style={{ 
                backgroundImage: `url('${item.pic}')`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}
            />
            <div className="mt-4 flex flex-col items-start justify-start gap-2">
              <h3 className="text-red-400 font-semibold">{item.title}</h3>
              <h2 className="font-semibold text-sm lg:text-lg hover:text-red-500 cursor-pointer transition-colors">
                {item.info}
              </h2>
              <h4 className="text-gray-500 text-xs lg:text-sm">{item.date}</h4>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-scrollbar"></div>
      </Swiper>
    </div>
  );
}