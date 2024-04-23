import Axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { useNavigate } from "react-router-dom";
import DownloadTaxreport from "../../../../assets/DownloadTaxreport.svg";
import Settings from "../../../../assets/Settings.svg";
import squre from "../../../../assets/Squre.svg";
import mailin from "../../../../assets/mailin.svg";
import sentmail from "../../../../assets/sentmail.svg";
import dreaft from "../../../../assets/dreaft.svg";
import inbox from "../../../../assets/inbox.svg";
import trash from "../../../../assets/trash.svg";
import "./NavbarEmail.css";

function NavbarEmail() {
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
        width: "15vw",
        height: "90vh",
      }}
    >
      <br></br>
      <button type="button" className="btn btn-primary custom-button-1">
        <img
          src={squre}
          style={{ alignItems: "left", textAlign: "left" ,width:"10%",marginRight:"10px"}}
          alt="Icon"
        />
        <span style={{color:"#049370",fontSize:"small"}}>Compose</span>
      </button>

      <button type="button" className="btn btn-primary custom-button-1">
        <img
          src={inbox}
          style={{ alignItems: "left", textAlign: "left" ,width:"10%",marginRight:"10px"}}
          alt="Icon"
        />
        <span style={{color:"#049370",fontSize:"small"}}>Inbox</span>
      </button>
      <button type="button" className="btn btn-primary custom-button-1">
        <img
          src={dreaft}
          style={{ alignItems: "left", textAlign: "left" ,width:"10%",marginRight:"10px"}}
          alt="Icon"
        />
        <span style={{color:"#049370",fontSize:"small"}}>Drafts</span>
      </button>
      <button type="button" className="btn btn-primary custom-button-1">
        <img
          src={sentmail}
          style={{ alignItems: "left", textAlign: "left" ,width:"10%",marginRight:"10px"}}
          alt="Icon"
        />
        <span style={{color:"#049370",fontSize:"small"}}>Sent</span>
      </button>
      <button type="button" className="btn btn-primary custom-button-1">
        <img
          src={trash}
          style={{ alignItems: "left", textAlign: "left" ,width:"10%",marginRight:"10px"}}
          alt="Icon"
        />
        <span style={{color:"#049370",fontSize:"small"}}>Trash</span>
      </button>

      
      <br></br>
    </div>
  );
}

export default NavbarEmail;