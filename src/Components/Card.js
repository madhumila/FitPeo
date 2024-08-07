import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';
import { ShoppingBag, Store, AttachMoney, Cancel } from '@mui/icons-material';

const icons = {
  totalOrders: <ShoppingBag style={{ color: '#fff' }} />,
  totalDelivered: <Store style={{ color: 'green' }} />,
  totalCanceled: <Cancel style={{ color: 'red' }} />,
  totalRevenue: <AttachMoney style={{ color: 'purple' }} />,
};

const Card = ({ title, value, icon, percentage }) => {
  return (
    <MuiCard style={{ backgroundColor: '#202028', color: '#fff', margin: '10px', flex: '1' }}>
      <CardContent>
        {icons[icon]}
        <Typography>{title}</Typography>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h5">{value}</Typography>
          <Typography>{percentage}</Typography>
        </div>
      </CardContent>
    </MuiCard>
  );
};

export default Card;