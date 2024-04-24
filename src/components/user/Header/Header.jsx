import React, { useEffect } from "react";
import Notification from "../../../assets/Notification.svg";
import Profile from "../../../assets/Profile.svg";
import { useState } from "react";
import "./Header.css";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

function Header() {

  const cookieValue = Cookies.get('token');
  const name = jwtDecode(cookieValue).name;

  const navigate = useNavigate();
  
  const [count, setcount] = useState(0);
  useEffect(() => {
    setcount(2);
    console.log(name)
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
        style={{cursor:"pointer", marginLeft: "71vw", paddingTop: "2vh", paddingRight: "1vw" }}
        src={Notification}
        alt="Notification"
        onClick={() => navigate("/notification")}
        
      />
      {count != 0 ? (
        <span
          style={{ marginLeft: "73vw", marginTop:"3vh"}}
          className="ncount position-absolute translate-middle badge rounded-pill bg-danger"
        > 
          {count}
        </span>
      ) : (
        <h6 className="headername">{name}</h6>
      )}
      <img src={Profile} alt="Profile" />
      <span style={{ display: "flex", marginTop: "2vh", marginLeft: "1vw" }}>
        <h6 className="headername">{name}</h6>
      </span>
    </div>
  );
}

export default Header;