"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper/core";
import { Autoplay, Pagination } from "swiper/modules";
import { shopData } from "@/data/shopData";

SwiperCore.use([Pagination]);

const ShopSlider = () => {
  return (
    <main className=' absolute top-0 left-0 right-0 bottom-0 h-full w-full'>
      <div className='  h-full w-full '>
        <Swiper
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1,
            },
          }}
          slidePrevClass='max-lg:1'
          spaceBetween={30}
          loop={true}
          speed={700}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className='mySwiper bg-black h-full w-full'
        >
          {shopData.map((data) => (
            <div className='h-full w-full '>
              <SwiperSlide key={data.id} className='h-full w-full relative'>
                <div className='h-full w-full'>
                  <Image
                    src={data.photo}
                    alt={data.title}
                    height='1020'
                    width='2400'
                    className='h-full w-full object-cover'
                    priority
                  />
                </div>
                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2'>
                  <h3>{data.title}</h3>
                  <p className='text-center'>{data.comment}</p>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default ShopSlider;
