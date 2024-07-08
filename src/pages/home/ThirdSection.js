import React from 'react'
import { CarouselCategory } from "../../components/CarouselCategory";

export const ThirdSection = () => {
    const categories = [
        { name: 'Phones', icon: '📱', active: false },
        { name: 'Computers', icon: '💻', active: false },
        { name: 'SmartWatch', icon: '⌚', active: false },
        { name: 'Camera', icon: '📷', active: true },
        { name: 'HeadPhones', icon: '🎧', active: false },
        { name: 'Gaming', icon: '🎮', active: false },
      ];
  return (
    <div className="mt-20">
        {/* title */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col justify-between ">
            <div className="flex justify-start items-center">
              <div className="w-5 h-10 bg-customRed rounded-lg me-3"></div>
              <h3 className="">Categories</h3>
            </div>
            <div>
              <p className="text-4xl font-semibold ">Browse By Category</p>
            </div>
          </div>
          <div>
            
          </div>
        </div>
        {/* --------- */}
        <CarouselCategory categories={categories} />
      </div>
  )
}
