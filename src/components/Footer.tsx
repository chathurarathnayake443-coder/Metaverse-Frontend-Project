import React from 'react'
import {Link} from 'react-router'

const Footer = () => {
  return (
    <footer className="bg-black w-full h-20 text-white items-center flex flex-row font-outfit justify-around">
      <span className='font-semibold'>Metaverse</span>
      <span className='text-xs'>© CSR.Inc@{new Date().getFullYear()}</span>
       <span className="flex flex-row gap-10 font-outfit items-center hidden lg:flex">
            <Link to={"/"}><span className='text-sm text-white'>Home</span></Link>
            <Link to={"/"}><span className='text-sm text-white'>Service</span></Link>
            <Link to={"/"}><span className='text-sm text-white'>Contact</span></Link>
        </span>
    </footer>
  )
}

export default Footer
