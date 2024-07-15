import React, { useContext, useState } from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Navigate, Outlet } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

export const AppLayout = () => {
  const {permition, setPermition} = useContext(GlobalContext);
  return (
    <div className={`'bg-white text-black `} >
      <Header/>
      <main >
        
          {/* permition ? <Outlet/> : <Navigate to={'/account/signup'}/> */}
           <Outlet/>    
        
      </main>      
      <Footer/>
    </div>
  )
}
