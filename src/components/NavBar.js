import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <NavLink to="/" className="nav-logo">
          Portfolio
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          end
        >
          Home
        </NavLink>
        <NavLink 
          to="/resume" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;