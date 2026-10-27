import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { useState } from "react";
import { useNavigate } from "react-router"
import toast from "react-hot-toast"
import { Eye, EyeOff } from "lucide-react"
import {Link} from "react-router"

const inputClass =
  "w-full rounded-xl border-2 border-black px-6 py-4 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-black"
const labelClass = "mb-2 font-outfit text-sm font-semibold md:text-base"

const CompanySignUp = () => {

    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[address, setAddress] = useState("")
    const[contact, setContact] = useState("")
    const[website, setWebsite] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")
    const[show, setShow] = useState(false)

    const matching = password === confirmPassword;

    const handleRegister = ()=> {

    }

  return (
    <div className="min-h-screen">
      <NavBar />

      <div className="flex justify-center">
        <img src="/src/assets/black-logo.png" alt="Logo" className=" w-32 md:w-40" />
      </div>

      <main className="flex flex-col items-center px-4 py-5 sm:px-6">
        <h1 className="mb-6 text-center font-outfit text-xl font-semibold text-black md:text-2xl">
          Create New Account
        </h1>

        <form className="relative w-full max-w-lg space-y-4 rounded-3xl border-2 border-black p-6 sm:p-10">
          <div className="flex flex-col">
            <label htmlFor="fullName" className={labelClass}>Company Name</label>
            <input 
              id="fullName" 
              type="text" 
              placeholder="Your Company Name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className={inputClass} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className={labelClass}>Official Email</label>
            <input 
              id="email" 
              type="email" 
              placeholder="company@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className={inputClass} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className={labelClass}>Location</label>
            <input 
              id="address" 
              type="text" 
              placeholder="Colombo, Sri Lanka" 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={inputClass} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="contact" className={labelClass}>Contact</label>
            <input 
              id="contact" 
              type="tel" 
              placeholder="+94 77 1234567" 
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className={inputClass} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="website" className={labelClass}>Official WebSite</label>
            <input 
              id="website" 
              type="text" 
              placeholder="https://domain.com" 
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className={inputClass} />
          </div>

          <div className="flex flex-col">
      <label htmlFor="password" className={labelClass}>
        Password
      </label>

      <div className="relative">
        <input
          id="password"
          type={show ? "text" : "password"}
          placeholder="••••••••••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
        />

        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>

          <div className="flex flex-col">
      <label htmlFor="password" className={labelClass}>
        Confirm Password
      </label>

      <div className="relative">
        <input
          id="password"
          type={show ? "text" : "password"}
          placeholder="••••••••••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={inputClass}
        />

        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          aria-label={show ? "Hide password" : "Show password"}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black"
        >
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
      {confirmPassword && (
          <p className={`mt-1 text-sm ${matching ? "text-green-600" : "text-red-600"}`}>
            {matching ? "Passwords are matching" : "Passwords are not matching"}
          </p>
)}
    </div>

          <button type="button" className="btn w-full my-4 rounded-full bg-black text-white hover:bg-gray-800" onClick={handleRegister}>
            Create Account
          </button>
          <div className="flex justify-center"><label className="text-gray-500 text-sm" htmlFor="">Seeking for a Hire? visit, <Link to={"/signup"} className="font-bold text-black text-sm">Seeker Signup</Link> </label></div>
          <hr className="my-6" />
          <div className="font-outfit text-center text-gray-600">Already have an Account?</div>

          <Link to={"/login"} className="btn w-full my-4 rounded-full bg-black text-white hover:bg-gray-800">Login</Link>
        </form>
      </main>
      <Footer/>
    </div>
  )
}

export default CompanySignUp
