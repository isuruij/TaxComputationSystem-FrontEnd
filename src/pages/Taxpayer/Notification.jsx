import React from "react";
import NotificationCom from "../../components/user/NotificationCom/NotificationCom";
import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import SettingSubMenue from "../../components/user/Settings/SettingSubMenue";

function Notification() {
  return (
    <div>
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <div style={{ marginTop: "5px" }}>{/* <Sidenavbar /> */}</div>
          <div style={{ marginLeft: "5px", marginTop: "5px" }}>
            <div>
              <SettingSubMenue />
            </div>
            <div style={{ marginTop: "5px" }}>
              <NotificationCom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
