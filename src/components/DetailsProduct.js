import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

export const DetailsProduct = () => {
    const {id}=useParams()
    const [detailProduct,setDetailProduct]=useState({})
  
      // global Context data
      const { data } = useContext(GlobalContext);
      
      useEffect(()=>{
        data.map((item)=>{
          if (item.id==id) {
            setDetailProduct(item)
            
          }
        })
        
      },[id])

      const [quantity, setQuantity] = useState(2);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const[isActiveColor,setIsActiveColor]=useState(1)
const[activeImg,setActiveImg]=useState(0)

    return (
        <>{
          detailProduct.id!=undefined &&
          <div className='grid xl:grid-cols-7 grid-col-4 gap-4 px-smallCon md:px-mediumCon lg:px-largeCon my-20 '>

            <div onClick={()=>setActiveImg(0)} className='order-1 xl:order-1 col-span-1 row-span-1 xl:col-span-1 xl:row-span-1 bg-[#F5F5F5] p-2 flex justify-center items-center'>
                <img src={`/images/${detailProduct.images[0]} `} alt="Havic HV G-92 Gamepad" className="w-24 h-24 object-contain" />
            </div>
            <div className='order-5 xl:order-2 col-span-4 row-span-4 xl:col-span-3 xl:row-span-4 bg-[#F5F5F5]  flex justify-center items-center '>
                <img src={`/images/${detailProduct.images[activeImg]} `} alt="Havic HV G-92 Gamepad" />

            </div>
            <div className='order-6 xl:order-3 col-span-4 row-span-4 xl:col-span-3 xl:row-span-4 space-y-4 xl:pl-8 '>
                <div className="flex flex-col space-y-2">
                <h1 className="text-2xl font-bold">{detailProduct.name}</h1>
                <div className="flex items-center space-x-2">
                    <div className="text-yellow-500">
                    ★★★★☆ ({detailProduct.reviews} Reviews)
                    </div>
                    <span className="text-green-500">{detailProduct.availability}</span>
                </div>
                <div className="text-3xl font-bold">${(detailProduct.price).toFixed(2)}</div>
                <div className="text-sm">{detailProduct.description}                  </div>
                <div className="flex items-center space-x-4">
                    <span>Colours:</span>
                    <div className="flex space-x-2">
                        {
                            detailProduct.colours.map((color,index)=>{
                                return <button key={index}  className={` bg-[#${color}] w-8 h-8 border rounded-full`}></button>
                            })
                        }
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <span>Size:</span>
                    <div className="flex space-x-2">
                    <button onClick={()=>setIsActiveColor(1)} className={`${isActiveColor==1 && 'bg-red-500 text-white px-2 py-1 border rounded'}`}>XS</button>
                    <button onClick={()=>setIsActiveColor(2)} className={`${isActiveColor==2 && 'bg-red-500 text-white px-2 py-1 border rounded'}`}>S</button>
                    <button onClick={()=>setIsActiveColor(3)} className={`${isActiveColor==3 && 'bg-red-500 text-white px-2 py-1 border rounded'}`}>M</button>
                    <button onClick={()=>setIsActiveColor(4)} className={`${isActiveColor==4 && 'bg-red-500 text-white px-2 py-1 border rounded'}`}>L</button>
                    <button onClick={()=>setIsActiveColor(5)} className={`${isActiveColor==5 && 'bg-red-500 text-white px-2 py-1 border rounded'}`}>XL</button>
                    </div>
                </div>
                <div className="flex items-center space-x-2">
                    <button onClick={decreaseQuantity} className="px-2 py-1 border rounded">-</button>
                    <input type="text" value={quantity} readOnly className="w-12 text-center border rounded" />
                    <button onClick={increaseQuantity} className="px-2 py-1 border rounded">+</button>
                </div>
                <button className="px-4 py-2 bg-red-500 text-white rounded">Buy Now</button>
                <div className="text-sm">
                    <div>Free Delivery</div>
                    <div>Enter your postal code for Delivery Availability</div>
                </div>
                <div className="text-sm">
                    <div>Return Delivery</div>
                    <div>Free 30 Days Delivery Returns. <a href="#" className="underline">Details</a></div>
                </div>
                </div>
            </div>
            <div onClick={()=>setActiveImg(1)} className='order-2 xl:order-4 col-span-1 row-span-1 xl:col-span-1 xl:row-span-1 bg-[#F5F5F5] p-2 flex justify-center items-center'>
                <img src={`/images/${detailProduct.images[1]} `} alt="Havic HV G-92 Gamepad" className="w-24 h-24 object-contain" />

            </div>
            <div onClick={()=>setActiveImg(2)} className='order-3 xl:order-5 col-span-1 row-span-1 xl:col-span-1 xl:row-span-1 bg-[#F5F5F5] p-2 flex justify-center items-center'>
                <img src={`/images/${detailProduct.images[2]} `} alt="Havic HV G-92 Gamepad" className="w-24 h-24 object-contain" />

            </div>
            <div onClick={()=>setActiveImg(3)} className='order-4 xl:order-6 col-span-1 row-span-1 xl:col-span-1 xl:row-span-1 bg-[#F5F5F5] p-2 flex justify-center items-center'>
                <img src={`/images/${detailProduct.images[3]} `} alt="Havic HV G-92 Gamepad" className="w-24 h-24 object-contain" />

            </div>
          </div>
      }
      </>
      )
}
