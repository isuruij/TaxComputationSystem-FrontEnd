import React from "react";

import ViewDetails from "../../components/Admins/SuperAdmin/ViewDetails/ViewDetails";

import AdminHeader from "../../components/Admins/SuperAdmin/Header/AdminHeader";
import Navigationbar from "../../components/Admins/SuperAdmin/NavigationBar/Navigationbar";
import Axios from "axios";
import { useState, useEffect } from "react";

export default function SuperAdminDashboard() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const [auth, setauth] = useState("Started");
  Axios.defaults.withCredentials = true;

  const handle = async () => {
    try {
      const res = await Axios.get(`${base_url}/api/taxpayer/auth`);
      if (res.data.Status === "Success") {
        setauth("Verified");
        console.log(auth);
      } else {
        setauth("Failed");
      }
    } catch (error) {
      console.log(error);
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
                <ViewDetails />
              </div>
            </div>
          </div>
        </div>
      )}
      {auth === "Failed" && <h1>Access Denied</h1>}
    </div>
  );
}
