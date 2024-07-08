import React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  let mode=false
  return (
    <div className={`${mode  ? 'bg-gray-800 text-slate-50' :'bg-white text-black' } `} >
      <Header/>
      <main >
        <Outlet/>
      </main>      
      <Footer/>
    </div>
  )
}
