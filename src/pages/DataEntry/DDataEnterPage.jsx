import React from "react";
import DSideNavBar from "../../components/DataEntry/DSideNavBar/DSideNavBar";
import DHeader from "../../components/DataEntry/Header/DHeader";
import DDataEntryPart from "../../components/DataEntry/DDataEntryPart/DDataEntryPart";

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
        <div style={{ marginTop: "5px", paddingLeft: "10px", width: "78vw" }}>
          <DDataEntryPart />
        </div>
      </div>
    </div>
  );
}

export default DDashboard;
