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
      <div className='footer-end'>
        <h5>@Daisy Boutique all right reverse</h5>
        <h6>Follow us on</h6>
      </div>
      
    </div>
  )
}

export default FooterSection