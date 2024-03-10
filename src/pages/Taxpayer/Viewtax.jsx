import React from "react";
import Header from "../../components/user/Header/Header";
import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import { useState, useEffect } from "react";
import Axios from "axios";
import Taxview from "../../components/user/TaxView/TaxView";

function Viewtax() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: "5px" }}>
          <Sidenavbar />
        </div>
        <div style={{ width: "65vw", marginLeft: "5px", marginTop: "5px" }}>
          <Taxview />
        </div>
      </div>
    </div>
  );
}

export default Viewtax;
