import React, { useEffect } from "react";
import Notification from "../../../assets/Notification.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./Header.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Header() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  const cookieValue = Cookies.get('token');
  const userId = jwtDecode(cookieValue).id;
  const name = jwtDecode(cookieValue).name;


  const navigate = useNavigate();
  
  const [count, setcount] = useState(0);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const response = await Axios.get(`${base_url}/api/taxpayer/getuserbasicdetails/${userId}`);
        setUserData(response.data.Data);
      } catch (error) {
        console.error(error);
      }
    };
    getNotifications(); 
    getUserDetails();
  },[userId]);

  

  const getNotifications = async () => {
    try {
      const response = await Axios.get(
        `${base_url}/api/taxpayer/getNotifications/${userId}`
      );
      //setnotificationList(response.data.data);
      console.log(response.data.count);  
      setcount(response.data.count);
      //console.log(response.data.data[0]);  
    } catch (error) { 
      console.error(error);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "#D3E9FE",
        display: "flex",
        boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        width: "100vw",
      }}
    >
      <img
        style={{ marginLeft: "71vw", paddingTop: "2vh", paddingRight: "1vw",cursor:"pointer" }}
        src={Notification}
        alt="Notification"
        onClick={() => navigate("/notification")}
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
      <div>
            <img
              src={userData.filePath}
              alt="Profile"
              className="img-fluid rounded-circle"
              style={{ width: "40px", marginTop:"4px"}}
            />
          </div>
      <span style={{ display: "flex", marginTop: "2vh", marginLeft: "1vw" }}>
        <h6 className="headername">{name}</h6>
      </span>
    </div>
  );
}

export default Header;