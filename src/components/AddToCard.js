import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AddToCard = () => {
    const { data,setData } = useContext(GlobalContext);

    const cards =data.filter((item) => item.addedCard ===true );
 
  const buyProducts = () => {
    setData((prev) => {
      const updatedData = prev.map((product) => {
        if (product.addedCard) {
          return { ...product, addedCard: false, wish: false, buy: true,times:0 };
        }
        return product;
      });
      return updatedData;
    });
    toast.success("All products were bought successfully");
  };


  return (
    <div className="px-smallCon md:px-mediumCon lg:px-largeCon my-20 w-full ">
      <nav className="text-gray-600 mb-4">
        <NavLink to="/" className="hover:underline">Home</NavLink> <NavLink to="/add-to-card" className="hover:underline">/ Cart</NavLink> 
      </nav>

        {/* table */}
        <div className="w-full  ">
          <div className='w-full min-w-800  overflow-x-auto'>
            
          <table className="w-full text-left border-collapse    ">
            <thead>
              <tr>
                <th className="border-b py-2">Product</th>
                <th className="border-b py-2">Price</th>
                <th className="border-b py-2">Quantity</th>
                <th className="border-b py-2">Subtotal</th>
              </tr>
            </thead>
            <tbody>
                {
                    cards.map((item)=>{
                        return(
                            <tr>
                                <td className="border-b py-4 flex  items-center">
                                  <img src={`/images/${item.images[0]}`} alt={item.name} className="w-16 h-16 mr-4" />
                                  <span className='text-nowrap'>{item.name}</span>
                                </td>
                                <td className="text-nowrap border-b py-4">${item.price}</td>
                                <td className=" text-nowrap border-b py-4">
                                  <input
                                   onChange={(e)=>{     
                                        setData((prev) => {
                                            return prev.map((product) => 
                                              product.id === item.id ? { ...product, times: Number(e.target.value) } : product
                                            );
                                          });
                                    }} 
                                       type="number" min="1" max="10" defaultValue="1" className="w-16 border rounded text-center" />
                                
                                </td>
                                <td className="border-b text-nowrap py-4">${((item.times==undefined?1:item.times)*item.price).toFixed(2)}</td>
                              </tr>
                        )
                    })
                }
            </tbody>
          </table>
          </div>

          <div className="flex justify-between mt-4">
            <NavLink to="/product" className="px-4 py-2 bg-gray-200 rounded">Return To Shop</NavLink>
            <button className="px-4 py-2 bg-gray-200 rounded">Update Cart</button>
          </div>

          
        </div>
        <div className='flex justify-between items-center flex-col lg:flex-row'>
          {/* Coupon Code */}
          <div className="flex flex-nowrap mt-4">
            <input type="text" placeholder="Coupon Code" className="w-2/3 border rounded-l px-4 py-2" />
            <button className="text-nowrap  px-4 py-2 bg-red-500 text-white rounded-r">Apply Coupon</button>
          </div>
       
          {/* Card */}
          <div className="w-full max-w-96 border p-4 rounded my-4">
            <h2 className="text-lg font-bold mb-4">Cart Total</h2>
            <div className="flex justify-between mb-2 border-b pb-1">
              <span className=''>Subtotal:</span>
              <span>${cards.reduce((acc, item) => acc + item.price*(item.times==undefined? 1:item.times), 0)}</span>
            </div>
            <div className="flex justify-between mb-2 border-b pb-1">
              <span>Shipping:</span>
              <span>$10%</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span>Total:</span>
              <span>${cards.reduce((acc, item) => acc + item.price*(item.times==undefined?1:item.times), 0)*0.9 < 0 ? 0 : cards.reduce((acc, item) => acc + item.price*(item.times==undefined?1:item.times), 0)*0.9}</span>
            </div>
            <div className='flex justify-center items-center'>
            <button onClick={buyProducts} className="w-3/4 px-4 py-2 bg-red-500 text-white rounded">Proceed to checkout</button>

            </div>
          
        </div>
      </div>
    </div>
  )
}
