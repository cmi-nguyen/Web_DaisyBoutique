import React from 'react'
import logo from '../Assets/logo/logo.png'
import cartIcon from '../Assets/logo/cart_icon.png'
import accountIcon from '../Assets/logo/account_icon.png'
import searchIcon from '../Assets/logo/search_icon.png'

function HeaderMenu() {
  return (
    <div className='header-mn-container'>
        <div className='header-mn-left'>
            <a href="/">
                <img src={logo} alt="Shop-Logo" width="90px"/>
            </a>
        </div>
        <div className='header-mn-mid'>
            <ul>
                <li>
                    <a href="/">
                        <h4>Trang chủ</h4>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <h4>Sản Phẩm</h4>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <h4>Giới thiệu</h4>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <h4>Liên hệ</h4>
                    </a>
                </li>
            </ul>
        </div>
        <div className='header-mn-right'>
            <ul>
                <li>
                    <img src={searchIcon} alt="Tìm Kiếm" width="25px" />
                </li>
                <li>
                    <img src={cartIcon} alt="Giỏ Hàng" width="25px" />
                </li>
                <li>
                    <img src={accountIcon} alt="Đăng Nhập" width="25px"/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default HeaderMenu