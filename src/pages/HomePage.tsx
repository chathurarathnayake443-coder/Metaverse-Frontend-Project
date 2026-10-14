import React from 'react'
import NavBar from '../components/NavBar.tsx'
import Footer from '../components/Footer.tsx'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <h1 className='text-5xl md:text-7xl lg:text-8xl font-outfit font-bold mt-20 ml-10 leading-tight'>Move with the Latest <br />Tech Stack</h1>
      <Footer/>
    </div>
  )
}

export default HomePage
