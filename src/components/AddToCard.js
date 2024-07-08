import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddToCard = () => {
    const { addtoCart,setAddtoCart } = useContext(GlobalContext);
    useEffect(() => {
        console.log('addtoCart Sehivesi', addtoCart);
    },[addtoCart])




    const[timeQuantity, setTimeQuantity] = useState(1)

    // const setQuantity = (e, id) => {
    //     console.log('e.target.value', e.target.value);
    //     console.log('id', id);
    //     // setTimeQuantity(Number(e.target.value))
    //     // setAddtoCart((prev)=>[...prev,{...prev[0],quantity:timeQuantity}])
    // }


  return (
    <div className="px-smallCon md:px-mediumCon lg:px-largeCon my-20">
      <nav className="text-gray-600 mb-4">
        <a href="/" className="hover:underline">Home</a> / Cart
      </nav>
      <div className="flex justify-between space-x-8 my-20">
        <div className="w-3/4">
          <table className="w-full text-left border-collapse">
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
                    addtoCart.map((item)=>{
                        return(
                            <tr>
                                <td className="border-b py-4 flex items-center">
                                  <img src={`/images/${item.images[0]}`} alt={item.name} className="w-16 h-16 mr-4" />
                                  <span>{item.name}</span>
                                </td>
                                <td className="border-b py-4">${item.price}</td>
                                <td className="border-b py-4">
                                  <input onChange={(e)=>{     
                                        // {...item, times:Number(e.target.value)}
                                        setAddtoCart((prev) => {
                                            return prev.map((product) => 
                                              product.id === item.id ? { ...product, times: Number(e.target.value) } : product
                                            );
                                          });
                                    }} 
                                       type="number" min="1" max="10" defaultValue="1" className="w-16 border rounded text-center" />
                                </td>
                                <td className="border-b py-4">${((item.times==undefined?1:item.times)*item.price).toFixed(2)}</td>
                              </tr>
                        )
                    })
                }
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button className="px-4 py-2 bg-gray-200 rounded">Return To Shop</button>
            <button className="px-4 py-2 bg-gray-200 rounded">Update Cart</button>
          </div>
          <div className="flex mt-4">
            <input type="text" placeholder="Coupon Code" className="w-2/3 border rounded-l px-4 py-2" />
            <button className="w-1/3 px-4 py-2 bg-red-500 text-white rounded-r">Apply Coupon</button>
          </div>
        </div>
        <div className="w-1/4 border p-4 rounded">
          <h2 className="text-lg font-bold mb-4">Cart Total</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>{addtoCart.reduce((acc, item) => acc + item.price*(item.times==undefined?1:item.times), 0)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>$10%</span>
          </div>
          <div className="flex justify-between font-bold mb-4">
            <span>Total:</span>
            <span>${addtoCart.reduce((acc, item) => acc + item.price*(item.times==undefined?1:item.times), 0)-10}</span>
          </div>
          <button className="w-full px-4 py-2 bg-red-500 text-white rounded">Proceed to checkout</button>
        </div>
      </div>
    </div>
  )
}
