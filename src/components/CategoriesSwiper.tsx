'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Scrollbar } from 'swiper/modules';
import { titleCategories } from '@/data/dummy';
import 'swiper/css';
import 'swiper/css/scrollbar';

export default function CategoriesSwiper() {
  return (
    <div className="flex items-center justify-center mt-10">
      <Swiper
        modules={[Autoplay, Scrollbar]}
        grabCursor={true}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          800: { slidesPerView: 4 }
        }}
        autoplay={{ delay: 2000 }}
        scrollbar={{ el: '.swiper-scrollbar', draggable: true }}
        className="w-4/5 h-20"
      >
        {titleCategories.map((item, index) => (
          <SwiperSlide
            key={index}
            className="cursor-pointer rounded-xl h-full flex items-center justify-between border shadow-xl p-4 bg-white hover:shadow-2xl transition-shadow"
          >
            <div className="w-12 h-12 border-2 bg-gray-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">{item.icon}</span>
            </div>
            <div className="mr-auto ml-2 flex-1 min-w-0">
              <h3 className="font-semibold md:font-bold text-xs md:text-sm text-gray-700 mb-1 truncate">
                {item.title}
              </h3>
              <button type="button" className="border-0 text-xs md:text-sm font-semibold text-red-400 hover:text-red-500 transition-colors">
                Show All
              </button>
            </div>
            <span className="text-gray-400 text-xs flex-shrink-0 ml-2">{item.count}</span>
          </SwiperSlide>
        ))}
        <div className="swiper-scrollbar"></div>
      </Swiper>
    </div>
  );
}