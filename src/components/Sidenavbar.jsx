import React from "react";

import reactlogo from "../assets/react.svg";
import home from "../assets/home.svg";
import changeincome from "../assets/changeincome.svg";
import DownloadTaxreport from "../assets/DownloadTaxreport.svg";
import viewtax from "../assets/viewtax.svg";
import taxhistory from "../assets/taxhistory.svg";
import registration from "../assets/registration.svg";
import logout from "../assets/logout.svg";

function Sidenavbar() {
  return (
    <div>
      <div
        className="box"
        style={{ marginLeft: "1%", backgroundColor: "#D3E9FE", width: "20%" }}
      >
        <br></br>
        <button type="button" className="btn btn-primary menue-button">
          <img src={home} className="navbar-icon" alt="Icon" />
          Home
        </button>
        <button type="button" className="btn btn-primary menue-button">
          <img src={changeincome} alt="Icon" />
          Primary
        </button>
        <button type="button" className="btn btn-primary menue-button">
          <img src={viewtax} alt="Icon" />
          View Tax
        </button>
        <button type="button" className="btn btn-primary menue-button">
          <img src={taxhistory} alt="Icon" />
          Tax History
        </button>
        <button type="button" className="btn btn-primary menue-button">
          <img src={DownloadTaxreport} alt="Icon" />
          Download Tax report
        </button>
        <button type="button" className="btn btn-primary menue-button">
          <img src={registration} alt="Icon" />
          Registration
        </button>
        <button type="button" className="btn btn-primary menue-button">
          <img src={logout} alt="Icon" />
          Log out
        </button>
        <br></br>
      </div>
    </div>
  );
}

export default Sidenavbar;
