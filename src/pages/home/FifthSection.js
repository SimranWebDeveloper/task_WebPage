
import React from 'react'
import { CarouselCard } from "../../components/CarouselCard";
import { Timer } from "../../components/Timer"; 
import { NavLink } from 'react-router-dom';
import { CarouselFifthSection } from '../../components/CarouselFifthSection';

export const FifthSection = ({products}) => {
  return (
    <div className="mt-32 ">
        <div></div>
        <div className=" ">
          {/* title */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col justify-between ">
            <div className="flex justify-start items-center">
              <div className="w-5 h-10 bg-customRed rounded-lg me-3"></div>
              <h3 className="text-customRed font-semibold">Our Products</h3>
            </div>
            <div className="flex flex-wrap items-center">
              <p className=" w-full sm:w-1/2 text-4xl font-semibold text-black text-nowrap my-3 ">Explore Our Products</p>              
            </div>
          </div>
      
        </div>
          <CarouselFifthSection products={products} />
        </div>
        <div className="flex justify-center my-16">
          <NavLink
            to="/products"
            className="bg-customRed text-white rounded-md px-12 py-3"
          >
            View All Products
          </NavLink>
        </div>
      </div>
  )
}
