import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from '../../components/user/Header/Header';

import Sidenavbar from '../../components/user/Sidenavbar/Sidenavbar';

import Homepage from '../../components/user/UserHomepage/Homepage';





export default function UserHome() {
  return (
    <div>
    <Header />
    <div style={{ display: "flex" }}>
      <div style={{marginTop:"5px"}}>
        <Sidenavbar />
      </div>
      <div style={{width:'65vw',marginLeft:"5px",marginTop:"5px"}} >
        <Homepage/>
      </div>
    </div>
  </div>
    
  )
}
