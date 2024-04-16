import React from "react";

import ViewDetails from "../../components/Admins/SuperAdmin/ViewDetails/ViewDetails";

import AdminHeader from "../../components/Admins/SuperAdmin/Header/AdminHeader";
import Navigationbar from "../../components/Admins/SuperAdmin/NavigationBar/Navigationbar";

export default function SuperAdminDashboard() {
  return (
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
  );
}
