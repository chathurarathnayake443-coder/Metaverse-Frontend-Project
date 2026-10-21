import React from 'react'
import NavBar from '../components/NavBar.tsx'
import Footer from '../components/Footer.tsx'
import LogoSlider from '../components/LogoSlider.tsx'
import { FaGithub } from "react-icons/fa"

const HomePage = () => {

  const githubIcon = <FaGithub />
  return (
    <div className="relative">
      <NavBar/>
      <section className="relative overflow-hidden pb-20">
        <div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-0
    bg-[linear-gradient(to_right,rgba(124,58,237,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,0.18)_1px,transparent_1px)]
    bg-[size:100px_100px] 
    [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]"
/>
        <div className="relative z-10">
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-outfit font-bold mt-20 ml-10 leading-tight drop-shadow-2xl/30'>Move with the Latest <br /><span className="text-violet-600 drop-shadow-2xl/10">Tech Stack</span><span className="inline-flex items-center gap-2 whitespace-nowrap text-3xl font-outfit text-gray-400 ml-3">
        for a Super Fast Hiring with <FaGithub className="text-black text-9xl absolute top-65 right-155 hidden lg:block"/>
      </span></h1>
      <p className='text-green-900 ml-10 mt-10 font-mono translate-y-8' >MetaVerse is a Hiring Platform which associated with GitHub.<br/> A Platform for Super Faster Employee Hiring for World Renowned  <br/>Tech Companies, and a Universe to chat with the Industry Experts...</p>
      <img src="/src/assets/github-image.png" alt="github-image" className="absolute w-100 h-100 -top-10 right-10 rounded-4xl -rotate-10 z-10 hover:-translate-x-4 hover:-translate-y-4 transition-transform duration-300 ease-out drop-shadow-2xl hidden lg:block"/>
      <img src="/src/assets/chat-image.png" alt="chat-image" className="absolute w-100 h-100 -top-10 right-15 z-1 rounded-4xl -rotate-15 hover:-translate-x-4 hover:-translate-y-4 transition-transform duration-300 ease-out drop-shadow-xl hidden lg:block hover:z-11"/>
        </div>
        <div className='absolute inset-x-5 top-72 z-3 h-24 max-w-170 -rotate-3 rounded-2xl border-3 border-green-600 bg-green-100 drop-shadow-xl transition-transform duration-300 hover:rotate-3 sm:h-28 md:top-90 md:h-30'></div>
        <div className='absolute inset-x-5 top-72 z-2 h-24 max-w-170 rotate-3 rounded-2xl border-2 border-amber-600 bg-amber-100 drop-shadow-xl transition-transform duration-300 hover:-rotate-3 sm:h-28 md:top-90 md:h-30'></div>
      </section>
        <LogoSlider/>
      <Footer/>
    </div>
  )
}

export default HomePage
