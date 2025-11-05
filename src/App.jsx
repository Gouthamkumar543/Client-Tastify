import React from 'react'
import NavBar from './Components/Pages/NavBar'
import { Routes, Route } from "react-router-dom"
import LandingPage from './Components/LandingPage/LandingPage'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>
    </div>
  )
}

export default App