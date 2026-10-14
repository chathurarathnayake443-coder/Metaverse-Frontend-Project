import React from 'react'
import {Router, Route, Routes} from 'react-router'
import HomePage from "../src/pages/HomePage.tsx"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element = {<HomePage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
