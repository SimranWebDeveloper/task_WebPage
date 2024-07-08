import React from 'react'
import qrCode from '../assets/images/qrCode.png'
import android from '../assets/images/app-store-android.png'
import ios from '../assets/images/appstore-apple.png'
import { NavLink } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className="px-smallCon md:px-mediumCon lg:px-largeCon  bg-black text-white py-6">
      <div className=" grid justify-between   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-14 ">
        {/* Exclusive */}
        <div className='flex flex-col justify-center items-center sm:items-start leading-9 '>
          <h2 className="text-xl font-bold mb-4">Exclusive</h2>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full text-black"
            />
            <button className="mt-2 bg-gray-700 p-2 w-full">Submit</button>
          </div>
        </div>
        
        {/* Support */}
        <div className='flex flex-col justify-center items-center sm:items-start font-pop text-base leading-9 '>
          <h2 className="text-xl font-bold mb-4">Support</h2>
          <address>
            111 Bijoy sarani, Dhaka,<br />
            DH 1515, Bangladesh.<br />
            <NavLink to="mailto:exclusive@gmail.com" className="text-gray-400">exclusive@gmail.com</NavLink><br />
            <NavLink to="tel:+8801588889999" className="text-gray-400">+88015-88888-9999</NavLink>
          </address>
        </div>
        
        {/* Account */}
        <div className='flex flex-col justify-center items-center sm:items-start'>
          <h2 className="text-xl font-bold mb-4">Account</h2>
          <ul className='font-pop text-base leading-9 flex flex-col justify-center items-center sm:items-start'>
            <li><NavLink to={'/'} className="text-gray-400">My Account</NavLink></li>
            <li><NavLink to={'/'} className="text-gray-400">Login / Register</NavLink></li>
            <li><NavLink to={'/'} className="text-gray-400">Cart</NavLink></li>
            <li><NavLink to={'/'} className="text-gray-400">Wishlist</NavLink></li>
            <li><NavLink to={'/'} className="text-gray-400">Shop</NavLink></li>
          </ul>
        </div>
        
        {/* Quick Link */}
        <div className='flex flex-col justify-center items-center sm:items-start'>
          <h2 className="text-xl font-bold mb-4">Quick Link</h2>
          <ul className='font-pop text-base leading-9 flex flex-col justify-center items-center sm:items-start'>
            <li><a href="#" className="text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400">Terms Of Use</a></li>
            <li><a href="#" className="text-gray-400">FAQ</a></li>
            <li><a href="#" className="text-gray-400">Contact</a></li>
          </ul>
        </div>
        
        {/* Download App */}
        <div className='flex flex-col justify-center items-center sm:items-start '>
          <h2 className="text-xl font-bold mb-4">Download App</h2>
          <p className='text-sm text-[#FAFAFA] font-medium font-pop leading-9 '>Save $3 with App New User Only</p>
          <div className='flex'>
          <img src={qrCode} alt="App Store" className="h-20 w-20" />
          <div className="ml-2">
            <NavLink href="/"><img src={android} alt="Google Play" className="w-28 h-10 object-contain" /></NavLink>
            <NavLink href="/"><img src={ios} alt="App Store" className="w-28 h-10" /></NavLink>
          </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className=" text-center text-gray-500 mt-8">
        &copy; Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  )
}
