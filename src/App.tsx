import React from 'react'
import {Router, Route, Routes} from 'react-router'
import HomePage from "../src/pages/HomePage.tsx"
import SeekerDashboard from "../src/pages/SeekerDashboard.tsx"
import Register from "./pages/SignUp.tsx"
import Login from "./pages/Login.tsx"
import CompanySignUp from './pages/CompanySignUp.tsx'
import AuthProvider from './context/AuthContext.tsx'

const App = () => {
  return (
    <AuthProvider>
      <div>
      <Routes>
        <Route path="/" element = {<HomePage/>}></Route>
        <Route path="/signup" element = {<Register/>}></Route>
        <Route path="/company-signup" element = {<CompanySignUp/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/seeker-dashboard" element = {<SeekerDashboard/>}></Route>
      </Routes>
    </div>
    </AuthProvider>
  )
}

export default App
