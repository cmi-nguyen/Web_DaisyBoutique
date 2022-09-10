import React from 'react'
import logo from '../Assets/logo/logo.png'
import cartIcon from '../Assets/logo/cart_icon.png'
import accountIcon from '../Assets/logo/account_icon.png'
import searchIcon from '../Assets/logo/search_icon.png'
import {Link} from "react-router-dom";

function HeaderMenu() {
  return (
    <div className='header-mn-container'>
        <div className='header-mn-left'>
            <a href="/">
                <img src={logo} alt="Shop-Logo" width="100px"/>
            </a>
        </div>
        <div className='header-mn-mid'>
            <ul>
                <li>
                    <a href="/">
                        <h4>Sản Phẩm</h4>
                    </a>
                </li>
                <li>
                    <Link to="/about"><h4>Giới Thiệu</h4></Link>
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