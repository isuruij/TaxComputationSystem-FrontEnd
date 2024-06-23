import React from "react";
import DHeader from "../../components/DataEntry/Header/DHeader";
import DSideNavBar from "../../components/DataEntry/DSideNavBar/DSideNavBar";
import DDocUpload from "../../components/DataEntry/DDocUpload/DDocUpload";

function DFileUploadPage() {
  return (
    <div>
      <div>
        <DHeader />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "20vw" }}>
          <DSideNavBar />
        </div>
        <div style={{ marginLeft: "5px", marginTop: "5px", width: "80vw" }}>
          <DDocUpload />
        </div>
      </div>
    </div>
  );
}

export default DFileUploadPage;
