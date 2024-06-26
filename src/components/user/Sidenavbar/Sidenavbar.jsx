import React from "react";
import Axios from "axios";
import "./Sidenavbar.css";
import { useNavigate } from "react-router-dom";
import DownloadTaxreport from "../../../assets/DownloadTaxreport.svg";
import Settings from "../../../assets/Settings.svg";
import home from "../../../assets/home.svg";
import logout from "../../../assets/logout.svg";
import registration from "../../../assets/registration.svg";
import taxhistory from "../../../assets/taxhistory.svg";
import viewtax from "../../../assets/viewtax.svg";

function Sidenavbar() {
  const buttonStyle = {
    textAlign: "left",
    display: "block",
    marginBottom: "12px",
    width: "90%",
    marginLeft: "4%",
    boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
    borderRadius: "10px",
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
        borderRadius: "15px",
        padding: "10px",
        marginBottom: "10px",
        marginLeft: "0.5%",
        backgroundColor: "#D3E9FE",
        width: "20vw",
        height: "90vh",
      }}
    >
      <br></br>
      <button
        onClick={() => {
          navigate("/userhomepage");
        }}
        type="button"
        className="btn btn-primary user"
        style={buttonStyle}
      >
        <img
        className="navImage"
          src={home}
          style={{ alignItems: "left", textAlign: "left" }}
          alt="Icon"
        />
        <span>Home</span>
      </button>
      <button
        onClick={() => {
          navigate("/settings/basic");
        }}
        type="button"
        className="btn btn-primary user"
        style={buttonStyle}
      >
        <img
          className="navImage"
          src={registration}
          style={{ alignItems: "left", textAlign: "left" }}
          alt="Icon"
        />
        <span>Registration</span>
      </button>
      <button
        type="button"
        className="btn btn-primary user"
        style={buttonStyle}
      >
        <img
        className="navImage"
          src={DownloadTaxreport}
          style={{ alignItems: "left", textAlign: "left" }}
          alt="Icon"
        />
        <span>Download Report</span>
      </button>
      <button
        onClick={() => {
          navigate("/viewtax");
        }}
        type="button"
        className="btn btn-primary user"
        style={buttonStyle}
      >
        <img
        className="navImage"
          src={viewtax}
          style={{ alignItems: "left", textAlign: "left" }}
          alt="Icon"
        />
        <span>View Tax</span>
      </button>
      <button
        onClick={() => {
          navigate("/TaxStatus");
        }}
        type="button"
        className="btn btn-primary user"
        style={buttonStyle}
      >
        <img
        className="navImage"
          src={taxhistory}
          style={{ alignItems: "left", textAlign: "left" }}
          alt="Icon"
        />
        <span>Taxhistory</span>
      </button>
      <button
        onClick={() => {
          handleLogout();
        }}
        type="button"
        className="btn btn-primary user"
        style={buttonStyle}
      >
        <img
        className="navImage"
          src={logout}
          style={{ alignItems: "left", textAlign: "left" }}
          alt="Icon"
        />
        <span>Logout</span>
      </button>
      <br></br>
    </div>
  );
}

export default Sidenavbar;
