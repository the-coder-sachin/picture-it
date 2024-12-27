import React from 'react'
import files from '../assets/assets'

const Section2 = () => {
  return (
    <section className='m-5 flex flex-col justify-center items-center'>
        <h2 className='text-3xl font-semibold'>Create Picture AI</h2>
        <p className='text-xs'>turn your imaginations into visuals</p>
        <div className="wrapper flex-col lg:flex-row items-center flex sm:w-2/3 gap-4 mt-8">
            <img src={files.AI2} alt="Cat-image-AI" className='w-[270px] rounded-lg' />
            <div className="content text-xs sm:text-sm text-stone-500 flex flex-col gap-4 px-10">
                <h2 className='text-xl font-semibold text-stone-700 text-center'>Introducing to AI-Powered Text to Picture Generator</h2>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa ex distinctio earum accusamus hic nulla consequuntur explicabo voluptates repellendus! Voluptatem saepe eligendi quos autem.</p>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio maxime architecto? Sunt harum omnis quam sapiente cupiditate deserunt cum quos, rem tempora commodi, mollitia debitis saepe facilis eius esse?</p>
            </div>
        </div>
    </section>
  )
}

export default Section2