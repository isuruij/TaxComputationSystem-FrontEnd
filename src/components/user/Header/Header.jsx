import React, { useEffect, useState } from "react";
import Notification from "../../../assets/Notification.svg";
import Profile from "../../../assets/Profile.svg";

function Header(props) {
  const [count, setcount] = useState(0);
  useEffect(() => {
    setcount(2);
  });
  return (
    <div
      style={{
        backgroundColor: "#D3E9FE",
        display: "flex",
        boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
      }}
    >
      <img
        style={{ marginLeft: "81%", paddingTop: "1%", paddingRight: "1%" }}
        src={Notification}
        alt="Notification"
      />
      {count != 0 ? (
        <span
          style={{ marginLeft: "83%", marginTop:"1.1%"}}
          className="position-absolute translate-middle badge rounded-pill bg-danger"
        >
          {count}
        </span>
      ) : (
        <h6></h6>
      )}
      <img src={Profile} alt="Profile" />
      <span style={{ display: "flex", marginTop: "1%", marginLeft: "1%" }}>
        <h6>{props.name}</h6>
      </span>
    </div>
  );
}

export default Header;