import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';

import HeaderMenu from './componment/HeaderMenu'
import MainBanner from './componment/MainBanner'

function App() {
  return (
    <BrowserRouter>
        <div className='main'>
          <HeaderMenu/>
          <MainBanner/>
        </div>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
