import React from 'react'
import logo from '../Assets/logo/logo.png'

function HeaderMenu() {
  return (
    <div className='header-mn-container'>
        <div className='header-mn-left'>
            <a href="/">
                <img src={logo} alt="Shop-Logo" width="120px"/>
            </a>
        </div>
        <div className='header-mn-mid'>
            <ul>
                <li>Sản Phẩm</li>
                <li>Sale</li>
                
            </ul>
        </div>
        <div className='header-mn-right'>
            <ul>
                <li>Giỏ Hàng</li>
                <li>Đăng nhập</li>
            </ul>
        </div>
    </div>
  )
}

export default HeaderMenu