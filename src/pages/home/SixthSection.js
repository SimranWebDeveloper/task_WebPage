import React from 'react'
import item1 from '../../assets/images/grid_item1.png';
import item2 from '../../assets/images/grid_item2.png';
import item3 from '../../assets/images/grid_item3.png';
import item4 from '../../assets/images/grid_item4.png';
import carIcon from '../../assets/images/carIcon.png';
import wirelessIcon from '../../assets/images/wirelessIcon.png';
import checkedIcon from '../../assets/images/checkedIcon.png';


export const SixthSection = () => {
  return (
    <div className="mt-32">

          {/* title */}
        <div className="flex justify-between items-end">
          <div className="flex flex-col justify-between ">
            <div className="flex justify-start items-center">
              <div className="w-5 h-10 bg-customRed rounded-lg me-3"></div>
              <h3 className="text-customRed font-semibold">Features</h3>
            </div>
            <div className="flex flex-wrap items-center">
              <p className=" w-full sm:w-1/2 text-4xl font-semibold text-black text-nowrap my-3 ">New Arrival</p>              
            </div>
          </div>
      
        </div>
          
        
        <div className="grid grid-cols-4  gap-4 overflow-hidden">
            <div  className=" grid-item  border col-span-4                lg:col-span-2 row-span-2 pt-16 p-8 pb-0  bg-[#0D0D0D] ">
                <div className='gird-item1 h-[510px] bg-no-repeat bg-contain bg-center flex justify-start items-end' style={{ backgroundImage: `url(${item1}`}}>
                    <div className='text-white  p-8'>
                        <h5 className='font-semibold text-2xl'>PlayStation 5</h5>
                        <p className='font-pop text-sm text-[#FAFAFA] my-4 w-64'>Black and White version of the PS5 coming out on sale.</p>
                        <button className=' text-white py-2 px-4 border-b border-white hover:border-none'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div  className=" grid-item border col-span-4                 lg:col-span-2 pt-16 p-8 pb-0 bg-[#0D0D0D]" >
                <div className='gird-item1 bg-no-repeat bg-contain bg-right '  style={{ backgroundImage: `url(${item2}`}}>
                  
                    <div className='text-white   p-8'>
                            <h5 className='font-semibold text-2xl'>Women’s Collections</h5>
                            <p className='font-pop text-sm text-[#FAFAFA] my-2 w-64'>Featured woman collections that give you another vibe.</p>
                            <button className=' text-white py-2 px-4 border-b border-white hover:border-none'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div  className=" grid-item border col-span-4 sm:col-span-2   lg:col-span-1 p-8 bg-[#0D0D0D]" >
                <div  className='gird-item1  bg-no-repeat bg-contain   h-[230px] flex justify-start items-end' style={{ backgroundImage: `url(${item3}`}}>
                  <div className='text-white   '>
                            <h5 className='font-semibold text-2xl'>Speakers</h5>
                            <p className='font-pop text-sm text-[#FAFAFA] my-2 w-64 block lg:hidden xl:block '>Amazon wireless speakers</p>
                            <button className=' text-white py-2 px-4 border-b border-white hover:border-none'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div  className=" grid-item border col-span-4 sm:col-span-2   lg:col-span-1 p-8 bg-[#0D0D0D]" >
                <div className='gird-item1 bg-no-repeat bg-contain h-[230px] flex justify-start items-end'  style={{ backgroundImage: `url(${item4}`}}>
                  <div className='text-white  '>
                            <h5 className='font-semibold text-2xl'>Perfume</h5>
                            <p className='font-pop text-sm text-wrap text-[#FAFAFA] my-2 w-64 block lg:hidden xl:block '>GUCCI INTENSE OUD EDP</p>
                            <button className=' text-white py-2 px-4 border-b border-white hover:border-none'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex justify-center  flex-wrap items-center full my-16 py-28'>
          
          <div className='  w-full md:w-1/2 xl:w-1/3  flex flex-col justify-center items-center  '>
            <img src={carIcon} alt="more"  className='w-20 h-20 my-6'/>
            <p className='font-pop font-semibold text-xl text-nowrap'>FREE AND FAST DELIVERY</p>
            <p className='font-pop  text-sm'>Free delivery for all orders over $140</p>
          </div>
          

          <div className='w-full md:w-1/2 xl:w-1/3 flex flex-col justify-center items-center  px-20'>
            <img src={wirelessIcon} alt="more"  className='w-20 h-20 my-6'/>
            <p className='font-pop font-semibold text-xl text-nowrap'>24/7 CUSTOMER SERVICE</p>
            <p className='font-pop  text-sm'>Friendly 24/7 customer support</p>
          </div>
         

          <div className='w-full md:w-1/2 xl:w-1/3 flex flex-col justify-center items-center '>
            <img src={checkedIcon} alt="more"  className='w-20 h-20 my-6'/>
            <p className='font-pop font-semibold text-xl text-nowrap'>MONEY BACK GUARANTEE</p>
            <p className='font-pop  text-sm'>We reurn money within 30 days</p>
          </div>
          </div>

          
        
      </div>
  )
}
