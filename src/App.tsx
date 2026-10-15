import React from 'react'
import {Router, Route, Routes} from 'react-router'
import HomePage from "../src/pages/HomePage.tsx"
import Register from "./pages/SignUp.tsx"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<HomePage/>}></Route>
        <Route path="/signup" element = {<Register/>}></Route>
      </Routes>
    </div>
  )
}

export default App
