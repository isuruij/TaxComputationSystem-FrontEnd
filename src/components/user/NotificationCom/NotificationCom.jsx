import React, { useEffect, useState } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import "bootstrap-icons/font/bootstrap-icons.css";
import { jwtDecode } from "jwt-decode";

function MyButton({ id, isViewed }) {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  const [buttonText, setButtonText] = useState("view");

  const handleClick = async () => {

    try {
      const response = await Axios.patch(
        `${base_url}/api/taxpayer/updateNotificationStatus`,
        { id: id }
      );
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      style={{ marginLeft: "10vw" }}
      className="btn btn-primary"
      onClick={handleClick}
    >
      {isViewed?"viewed":"view"}
    </button>
  );
}

function NotificationCom() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  const [notificationList, setnotificationList] = useState([]);

  const cookieValue = Cookies.get("token");
  const userId = jwtDecode(cookieValue).id;

  const getUserDetails = async () => {
    try {
      const response = await Axios.get(
        `${base_url}/api/taxpayer/getNotifications/${userId}`
      );
      setnotificationList(response.data.data);
      //console.log(response.data.count);
      //console.log(notificationList);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  

  return (
    <div>
      {notificationList.map((notification, index) => (
        <div
          key={index}
          style={{
            fontWeight: notification.isViewed ? "100" : "500",
            marginTop: "6px",
            borderRadius: "10px",
            paddingLeft: "3vw",
            padding: "10px",
            backgroundColor: "#D3E9FE",
            boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
          }}
        >
          {notification.message}
          <MyButton id={notification.id} isViewed={notification.isViewed} />
        </div>
      ))}
    </div>
  );
}

export default NotificationCom;