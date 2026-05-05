// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Logo</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
