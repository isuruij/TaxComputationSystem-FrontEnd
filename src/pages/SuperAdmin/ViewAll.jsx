import React from "react";

import ViewAll from "../../components/Admins/SuperAdmin/ViewAll/ViewAll";

import AdminHeader from "../../components/Admins/SuperAdmin/Header/AdminHeader";
import Navigationbar from "../../components/Admins/SuperAdmin/NavigationBar/Navigationbar";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function SuperAdminDashboard() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const [auth, setauth] = useState("Started");
  const navigate = useNavigate();
 

  const handle = async () => {
    try {
      const res = await Axios.get(`${base_url}/api/SuperAdmin/authtsuperAdmin`);
      if (res.data.Status === "Success") {
        setauth("Verified");
        console.log(auth);
      } else {
        navigate("/Admin/login");
      }
    } catch (error) {
      navigate("/Admin/login");
    }
  };

  useEffect(() => {
    handle();
  }, []);
  return (
    <div>
      {auth === "Started" && <p></p>}
      {auth === "Verified" && (
        <div>
          <AdminHeader />
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: "5px" }}>
              <Navigationbar />
            </div>
            <div
              style={{
                width: "65vw",
                marginLeft: "5px",
                marginTop: "5px",
                display: "block",
              }}
            >
              <div>
                <ViewAll />
              </div>
            </div>
          </div>
        </div>
      )}
      {auth === "Failed" && <h1>Access Denied! Please Login Again</h1>}
    </div>
  );
}
