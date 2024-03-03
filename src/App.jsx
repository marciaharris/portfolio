import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom'
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const Navbar = () => {
    return (
			<nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
</nav>
    )
  }
  const phone = "551-430-0527"

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Navbar />}/>
        <Route path="/Home" element ={<Home/>}/>
        <Route path="/About" element ={<About/>}/>
        <Route path="/Contact" element ={<Contact props={phone}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
