import React from "react";
import SettingSubMenue from "../../components/user/Settings/SettingSubMenue";
import Header from "../../components/user/Header/Header";
import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import UpdatePersonalDetails from "../../components/user/PersonalDetails/UpdatePersonalDetails";

function SettingsBasicDetails() {
  return (
    <div>
      <div>
        <Header />
        <div style={{ display: "flex" }}>
          <div style={{ marginTop: "5px" }}>
            <Sidenavbar />
          </div>
          <div style={{ marginLeft: "5px", marginTop: "5px" }}>
            <div>
              <SettingSubMenue />
            </div>
            <div style={{marginTop:"5px"}}>
              <UpdatePersonalDetails/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsBasicDetails;
