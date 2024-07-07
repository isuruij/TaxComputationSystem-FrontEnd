import React from "react";

import Inbox from "../../components/user/Mailbox/Inbox";
import Header from "../../components/user/Header/Header";
import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import MailNavigation from "../../components/user/Mailbox/MailNavigationTaxpayer";



export default function MailSentTaxpayer() {
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
                 <Inbox/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
