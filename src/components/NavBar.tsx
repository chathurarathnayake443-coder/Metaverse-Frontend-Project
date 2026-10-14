import React from 'react'
import {Link} from "react-router"
import {Menu} from "lucide-react"

const NavBar = () => {
  return (
    <header className="bg-gray-950 w-screen h-18 text-white flex flex-row items-center">
        <img src="/src/assets/metaverse-logo-fullname.png" alt="Logo" className="h-full" />
        <div className="flex flex-row gap-10 m-auto font-outfit items-center hidden lg:flex">
            <Link to={"/"}><span className='text-md text-white'>Home</span></Link>
            <Link to={"/"}><span className='text-md text-white'>Service</span></Link>
            <Link to={"/"}><span className='text-md text-white'>Contact</span></Link>
            <Link to={"/"} className="btn border-white-100 bg-transparent rounded-full"><span className='text-md text-white'>Sign In</span></Link>
        </div>
        <img src="/src/assets/collab-logo.jpeg" alt="Logo" className="h-13 mr-8 hidden lg:block" />
        <Menu className='lg:hidden ml-auto mr-8'/>
    </header>
  )
}

export default NavBar
