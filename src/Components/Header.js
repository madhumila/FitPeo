import React from 'react';
import { AppBar, Toolbar, InputBase, IconButton } from '@mui/material';
import { Search, Mail, Settings, Notifications, AccountCircle } from '@mui/icons-material';


const FlowerIcon = () => (
  <svg width="40" height="40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="5" fill="#7095ff"/>
    <path d="M32 10c5 0 10-5 10-10H22C22 5 27 10 32 10zM32 54c5 0 10 5 10 10H22c0-5 5-10 10-10zM54 32c0 5 5 10 10 10V22c-5 0-10 5-10 10zM10 32c0 5-5 10-10 10V22c5 0 10 5 10 10z" fill="#7095ff"/>
    <path d="M32 0C30.3431 0 29 1.34315 29 3s1.3431 3 3 3 3-1.34315 3-3-1.3431-3-3-3zM32 58c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3 3-1.3431 3-3-1.3431-3-3-3zM61 32c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3 1.3431 3 3 3 3-1.3431 3-3zM6 32c0-1.6569-1.34315-3-3-3S0 30.3431 0 32s1.34315 3 3 3 3-1.3431 3-3z" fill="#7095ff"/>
  </svg>
);
const Header = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#202028' }}>
      <Toolbar>
        <div className="logo" style={{ marginRight: '30px' }}><FlowerIcon /></div>
        <div className="search" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#2a2b30', borderRadius: '4px', padding: '5px' }}>
          <IconButton style={{ padding: 0 }}>
            <Search style={{ color: '#a7a7a7' }} />
          </IconButton>
          <InputBase
            placeholder="Search"
            style={{
              color: '#fff',
              marginLeft: '5px',
            }}
          />
        </div>
        <div style={{ flexGrow: 1 }}></div>
        <div>
          <IconButton>
            <Mail style={{ color: '#434449' }} />
          </IconButton>
          <IconButton>
            <Settings style={{ color: '#434449' }} />
          </IconButton>
          <IconButton>
            <Notifications style={{ color: '#434449' }} />
            <div className="notification-dot" />
          </IconButton>
          <IconButton>
            <AccountCircle style={{ color: '#434449' }} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;