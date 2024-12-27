import React from 'react'
import files from '../assets/assets'

const Footer = () => {
  return (
    <footer className='flex flex-col-reverse sm:flex-row gap-3 justify-between px-5 py-3'>
      <div className='flex items-center gap-2 justify-between'>
        <img src={files.AILOGO} alt="logo" className='w-12 md:w-16' />
        <h2 className='text-xl sm:text-2xl md:text-3xl font-bold hidden sm:block'>Picture-AI</h2>
        <div className="copyright">
          <p className='text-xs text-stone-500'>Copyright @ Picture-AI | All rights are reserved @2025</p>
        </div>
      </div>
      <div className="social flex gap-1 sm:gap-2 items-center justify-center">
        <img src={files.twitter} alt="twitter"     className='size-5 md:size-7 cursor-pointer' />
        <img src={files.facebook} alt="facebook"   className='size-5 md:size-7 cursor-pointer' />
        <img src={files.instagram} alt="instagram" className='size-5 md:size-7 cursor-pointer' />
      </div>
    </footer>
  );
}

export default Footer