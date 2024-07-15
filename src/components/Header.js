import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";

import { BsFillSunFill,BsMoonFill } from "react-icons/bs";
import { FcBusinessman } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { GlobalContext } from '../context/GlobalState';

export const Header = () => {
  const { data,search,setSearch,getUsers, setGetUsers,activeUser,setActiveUser} = useContext(GlobalContext);

  const wishList=data.filter((item)=>item.wish===true)
  const cart=data.filter((item)=>item.addedCard===true)


  const logo = '/images/Logo.png'


  const dataNav = [
    {
      id: 0,
      name: "Home",
      path: "/",
    },
    {
      id: 1,
      name: "Contact",
      path: "/contact",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    // {
    //   id: 2,
    //   name: "Sign up",
    //   path: "/account/signup",
    // },
  ];
  const [active, setActive] = useState(0);
  const handleClick = (id) => {
    setActive(id);
  };

  // search
  const location=useNavigate()  
  const searchProducts=   (e) => {
    
      setSearch((e.target.value).toLowerCase())
      location('/product')
  }

  // Hamburger menu
  const [isOpen, setIsOpen] = useState(false);



  const removeAllStatus= ()=>{
    setGetUsers(getUsers.map((user)=>({...user,status:false})))
    window.location.reload()
  }

  
  return (
    <div>
    <header className=' w-full  flex flex-row justify-between items-center h-16 md:h-20 lg:h-24 px-smallCon md:px-mediumCon lg:px-largeCon border-b overflow-hidden '>
      {/* logo */}
      <div className='w-1/4 flex   '>
        <NavLink to="/" className={' min-w-10  lg:w-28 h-6 '}>
          <img src={logo} alt="logo" />
        </NavLink>
      </div>
      <div className='hidden md:flex w-3/4  '>
      <nav className="w-8/12 flex  space-x-3 lg:space-x-6  text-sm ">
              {dataNav.map((elem, index) => (
                <NavLink
                  to={elem.path}
                  key={index}
                  onClick={() => handleClick(index)}
                  className=" h-16 md:h-20 lg:h-24 flex items-center relative  font-pop   text-nowrap "
                >
                  {elem.name}
                  {active === index && (
                    <div className="h-[4px] w-full bg-black absolute bottom-0 "></div>
                  )}
                </NavLink>
              ))}
              {/* account */}
              <NavLink
                  to={'/account/signup'}
                  onClick={() => handleClick(3)}
                  className=" h-16 md:h-20 lg:h-24 flex items-center relative  font-pop   text-nowrap "
                >
                  <div className='flex flex-col justify-center items-center'>
                  <h3>{!activeUser ? "Sign up" : activeUser?.name}</h3>
                  {activeUser && <button className='bg-blue-500 text-white rounded-lg px-2 py-1' onClick={removeAllStatus}> Log out</button> }
                  </div>

                  {active === 3 && (
                    <div className="h-[4px] w-full bg-black absolute bottom-0 "></div>
                  )}
                </NavLink>
       </nav>
       {/* search */}
       <div className='w-4/12  min-w-[270px]  flex space-x-2 items-center text-sm  '>

          <div className='w-full flex justify-between items-center space-x-2 bg-[#F5F5F5]  rounded-md overflow-hidden px-2 py-2 text-sm'>
          <input onChange={searchProducts} className='w-full bg-[#F5F5F5]' placeholder='What are you looking for?'>
          </input>
          {/* <button className='  text-xl'><FiSearch/></button> */}

          </div>

          <div className='w-1/5 flex justify-between space-x-2  text-xl'>
          <NavLink to={"/wishlist"} className={'relative'} >
          <AiOutlineHeart/>
          <span className='absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1'>{wishList.length}</span>
          </NavLink>
          <NavLink to={"/add-to-card"}  className={'relative'} >
          <span className='absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1'>{cart.length}</span>
          <BsCart3 />
          </NavLink>
          </div>
       </div>
       </div>

       {/* Hamburger */}
       <div className='block md:hidden   w-full text-end  ' >
       <button className='' onClick={()=>setIsOpen(!isOpen)}><GiHamburgerMenu/></button>
        
       
        
           <div className={`absolute z-50 top-16 md:top-20 lg:top-24 left-0  bg-[#F5F5F5] shadow-2xl  transform  duration-700 overflow-hidden
                      ${isOpen ? " w-full ":"w-0 invisible "}`}>
    
            {/*Hamburger navLinsk part */}
              <nav className="p-12 pb-0 flex  flex-col text-sm ">
              {dataNav.map((elem, index) => (
                <NavLink
                  to={elem.path}
                  key={index}
                  onClick={() => handleClick(index)}
                  className=" h-16 md:h-20 lg:h-24 flex items-center relative  font-pop   text-nowrap "
                >
                  {elem.name}
                  {active === index && (
                    <div className="h-[4px] w-full bg-black absolute bottom-0 "></div>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* search */}
       <div className='p-12 pt-0    flex space-x-2 items-center text-base  '>

        <div className='w-full flex justify-between items-center space-x-2 bg-[#F5F5F5]  rounded-md overflow-hidden px-2 py-2 text-sm'>
        <input onChange={searchProducts} className='w-full bg-[#F5F5F5]' placeholder='What are you looking for?'>
        </input>
        {/* <button className='  text-xl' ><FiSearch/></button> */}

        </div>

        <div className='w-1/5 flex justify-between space-x-2  text-xl'>
        <NavLink to={"/wishlist"} className={'relative'} >
          <AiOutlineHeart/>
          <span className='absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1'>{wishList.length}</span>
          </NavLink>
          <NavLink to={"/add-to-card"}  className={'relative'} >
          <span className='absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1'>{cart.length}</span>
          <BsCart3 />
          </NavLink>
        </div>
        </div>

          </div>
        

       </div>
       




      
        
    </header>
    </div>
  )
}




