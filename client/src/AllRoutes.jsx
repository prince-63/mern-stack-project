import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About/About'
import AboutInfo from './pages/About/AboutInfo'
import Contact from './pages/Contact/Contact'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'


const AllRoutes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="about/info" element={<AboutInfo />} />
        <Route exact path="/error"element={<ErrorPage />} />
    </Routes>
  )
}

export default AllRoutes