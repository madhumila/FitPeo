// src/components/Dashboard.js
import React from 'react';
import Chart from './Chart';
import Orders from './Orders';
import Feedback from './Feedback';
import '../Styles/DashBoard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="grid">
        <div className="paper">
          <h3>Total Orders</h3>
          <h2>75</h2>
        </div>
        <div className="paper">
          <h3>Total Delivered</h3>
          <h2>70</h2>
        </div>
        <div className="paper">
          <h3>Total Cancelled</h3>
          <h2>5</h2>
        </div>
        <div className="paper">
          <h3>Net Profit</h3>
          <h2>$6759.25</h2>
        </div>
      </div>
      <div className="paper">
        <h3>Activity</h3>
        <Chart />
      </div>
      <div className="grid">
        <div className="paper">
          <h3>Recent Orders</h3>
          <Orders />
        </div>
        <div className="paper">
          <h3>Customer Feedback</h3>
          <Feedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
