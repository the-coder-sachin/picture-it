import React, { useContext } from 'react'
import files from '../assets/assets';
import { appContext } from '../context/appContext';

const BuyCredit = () => {
  const {user} = useContext(appContext)
 
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col justify-center items-center gap-4">
        <button className="border rounded-full text-neutral-500 font-normal px-4 py-1 text-xs sm-385:text-sm">
          Our Plans
        </button>
        <p className="text-xl font-semibold">Choose your plan</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-5">
        {files.plans.map((item, index) => (
          <div key={index} className="border bg-white text-slate-600 flex-col p-6 w-[200px] rounded-md shadow-lg hover:scale-110 transition-all duration-300">
            <div className="icon flex justify-end">
              <img src={item.icon} alt="icon" className="size-8" />
            </div>
            <p className="text-sm mt-2">{item.title}</p>
            <p className="text-xs mt-2">{item.desc}</p>
            <p className="mt-3">
              <span className="font-semibold text-2xl">${item.price}</span>
              <span className="text-xs text-neutral-500">
                /{item.credits} credits{" "}
              </span>
            </p>
            <div className='flex justify-center'>
              <button className={`${user?'bg-blue-500 hover:bg-blue-600':'bg-orange-500 hover:bg-orange-600'} mx-auto text-white px-5 py-1 rounded-full font-semibold mt-6`}>
                {user?'Buy':'Login to buy'}
              </button>
            </div>
          </div>
        ))}
      </div>
      <hr  className='m-6 bg-black w-full'/>
    </div>
  );
}

export default BuyCredit