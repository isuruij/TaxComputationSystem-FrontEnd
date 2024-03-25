import React from "react";
import NotificationCom from "../../components/user/NotificationCom/NotificationCom";
import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import Header from "../../components/user/Header/Header";


function Notification() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{marginTop:"5px"}}>
          <Sidenavbar />
        </div>
        <div style={{width:'65vw',marginLeft:"5px",marginTop:"0px"}} >
          <NotificationCom/>
        </div>
      </div>
    </div>
  );
}

export default Notification;
