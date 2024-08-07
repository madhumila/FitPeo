import React from 'react';
import './FeatureList.css'; // Import the CSS file for styling

const FeatureList = () => {
  return (
    <div className="feature-list">
      <div className="feature-item">
        <div className="icon-wrapper gun-icon"><GunShootingTargetIcon /></div>
        <span className="text">Goals</span>
        <div className="arrow"><ArrowIcon /></div>
      </div>
      <div className="feature-item">
        <div className="icon-wrapper burger-icon"><BurgerIcon /></div>
        <span className="text">Popular Dishes</span>
        <div className="arrow"><ArrowIcon /></div>
      </div>
      <div className="feature-item">
        <div className="icon-wrapper dish-icon"><CoveredDishIcon /></div>
        <span className="text">Menus</span>
        <div className="arrow"><ArrowIcon /></div>
      </div>
    </div>
  );
};

const GunShootingTargetIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#fe6c1f">
    <circle cx="12" cy="12" r="10" stroke="#fe6c1f" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="5" stroke="#fe6c1f" strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="1" fill="#fe6c1f" />
  </svg>
);

const BurgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#6f8ef8">
    <rect y="4" width="24" height="4" />
    <rect y="10" width="24" height="4" />
    <rect y="16" width="24" height="4" />
  </svg>
);

const CoveredDishIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#249bd5">
    <path d="M2 12h20v2H2v-2zM12 4a6 6 0 016 6H6a6 6 0 01-6-6z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#44454a" />
    <path d="M10 8l6 6-6 6V8z" fill="white" />
  </svg>
);

export default FeatureList;