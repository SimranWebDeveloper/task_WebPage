import React from 'react'
import { NavLink } from 'react-router-dom'
import  AboutImg  from '../assets/images/aboutImg.png'
import carIcon from '../assets/images/carIcon.png';
import wirelessIcon from '../assets/images/wirelessIcon.png';
import checkedIcon from '../assets/images/checkedIcon.png';
import aboutS2p1 from '../assets/images/aboutS2p1.png';
import aboutS2p2 from '../assets/images/aboutS2p2.png';
import aboutS2p3 from '../assets/images/aboutS2p3.png';
import aboutS2p4 from '../assets/images/aboutS2p4.png';
import aboutCarousel1 from '../assets/images/aboutCarousel1.png';
import aboutCarousel2 from '../assets/images/aboutCarousel2.png';
import aboutCarousel3 from '../assets/images/aboutCarousel3.png';
import { CarouselAbout } from '../components/CarouselAbout';


export const About = () => {
  return (
    <div className='font-pop  overflow-hidden py-20 px-smallCon md:px-mediumCon lg:px-largeCon xl:pr-0'>
      <nav class="flex items-center space-x-2 text-sm">
        <NavLink to="/" class="text-black opacity-50 hover:opacity-100 duration-500">Home</NavLink>
        <span class="text-black opacity-50">/</span>
        <span class="text-black font-pop">About</span>
    </nav>
    {/* section 1 */}
    <div className='flex flex-col lg:flex-row  lg:space-x-20 xl:pr-0'>
      <div className=' w-full lg:w-1/2 flex flex-col justify-center items-start  space-y-7 mb-8'>
        <h3 className='font-semibold text-[3.375rem]'>Our Story</h3>
        <p className='font-pop text-base text-justify'>
        Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
        </p>
        <p className='font-pop text-base text-justify'>
          Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.
          </p>
      </div>
      <div className='w-full lg:w-1/2 flex  items-center justify-center '>
        <img src={AboutImg} alt="aboutImg" />
      </div>
    </div>

        {/* section 2 */}
      <div className='flex justify-between  flex-wrap items-center full my-16 py-28 px-0   xl:pr-[8rem] '>

        <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border  flex flex-col justify-between py-6  items-center  hover:bg-customRed duration-500 min-h-[230px]'>
          <img src={aboutS2p1} alt="more"  className='w-20 h-20 '/>
          <p className='font-pop font-[700] text-3xl text-nowrap'>10.5k </p>
          <p className='font-pop  text-base'>Sallers active our site</p>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border flex flex-col justify-between py-6 items-center hover:bg-customRed duration-500 min-h-[230px]'>
        <img src={aboutS2p2} alt="more"  className='w-20 h-20 '/>
        <p className='font-pop font-[700] text-3xl text-nowrap'>33K</p>
          <p className='font-pop  text-sm'>Mopnthly Produduct Sale</p>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border flex flex-col justify-between py-6 items-center hover:bg-customRed duration-500 min-h-[230px]'>
          <img src={aboutS2p3} alt="more"  className='w-20 h-20 '/>
          <p className='font-pop font-[700] text-3xl text-nowrap'>45.5K</p>
          <p className='font-pop  text-sm'>Customer active in our site</p>
        </div>

        <div className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 border flex flex-col justify-between py-6 items-center hover:bg-customRed duration-500 min-h-[230px]'>
          <img src={aboutS2p4} alt="more"  className='w-20 h-20 '/>
          <p className='font-pop font-[700] text-3xl text-nowrap'>25K</p>
          <p className='font-pop  text-sm'>Anual gross sale in our site</p>
        </div>
        
      </div>
      {/* section 3 */}
      <div className='xl:pr-[8rem]  '>
      <CarouselAbout 
      sliders={[
        {img:aboutCarousel1,title:'Tom Cruise',desc:'Founder & Chairman',},
        {img:aboutCarousel2,title:'Emma Watson',desc:'Managing Director',},
        {img:aboutCarousel3,title:'Will Smith',desc:'Product Designer',},       
        
        ]} />
      </div>

    {/* section 4 */}
    <div className='flex justify-between  flex-wrap items-center full my-16 py-28   xl:pr-[10rem]'>

    <div className='  w-full md:w-1/2 lg:w-1/3   flex flex-col justify-center items-center  '>
      <img src={carIcon} alt="more"  className='w-20 h-20 my-6'/>
      <p className='font-pop font-semibold text-xl text-nowrap'>FREE AND FAST DELIVERY</p>
      <p className='font-pop  text-sm'>Free delivery for all orders over $140</p>
    </div>


    <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center  px-20'>
      <img src={wirelessIcon} alt="more"  className='w-20 h-20 my-6'/>
      <p className='font-pop font-semibold text-xl text-nowrap'>24/7 CUSTOMER SERVICE</p>
      <p className='font-pop  text-sm text-center'>Friendly 24/7 customer support</p>
    </div>


      <div className='w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center '>
        <img src={checkedIcon} alt="more"  className='w-20 h-20 my-6'/>
        <p className='font-pop font-semibold text-xl text-nowrap'>MONEY BACK GUARANTEE</p>
        <p className='font-pop  text-sm'>We reurn money within 30 days</p>
      </div>
    </div>


    </div>
  )
}
