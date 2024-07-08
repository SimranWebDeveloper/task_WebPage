import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Autoplay, } from 'swiper/modules';
import 'swiper/css/pagination';

import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


export const Carousel = ({frames}) => {
  const apple="/images/apple.png"
  const pagination = {
    clickable: true,
  };
  return (

        <Swiper pagination={ pagination} loop={true} modules={[Autoplay, Pagination]} autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }} className="mySwiper">
            {
                frames.map((frame,index) => {
                    return (
                        <SwiperSlide key={index}>
                          <div className='flex justify-between bg-black text-white' >
                            <div className='hidden lg:flex w-1/2 overflow-hidden  flex-col items-start justify-between p-12 '>
                              <div className='flex justify-center items-center space-x-2 md:space-x-6'>
                                <img src={apple}  style={{width:'40px',height:'49px'}}  />
                                <p className='text-sm lg:text-base text-nowrap'>iPhone 14 Series</p>
                              </div>
                              <p className='font-semibold text-base sm:text-base md:text-2xl  lg:text-3xl xl:text-5xl my-4'>Up to 10%       off Voucher</p>
                              <NavLink to={"/"} className='text-nowrap font-medium text-sm lg:text-base flex justify-center items-center '>Shop Now <FaArrowRight className='ml-4' /></NavLink>
                            </div>
                            <div className='w-full lg:w-1/2 overflow-hidden'>
                              <img src={frame}  alt="" className='w-full md:min-h-[220px] lg:min-h-[320px] object-cover ' />
                            </div>
                          </div> 
                        </SwiperSlide>
                    )
                })
            }
      </Swiper>  

  )
}
