import React from 'react'
import Option from './Option'
import files from '../assets/assets';

const HowItWorks = () => {
    const data = [
        {
            title: 'Describe Your Thoughts',
            description: 'write a sentence or paragraph that describes the picture you want to create',
            icon: files.thought
        },
        
        {
            title: 'What The Magic',
            description: 'Our AI-powered engine will transform your text into a high quality, unique images in seconds',
            icon: files.magic
        },
        
        {
            title: 'Download & Share',
            description: 'Instantly download your creation or share it with the world directly from our platorm.',
            icon: files.download
        },
        
    ]
  return (
    <>
      <section className="m-9">
        <h2 className="font-bold text-2xl text-center mb-3">How It Works?</h2>
        <div className="flex flex-col gap-3">
          {data.map((item, index) => (
            <Option item={item} key={index} />
          ))}
        </div>
      </section>
    </>
  );
}

export default HowItWorks