import React from "react";
import DSideNavBar from "../../components/DataEntry/DSideNavBar/DSideNavBar";
import DHeader from "../../components/DataEntry/Header/DHeader";
import DDashbox from "../../components/DataEntry/DDashbox/DDashbox";

function DDashboard() {
  return (
    <div>
      <div>
        <DHeader />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "20vw" }}>
          <DSideNavBar />
        </div>
        <div style={{ marginTop: "10px", paddingLeft: "10px", width: "80vw" }}>
          <DDashbox />
        </div>
      </div>
    </div>
  );
}

export default DDashboard;
