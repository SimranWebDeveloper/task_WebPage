import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import acountImg from '../assets/images/acountImg.png'
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { GlobalContext } from '../context/GlobalState';


export const SignIn = () => {
  const { getUsers, setGetUsers,activeUser,setActiveUser} = useContext(GlobalContext);


  // const [users,setUsers]=useState(localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) :[])

  const [user, setUser] = useState(
    {
      name:'',
      email:'',
      password:'',

    },
  );

  // useEffect(() => {
  //   localStorage.setItem('users', JSON.stringify(users))
  // },[users])



  const [showPassword, setShowPassword] = useState(false);

  const navigate=useNavigate();



  const submitForm=(e)=>{
    
    e.preventDefault();
    if (getUsers.filter((item)=>item.name===user.name && item.email===user.email && item.password===user.password)) {
      setGetUsers((prev)=>prev.map((item)=>item.name===user.name && item.email===user.email && item.password===user.password ? {...item,status:true} : item))
      
      toast.success(`Welcome ${user.name}`);
      window.location.reload()      
      // navigate('/')
   
    }
    else{
      toast.error('User not found, Please sign up')
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
        <input type="email" placeholder='Email' className='w-full outline-none border-b p-2 my-4' onChange={(e)=>setUser({...user,email:e.target.value})} />
        <div className='flex justify-between items-center border-b my-4'>
          <input type={showPassword ? 'text' : 'password'} placeholder='Password' className='w-full outline-none  p-2 ' onChange={(e)=>setUser({...user,password:e.target.value})} />
          <button type='button' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <AiFillEyeInvisible /> : <AiFillEye /> }</button>
        </div>
        <div className='flex justify-between items-center  my-4'>
          <button type='submit' className=' rounded-md border border-customRed  px-8 py-2 my-4 bg-customRed text-white hover:text-customRed hover:bg-white duration-500'>Log in</button>
          <button type='button' className=' flex justify-center  text-customRed items-center rounded-md  p-2 my-4  hover:bg-customRed hover:text-white  duration-500 ' >Forget Password?</button>
        </div>

      </form>

    </div>
  )
}
