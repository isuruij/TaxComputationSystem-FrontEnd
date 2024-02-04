import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from '../components/user/Header/Header';
import PersonalDetails from '../components/user/PersonalDetails/PersonalDetails';
import Sidenavbar from '../components/user/Sidenavbar';
import Profile from '../components/user/Profile/Profile';
import Homepage from '../components/user/UserHomepage/Homepage';
import ProgressBar from 'react-bootstrap/ProgressBar';




export default function UserHome() {
  return (
    <div>
        <Header/>
        <Container fluid >
      <Row >
        <Col xs={3} md={3} lg={3}>
          <div style={{paddingTop:"0px", marginTop:"30px"}}>
            <Sidenavbar/>
          </div>
        </Col>
        <Col xs={9} md={9} lg={9}>
          <div style={{paddingTop:"0px", marginTop:"30px"}}>
            <Homepage/>
          </div>
        </Col>
      </Row>
    </Container>
        
    </div>
    
  )
}
