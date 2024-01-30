import React from 'react';
import Sidebar from './sidebar';
import { Card } from 'primereact/card';
import { Container, Row, Col } from 'react-bootstrap';

import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
const Dashboard = () => {
  const dashboardStyle = {
    backgroundColor: '#eef8f9', // Set the background color of the Dashboard
    display: 'flex',
    flexDirection: 'row', // Assuming you want the sidebar and content side by side
  };
  const cardStyle = {
    borderRadius: '10px',
    border: '2px solid #41b5d1',
    width: '100%', // Adjust card width as needed
  };
  const userInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    top: '10px',
    right: '10px',
   
  };
  const roleStyle = {
    marginLeft: '10px',
    fontWeight: 'normal',
  };
  return (
    <div style={dashboardStyle}>
      <Sidebar />
      <div>

       

      <div style={userInfoStyle}>
        <Badge value="3" severity="danger" style={{ marginRight: '10px' }} />
        <span style={{ marginRight: '10px' }}>John Doe</span>
        <span style={roleStyle}>Admin</span>
        <Avatar size="large" shape="circle" icon="pi pi-user" style={{ marginLeft: '10px' }} />
      </div>
      <Container style={{ marginTop: '60px' }} >
      <i className="pi pi-home" style={{ color: '#41b5d1' }}></i> <span style={{ color: '#41b5d1' }} >Dashboard</span>
      <Row>
        <Col>
          <Card title='card1' style={cardStyle}>
            <p>Card content goes here.</p>
          </Card>
        </Col>
        <Col>
          <Card title='card1' style={cardStyle}>
            <p>Card content goes here.</p>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card title='card1' style={cardStyle}>
            <p>Card content goes here.</p>
          </Card>
        </Col>
        <Col>
          <Card title='card1' style={cardStyle}>
            <p>Card content goes here.</p>
          </Card>
        </Col>
      </Row>
      </Container>
      </div>
    </div>
  );
};

export default Dashboard;
