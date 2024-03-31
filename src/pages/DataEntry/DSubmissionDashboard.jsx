import React from "react";
import DHeader from "../../components/DataEntry/Header/DHeader";
import DSideNavBar from "../../components/DataEntry/DSideNavBar/DSideNavBar";
import DSubmissionDash from "../../components/DataEntry/DSubmissionDash/DSubmissionDash";

function DSubmissionDashboard() {
  return (
    <div>
      <div>
        <DHeader />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "20vw" }}>
          <DSideNavBar />
        </div>
        <div style={{ marginLeft: "10px", marginTop: "10px", width: "80vw" }}>
          <DSubmissionDash />
        </div>
      </div>
    </div>
  );
}

export default DSubmissionDashboard;
