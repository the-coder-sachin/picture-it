import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../components/Header'
import HowItWorks from '../components/HowItWorks'
import Section2 from '../components/Section2'
import SeeTheMagic from '../components/SeeTheMagic'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <HowItWorks/>
      <Section2/>
      <SeeTheMagic/>
    </div>
  )
}

export default Home