import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import files from '../assets/assets'
import { appContext } from '../context/appContext'
const Navbar = () => {
    const navigate = useNavigate()
    const {user, setLoginPopup} = useContext(appContext)
   
    
  return (
    <>
      <nav className="flex flex-col justify-center gap-4 items-center sm-385:flex-row sm-385:justify-between p-4 md:py-6">
        <Link to={"/"}>
          <div className="logo flex items-center gap-2">
            <img
              src={files.AILOGO}
              className="w-12 md:w-16 rounded-xl"
              alt="logo"
            />
            <p className="font-extrabold text-2xl hover:text-stone-600 text-nowrap">Picture-AI</p>
          </div>
        </Link>
        {user ? (
          <div className="flex items-center justify-evenly gap-2 sm:w-fit md:text-sm text-xs ">
            <div className="credit flex sm-385:gap-2 gap-1 items-center text-gray-500 font-semibold bg-blue-200 rounded-full py-2 px-2 sm:px-4 cursor-pointer">
              <img src={files.credit} alt="credit" className="w-5 sm:w-6" />
              <p className='text-nowrap'>Credits Left : 50</p>
            </div>
            <div className="profile flex items-center justify-between gap-2">
              <p className='hidden sm:block'>Hi, Sachin</p>
              <div className="group relative">
                <img
                  src={files.boy}
                  alt="profile"
                  className="w-10 md:w-9 cursor-pointer"
                />
                <div className="absolute bg-red-200 text-red-700 bottom-[-30px] right-0 px-3 py-1 hidden rounded-md group-hover:block">
                  logout
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex sm-385:flex-row items-center gap-2">
            <div 
            onClick={() => navigate("/buy-credit")}
            className="pricing flex items-center gap-2 hover:bg-yellow-300 bg-yellow-200 py-2 px-4 rounded-full cursor-pointer">
              <img src={files.coin} className="h-4" alt="price" />
              <p className='text-xs text-stone-600'>
                Pricing
              </p>
            </div>
            <button 
            onClick={()=>setLoginPopup(true)}
            className="bg-blue-600 text-xs text-white px-4 py-2 font-semibold rounded-full hover:bg-blue-700">
              Login
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar