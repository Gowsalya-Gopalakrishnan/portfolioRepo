// import React from 'react'
// import {NavLink} from 'react-router-dom'
// import '../styles/Navbar.css'
// import hamburger from '../assets/hamburgericon.png'
// const Navbar = () => {
//   return (
//     <div className='navbar' >
//         <h1 className='heading'>Port<span>folio</span></h1>
//           <NavLink to="/" exact className={({ isActive }) => (isActive ? 'active' : '')} 
//           style={{textDecoration:"none", marginRight:"10px"}}>
//               Home
//             </NavLink>
          
//             <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}
//             style={{textDecoration:"none", marginRight:"10px"}}>
//               About
//             </NavLink>
          
//             <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}
//             style={{textDecoration:"none",marginRight:"10px"}}>
//               Skills
//             </NavLink>
          
//             <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}
//             style={{textDecoration:"none",marginRight:"10px"}}>
//               Projects
//             </NavLink>
          
//             {/* <NavLink to="/statistics" className={({ isActive }) => (isActive ? 'active' : '')}
//             style={{textDecoration:"none",marginRight:"10px"}}>
//               Statistics
//             </NavLink> */}
        
//             <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}
//             style={{textDecoration:"none",marginRight:"28px"}}>
//               Contact
//             </NavLink>
          
//     </div>
    
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import hamburger from '../assets/hamburgericon.png';  // Add your hamburger icon here

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to handle hamburger menu toggle

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <h1 className='heading'>Port<span>folio</span></h1>

      <div className={`hamburger-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <img src={hamburger} alt="hamburger menu" />
      </div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/" exact className={({ isActive }) => (isActive ? 'active' : '')}
          style={{ textDecoration: "none", marginRight: "50px" }}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}
          style={{ textDecoration: "none", marginRight: "50px" }}>
          About
        </NavLink>
        <NavLink to="/skills" className={({ isActive }) => (isActive ? 'active' : '')}
          style={{ textDecoration: "none", marginRight: "50px" }}>
          Skills
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}
          style={{ textDecoration: "none", marginRight: "50px" }}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}
          style={{ textDecoration: "none", marginRight: "60px" }}>
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;

