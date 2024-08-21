import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Commerce</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
