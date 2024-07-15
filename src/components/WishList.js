import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Card } from './Card';
import { toast } from 'react-toastify';
import { CarouselCard } from './CarouselCard';
import { NavLink } from 'react-router-dom';

export const WishList = () => {
    const { data,setData } = useContext(GlobalContext);

    const wishList =data.filter((item) => item.wish ===true );


    const carryWishList = () => {
        setData((prev) => {
            const updatedData = prev.map((product) => {
                if (product.wish) {
                    return { ...product, wish: false, addedCard: true };
                }
                return product;
            });
            return updatedData;
        });
        toast.success("All items moved to Cart");
    };

  return (
    <div className='px-smallCon md:px-mediumCon lg:px-largeCon my-20'>
        <div className='text-center md:text-end px-6'>
        <button onClick={carryWishList} className='hover:text-white hover:bg-black duration-500 font-pop font-semibold px-12 py-4 border rounded-md border-black'>Move All to Bug</button>

        </div>
        {/* wishlist */}
        <div className='grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid   justify-items-center items-center    ' >
            
            {
                wishList.length > 0 ? wishList.map((product, index) => (
                    <Card key={index} item={product} /> // item olarak gönder
                    
                ))
                :
                    <p className='py-16 text-center text-3xl font-pop font-semibold  w-full'>No Item in WishList</p>

            }
        </div>
        {/* see all */}
        <div>
        <div>
            <div className='text-center md:text-end px-6 flex justify-between items-center'>
            <div className="flex justify-start items-center">
                    <div className="w-5 h-10 bg-customRed rounded-lg me-3"></div>
                    <h3 className="text-xl font-semibold">Justify For You</h3>
                </div>
                <NavLink to={"/product"} className='hover:text-white hover:bg-black duration-500 font-pop font-semibold px-12 py-4 border rounded-md border-black'>See All</NavLink>
            </div>
            
        </div>
        <div className=' grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid   justify-items-center items-center ' >
            {
                data.slice(0, 4).map((product, index) => (
                    <Card key={index} item={product} /> // item olarak gönder
                
                ))


            }
        </div>
        </div>
    </div>
    )
  
}
