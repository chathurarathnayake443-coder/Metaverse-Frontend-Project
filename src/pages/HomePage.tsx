import React from 'react'
import NavBar from '../components/NavBar.tsx'
import Footer from '../components/Footer.tsx'
import LogoSlider from '../components/LogoSlider.tsx'

const HomePage = () => {
  return (
    <div className="relative">
      <NavBar />
      <h1 className='text-5xl md:text-7xl lg:text-8xl font-outfit font-bold mt-20 ml-10 leading-tight drop-shadow-2xl/30'>Move with the Latest <br /><span className="text-violet-600 drop-shadow-2xl/50">Tech Stack</span></h1>
      <p className='text-gray-500 ml-10 mt-10 font-outfit' >MetaVerse is a Hiring Platform which associated with GitHub. A Platform for <br/>Super Faster Employee Hiring for World Renowned Tech Companies, <br/>and a Universe to chat with the Industry Experts</p>
      <img src="/src/assets/github-image.png" alt="github-image" className="absolute w-100 h-100 top-28 right-10 rounded-4xl -rotate-10 z-10 hover:-translate-x-4 hover:-translate-y-4 transition-transform duration-300 ease-out drop-shadow-2xl hidden lg:block"/>
      <img src="/src/assets/chat-image.png" alt="chat-image" className="absolute w-100 h-100 top-30 right-15 z-1 rounded-4xl -rotate-15 hover:-translate-x-4 hover:-translate-y-4 transition-transform duration-300 ease-out drop-shadow-2xl hidden lg:block hover:z-11"/>
      <LogoSlider/>
      <Footer/>
    </div>
  )
}

export default HomePage
