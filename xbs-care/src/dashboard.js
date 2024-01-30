import React, { useState } from 'react';
import Sidebar from './sidebar';
import { Card } from 'primereact/card';
import { Container, Row, Col } from 'react-bootstrap';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';

const Dashboard = () => {
  const [statuses] = useState(['unqualified', 'qualified', 'new', 'negotiation', 'renewal']);

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
            <Col>
              <Card title='Unassigned Appointment'>
                <DataTable value={tableData} tableStyle={{ minWidth: '50rem' }}>
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
