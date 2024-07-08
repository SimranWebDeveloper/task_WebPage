import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import { GlobalContext } from '../context/GlobalState';



export const Card = ({item}) => {
  const { setAddtoCart } = useContext(GlobalContext);

  return (
    <div className="max-w-[270px] min-w-[270px] h-[360px] w-full sm:1/2 md:w-1/3 lg:1/4  bg-white  font-pop my-8">
            {/* gray part */}
            <div className="relative p-6 bg-[#F5F5F5] overflow-hidden  border rounded-lg shadow-lg group  ">
              <img
                src={`/images/${item.images[0]}`}
                alt="HAVIT HV-G92 Gamepad"
                className="w-full h-48 object-contain rounded-t-lg p-4"
              />
              <div className="absolute top-2 left-2 bg-customRed text-white text-sm px-3 py-1 rounded">
                -{item.discount}%
              </div>
              <div className="absolute top-2 right-2 flex flex-col ">
                <button className="p-1 mb-2 bg-white rounded-full shadow-md">
                  <AiOutlineHeart/>
                </button>
                <button className="p-1 bg-white rounded-full shadow-md">
                  <MdOutlineVisibility/>
                </button>
              </div>
              <button onClick={()=>setAddtoCart((prev)=>[...prev,item])} className=' hidden group-hover:block absolute bottom-0 left-0 font-pop font-medium text-base bg-black text-white w-full py-1'>Add to card</button>
            </div>
            {/* white part */}
            <NavLink to={`../details/${item.id}`} className="mt-4 p-1">
              <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
              <div className="flex items-center mt-2">
                <span className="text-xl  text-customRed">{(item.price*(100-item.discount)/100).toFixed(2)}$</span>
                <span className="text-gray-500 font-semibold line-through ml-2">{item.price}$</span>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="w-5 h-5 text-[#FFAD33]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927C9.323 2.269 10.677 2.269 10.951 2.927l1.711 3.448 3.808.553c.725.105 1.016.995.492 1.505l-2.753 2.682.649 3.792c.122.715-.63 1.261-1.248.92L10 13.651l-3.41 1.791c-.619.341-1.37-.205-1.248-.92l.649-3.792L3.238 8.433c-.524-.51-.233-1.4.492-1.505l3.808-.553 1.511-3.448z" />
                </svg>
                <svg
                  className="w-5 h-5 text-[#FFAD33]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927C9.323 2.269 10.677 2.269 10.951 2.927l1.711 3.448 3.808.553c.725.105 1.016.995.492 1.505l-2.753 2.682.649 3.792c.122.715-.63 1.261-1.248.92L10 13.651l-3.41 1.791c-.619.341-1.37-.205-1.248-.92l.649-3.792L3.238 8.433c-.524-.51-.233-1.4.492-1.505l3.808-.553 1.511-3.448z" />
                </svg>
                <svg
                  className="w-5 h-5 text-[#FFAD33]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927C9.323 2.269 10.677 2.269 10.951 2.927l1.711 3.448 3.808.553c.725.105 1.016.995.492 1.505l-2.753 2.682.649 3.792c.122.715-.63 1.261-1.248.92L10 13.651l-3.41 1.791c-.619.341-1.37-.205-1.248-.92l.649-3.792L3.238 8.433c-.524-.51-.233-1.4.492-1.505l3.808-.553 1.511-3.448z" />
                </svg>
                <svg
                  className="w-5 h-5 text-[#FFAD33]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927C9.323 2.269 10.677 2.269 10.951 2.927l1.711 3.448 3.808.553c.725.105 1.016.995.492 1.505l-2.753 2.682.649 3.792c.122.715-.63 1.261-1.248.92L10 13.651l-3.41 1.791c-.619.341-1.37-.205-1.248-.92l.649-3.792L3.238 8.433c-.524-.51-.233-1.4.492-1.505l3.808-.553 1.511-3.448z" />
                </svg>
                <svg
                  className="w-5 h-5 text-[#FFAD33]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927C9.323 2.269 10.677 2.269 10.951 2.927l1.711 3.448 3.808.553c.725.105 1.016.995.492 1.505l-2.753 2.682.649 3.792c.122.715-.63 1.261-1.248.92L10 13.651l-3.41 1.791c-.619.341-1.37-.205-1.248-.92l.649-3.792L3.238 8.433c-.524-.51-.233-1.4.492-1.505l3.808-.553 1.511-3.448z" />
                </svg>
                
                <span className="text-gray-500 font-semibold ml-2">(88)</span>
              </div>
            </NavLink>
          </div>
  )
}


