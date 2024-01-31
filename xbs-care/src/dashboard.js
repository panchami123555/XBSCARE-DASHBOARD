import React, { useState } from 'react';
import Sidebar from './sidebar';
import { Card } from 'primereact/card';
import { Container, Row, Col } from 'react-bootstrap';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import { Carousel } from 'primereact/carousel';


const Dashboard = () => {
  const [statuses] = useState(['unscheduled', 'scheduled', 'new', 'negotiation', 'renewal']);

  const getSeverity = (status) => {
    switch (status) {
      case 'unscheduled':
        return 'danger';

      case 'scheduled':
        return 'success';

      case 'recommended':
        return 'info';

      case 'negotiation':
        return 'warning';

      case 'renewal':
        return null;
    }
  };

  const dashboardStyle = {
    backgroundColor: '#eef8f9',
    display: 'flex',
    flexDirection: 'row',
  };

  const cardStyle = {
    borderRadius: '10px',
    border: '2px solid #41b5d1',
    width: '100%',
  };

  const cardStyleweekly = {
    borderRadius: '10px',
    border: '2px solid #41b5d1',
    width: '90%',

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

  const tableData = [
    { firstname: 'Razeen', lastname: 'Sajeel', date: '2024-02-01', time: '10:00 AM', status: 'unscheduled' },
    { firstname: 'Panchami', lastname: 'Nair', date: '2024-02-02', time: '2:30 PM', status: 'scheduled' },
    { firstname: 'Febin', lastname: 'Thomas', date: '2024-02-02', time: '2:30 PM', status: 'scheduled' },
  ];

  const carouselItems = [
    { content: 'Required Hours', icon: 'pi pi-clock', color: '#4169E1', hours: '00hr : 51min' },
    { content: 'Booked Hours', icon: 'pi pi-clock', color: '#4169E1', hours: '01hr : 25min' },
    { content: 'Pending Hours', icon: 'pi pi-clock', color: '#4169E1', hours: '02hr : 10min' },
  ];

  const responsiveOptions = [
    { breakpoint: '1024px', numVisible: 2, numScroll: 2 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
  ];

  return (
    <div style={dashboardStyle}>
      <Sidebar />
      <div>
        <div style={userInfoStyle}>
          <span style={{ marginRight: '10px' }}>John Doe</span>
          <span style={roleStyle}>Admin</span>
          <Avatar size="large" shape="circle" icon="pi pi-user" style={{ marginLeft: '10px' }} />
        </div>
        <Container style={{ marginTop: '60px' }}>
          <i className="pi pi-home" style={{ color: '#41b5d1' }}></i> <span style={{ color: '#41b5d1' }}>Dashboard</span>
          <Row>
            <Col md={7} >
              <Card title='Unassigned Appointments' style={cardStyle}>
                <DataTable value={tableData} tableStyle={{ minWidth: '40rem' }}>
                  <Column field="firstname" header="First Name"></Column>
                  <Column field="lastname" header="Last Name"></Column>
                  <Column field="date" header="Date"></Column>
                  <Column field="time" header="Time"></Column>
                  <Column
                    field="status"
                    header="Status"
                    style={{ minWidth: '12rem' }}
                    body={(rowData) => (
                      <Badge
                        value={rowData.status}
                        severity={getSeverity(rowData.status)}
                        className={`p-mr-2 badge-${getSeverity(rowData.status)}`}
                      />
                    )}
                  />
                </DataTable>
              </Card>
            </Col>
            <Col md={5}>
              <Card title='Weekly Status' style={cardStyle}>
                <Carousel value={carouselItems} numScroll={1} numVisible={2} responsiveOptions={responsiveOptions} itemTemplate={(item) => (
                  <div>
                    <Card style={cardStyle}>
                      <div className='text-center'>
                        <i className={item.icon} style={{ fontSize: '3.5rem', color: item.color }}></i>
                      </div>
                      <h5 className="m-0 text-center">{item.content}</h5>
                      <p className="m-0 text-center">{item.hours}</p>
                    </Card>
                  </div>
                )} />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card title='Training Requirement' style={cardStyle}>
                <col md={6} >
                <Card>

               
                  </Card> 
                </col>
                
              </Card>
            </Col>
            <Col>
              <Card title='Card 2' style={cardStyle}>
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
