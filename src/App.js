import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import News from './News'
import Contacts from './Contacts'
import About from './About'
import CheckBMI from './CheckBMI'
import Food from './Food'
import Movies from './Movies'
import Weather from './Weather'
import Products from './Products'
import Login from './Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
export default function App() {
  return (
  <>
   <BrowserRouter>
     <Navbar/>
    
     <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/About Us' element={<About/>}></Route>
          <Route path='/Contacts' element={<Contacts/>}></Route>
          <Route path='/Weather' element={<Weather/>}></Route>
          <Route path='/News' element={<News/>}></Route>
          <Route path='/Food' element={<Food/>}></Route>
          <Route path='/CheckBMI' element={<CheckBMI/>}></Route>
          <Route path='/Movies' element={<Movies/>}></Route>
          <Route path='/Products' element={<Products/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
 </>
    
  )
}

