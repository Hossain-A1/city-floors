"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper/core";
import { Autoplay, Pagination } from "swiper/modules";
import SectionTitle from "./ui/SectionTitle";
import { SlideData } from "@/data/reviewData";

SwiperCore.use([Pagination]);

const UserReviews = () => {
  return (
    <main>
      <section className='space-y-5'>
        <SectionTitle title='' subtitle='' />

        <div className='flex-1 flex  items-center justify-center flex-wrap gap-10 bg-dark/20 py-10 px-5 '>
          <Swiper
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
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
            className='mySwiper'
          >
            {SlideData.map((data) => (
              <SwiperSlide
                key={data.date}
                className='py-10 px-5 space-y-5 rounded-2xl shadow-xl bg-white h-auto  w-[30%]'
              >
                <div className='lg:h-[18rem] h-full w-full space-y-3'>
                  <div className='flex gap-3 text-2xl'>
                    <strong className='text-orange'>{data.icon}</strong>
                    <strong className='text-orange'>{data.icon}</strong>
                    <strong className='text-orange'>{data.icon}</strong>
                    <strong className='text-orange'>{data.icon}</strong>
                    <strong className='text-orange'>{data.icon}</strong>
                  </div>
                  <div className='  lg:h-[10rem] h-full space-y-3'>
                    <h4 className='font-bold'>{data.title}</h4>
                    <h2 className='tracking-wider text-lg font-[500]'>
                      {data.comment}
                    </h2>
                  </div>
                  <div className='flex gap-3'>
                    <div className='overflow-hidden h-16 rounded-full w-16'>
                      <Image
                        src={data.photo}
                        alt={data.name}
                        height='200'
                        width='200'
                        className='h-full w-full object-cover'
                        priority
                      />
                    </div>
                    <div className='flex flex-col justify-center'>
                      <strong>{data.name}</strong>
                      <small>{data.date}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default UserReviews;
