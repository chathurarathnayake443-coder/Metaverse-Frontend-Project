import {useContext, useRef, useState} from 'react'
import {Link, useNavigate} from "react-router"
import {Menu, X} from "lucide-react"
import { AuthContext } from '../context/AuthContext'
import Logo from "/src/assets/bg-removed-logo.png"
import Collab from "/src/assets/bg-removed-collab.png"

const NavBar = () => {

  const{user, setUser, loading} = useContext(AuthContext)!
  const navigate = useNavigate()
  const confirmRef = useRef<HTMLDialogElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const roles: string[] = user?.roles ?? []
  const dashboardPath = roles.includes("COMPANY") ? "/company-dashboard" : roles.includes("SEEKER") ? "/seeker-dashboard" : "/"

  const handleSignOut = () => {
    localStorage.removeItem("ACCESS_TOKEN")
    localStorage.removeItem("REFRESH_TOKEN")
    setUser(null)
    confirmRef.current?.close()
    navigate("/")
  }

  return (
  <>
    <header className="bg-gray-800/30 backdrop-blur-md w-full h-18 text-white flex flex-row items-center sticky top-0 z-50">
        <img src={Logo} alt="Logo" className="h-full" />
        <div className="flex-row gap-10 m-auto font-outfit items-center hidden lg:flex">
            <Link to={"/"}><span className='text-md text-white'>Home</span></Link>
            <Link to={"/"}><span className='text-md text-white'>Service</span></Link>
            <Link to={"/"}><span className='text-md text-white'>Contact</span></Link>
            <Link to={"/"}><span className='text-md text-white'>About</span></Link>
            {!loading && user && (
            <Link to={dashboardPath}><span className='text-md text-white'>Dashboard</span></Link>
  )}
        </div>
        <img src={Collab} alt="Logo" className="h-8 mr-8 hidden lg:block" />

        {loading ? null : user ? (
          <div className="hidden lg:flex items-center gap-4 mr-8">
            {user.profileImage ? (
              <img
                src={user.profileImage}
                alt={user.fullName}
                className="h-10 w-10 rounded-full object-cover border border-white/30"
              />
            ) : (
              <div className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center font-semibold">
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

        <button
          className="lg:hidden ml-auto mr-8"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {menuOpen && (
          <nav className="lg:hidden absolute top-full left-0 w-full bg-gray-950/95 backdrop-blur-md flex flex-col gap-1 px-6 py-4 font-outfit border-t border-white/10">
            <Link to="/" onClick={closeMenu} className="py-3 border-b border-white/10">Home</Link>
            <Link to="/" onClick={closeMenu} className="py-3 border-b border-white/10">Service</Link>
            <Link to="/" onClick={closeMenu} className="py-3 border-b border-white/10">Contact</Link>
            <Link to="/" onClick={closeMenu} className="py-3 border-b border-white/10">About</Link>

            {!loading && user && (
              <Link to={dashboardPath} onClick={closeMenu} className="py-3 border-b border-white/10">
                Dashboard
              </Link>
            )}

            {!loading && (
              user ? (
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-3">
                    {user.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt={user.fullName}
                        className="h-10 w-10 rounded-full object-cover border border-white/30"
                      />
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-white text-black flex items-center justify-center font-semibold">
                        {user.fullName?.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span>{user.fullName}</span>
                  </div>
                  <button
                    onClick={() => {
                      closeMenu()
                      confirmRef.current?.showModal()
                    }}
                    className="btn border-white-100 bg-transparent rounded-full text-white hover:bg-white hover:text-black"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="btn border-white-100 bg-transparent rounded-full text-white hover:bg-white hover:text-black mt-4"
                >
                  Sign Up
                </Link>
              )
            )}
             </nav>
        )}
    </header>

    <dialog ref={confirmRef} className="modal">
        <div className="modal-box bg-white text-black rounded-2xl border-0 border-black">
          <h3 className="font-bold text-lg">Sign out</h3>
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
