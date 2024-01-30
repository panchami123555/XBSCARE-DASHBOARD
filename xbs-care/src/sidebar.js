import React from 'react';

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

  return (
    <div style={sidebarStyle}>
      
      <p>Sidebar Content</p>
    </div>
  );
};

export default Sidebar;
