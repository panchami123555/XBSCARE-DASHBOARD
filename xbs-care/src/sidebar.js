import React from 'react';
import 'primeicons/primeicons.css';
const Sidebar = () => {
  const sidebarStyle = {
    width: '80px', // Adjust the width as needed
    height: '100vh', // Adjust the height as needed
    backgroundColor: 'white', // Background color of the sidebar
    borderRadius: '19px', // Adjust the border-radius for rounded corners
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '20px',
    color: '#fff', // Text color
  };
  const iconStyle = {
    marginBottom: '20px',
    color:'black'
  };
  return (
    <div style={sidebarStyle}>
    <div style={iconStyle}>
    <i className="pi pi-user" style={{ fontSize: '2.5rem' }}></i>
    </div>
    <div style={iconStyle}>
    <i className="pi pi-home" style={{ fontSize: '2.5rem' }}></i>
    </div>
    <div style={iconStyle}>
    <i className="pi pi-calendar" style={{ fontSize: '2.5rem' }}></i>
    </div>
    <div style={iconStyle}>
    <i className="pi pi-file" style={{ fontSize: '2.5rem' }}></i>
    </div>
    <p>Sidebar Content</p>
  </div>
  );
};

export default Sidebar;
