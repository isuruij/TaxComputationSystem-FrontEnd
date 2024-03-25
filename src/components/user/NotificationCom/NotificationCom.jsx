import React, { useEffect,useState } from "react";
import Axios from "axios";
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

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
      console.log(response.data.data);
      console.log(notificationList)

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
        <div key={index} style={{fontWeight:"500",marginTop:"6px",borderRadius:"10px",paddingLeft:"3vw",padding:"10px",width:"79.5vw",backgroundColor:"#D3E9FE",boxShadow:"1px 5px 3px -3px rgba(0,0,0,0.44)"}}>
          {notification}
        </div>
      ))}
    </div>
  );
}

export default NotificationCom;