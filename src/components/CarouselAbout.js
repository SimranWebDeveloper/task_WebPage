import React from 'react'
import { NavLink } from 'react-router-dom'
import { CiTwitter } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";




export const CarouselAbout = ({sliders}) => {
  return (
    <div className='flex flex-wrap items-center justify-between '>
        {
            sliders.map((slider,index) => {
                return (
                    <div key={index} className='w-full lg:w-1/2 xl:w-1/3  flex flex-col items-center  space-y-8 '>
                        <div className='p-7 pb-0 w-[370px] h-[464px]     ' style={{background:  `#F5F5F5 url(${slider.img}) no-repeat center  bottom`}}>
                        </div>
                        <div className='text-center'>
                            <h5 className='font-[500] text-3xl'>{slider.title}</h5>
                            <p>{slider.desc}</p>
                        </div>
                        <div className='flex space-x-4'>
                            <NavLink to='/'>                                <CiTwitter/>                            </NavLink>
                            <NavLink to='/'>                                <FaInstagramSquare/>                            </NavLink>
                            <NavLink to='/'>                                <FaLinkedin/>                            </NavLink>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
