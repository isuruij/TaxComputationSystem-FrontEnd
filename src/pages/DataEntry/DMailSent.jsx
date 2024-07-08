import React from "react";

import MailSent from "../../components/Admins/SuperAdmin/Mailbox/MailSent";
import DHeader from "../../components/DataEntry/Header/DHeader";
import DMailNavigation from '../../components/DataEntry/Mailbox/DMailNavigation';
import DSideNavBar from "../../components/DataEntry/DSideNavBar/DSideNavBar";

export default function DMailSent() {
  return (
    <div>
      <DHeader/>
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
            </div>
            <div style={{width:"80%"}}>
                 <MailSent/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
