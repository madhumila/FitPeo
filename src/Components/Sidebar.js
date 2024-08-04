// src/components/Sidebar.js
import React from 'react';
import { FiHome, FiTrendingUp, FiBarChart, FiSettings } from 'react-icons/fi';
import '../Styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">Dashboard</div>
      <div className="nav-item">
        <FiHome className="icon" />
        Home
      </div>
      <div className="nav-item">
        <FiTrendingUp className="icon" />
        Trends
      </div>
      <div className="nav-item">
        <FiBarChart className="icon" />
        Analytics
      </div>
      <div className="nav-item">
        <FiSettings className="icon" />
        Settings
      </div>
    </div>
  );
};

export default Sidebar;
