import React, { useEffect } from "react";
import Notification from "../assets/Notification.svg";
import Profile from "../assets/Profile.svg";
import { useState } from "react";

function Header() {
  useEffect(() => {
    setcount(0);
  }, []);

  const [count, setcount] = useState(0);

  return (
    <div
      style={{
        boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        backgroundColor: "#D3E9FE",
        display: "flex",
      }}
    >
      <img
        style={{ marginLeft: "81%", paddingTop: "1%", paddingRight: "1%" }}
        src={Notification}
        alt="Notification"
      />
      {count != 0 && (
        <span
          style={{ marginLeft: "83%", marginTop: "1%" }}
          className="translate-middle badge rounded-pill bg-danger"
        >
          {count}
          {/* <span className="visually-hidden">unread messages</span> */}
        </span>
      )}
      <img src={Profile} alt="Profile" />
    </div>
  );
}

export default Header;
