import './App.css';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

// Page components
import LogIn from './pages/LogIn';
import HomeLoggedIn from './pages/HomeLoggedIn';
import HomeNotLoggedIn from './pages/HomeNotLoggedIn';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Week-6 Lab</h1>
            <div className='nav-links'>
              <NavLink to="/login">LogIn</NavLink>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/aboutus">About Us</NavLink>
              <NavLink to="/contactus">Contact Us</NavLink>
            </div>  
        </nav>

        <Routes>
          <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route
            path="/home"
            element={isLoggedIn ? <HomeLoggedIn /> : <HomeNotLoggedIn />}
          />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;