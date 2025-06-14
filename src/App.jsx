import './App.css'
import { BrowserRouter, Route, Routes, NavLink, Link, Navigate } from 'react-router-dom'
import React from 'react'

//page content
import LogIn from './pages/LogIn'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'


<div className='App'>
  <BrowserRouter>
    <nav>
      <h1>Week-6 Lab</h1>
      <NavLink to="/">LogIn</NavLink>
      <NavLink to="/">HomePage</NavLink>
      <NavLink to="/">AboutUs</NavLink>
      <NavLink to="/">ContactUs</NavLink>
    </nav>

    <Routes>
      <Route>
        
      </Route>
    </Routes>

  </BrowserRouter>
</div>
