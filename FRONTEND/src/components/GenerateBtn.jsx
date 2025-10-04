import React, { useContext } from 'react'
import files from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { appContext } from '../context/appContext';

const GenerateBtn = () => {
    const navigate = useNavigate()
    const {user , setLoginPopup} = useContext(appContext)

    const onClickHandler = ()=>{
      
        if(user){
            navigate('/result')
        }else{
            setLoginPopup(true)
        }
    }
  return (
    <>
      <button
      onClick={onClickHandler}
      className="flex gap-2 hover:scale-110 transition-all duration-1000 items-center text-xs sm-385:text-sm bg-green-300 py-1 px-6 rounded-full text-fuchsia-700 hover:bg-green-400 m-5">
        Generate Picture
        <img
          src={files.create}
          alt="create"
          className="w-6 hidden sm-385:block"
        />
      </button>
    </>
  );
}  

export default GenerateBtn 