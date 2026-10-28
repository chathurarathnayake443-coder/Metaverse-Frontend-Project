import React, {useContext, useRef} from 'react'
import {Link, useNavigate} from "react-router"
import {Menu} from "lucide-react"
import { AuthContext } from '../context/AuthContext'

const NavBar = () => {

  const{user, setUser, loading} = useContext(AuthContext)!
  const navigate = useNavigate()
  const confirmRef = useRef<HTMLDialogElement>(null)

  const handleSignOut = () => {
    localStorage.removeItem("Access Token")
    localStorage.removeItem("Refresh Token")
    setUser(null)
    confirmRef.current?.close()
    navigate("/")
  }

  return (
  <>
    <header className="bg-gray-950 w-full h-18 text-white flex flex-row items-center">
        <img src="/src/assets/metaverse-logo-fullname.png" alt="Logo" className="h-full" />
        <div className="flex flex-row gap-10 m-auto font-outfit items-center hidden lg:flex">
            <Link to={"/"}><span className='text-md text-white'>Home</span></Link>
            <Link to={"/"}><span className='text-md text-white'>Service</span></Link>
            <Link to={"/"}><span className='text-md text-white'>Contact</span></Link>
            <Link to={"/"}><span className='text-md text-white'>About</span></Link>
        </div>
        <img src="/src/assets/collab-logo.jpeg" alt="Logo" className="h-13 mr-8 hidden lg:block" />

        {loading ? null : user ? (
          <div className="hidden lg:flex items-center gap-4 mr-8">
            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt={user.fullName}
                className="h-10 w-10 rounded-full object-cover border border-white/30"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
                {user.fullName?.charAt(0).toUpperCase()}
              </div>
            )}
            <button
              onClick={() => confirmRef.current?.showModal()}
              className="btn border-white-100 bg-transparent rounded-full text-white hover:bg-white hover:text-black hover:border-white-100"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            to={"/signup"}
            className="btn border-white-100 bg-transparent mr-8 rounded-full text-white hover:bg-white hover:text-black hover:border-white-100 hidden lg:inline-flex"
          >
            Sign Up
          </Link>
        )}

        <Menu className='lg:hidden ml-auto mr-8' />    <Menu className='lg:hidden ml-auto mr-8'/>
    </header>

    <dialog ref={confirmRef} className="modal">
        <div className="modal-box bg-gray-900 text-white">
          <h3 className="font-bold text-lg">Sign out?</h3>
          <p className="py-4">Are you sure you want to sign out?</p>
          <div className="modal-action">
            <button className="btn" onClick={() => confirmRef.current?.close()}>Cancel</button>
            <button className="btn btn-error" onClick={handleSignOut}>Sign Out</button>
          </div>
        </div>
      
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
  </>
  )
}

export default NavBar
