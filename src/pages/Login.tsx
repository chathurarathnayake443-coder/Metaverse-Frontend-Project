import { useState } from "react"
import NavBar from "../components/NavBar.tsx"
import Footer from "../components/Footer.tsx"
import { Eye, EyeOff } from "lucide-react"
import toast from "react-hot-toast"
import {login} from "../service/auth.ts"

const inputClass =
  "w-full rounded-xl border-2 border-black px-6 py-4 text-sm md:text-base focus:outline-none focus:ring-1 focus:ring-black"
const labelClass = "mb-2 font-outfit text-sm font-semibold md:text-base"

const Login = () => {
  const [show, setShow] = useState(false)
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")

  const handleLogin = async () => {
    if(!email || !password){
      toast.error("Please Enter All Fields to Login !")
    }

    try{
      const res = await login(email,password)

      const resdata = res.data
      const accessToken = resdata.access_token
      const refreshToken = resdata.refresh_token

      if(accessToken && refreshToken){
        localStorage.setItem("Access Token", accessToken)
        localStorage.setItem("Refresh Token", refreshToken)

        window.location.href="/seeker-dashboard"
      }
    }
    catch(error){
      console.error("Error in login function",error)
      toast.error("Login Failed !")
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />

      <div className="flex justify-center">
        <img src="/src/assets/black-logo.png" alt="Logo" className=" w-32 md:w-40" />
      </div>

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-6">
        <h1 className="mb-6 text-center font-outfit text-xl font-semibold text-black md:text-2xl">
          Log In to Your Account
        </h1>

        <form className="relative w-full max-w-lg space-y-4 rounded-3xl border-2 border-black p-6 sm:p-10">
          <div className="flex flex-col">
            <label htmlFor="email" className={labelClass}>Email</label>
            <input 
              id="email" 
              className={inputClass} 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="chathura@example.com" />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className={labelClass}>Password</label>
            <div className="relative">
              <input
                id="password"
                type={show ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${inputClass} pr-14`}
                placeholder="••••••••••••••••"
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

          <button type="button" onClick={handleLogin} className="btn my-4 w-full rounded-full bg-black text-white hover:bg-gray-800">
            Log In
          </button>
        </form>
      </main>

      <Footer />
    </div>
  )
}

export default Login