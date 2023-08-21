import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({name}) => {
  const [pupup,setPopup ] = useState(false);
  const navigate =useNavigate()

  const logout =()=>{
    localStorage.removeItem('token')
    navigate('/login')

  }




  return (
    <nav className="navbar">
      <div className="logoText">Carbon Credit</div>
      <ul className="nav-links">
        <li><Link to="/RegisterAsFarmer"><AiOutlineHome /></Link></li>
        <li><Link to="/EditForm">Edit-Form</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li className="user" onClick={()=>setPopup(!pupup)}><FaUserCircle /></li>
        
      </ul>
    
      { pupup  ?  <div className="userPopup">
      <p>{name}</p>
      <button onClick={logout}>logout</button>
     </div> : null
     
      
      }
    
    </nav>


  );
};

export default Navbar;
