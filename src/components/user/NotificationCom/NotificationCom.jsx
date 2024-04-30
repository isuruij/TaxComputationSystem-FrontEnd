import React, { useEffect, useState } from "react";
import Axios from "axios";
import Cookies from "js-cookie";
import "bootstrap-icons/font/bootstrap-icons.css";
import { jwtDecode } from "jwt-decode";

// `NotificationCom` is a functional component that fetches and displays notifications
function NotificationCom() {
  // Base URL for backend API from environment variable
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  // State to hold the list of notifications
  const [notificationList, setnotificationList] = useState([]);

  // Retrieve the token from cookies and decode it to get the user ID
  const cookieValue = Cookies.get("token");
  const userId = jwtDecode(cookieValue).id;

  // Function to fetch user notifications
  const getUserDetails = async () => {
    try {
      // Make a GET request to fetch notifications for the user
      const response = await Axios.get(
        `${base_url}/api/taxpayer/getNotifications/${userId}`
      );
      // Set the fetched notifications in state
      setnotificationList(response.data.data);
      //console.log(response.data.count);
      //console.log(notificationList);
    } catch (error) {
      // Log any errors that occur
      console.error(error);
    }
  };

  // Fetch notifications when the component mounts
  useEffect(() => {
    getUserDetails();
  }, []);

  

  return (
    <div>
      {/* Map over the notifications to render each notification and its associated button */}
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
          {/* Display the notification message */}
          {notification.message}
          {/* Render the `MyButton` component with the notification's id and isViewed state */}
          <MyButton id={notification.id} isViewed={notification.isViewed} />
        </div>
      ))}
    </div>
  );
}

export default NotificationCom;