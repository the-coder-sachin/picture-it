import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import {ToastContainer} from 'react-toastify'
import { appContext } from './context/appContext'


const App = () => {
  const {loginPopup} = useContext(appContext);
  return (
    <>
    <ToastContainer position='bottom-right'/>
    <Navbar/>
    {loginPopup && <Login/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/buy-credit' element={<BuyCredit/>}/>
      <Route path='/result' element={<Result/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App