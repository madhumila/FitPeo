// src/App.js
import React from "react";

import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
