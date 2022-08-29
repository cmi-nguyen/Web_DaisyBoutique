import React from 'react';
import './App.css';
import FooterSection from './componment/FooterSection';
import HeaderMenu from './componment/HeaderMenu';
import MainBanner from './componment/MainBanner';

function App() {
  return (
    <div>
      <HeaderMenu/>
      <MainBanner/>
      <MainBanner/>
      <FooterSection/>
    </div>
  );
}

export default App;
