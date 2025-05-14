import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navabar'
import Home from './components/Home/Home'

import Preview from './components/preview/Preview'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Sell from './components/sell/Sell'
import PostCar from './components/post/PostCar'
import PostMobile from './components/post/PostMobile'
// import Profile from './components/profile/Profile'
import PostBike from './components/post/PostBike'
import PostLaptop from './components/post/PostLaptop'


// import AuthLogin from './components/auth/login/login'
// import AuthLogout from './components/auth/logout/Logout'
// import AuthProfile from './components/auth/profile/Profile'
// import Login from './components/auth/login/login'
// import { LogOut } from 'lucide-react'

function App() {

  return (
    <>

    

<BrowserRouter>

      <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sell" element={<Sell />} />
      <Route path="/post/cars" element={<PostCar />} />
      <Route path="/post/mobiles" element={<PostMobile />} />
      <Route path='/post/bikes' element={<PostBike/>}/>
      <Route path='/post/laptop' element={<PostLaptop/>} />

      <Route path='/preview' element={<Preview/>}/>
    
 
    </Routes>
    <Footer/>
  </BrowserRouter>


    
      
    </>
  )
}

export default App



