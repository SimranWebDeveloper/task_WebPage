import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Card } from './Card';

export const CarouselFifthSection = ({products}) => {
 
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      speed: 500,
      rows: 2,
      slidesToShow: 4,
      slidesPerRow: 1,
      autoplay: true,
    autoplaySpeed: 3000,

      responsive: [
        {
          breakpoint: 1430,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1160,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 670,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
    
  return (
    <div className="slider-container ">
      <Slider {...settings} >
      {                
                products.map((item,index)=>{
                return(        
                  <div key={index}> 
                  
                  <Card item={item} key={item.id} />
                </div>
                        
                    )
                })                
            } 
        
      
      </Slider>
    </div>
  )
}



