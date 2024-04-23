import React from 'react';

import Dashboard from '../components/Admins/SuperAdmin/Dashboard/Dashboard';

import Navigationbar from '../components/Admins/SuperAdmin/NavigationBar/Navigationbar';
import AdminHeader from '../components/Admins/SuperAdmin/Header/AdminHeader';
import MailboxInbox from '../components/Admins/SuperAdmin/Mailbox/MailboxInbox';
import NewMessageModal from '../components/Admins/SuperAdmin/Mailbox/NewMessageModal';

export default function MailboxPage() {
  return (
    <div>
    <AdminHeader />
    <div style={{ display: "flex" }}>
      <div style={{marginTop:"5px"}}>
        <Navigationbar/>
      </div>
      <div style={{width:'65vw',marginLeft:"5px",marginTop:"5px",display:"block"}} >
        <div><MailboxInbox/></div>
      </div>
    </div>
  </div>
    
  )
}
