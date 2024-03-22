import React from "react";
import SettingSubMenue from "../../components/user/Settings/SettingSubMenue";
import Header from "../../components/user/Header/Header";
import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import TaxPaymentHistory from "../../components/user/TaxPaymentHistory/TaxPaymentHistory";
import SettingSubMenueTax from "../../components/user/Settings/SettingSubMenueTax";

function TaxHistory() {
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
              <SettingSubMenueTax/>
            </div>
            <div style={{marginTop:"5px", width:"auto"}}>
              <TaxPaymentHistory/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaxHistory