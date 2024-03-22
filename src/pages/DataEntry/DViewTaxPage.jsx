import React from "react";
import DHeader from "../../components/DataEntry/Header/DHeader";
import DSideNavBar from "../../components/DataEntry/DSideNavBar/DSideNavBar";
import DViewTax from "../../components/DataEntry/DViewTax/DViewTax";

function DViewTaxPage() {
  return (
    <div>
      <div>
        <DHeader />
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <DSideNavBar />
        </div>
        <div style={{ marginLeft: "5px", marginTop: "5px", width: "80vw" }}>
          <DViewTax />
        </div>
      </div>
    </div>
  );
}

export default DViewTaxPage;
