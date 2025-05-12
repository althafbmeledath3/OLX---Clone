import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navabar'
import Home from './components/Home/Home'

import Preview from './components/preview/Preview'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Sell from './components/sell/Sell'
import Post from './components/post/Post'
import Profile from './components/profile/Profile'

function App() {

  return (
    <>

    <BrowserRouter>
    

      <Navbar/>

      <Routes>

        <Route path="/" Component={Home}/>

        <Route path='/preview' Component={Preview}/>

        <Route path="/sell" Component={Sell}/>

      </Routes>

      <Footer/>
      
      
    </BrowserRouter>


    {/* <Sell/> */}
    {/* <Home/> */}
    {/* <Post/> */}
    {/* <Profile/> */}

    {/* <Navbar/> */}

  
      
    </>
  )
}

export default App



