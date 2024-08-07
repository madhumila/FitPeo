import React from 'react';
import { Home, BarChart, Assignment, AccountBalanceWallet, ShoppingCart } from '@mui/icons-material';
import { List, ListItem, ListItemIcon } from '@mui/material';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home />, selected: true },
    { icon: <BarChart />, selected: false },
    { icon: <Assignment />, selected: false },
    { icon: <AccountBalanceWallet />, selected: false },
    { icon: <ShoppingCart />, selected: false },
  ];

  return (
    <div className="sidebar" style={{  }}>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} style={{ color: item.selected ? '#7294ff' : '#a7a7a7' }}>
            <ListItemIcon style={{ color: item.selected ? '#7294ff' : '#a7a7a7' }}>
              {item.icon}
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;