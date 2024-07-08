import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

import { Card } from './Card';

export const CarouselCard = ({products}) => {
    const right = '/images/arrow-right.png'
  return (
   
        <div className='container_card'>
            <div className='hidden md:flex justify-center sm:justify-between  absolute right-0 gap-5 items-center'>

             <button className="swiper-button-prev"></button>
             <button className="swiper-button-next"></button>
            </div>
            <div >
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            
            loop={true}
            navigation={
                {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                    }
            }
            breakpoints={{
                670: {
                    slidesPerView: 2,
                    
                },
                1160: {
                    slidesPerView: 3,
                
                },
                1430: {
                    slidesPerView: 4,
                
                },
                }}
            modules={[Autoplay,Navigation]}
            className="mySwiper_Card  "
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                }}
            >
            {                
                products.map((item,index)=>{
                return(        
                    <SwiperSlide key={index} >
                        <Card item={item} key={item.id} />
                        </SwiperSlide>
                    )
                })                
            }  
            
            
            </Swiper>
            </div>
            </div>
            
    
  )
}
