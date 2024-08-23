import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-links">
            <li><Link to = '/'>Home</Link></li>
            <li><Link to = '/about'>About</Link></li>
            <li><Link to = '/contact'>Contact</Link></li>
            <li><Link to = '/fetch'>Data</Link></li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
