import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Axios from "axios";
import "./DSideNavBar.css";
import { useNavigate } from "react-router-dom";
import DownloadTaxreport from "../../../assets/DownloadTaxreport.svg";
import Settings from "../../../assets/Settings.svg";
import home from "../../../assets/home.svg";
import logout from "../../../assets/logout.svg";
import mail from "../../../assets/mail.svg";

function DSideNavBar() {
  const buttonStyle = {
    backgroundColor: "#049370",
    textAlign: "left",
    display: "block",
    marginBottom: "12px",
    width: "90%",
    marginLeft: "4%",
    boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
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
        marginTop: "5px",
        marginLeft: "0.5%",
        backgroundColor: "#F3FFF5",
        width: "20vw",
        height: "90vh",
      }}
    >
      <br></br>
      <button type="button" className="btn btn-primary custom-button">
        <img
          src={home}
          style={{ alignItems: "left", textAlign: "left" }}
          alt="Icon"
        />
        <span>Dashboard</span>
      </button>

      <button
        onClick={() => {
          navigate("/settings/basic");
        }}
        type="button"
        className="btn btn-primary custom-button"
        style={buttonStyle}
      >
        <img
          src={Settings}
          style={{ alignItems: "left", textAlign: "left" }}
          alt="Icon"
        />
        <span>Account Settings</span>
      </button>

      <button
        type="button"
        className="btn btn-primary custom-button"
        style={buttonStyle}
      >
        <img
          src={DownloadTaxreport}
          style={{ alignItems: "left", textAlign: "left" }}
          alt="Icon"
        />
        <span>Submission</span>
      </button>

      <button
        onClick={() => {
          handleLogout();
        }}
        type="button"
        className="btn btn-primary custom-button"
        style={buttonStyle}
      >
        <img
          src={mail}
          style={{ alignItems: "left", textAlign: "left" }}
          alt="Icon"
        />
        <span>Mail Box</span>
      </button>
      <button
        onClick={() => {
          handleLogout();
        }}
        type="button"
        className="btn btn-primary custom-button"
        style={buttonStyle}
      >
        <img
          src={logout}
          style={{ alignItems: "left", textAlign: "left" }}
          alt="Icon"
        />
        <span>Log out</span>
      </button>
      {/* ... (Repeat the pattern for other buttons) */}
      <br></br>
    </div>
  );
}

export default DSideNavBar;
