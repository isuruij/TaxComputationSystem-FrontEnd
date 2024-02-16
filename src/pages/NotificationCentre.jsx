import React from "react";
import Header from "../components/user/Header/Header";
import Sidenavbar from "../components/user/Sidenavbar";
import { useState, useEffect } from "react";
import Axios from "axios";
import Notification from "../components/user/NotificationCentre/Notification"

function NotificationCentre() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{marginTop:"5px"}}>
          <Sidenavbar />
        </div>
        <div style={{marginLeft:"5px",marginTop:"5px"}} >
          <Notification />
        </div>
      </div>
    </div>
  );
}

export default NotificationCentre;
