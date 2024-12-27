import React from 'react'
import files from '../assets/assets'
import GenerateBtn from './GenerateBtn';

const Header = () => {
  return (
    <>
      <header className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-2 border rounded-full w-fit bg-white border-neutral-400 px-4 py-1">
          <p className="text-stone-500 sm:text-sm text-xs">
            Best AI image generator
          </p>
          <img src={files.rate} alt="rating" className="sm:w-7 w-5" />
        </div>
        <div className="title-desc">
          <h1 className="text-3xl text-center sm:text-6xl max-w-[300px] sm:max-w-[500px] m-auto">
            Generate <span className="text-orange-500">AI Pictures</span>{" "}
            through texts, in seconds.
          </h1>
          <p className='text-center text-xs px-8 sm:text-sm'>
            Transform your words into stunning visuals with our AI-powered
            text-to-image generator. Creativity meets technology at its best!
          </p>
        </div>
        <div className="g-btn mt-2">
          <GenerateBtn/>
        </div>
        <div className="AI-images flex flex-wrap gap-2 p-2 justify-center">
          {files.aIImages.map((item, index) => (
            <img
              src={item}
              alt="AI-images"
              className="size-16 object-cover rounded cursor-pointer hover:scale-110 transition-all ease-in-out"
              key={index}
            />
          ))}
        </div>
        <p className='text-stone-500 text-xs'>
          Generated Images from <span className='text-teal-600'>PICTURE-IT</span>
        </p>
      </header>
    </>
  );
}

export default Header