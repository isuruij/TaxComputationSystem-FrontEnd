import React from "react";

import { useNavigate } from "react-router-dom";
import DownloadTaxreport from "../../assets/DownloadTaxreport.svg";
import Settings from "../../assets/Settings.svg";
import home from "../../assets/home.svg";
import logout from "../../assets/logout.svg";
import registration from "../../assets/registration.svg";
import taxhistory from "../../assets/taxhistory.svg";
import viewtax from "../../assets/viewtax.svg";

function Sidenavbar() {
  const buttonStyle = {
    textAlign: "left",
    display: "block",
    marginBottom: "12px",
    width: "90%",
    marginLeft: "4%",
    boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
  };

  const navigate = useNavigate();

  return (
    <div
      style={{
        boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px",
        marginLeft: "0.5%",
        backgroundColor: "#D3E9FE",
        width: "20vw",
        height: "90vh",
      }}
    >
      <br></br>
      <button type="button" className="btn btn-primary" style={buttonStyle}>
        <img
          src={home}
          style={{ alignItems: "left", textAlign: "left", marginRight: "10px" }}
          alt="Icon"
        />
        Home
      </button>
      <button
        onClick={() => {
          navigate("/register/incomedetails");
        }}
        type="button"
        className="btn btn-primary"
        style={buttonStyle}
      >
        <img
          src={registration}
          style={{ alignItems: "left", textAlign: "left", marginRight: "10px" }}
          alt="Icon"
        />
        Registration
      </button>
      <button type="button" className="btn btn-primary" style={buttonStyle}>
        <img
          src={DownloadTaxreport}
          style={{ alignItems: "left", textAlign: "left", marginRight: "10px" }}
          alt="Icon"
        />
        Download report
      </button>
      <button type="button" className="btn btn-primary" style={buttonStyle}>
        <img
          src={viewtax}
          style={{ alignItems: "left", textAlign: "left", marginRight: "10px" }}
          alt="Icon"
        />
        viewtax
      </button>
      <button type="button" className="btn btn-primary" style={buttonStyle}>
        <img
          src={taxhistory}
          style={{ alignItems: "left", textAlign: "left", marginRight: "10px" }}
          alt="Icon"
        />
        taxhistory
      </button>
      <button type="button" className="btn btn-primary" style={buttonStyle}>
        <img
          src={Settings}
          style={{ alignItems: "left", textAlign: "left", marginRight: "10px" }}
          alt="Icon"
        />
        Settings
      </button>
      <div style={{marginTop:"22vh"}}>
      <button type="button" className="btn btn-primary" style={buttonStyle}>
        <img
          src={logout}
          style={{ alignItems: "left", textAlign: "left", marginRight: "10px" }}
          alt="Icon"
        />
        Logout
      </button>
      </div>
      
      {/* ... (Repeat the pattern for other buttons) */}
      <br></br>
    </div>
  );
}

export default Sidenavbar;
