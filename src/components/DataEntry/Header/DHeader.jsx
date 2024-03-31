import React, { useEffect } from "react";
import Notification from "../../../assets/AdminNotification.svg";
import Profile from "../../../assets/AdminProfile.svg";
import { useState } from "react";
import "./DHeader.css";

function Header(props) {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setcount(2);
  });
  return (
    <div
      style={{
        // backgroundColor: "#049370"darkgreeen,
        backgroundColor: "#F3FFF5",
        display: "flex",
        boxShadow: "1px 3px 2px 1px rgba(0,0,0,0.44)",
        height: "5vh",
      }}
    >
      {/*This is notification logo */}
      <img
        style={{ marginLeft: "81%", paddingTop: "1%", paddingRight: "1%" }}
        src={Notification}
        alt="Notification"
      />
      {count != 0 ? (
        <span
          style={{ marginLeft: "83%", marginTop: "1.1%" }}
          className="ncount position-absolute translate-middle badge rounded-pill bg-danger"
        >
          {count}
        </span>
      ) : (
        <h6></h6>
      )}
      {/*This is Profile logo */}
      <img src={Profile} alt="Profile" />
      <span style={{ display: "flex", marginTop: "1%", marginLeft: "1%" }}>
        <h6>{props.name}</h6>
      </span>
    </div>
  );
}

export default Header;
