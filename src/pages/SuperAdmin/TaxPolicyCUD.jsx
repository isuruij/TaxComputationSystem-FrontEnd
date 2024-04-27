import React from "react";

import TaxPolicy_cud from "../../components/Admins/SuperAdmin/TaxPolicy/TaxPolicy";

import AdminHeader from "../../components/Admins/SuperAdmin/Header/AdminHeader";
import Navigationbar from "../../components/Admins/SuperAdmin/NavigationBar/Navigationbar";

export default function TaxPolicyCUD() {
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
            <TaxPolicy_cud />
          </div>
        </div>
      </div>
    </div>
  );
}
