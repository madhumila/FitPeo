import React from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import MainPage from './Components/MainPage';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <MainPage />
      </div>
    </div>
  );
};

export default App;