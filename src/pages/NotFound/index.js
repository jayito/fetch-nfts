import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@images/logo.png'

const PageNotFound = () => {
  return (
    <div className="relative bg-black-medium min-h-screen">
      <div className="flex justify-between items-center px-4 sm:px-8 py-6">
        <Link to="/">
          <img src={logo} alt="logo" className="h-10 sm:h-14 lg:h-16" />
        </Link>
      </div>
      <div className="flex justify-center items-center w-full h-full absolute top-0 left-0">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold uppercase font-nidus_sans__reguar tracking-widest">Page Not Found</h1>
          <div className="mt-6">
            <Link to="/" className="text-green text-xl sm:text-2xl underline uppercase font-nidus_sans__reguar tracking-widest cursor-pointer">Go Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound;