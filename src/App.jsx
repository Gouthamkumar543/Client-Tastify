import React from 'react'
import NavBar from './Components/Pages/NavBar'
import { Routes, Route } from "react-router-dom"
import LandingPage from './Components/LandingPage/LandingPage'
import SignUp from './Components/Pages/SignUp'
import LogIn from './Components/Pages/LogIn'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </div>
  )
}

export default App