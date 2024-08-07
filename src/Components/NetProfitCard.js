import React from 'react';
import './NetProfitCard.css'; // Import the CSS file for styling

const NetProfitCard = () => {
  return (
    <div className="net-profit-card">
      <div className="net-profit-left">
        <h2>Net Profit</h2>
        <p className="profit-value">$1578.65</p>
        <p className="profit-growth">3%</p>
      </div>
      <div className="net-profit-right">
        <div className="completion-circle">
          <svg width="100" height="100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#141416"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#00ff00"
              strokeWidth="10"
              fill="none"
              strokeDasharray="283"
              strokeDashoffset="85"
            />
            <text x="50%" y="50%" textAnchor="middle" dy=".3em" fill="white">70%</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NetProfitCard;