import Axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { useNavigate } from "react-router-dom";
import DownloadTaxreport from "../../../../assets/DownloadTaxreport.svg";
import Settings from "../../../../assets/Settings.svg";
import home from "../../../../assets/home.svg";
import logout from "../../../../assets/logout.svg";
import mail from "../../../../assets/mail.svg";
import plus from "../../../../assets/plus.svg";
import ApproveReport from "../../../../assets/Approve-Report.svg";
import newadmin from "../../../../assets/newadmin.svg"
import updatepolicies from "../../../../assets/Updatepolicies.svg"
import "./DSideNavBar.css";

function Navigationbar() {
  const buttonStyle = {
    backgroundColor: "#049370",
    textAlign: "left",
    display: "block",
    marginBottom: "12px",
    width: "90%",
    marginLeft: "4%",
    boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
  };
  const buttonStyle1 = {
    backgroundColor: "#049370",
    textAlign: "left",
    display: "block",
    marginBottom: "120px",
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
      <h2 style={{color:"#008060",paddingLeft:"20px",textShadow:"2px 2px 4px rgba(0, 0, 0, 0.5)"}}>Super Admin</h2>
      <button type="button" className="btn btn-primary custom-button">
        <img
          src={home}
          style={{ alignItems: "left", textAlign: "left", }}
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
        className="btn btn-primary custom-button-now"
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
        className="btn btn-primary custom-button-now"
        style={buttonStyle}
      >
        <img
          src={mail}
          style={{ alignItems: "left", textAlign: "left",width:"10%",marginRight:"10px" }}
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
          src={plus}
          style={{ alignItems: "left", textAlign: "left",width:"10%",marginRight:"10px" }}
          alt="Icon"
        />
        <span>Create new user</span>
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
          src={newadmin}
          style={{ alignItems: "left", textAlign: "left",width:"10%",marginRight:"10px" }}
          alt="Icon"
        />
        <span>Create new Admin</span>
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
          src={ApproveReport}
          style={{ alignItems: "left", textAlign: "left",width:"10%",marginRight:"10px" }}
          alt="Icon"
        />
        <span>Approve Tax Report</span>
      </button>

      <button
        onClick={() => {
          handleLogout();
        }}
        type="button"
        className="btn btn-primary custom-button"
        style={buttonStyle1}
      >
        <img
          src={updatepolicies}
          style={{ alignItems: "left", textAlign: "left",width:"10%",marginRight:"10px" }}
          alt="Icon"
        />
        <span>Update Tax policies</span>
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

export default Navigationbar;