import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="nav">
     <div className="top">
          <div className="home">Diagno-Ray</div>
          <div className="toplinks"><a href=''  >Explore</a> <a href=''>About</a><a href=''>Contact Us</a></div>
      
        </div>
    </nav>
  );
}

export default Navbar;
