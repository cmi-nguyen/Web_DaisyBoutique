import React from 'react'
import logo from '../Assets/logo/logo.png'
import cartIcon from '../Assets/logo/cart_icon.png'
import accountIcon from '../Assets/logo/account_icon.jpg'

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
                <li>Sản phẩm</li>
                <li>Sale</li>
                
            </ul>
        </div>
        <div className='header-mn-right'>
            <ul>
                <li>
                    <img src={cartIcon} alt="Giỏ Hàng" width="30px" />
                </li>
                <li>
                    <img src={accountIcon} alt="Đăng Nhập" width="30px"/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default HeaderMenu