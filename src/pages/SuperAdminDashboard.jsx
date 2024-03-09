import React from 'react';

import Dashboard from '../components/Admins/SuperAdmin/Dashboard/Dashboard';

import Navigationbar from '../components/Admins/SuperAdmin/NavigationBar/Navigationbar';
import AdminHeader from '../components/Admins/SuperAdmin/Header/AdminHeader';

export default function SuperAdminDashboard() {
  return (
    <div>
    <AdminHeader />
    <div style={{ display: "flex" }}>
      <div style={{marginTop:"5px"}}>
        <Navigationbar/>
      </div>
      <div style={{width:'65vw',marginLeft:"5px",marginTop:"5px",display:"block"}} >
        <div><Dashboard/></div>
      </div>
    </div>
  </div>
    
  )
}
