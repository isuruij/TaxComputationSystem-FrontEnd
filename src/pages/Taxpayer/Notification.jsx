import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import NotificationCom from "../../components/user/NotificationCom/NotificationCom";
import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import Header from "../../components/user/Header/Header";

function Notification() {
  const [auth, setAuth] = useState("Started");
  const navigate = useNavigate();

  const handle = async () => {
    const base_url = import.meta.env.VITE_APP_BACKEND_URL;
    try {
      const res = await Axios.get(`${base_url}/api/taxpayer/authtaxpayer`);
      if (res.data.Status === "Success") {
        setAuth("Verified");
      } else {
        setAuth("Failed");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      setAuth("Failed");
      navigate("/login");
    }
  };

  useEffect(() => {
    handle();
  }, []);

  return (
    <div>
      {auth === "Started" && <p>Loading...</p>}
      {auth === "Verified" && (
        <div>
          <Header />
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "5px" }}>
              <Sidenavbar />
            </div>
            <div style={{ width: "77vw", marginLeft: "5px", marginTop: "0px" }}>
              <NotificationCom />
            </div>
          </div>
        </div>
      )}
      {auth === "Failed" && <h1>Access Denied! Please Login Again</h1>}
    </div>
  );
}

export default Notification;
