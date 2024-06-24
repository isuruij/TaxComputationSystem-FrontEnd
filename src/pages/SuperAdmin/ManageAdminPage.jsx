import React from "react";
import ManageAdmin from "../../components/Admins/SuperAdmin/ManageAdmin/ManageAdmin";
import AdminHeader from "../../components/Admins/SuperAdmin/Header/AdminHeader";
import Navigationbar from "../../components/Admins/SuperAdmin/NavigationBar/Navigationbar";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ManageAdminPage() {
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
            <ManageAdmin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageAdminPage;
