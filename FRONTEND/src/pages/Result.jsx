import React, { useContext } from 'react'
import files from '../assets/assets'
import { useState } from 'react'
import { appContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Result = () => {
  const [image, setImage] = useState(files.AI3)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')
  const {generateImage, credit} = useContext(appContext)

  const navigate = useNavigate();

  const onSubmitHandler = async (e)=>{
    e.preventDefault()
    if(credit>0){
      setLoading(true);
      if (input || input.trim.length > 0) {
        const image = await generateImage(input);
        if (image) {
          setIsImageLoaded(true);
          setImage(image);
        }
      }
      setLoading(false);
    }else{
      navigate('/buy-credit');
      toast.error('No more credits left!')
    }
  }

  const generateAnotherImage = ()=>{
    setIsImageLoaded(false);
    setInput('');
    setImage('');
    setLoading(false)
  }
  return (
    <section className='mb-2'>
      <form
        className="flex flex-col items-center gap-8"
        onSubmit={onSubmitHandler}
      >
        <div className={`video ${!isImageLoaded && 'bg-blue-300 rounded-full'} p-3  shadow-2xl mx-3 `}>
          {isImageLoaded ? (
            <>
              <img
                src={image}
                alt="generated image"
                className="w-[450px] rounded-md"
              />
            </>
          ) : (
            <video
              src={files.AIvideo}
              muted
              autoPlay
              className="max-h-[350px] rounded-full shadow-inner"
            ></video>
          )}
        </div>
        {isImageLoaded ? (
          <div className="input rounded-full sm-385:border border-b-sky-700 p-1 flex flex-col sm-385:flex-row">
            <button onClick={generateAnotherImage} className="bg-blue-500 hover:bg-blue-600 text-white px-9 py-2 rounded-t-full sm-385:rounded-l-full sm-385:rounded-tr-none  text-center">
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
          <div>
            {loading && (
              <div className="loading text-center flex gap-4 ">
                <p className="animate-pulse">loading . . . .</p>
                <div className="size-5 border-4 border-t-4 border-t-slate-100 border-dotted border-rose-500 rounded-full animate-spin"></div>
              </div>
            )}
            <div className="input sm:w-[600px] rounded-full sm-385:border border-b-sky-700 p-1 flex flex-col sm-385:flex-row">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                className="bg-slate-100 outline-none flex-grow px-3 py-2 rounded-t-full sm-385:rounded-l-full sm-385:rounded-tr-none text-base"
                placeholder="What can i create for you?"
              />
              <button className="bg-blue-500 text-white px-3 py-1 rounded-b-full sm-385:rounded-r-full sm-385:rounded-bl-none hover:bg-sky-600">
                Generate
              </button>
            </div>
          </div>
        )}
      </form>
      <hr className="my-10 mx-4" />
    </section>
  );
}

export default Result