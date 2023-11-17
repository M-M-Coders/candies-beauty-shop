import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink className="nav-link" to="/" >
        Home
      </NavLink>
      <div className="nav-link dropdown">
        <span>Products</span>
        <div className="dropdown-content">
          <NavLink to="/products">All Products</NavLink>
          <NavLink to="/products/facecare">Face Care</NavLink>
          <NavLink to="/products/haircare">Hair Care</NavLink>
          <NavLink to="/products/bodycare">Body Care</NavLink>
        </div>
      </div>
      <div className="nav-link dropdown">
        <span>About</span>
        <div className="dropdown-content">
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/team">Our Team</NavLink>
        </div>
      </div>
      <NavLink className="nav-link" to="/contacts">
        Contacts
      </NavLink>
    </nav>
  );
}

export default NavBar;
