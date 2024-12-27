import React from 'react'

const Option = ({item, index}) => {
  const {title, description, icon} = item;
    return (
      <div key={index} className='flex border w-[280px] sm:w-[500px] mx-auto items-center p-3 gap-3 min-h-20 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-all duration-500 bg-blue-50'>
        <img src={icon} className='h-8' alt="" />
        <div className="flex-col">
          <h4 className='text-lg font-semibold'>{title}</h4>
          <p className='text-stone-500 text-xs'>{description}</p>
        </div>
      </div>
    );
}

export default Option