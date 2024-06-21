import React from 'react';
import AdminHeader from "../../components/Admins/SuperAdmin/Header/AdminHeader";
import Navigationbar from "../../components/Admins/SuperAdmin/NavigationBar/Navigationbar";
import MailNavigation from '../../components/Admins/SuperAdmin/Mailbox/MailNavigation';
import MailboxCompose from "../../components/Admins/SuperAdmin/Mailbox/MailboxCompose";

export default function MailboxComposePage() {
  return (
    <div>
      <AdminHeader />
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: "5px" }}>
          <Navigationbar />
        </div>
        <div
          style={{
            width: "65vw",
            marginLeft: "5px",
            marginTop: "5px",
            display: "block",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row"}} >
            <div style={{width:"20%"}}>
                 <MailNavigation/>
            </div>
            <div style={{width:"80%"}}>
                 <MailboxCompose/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
