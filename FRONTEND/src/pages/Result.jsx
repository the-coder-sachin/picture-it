import React from 'react'
import files from '../assets/assets'
import { useState } from 'react'

const Result = () => {
  const [image, setImage] = useState(files.AI3)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const onSubmitHandler = async (e)=>{

  }
  return (
    <section>
      <form className="flex flex-col items-center gap-8" onSubmit={onSubmitHandler}>
        <div className="video bg-blue-300 p-3 rounded-full shadow-2xl mx-3">
          <video
            src={files.AIvideo}
            muted
            autoPlay
            className="max-h-[350px] rounded-full shadow-inner"
          ></video>
        </div>
        {isImageLoaded ? (
          <div className="input rounded-full sm-385:border border-b-sky-700 p-1 flex flex-col sm-385:flex-row">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-9 py-2 rounded-t-full sm-385:rounded-l-full sm-385:rounded-tr-none  text-center">
              Generate another
            </button>
            <a
              href=""
              download
              className="bg-blue-100 text-center font-semibold hover:bg-blue-200 px-9 py-2 rounded-b-full sm-385:rounded-r-full sm-385:rounded-bl-none "
            >
              Download
            </a>
          </div>
        ) : (
          <div className="input sm:w-[600px] rounded-full sm-385:border border-b-sky-700 p-1 flex flex-col sm-385:flex-row">
            <input
              value={input}
              onChange={e=>setInput(e.target.value)}
              type="text"
              className="bg-blue-100 outline-none flex-grow px-3 py-2 rounded-t-full sm-385:rounded-l-full sm-385:rounded-tr-none text-xs text-center"
              placeholder="What can i create for you?"
            />
            <button className="bg-blue-500 text-white px-3 py-1 rounded-b-full sm-385:rounded-r-full sm-385:rounded-bl-none hover:bg-sky-600">
              Generate
            </button>
          </div>
        )}
      </form>
      <hr className='my-10 mx-4' />
    </section>
  );
}

export default Result