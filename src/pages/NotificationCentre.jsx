import React from "react";
import Header from "../components/user/Header/Header";
import Sidenavbar from "../components/user/Sidenavbar";
import { useState, useEffect } from "react";
import Axios from "axios";
import NotificationCentre from "../components/user/NotificationCentre"

function NotificationCentre() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{marginTop:"5px"}}>
          <Sidenavbar />
        </div>
        <div style={{marginLeft:"5px",marginTop:"5px"}} >
          <NotificationCentre />
        </div>
      </div>
    </div>
  );
}

export default NotificationCentre;
