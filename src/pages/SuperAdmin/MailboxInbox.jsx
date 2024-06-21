import React from "react";

import Inbox from "../../components/Admins/SuperAdmin/Mailbox/Inbox";

import AdminHeader from "../../components/Admins/SuperAdmin/Header/AdminHeader";
import Navigationbar from "../../components/Admins/SuperAdmin/NavigationBar/Navigationbar";
import MailNavigation from "../../components/Admins/SuperAdmin/Mailbox/MailNavigation";

export default function MailboxInbox() {
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
                 <Inbox/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
