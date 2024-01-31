import React from "react";

import reactlogo from "../../assets/react.svg";
import home from "../../assets/home.svg";
import changeincome from "../../assets/changeincome.svg";
import DownloadTaxreport from "../../assets/DownloadTaxreport.svg";
import viewtax from "../../assets/viewtax.svg";
import taxhistory from "../../assets/taxhistory.svg";
import registration from "../../assets/registration.svg";
import logout from "../../assets/logout.svg";
import Settings from "../../assets/Settings.svg";

function Sidenavbar() {
  const buttonStyle = {
    textAlign: "left",
    display: "block",
    marginBottom: "12px",
    width: "90%",
    marginLeft: "4%",
    boxShadow: "0px 5px 14px -10px rgba(0,0,0,1)",
  };

  return (
    
      <div
        style={{
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
          borderRadius: "10px",
          padding: "10px",
          // marginRight: "10%",
          marginBottom: "10px",
          marginLeft: "0.5%",
          backgroundColor: "#D3E9FE",
          
          width: "20vw",
          // display: "flex", // Set display to flex
          // flexDirection: "column", // Arrange buttons vertically
        }}
      >
        <br></br>
        <button type="button" className="btn btn-primary" style={buttonStyle}>
          <img
            src={home}
            style={{ alignItems: "left", textAlign: "left" }}
            alt="Icon"
          />
          Home
        </button>
        <button type="button" className="btn btn-primary" style={buttonStyle}>
          <img
            src={registration}
            style={{ alignItems: "left", textAlign: "left" }}
            alt="Icon"
          />
          Registration
        </button>
        <button type="button" className="btn btn-primary" style={buttonStyle}>
          <img
            src={DownloadTaxreport}
            style={{ alignItems: "left", textAlign: "left" }}
            alt="Icon"
          />
          Download report
        </button>
        <button type="button" className="btn btn-primary" style={buttonStyle}>
          <img
            src={viewtax}
            style={{ alignItems: "left", textAlign: "left" }}
            alt="Icon"
          />
          viewtax
        </button>
        <button type="button" className="btn btn-primary" style={buttonStyle}>
          <img
            src={taxhistory}
            style={{ alignItems: "left", textAlign: "left" }}
            alt="Icon"
          />
          taxhistory
        </button>
        <button type="button" className="btn btn-primary" style={buttonStyle}>
          <img
            src={Settings}
            style={{ alignItems: "left", textAlign: "left" }}
            alt="Icon"
          />
          Settings
        </button>
        <button type="button" className="btn btn-primary" style={buttonStyle}>
          <img
            src={logout}
            style={{ alignItems: "left", textAlign: "left" }}
            alt="Icon"
          />
          logout
        </button>
        {/* ... (Repeat the pattern for other buttons) */}
        <br></br>
      </div>
    
  );
}

export default Sidenavbar;
