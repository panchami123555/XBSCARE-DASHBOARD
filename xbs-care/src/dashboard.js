import React from 'react';
import Sidebar from './sidebar';

const Dashboard = () => {
  const dashboardStyle = {
    backgroundColor: '#eef8f9', // Set the background color of the Dashboard
    display: 'flex',
    flexDirection: 'row', // Assuming you want the sidebar and content side by side
  };

  return (
    <div style={dashboardStyle}>
      <Sidebar />
      <div>
        {/* Your main content for the Dashboard goes here */}
        <h1>Main Content</h1>
      </div>
    </div>
  );
};

export default Dashboard;
