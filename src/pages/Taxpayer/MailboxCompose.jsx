
import React from 'react';

import MailboxCompose from "../../components/user/Mailbox/MailboxCompose";
import Header from "../../components/user/Header/Header";
import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import MailNavigation from "../../components/user/Mailbox/MailNavigationTaxpayer";


export default function MailboxComposePage() {
  return (
    <div>
      <Header/>
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: "5px" }}>
          <Sidenavbar/>
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
