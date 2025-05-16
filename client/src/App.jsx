



import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navabar'; // Fix typo: Navabar -> Navbar
import Home from './components/Home/Home';
import Preview from './components/preview/Preview';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Sell from './components/sell/Sell';
import PostCar from './components/post/PostCar';
import PostMobile from './components/post/PostMobile';
import PostBike from './components/post/PostBike';
import PostLaptop from './components/post/PostLaptop';
import Favorites from './components/Favorites/Favorites';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TestToast = () => {
  const handleTestToast = () => {
    toast.success('Test toast triggered!', { toastId: 'test-toast' });
    console.log('Test toast triggered');
  };

  return (
   <></>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/post/cars" element={<PostCar />} />
          <Route path="/post/mobiles" element={<PostMobile />} />
          <Route path="/post/bikes" element={<PostBike />} />
          <Route path="/post/laptop" element={<PostLaptop />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/fav" element={<Favorites />} />
        </Routes>
        <Footer />
     
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          toastStyle={{ zIndex: 9999 }}
        />
       
        <TestToast />
      </BrowserRouter>
    </>
  );
}

export default App;