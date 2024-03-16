 import './App.css'
import './index.css'
import Home from './Components/Home'
import Layout from './Components/Layout'
import Projects from './Components/Projects'
import About from './Components/About'
import Knights from './assets/photos/Knights.png'
import Tasks from './assets/photos/Tasks.png'
import Contact from './Components/Contact'
import {BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element ={<Layout/>}>
          <Route path ="/" element={<Home/>}/>
          <Route path="/About" element ={<About/>} />
          <Route path="/Projects" element ={<Projects photos={Knights} tasks={Tasks}/>}/>
          <Route path="/Contact" element ={<Contact phone="551-430-0527" email = "hmarcia40@gmail.com" linkedIn ="https://www.linkedin.com/in/marcia-harris-5bb4551a7/"/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
