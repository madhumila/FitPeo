import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Typography } from '@mui/material';

const data = [
  { name: 'Jan', value: 40 },
  { name: 'Feb', value: 30 },
  { name: 'Mar', value: 20 },
  { name: 'Apr', value: 27 },
  { name: 'May', value: 18 },
  { name: 'Jun', value: 23 },
  { name: 'Jul', value: 34 },
  { name: 'Aug', value: 44 },
  { name: 'Sep', value: 38 },
  { name: 'Oct', value: 29 },
  { name: 'Nov', value: 48 },
  { name: 'Dec', value: 50 },
];

const ActivityChart = () => {
  return (
    <div style={{ backgroundColor: '#202028', padding: '20px', margin: '10px' }}>
      <Typography variant="h5" style={{ color: '#fff', fontWeight: "600", marginBottom: '20px' }}>Activity</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Bar dataKey="value" fill="#7294ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;