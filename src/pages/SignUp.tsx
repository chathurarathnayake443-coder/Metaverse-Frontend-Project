import { useState } from "react"
import NavBar from "../components/NavBar.tsx"
import { Eye, EyeOff } from "lucide-react"
import {Link} from "react-router"
import Footer from "../components/Footer.tsx"
import { useNavigate } from "react-router"
import toast from "react-hot-toast"

const inputClass =
  "w-full rounded-xl border-2 border-black px-6 py-4 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-black"
const labelClass = "mb-2 font-outfit text-sm font-semibold md:text-base"

const Register = () => {
  const [employed, setEmployed] = useState(false)
  const [show, setShow] = useState(false)

  const navigate = useNavigate()
  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[address, setAddress] = useState("")
  const[contact, setContact] = useState("")
  const[company, setCompany] = useState("")
  const[jobRole, setJobRole] = useState("")
  const[password, setPassword] = useState("")
  const[confirmPassword, setConfirmPassword] = useState("")
  const matching = password === confirmPassword;

  const handleRegister = () => {
    if(!name || !email || !address || !contact || !password || !confirmPassword){
        toast.error("Please Enter All Fields to Register !")
    }

    if(employed && (!company || !jobRole)){
      toast.error("Please Fill Company and Job Role")
    }

    if(password !== confirmPassword){
      toast.error("Passwords doesn't Match !")
    }
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
            <label htmlFor="fullName" className={labelClass}>Full Name</label>
            <input 
              id="fullName" 
              type="text" 
              placeholder="Chathura Rathnayake" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className={inputClass} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className={labelClass}>Email</label>
            <input 
              id="email" 
              type="email" 
              placeholder="chathura@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              className={inputClass} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className={labelClass}>Address</label>
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

          <label htmlFor="employed" className="flex cursor-pointer items-center gap-3 font-outfit text-sm md:text-base">
            <input
              id="employed"
              type="checkbox"
              checked={employed}
              onChange={(e) => setEmployed(e.target.checked)}
              className="h-4 w-4 accent-black"
            />
            Currently working in a company?
          </label>

          {employed && (
            <>
              <div className="flex flex-col">
                <label htmlFor="company" className={labelClass}>Current Company</label>
                <input 
                  id="company" 
                  type="text" 
                  placeholder="Company name" 
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={inputClass} />
              </div>

              <div className="flex flex-col">
                <label htmlFor="jobRole" className={labelClass}>Current Job Role</label>
                <input 
                  id="jobRole" 
                  type="text" 
                  placeholder="Software Engineer" 
                  value={jobRole}
                  onChange={(e) => setJobRole(e.target.value)}
                  className={inputClass} />
              </div>
            </>
          )}

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
          <hr className="my-6" />
          <div className="font-outfit text-center text-gray-600">Already have an Account?</div>

          <Link to={"/login"} className="btn w-full my-4 rounded-full bg-black text-white hover:bg-gray-800">Login</Link>
        </form>
      </main>
      <Footer/>
    </div>
  )
}

export default Register