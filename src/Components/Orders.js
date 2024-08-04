// src/components/Orders.js
import React from 'react';
import '../Styles/Order.css';

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00' },
  { customer: 'Jane Cooper', orderNo: '48967586', amount: '$305.02' },
  // Add more orders here
];

const Orders = () => {
  return (
    <ul className="orders-list">
      {orders.map((order, index) => (
        <li key={index} className="order-item">
          <span>{order.customer}</span>
          <span>{order.orderNo}</span>
          <span>{order.amount}</span>
        </li>
      ))}
    </ul>
  );
};

export default Orders;
