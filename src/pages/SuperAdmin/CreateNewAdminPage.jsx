import React from 'react'
import CreateNewAdmin from '../../components/Admins/SuperAdmin/CreateNewAdmin/CreateNewAdmin';
import AdminHeader from "../../components/Admins/SuperAdmin/Header/AdminHeader";
import Navigationbar from "../../components/Admins/SuperAdmin/NavigationBar/Navigationbar";

function CreateNewAdminPage() {
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
            <CreateNewAdmin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNewAdminPage