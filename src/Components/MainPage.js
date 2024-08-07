import React from 'react';
import Card from './Card';
import ActivityChart from './ActivityChart';
import RecentOrdersTable from './RecentOrdersTable';
import { Typography } from '@mui/material';
import './MainPage.css';
import NetProfitCard from './NetProfitCard';
import FeatureList from './FeatureList';

const CustomerReviewCard = ({ review }) => (
  <div className="customer-review-card">
    <div className="reviewer-info">
      <img src={review.photo} alt={review.name} className="reviewer-photo" />
      <Typography variant="body1">{review.name}</Typography>
    </div>
    <div className="review-stars">
      {[...Array(5)].map((_, index) => (
        <span key={index} className={`star ${index < review.rating ? 'filled' : ''}`}>&#9733;</span>
      ))}
    </div>
    <Typography variant="body2" className="review-comment">{review.comment}</Typography>
  </div>
);

const MainPage = () => {
  const reviews = [
    { photo: 'person1.jpg', name: 'John Doe', rating: 3, comment: 'Great service!' },
    { photo: 'person2.jpg', name: 'Jane Smith', rating: 5, comment: 'Excellent experience!' },
    // Add more reviews as needed
  ];

  return (
    <div className="main-page">
      <div className="main-content">
        <Typography variant="h4" style={{ color: '#fff', fontWeight: '800', marginLeft: '10px' }}>Dashboard</Typography>
        <div className="card-container">
          <Card title="Total Orders" value="75" icon="totalOrders" percentage="3%" />
          <Card title="Total Delivered" value="70" icon="totalDelivered" percentage="3%" />
          <Card title="Total Canceled" value="5" icon="totalCanceled" percentage="3%" />
          <Card title="Total Revenue" value="$12K" icon="totalRevenue" percentage="3%" />
        </div>
        <ActivityChart />
        <div style={{ marginRight: "60px" }}>
          <RecentOrdersTable />
        </div>
      </div>
      <div className="right-side">
        <NetProfitCard />
        <FeatureList />
        <div className="customer-reviews">
          <Typography variant="h6" style={{ color: '#fff' }}>Customer Reviews</Typography>
          <div className="customer-reviews-container">
            {reviews.map((review, index) => <CustomerReviewCard key={index} review={review} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
