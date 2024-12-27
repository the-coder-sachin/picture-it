import React, { useContext, useEffect, useState } from 'react'
import files from '../assets/assets'
import { appContext } from '../context/appContext'

const Login = () => {
    const [state, setState] = useState('Login')

    const {setLoginPopup} = useContext(appContext)

    useEffect(() => {
      document.body.style.overflow = `hidden`
      
      return () => {
          document.body.style.overflow = `unset`
        
      }
    }, [])
    
  return (
    <>
      <div className="h-screen absolute backdrop-blur-sm backdrop-brightness-50 z-10 w-screen top-0 flex justify-center items-center">
        <form className="bg-white p-5 rounded-lg shadow-2xl flex flex-col items-center relative">
          <h1 className="text-xl font-medium text-neutral-700 mb-4">{state}</h1>
          <div className="flex flex-col gap-3">
            {state != "Login" && (
              <div className="flex border p-2 rounded-full gap-2 items-center ">
                <img
                  src={files.user}
                  alt="user"
                  className="size-5 opacity-25"
                />
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="text-neutral-700 placeholder:text-neutral-300 text-xs outline-none w-[230px]"
                />
              </div>
            )}
            <div className="flex border p-2 rounded-full gap-2 items-center ">
              <img src={files.email} alt="user" className="size-5 opacity-25" />
              <input
                type="email"
                required
                placeholder="Email Id"
                className="text-neutral-700 placeholder:text-neutral-300 text-xs outline-none w-[230px]"
              />
            </div>
            <div className="flex border p-2 rounded-full gap-2 items-center ">
              <img
                src={files.password}
                alt="user"
                className="size-5 opacity-25"
              />
              <input
                type="password"
                required
                placeholder="Password"
                className="text-neutral-700 placeholder:text-neutral-300 text-xs outline-none w-[230px]"
              />
            </div>
          </div>
          <p className="text-blue-600 text-xs self-start m-3">
            forget password?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-full mb-3 w-[200px] text-sm">
            {state == 'Login' ?`login`:`create account`}
          </button>

          {state == "Login" ? (
            <div className="text-xs">
              <p>
                Don't have an account?{" "}
                <span
                onClick={()=>setState('Sign Up')} 
                className="text-blue-600 cursor-pointer">Sign Up</span>
              </p>
            </div>
          ) : (
            <div className="text-xs">
              <p>
                Already have an account?{" "}
                <span 
                onClick={()=>setState('Login')}
                className="text-blue-600 cursor-pointer">Login</span>
              </p>
            </div>
          )}

          <p 
          onClick={()=>setLoginPopup(false)}
          className="absolute top-0 right-2 text-4xl font-thin rotate-45 cursor-pointer">
            +
          </p>
        </form>
      </div>
    </>
  );
}

export default Login