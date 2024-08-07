import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';
import { Typography } from '@mui/material';


const orders = [
  { id: 1, customer: 'John', profileImage: 'https://via.placeholder.com/40', date: '2024-07-01', status: 'Delivered', amount: '$100' },
  { id: 2, customer: 'Mila', profileImage: 'https://via.placeholder.com/40', date: '2024-07-02', status: 'Cancelled', amount: '$50' },
  { id: 3, customer: 'Madhumitha', profileImage: 'https://via.placeholder.com/40', date: '2024-07-02', status: 'Cancelled', amount: '$50' },
  { id: 4, customer: 'Rahul', profileImage: 'https://via.placeholder.com/40', date: '2024-07-02', status: 'Delivered', amount: '$200' },
  { id: 5, customer: 'Sarath', profileImage: 'https://via.placeholder.com/40', date: '2024-07-02', status: 'Delivered', amount: '$150' },
  { id: 6, customer: 'Deepak', profileImage: 'https://via.placeholder.com/40', date: '2024-07-02', status: 'Cancelled', amount: '$250' },
  { id: 7, customer: 'Sandeep', profileImage: 'https://via.placeholder.com/40', date: '2024-07-02', status: 'Cancelled', amount: '$590' },

  // Add more orders as needed
];

const getStatusStyles = (status) => {
  switch (status) {
    case 'Delivered':
      return { color: 'green', borderColor: 'green' };
    case 'Cancelled':
      return { color: 'red', borderColor: 'red' };
    default:
      return { color: 'grey', borderColor: 'grey' };
  }
};

const RecentOrdersTable = () => {
  return (
    <TableContainer component={Paper} style={{ backgroundColor: '#202028', color: '#fff', padding: '20px', margin: '10px', width: '100%' }}>
      <Typography variant="h5" style={{ color: '#fff', fontWeight: '800' }}>Recent Orders</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: '#fff' }}>Customer</TableCell>
            <TableCell style={{ color: '#fff' }}>Date</TableCell>
            <TableCell style={{ color: '#fff' }}>Amount</TableCell>
            <TableCell style={{ color: '#fff' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src={order.profileImage} style={{ marginRight: '10px' }} />
                  <span style={{ color: '#fff' }}>{order.customer}</span>
                </div>
              </TableCell>
              <TableCell style={{ color: '#fff' }}>{order.date}</TableCell>
              <TableCell style={{ color: '#fff' }}>{order.amount}</TableCell>
              <TableCell>
                <span style={{ 
                  ...getStatusStyles(order.status), 
                  padding: '5px 10px', 
                  borderRadius: '20px', 
                  border: '1px solid',
                  backgroundColor: '#2a2b30',
                  color: getStatusStyles(order.status).color 
                }}>
                  {order.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentOrdersTable;