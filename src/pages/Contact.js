import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineLocalPostOffice } from "react-icons/md";



export const Contact = () => {
  return (
    <div className='py-20 px-smallCon md:px-mediumCon lg:px-largeCon '>
           <nav class="flex items-center space-x-2 text-sm pb-20">
        <NavLink to="/" class="text-black opacity-50 hover:opacity-100 duration-500">Home</NavLink>
        <span class="text-black opacity-50">/</span>
        <span class="text-black font-pop">Contact</span>
          </nav>
          <div className='flex flex-wrap justify-between  '>
            <div className='px-2 w-full xl:w-1/3'>
              <div className='w-full  flex flex-col space-y-4 justify-between shadow hover:shadow-xl duration-500 py-10 px-9 '>
                <div className='border-b flex flex-col space-y-4'>
                  <NavLink to="/contact" class=" duration-500 flex items-center space-x-4 ">
                    <IoCallOutline className='bg-customRed text-white w-10 h-10 p-2 rounded-full'/>
                    <p className='text-black font-pop font-[500]'>Call To Us</p>
                  </NavLink>
                  <p className='font-pop text-[14px]'>We are available 24/7, 7 days a week.</p>
                  <p className='font-pop text-[14px]'>Phone: +8801611112222</p>
                </div>
                <div className='flex flex-col space-y-4'>
                  <NavLink to="/contact" class=" duration-500 flex items-center space-x-4  ">
                    <MdOutlineLocalPostOffice className='bg-customRed text-white w-10 h-10 p-2 rounded-full'/>
                    <p className='text-black font-pop font-[500]'>Write To US</p>
                  </NavLink>
                  <p className='font-pop text-[14px]'>Fill out our form and we will contact you within 24 hours..</p>
                  <p className='font-pop text-[14px]'>Emails: customer@exclusive.com</p>
                  <p className='font-pop text-[14px]'>Emails: support@exclusive.com</p>
                </div>
              </div>
            
            </div>
            <div className='px-2 w-full xl:w-2/3'>
            <div className='w-full  py-10 px-9 flex flex-col space-y-4 shadow hover:shadow-xl duration-500'>
              <div className='flex justify-between space-x-4'>
                <input type='text' placeholder='Your Name' className='w-1/3 p-3 border bg-[#F5F5F5]  rounded-md' />
                <input type='text' placeholder='Your Email' className='w-1/3 p-3 border bg-[#F5F5F5]  rounded-md' />
                <input type='text' placeholder='Your Phone' className='w-1/3 p-3 border bg-[#F5F5F5]  rounded-md' />
              </div>
              <textarea  type='text'  rows={8}  placeholder='Your Mesage' className='w-full resize-none p-3 border bg-[#F5F5F5]  rounded-md' />
              <div className='text-end'>              <button className='bg-customRed text-white px-14 py-3 rounded-md'>Send mesage</button>
              </div>
            </div>
            
            </div>
          </div>
    </div>
  )
}
