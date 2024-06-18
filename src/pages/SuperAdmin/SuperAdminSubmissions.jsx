import React from 'react';

import Submissions from '../../components/Admins/SuperAdmin/Submissions/Submissions';

import AdminHeader from '../../components/Admins/SuperAdmin/Header/AdminHeader';
import Navigationbar from '../../components/Admins/SuperAdmin/NavigationBar/Navigationbar';

export default function SuperAdminSubmissions() {
  return (
    <div>
    <AdminHeader />
    <div style={{ display: "flex" }}>
      <div style={{marginTop:"5px"}}>
        <Navigationbar/>
      </div>
      <div style={{width:'65vw',marginLeft:"5px",marginTop:"5px",display:"block"}} >
        <div><Submissions/></div>
      </div>
    </div>
  </div>
    
  )
}
