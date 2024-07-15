import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import acountImg from '../assets/images/acountImg.png'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { GlobalContext } from '../context/GlobalState';


export const Join = () => {

  const { getUsers, setGetUsers,activeUser,setActiveUser,permition, setPermition} = useContext(GlobalContext);


  const [user, setUser] = useState(
    {
      name:'',
      email:'',
      password:'',

    },
  );


  const [showPassword, setShowPassword] = useState(false);

  const navigate=useNavigate();


  const submitForm=(e)=>{
    e.preventDefault();
  
    const isChecked = () => {
      for (let item of getUsers) {
        if (item.name === user.name ) {
          toast.error("User Name already exists");
          return false;
        }
        if (item.email === user.email) {
          toast.error("User Email already exists");
          return false;
        }
      }
      return true;
      
    }

    if(isChecked()){     
      setGetUsers((prev)=>[...prev,{...user,status:true}])

      setPermition(true)
      toast.success("Account created successfully");
      // window.location.reload();
      navigate('/add-to-card')
    }
  }


  return (
    <div className='flex flex-col lg:flex-row justify-center items-center py-20   px-smallCon md:px-mediumCon lg:pe-largeCon lg:space-x-32 '>
      <div className='order-2 lg:oreder-1 '>
        <img src={acountImg} alt="acountImg" />
      </div>
      <form  onSubmit={submitForm} className='order-1 lg:order-2'>
        <h3 className='text-3xl font-semibold'>Create an account</h3>
        <p className='text-base my-4'>Enter your details below</p>
        <input type="text" placeholder='Name' className='w-full outline-none border-b p-2 my-4' onChange={(e)=>setUser({...user,name:e.target.value})} />
        {/* deyis */}
        <input type="email" placeholder='Email' className='w-full outline-none border-b p-2 my-4' onChange={(e)=>setUser({...user,email:e.target.value})} />
        <div className='flex justify-between items-center border-b my-4'>
          <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='w-full outline-none  p-2 ' onChange={(e)=>setUser({...user,password:e.target.value})} />
          <button type='button' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEyeInvisible /> : <AiFillEye /> }</button>
        </div>
        <button type='submit' className='w-full rounded-md border border-customRed  p-2 my-4 bg-customRed text-white hover:text-customRed hover:bg-white duration-500'>Create Account</button>
        <button type='button' className='w-full flex justify-center border   items-center rounded-md  p-2 my-4  hover:bg-customRed hover:text-white  duration-500 ' ><FcGoogle className='mx-4'/><span>Sign up with Google</span></button>
        
      <p className='text-center my-8 '>Already have an account? <NavLink className={'hover:text-customRed duration-500  font-semibold'} to='/account/signin'>Login</NavLink></p>

      </form>

    </div>
  )
}
