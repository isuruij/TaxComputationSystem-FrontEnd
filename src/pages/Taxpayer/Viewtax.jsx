import React from "react";
import Header from "../../components/user/Header/Header";
import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import { useState, useEffect } from "react";
import Axios from "axios";
import Taxview from "../../components/user/TaxView/TaxView";

function Viewtax() {
  return (
    <div>
      <div>
        <div style={{ position: "fixed" }}>
          <Header />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginTop: "8.5vh", position: "fixed" }}>
            <Sidenavbar />
          </div>
          <div style={{ marginLeft: "5px", marginTop: "5px" }}>
            <div
              style={{
                marginLeft: "20vw",
                marginTop: "7.7vh",
                position: "fixed",
              }}
            ></div>
            <div style={{ marginTop: "7.8vh", marginLeft: "20vw" }}>
              <Taxview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Viewtax;
