// src/components/Navbar.js
import React from 'react';
import { FiSearch, FiBell, FiUser } from 'react-icons/fi';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search">
        <FiSearch />
        <input type="text" placeholder="Search" />
      </div>
      <div className="icons">
        <FiBell className="icon" />
        <FiUser className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
