import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logoText">Carbon Credit</div>
      <ul className="nav-links">
        <li><Link to="/RegisterAsFarmer"><AiOutlineHome /></Link></li>
        <li><Link to="/RegisterAsFarmer">About</Link></li>
        <li><Link to="/RegisterAsFarmer">Contact</Link></li>
        <li><Link to="/RegisterAsFarmer"><FaUserCircle /></Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
