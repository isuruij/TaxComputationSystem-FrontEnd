import React from "react";
import SettingSubMenue from "../components/user/Settings/SettingSubMenue";
import BasicDetails from "../components/user/Settings/BasicDetails";
import Header from "../components/user/Header/Header";
import Sidenavbar from "../components/user/Sidenavbar/Sidenavbar";
import Incomedetails from "../components/user/Settings/IncomeDetails";

function SettingsIncomeDetails() {
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
              <Incomedetails/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsIncomeDetails