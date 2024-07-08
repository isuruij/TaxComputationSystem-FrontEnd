
import React, { useState } from 'react';
import DHeader from "../../components/DataEntry/Header/DHeader";
import DSideNavBar from "../../components/DataEntry/DSideNavBar/DSideNavBar";
import DMailNavigation from '../../components/DataEntry/Mailbox/DMailNavigation';
import MailboxCompose from "../../components/Admins/SuperAdmin/Mailbox/MailboxCompose";
import UserList from '../../components/Admins/SuperAdmin/Mailbox/UserList';

export default function DMailboxComposePage() {
  const [recipientEmail, setRecipientEmail] = useState('');
  return (
    <div>
      <DHeader />
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: "5px" }}>
          <DSideNavBar/>
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
                 <DMailNavigation/>
                 <UserList setRecipientEmail={setRecipientEmail} />
            </div>
            <div style={{width:"80%"}}>
                <MailboxCompose recipientEmail={recipientEmail} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
