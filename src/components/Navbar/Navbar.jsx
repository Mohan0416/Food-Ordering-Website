import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [menu,setMenu] = useState("Menu");
  return (
    <div className='navbar'>
      <img src="/src/assets/logo2.png" alt="" className="logo" />
      <ul className="navbar-menu">
        <Link onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu'onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download'onClick={()=>setMenu("Orders")} className={menu==="Orders"?"active":""}>Orders</a>
        <a href='#footer'onClick={()=>setMenu("Contact")} className={menu==="Contact"?"active":""}>Download</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="search-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
