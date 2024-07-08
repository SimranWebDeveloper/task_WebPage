import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <div className='relative flex flex-col items-center justify-center h-screen text-center  px-smallCon md:px-mediumCon lg:px-largeCon '>
        <nav className="absolute top-20 left-8 md:left-12 lg:left-32 text-gray-600">
        <Link to="/" className="text-gray-600 hover:underline">Home</Link> / 404 Error
      </nav>
      <h1 className="text-6xl font-bold">404 Not Found</h1>
      <p className="mt-4 text-lg">Your visited page not found. You may go home page.</p>
      <Link to="/" className="mt-6 px-6 py-2 bg-red-500 text-white rounded">
        Back to home page
      </Link>
    </div>
  )
}
