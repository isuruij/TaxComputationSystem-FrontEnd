import Axios from "axios";
import React from "react";

import { useNavigate } from "react-router-dom";
import DownloadTaxreport from "../../../../assets/DownloadTaxreport.svg";
import Settings from "../../../../assets/Settings.svg";
import home from "../../../../assets/home.svg";
import logout from "../../../../assets/logout.svg";
import registration from "../../../../assets/registration.svg";
import taxhistory from "../../../../assets/taxhistory.svg";
import viewtax from "../../../../assets/viewtax.svg";

function Navigationbar() {
  const buttonStyle = {
    textAlign: "left",
    display: "block",
    marginBottom: "12px",
    width: "90%",
    marginLeft: "4%",
    boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
    backgroundColor: "#049370",
    // Set the background color to #049370
  };

  const navigate = useNavigate();

  const handleLogout = async (event) => {
    try {
      const res = await Axios.get("http://localhost:3000/api/taxpayer/logout");
      navigate("/login");
      // location.reload(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        borderRadius: "10px",
        padding: "10px",
        marginBottom: "10px",
        marginLeft: "0.5%",
        backgroundColor: "#F3FFF5",
        width: "20vw",
        height: "90vh",
      }}
    >
      <br></br>
      <button type="button" className="btn btn-success" style={buttonStyle}>
        <img
          src={home}
          style={{ alignItems: "left", textAlign: "left", marginRight: "10px" }}
          alt="Icon"
        />
        Dahboard
      </button>
      <button
        onClick={() => {
          navigate("/register/incomedetail");
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
      <div style={{ marginTop: "22vh" }}>
        <button
          onClick={() => {
            handleLogout();
          }}
          type="button"
          className="btn btn-primary"
          style={buttonStyle}
        >
          <img
            src={logout}
            style={{
              alignItems: "left",
              textAlign: "left",
              marginRight: "10px",
            }}
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

export default Navigationbar;
