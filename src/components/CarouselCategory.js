import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { NavLink } from "react-router-dom";

export const CarouselCategory = ({ categories }) => {
  const right = "/images/arrow-right.png";
  return (
    <div className="container_category my-2">
      <div className="a flex justify-between absolute right-0 gap-5 items-center">
        <button className="swiper-button-prev"></button>
        <button className="swiper-button-next"></button>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          670: {
            slidesPerView: 3,
          },
          1160: {
            slidesPerView: 4,
          },
          1430: {
            slidesPerView: 6,
          },
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper_Category "
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {categories.map((category, index) => {
          return (
            <SwiperSlide key={index}>
              
                <NavLink
                  key={index}
                  className="flex flex-col items-center border border-gray-300 rounded-lg hover:bg-customRed cursor-pointer transition-all duration-300 my-4 py-6"
                  
                >
                  <div className="text-4xl my-4 p-4">{category.icon}</div>
                  <div className="text-base font-pop">{category.name}</div>
                </NavLink>
              
            </SwiperSlide>
          );
        })}
      </Swiper>


        

    </div>
  );
};
