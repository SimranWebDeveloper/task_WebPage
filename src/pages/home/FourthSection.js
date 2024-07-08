import React from 'react'
import { NavLink } from "react-router-dom";
import { Card } from "../../components/Card";
import boom from "../../assets/images/BOOMBOX.png";
import { TimmerBuyNow } from "../../components/TimmerBuyNow";

export const FourthSection = ({products}) => {
  return (
    <div className="mt-20">
        {/* title */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col justify-between ">
            <div className="flex justify-start items-center">
              <div className="w-5 h-10 bg-customRed rounded-lg me-3"></div>
              <h3 className="">This Month</h3>
            </div>
            <div>
              <p className="text-2xl md:text-4xl  font-semibold ">Best Selling Products</p>
            </div>
          </div>
          <div>
          <NavLink
            to="/products"
            className="bg-customRed text-white rounded-md px-12 py-3 text-nowrap"
          >
            View All 
          </NavLink>
          </div>
        </div>
        {/* --------- */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-1 place-items-center ">
        {
                
                (products.filter((item)=>item.rating>4.5)).map((item,index)=>{
                return(        
                        <Card item={item} key={item.id} />
                      )
                })
                
            } 
        </div>
        
        {/* image part */}
        <div className="w-full bg-black p-16 flex justify-between flex-col xl:flex-row ">
          <div className="order-2 xl:order-1 flex justify-between flex-col text-white bg-red-00  my-4 h-80">
            <h5 className="text-[#00FF66] text-base font-semibold">Categories</h5>
            <p className="text-5xl font-semibold">Enhance Your Music Experience</p>
            <TimmerBuyNow/>
           <div>
           <NavLink
            to="/"
            className=" bg-[#00FF66]  text-white text-xl rounded-md px-12 py-4 "
          >
            Buy Now!
          </NavLink>
           </div>
          </div>
          <div className="order-1 xl-order-2 w-full flex justify-center items-center ">
            <div>
            <img src={boom} alt="" className="w-full" />
            </div>
          </div>
        </div>
        
      </div>
  )
}
