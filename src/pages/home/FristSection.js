import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Carousel } from "../../components/Carousel";
import { NavLink } from 'react-router-dom';

export const FristSection = ({products}) => {
  const frm1 = "/images/homeFrame1.png";
  return (    <div className="flex-col md:flex-row  flex justify-between items-start">
        {/* text */}
        <div className="w-full md:w-1/4 flex flex-wrap justify-between items-start   flex-row md:flex-col text-sm md:text-base lg:text-lg   md:border-r   border-black  font-pop pt-10   ">
        <NavLink
            to={`../product/women'sFashion`}
            className="md:w-full flex  me-4 justify-between space-x-2 items-center pe-4 text-nowrap leading-5 md:leading-7 lg:leading-10 "
          >
            <span>Woman fasions</span>{" "}
            <span>
              <IoIosArrowForward />
            </span>
          </NavLink>
          <NavLink
            to={"../product/men'sFashion"}
            className="md:w-full flex  me-4 justify-between space-x-2  items-center pe-4 text-nowrap leading-5 md:leading-7 lg:leading-10"
          >
            <span>Men's fasions</span>{" "}
            <span>
              <IoIosArrowForward />
            </span>
          </NavLink>
          <NavLink
            to={`../product/electronics`}
            className="text-nowrap me-4 leading-5 md:leading-7 lg:leading-10"
          >
            Electronics
          </NavLink>
          <NavLink
            to={`../product/homeLifestyle`}
            className="text-nowrap me-4 leading-5 md:leading-7 lg:leading-10"
          >
            Home & Lifestyle
          </NavLink>
          <NavLink
            to={`../product/medicine`}
            className="text-nowrap me-4 leading-5 md:leading-7 lg:leading-10"
          >
            Medicine
          </NavLink>
          <NavLink
            to={`../product/sportsOutdoor`}
            className="text-nowrap me-4 leading-5 md:leading-7 lg:leading-10"
          >
            Sports & Outdoor
          </NavLink>
          <NavLink
            to={`../product/baby'sToys`}
            className="text-nowrap me-4 leading-5 md:leading-7 lg:leading-10"
          >
            Baby’s & Toys
          </NavLink>
          <NavLink
            to={`../product/groceriesPets`}
            className="text-nowrap me-4 leading-5 md:leading-7 lg:leading-10"
          >
            Groceries & Pets
          </NavLink>
          <NavLink
            to={`../product/healthBeauty`}
            className="text-nowrap me-4 leading-5 md:leading-7 lg:leading-10"
          >
            Health & Beauty
          </NavLink>
        </div>
        {/* carusel */}
        <div className="w-full md:w-3/4 py-10 px-11 md:min-h-[300px] lg:min-h-[400px]  ">
          <Carousel frames={[frm1, frm1, frm1, frm1, frm1]} />
        </div>
      </div>
  )
}




