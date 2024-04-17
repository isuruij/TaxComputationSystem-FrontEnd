import React, { useEffect } from "react";
import Notification from "../../../../assets/adminNotification.svg";
import Profile from "../../../../assets/AdminProfile.svg";
import { useState } from "react";
import "./DHeader.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

function Header() {

  // const cookieValue = Cookies.get("token");
  // const name = jwtDecode(cookieValue).name;


  const [count, setcount] = useState(0);
  useEffect(() => {
    setcount(2);
  });
  return (
    <div
      style={{
        backgroundColor: "#F3FFF5",
        display: "flex",
        boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        width: "100vw",
      }}
    >
      <img
        style={{ marginLeft: "71vw", paddingTop: "2vh", paddingRight: "1vw" }}
        src={Notification}
        alt="Notification"
      />
      {count != 0 ? (
        <span
          style={{ marginLeft: "73vw", marginTop: "3vh" }}
          className="ncount position-absolute translate-middle badge rounded-pill bg-danger"
        >
          {count}
        </span>
      ) : (
        <h6></h6>
      )}
      <img src={Profile} alt="Profile" />
      <span style={{ display: "flex", marginTop: "2vh", marginLeft: "1vw" }}>
        {/* <h6 className="headername">{name}</h6> */}
      </span>
    </div>
  );
}

export default Header;
