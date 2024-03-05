import { useState } from 'react'
import './App.css'
import Layout from './Components/Layout'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element ={<Layout/>}>
          <Route path="/Home" element ={<Home/>}/>
          <Route path="/About" element ={<About/>}/>
          <Route path="/Contact" element ={<Contact phone="551-430-0527" email = "hmarcia40@gmail.com" linkedIn ="https://www.linkedin.com/in/marcia-harris-5bb4551a7/"/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
