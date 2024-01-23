import React from "react";
import Notification from "../assets/Notification.svg";
import Profile from "../assets/Profile.svg";

function Header() {
  return (
    <div style={{ backgroundColor: "#D3E9FE", display: "flex"}}>
      
      <img style={{marginLeft:"81%",paddingTop:"1%",paddingRight:"1%"}} src={Notification} alt="Notification" />
      <span style={{marginLeft:"83%",marginTop:"1%"}} className="position-absolute translate-middle badge rounded-pill bg-danger">
        0
        <span className="visually-hidden">unread messages</span>
      </span>
      <img src={Profile} alt="Profile" />
    </div>
  );
}

export default Header;
