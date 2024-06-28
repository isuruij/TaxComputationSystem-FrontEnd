import React, { useEffect } from "react";
// import Notification from "../../../assets/adminNotification.svg";
import Profile from "../../../assets/AdminProfile.svg";
import { useState } from "react";
import "./DHeader.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function DHeader() {
  const cookieValue = Cookies.get("token");
  const name = jwtDecode(cookieValue).name;

  const [count, setcount] = useState(0);
  useEffect(() => {
    setcount(2);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#F3FFF5",
        display: "flex",
        alignItems: "center",
        boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        width: "98.5vw",
        justifyContent: "flex-end", // aligns items to the right
        paddingTop: "1vh",
        paddingBottom: "1vh",
      }}
    >
      <div
        style={{ marginRight: "20vw", display: "flex", alignItems: "center" }}
      >
        <img src={Profile} alt="Profile" />
        <span style={{ marginLeft: "1vw" }}>
          <h6 className="headername">{name}</h6>
        </span>
      </div>
    </div>
  );
}

export default DHeader;
