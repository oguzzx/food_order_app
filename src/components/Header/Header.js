import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

function Header() {
  return (
    <div className='header'>
      <div className="left">
        <Link to='/'>LOGO</Link>
      </div>
      <div className="mid"></div>
      <div className="right">
       <Link to="/order">Sipariş Ver</Link>
       <Link to="/myorder">Siparişlerim</Link>
      </div>
    </div>
  )
}

export default Header
