import React from 'react'
import logo from "../Assets/logo/logo.png";

function FooterSection() {
  return (
    <div className='footer-mn'>
      <div className='footer-container'>
        <div className='footer-left'>
          <img src={logo} alt="logo" width="120px" />
        </div>
        <div className='footer-mid'>mid</div>
        <div className='footer-right'>right</div>
      </div>
      <h5>@Copy-righted by Nguyen Trieu 2022</h5>
    </div>
  )
}

export default FooterSection