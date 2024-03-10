import React from "react";
import DSideNavBar from "../../components/DataEntry/DSideNavBar/DSideNavBar";
import DHeader from "../../components/DataEntry/Header/DHeader";
import DDocUpload from "../../components/DataEntry/DDocUpload/DDocUpload";

function DDashboard() {
  return (
    <div>
      <div>
        <DHeader />
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <DSideNavBar />
        </div>
      </div>
    </div>
  );
}

export default DDashboard;
