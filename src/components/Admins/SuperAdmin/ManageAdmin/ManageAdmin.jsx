import React, { useEffect, useState } from "react";
import Axios from "axios";

function ManageAdmin() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  const [adminlist, setadminlist] = useState([]);
  
  const getadminlist = async () => {
    try {
      const response = await Axios.get(`${base_url}/api/superAdmin/getadminlist`);
      setadminlist(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAdmin = async (adminId, isSuperAdmin) => {
    try {
      await Axios.delete(`${base_url}/api/superAdmin/deleteadmin/${adminId}/${isSuperAdmin}`);
      // Update the state to remove the deleted admin
      setadminlist(adminlist.filter((admin) => admin.id !== adminId));
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };



  useEffect(() => {
    getadminlist();
  }, []);

  const buttonStyle = {
    backgroundColor: "#F86262",
    boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
    width: "8vw",
    fontSize: "1vw",
    border: "none",
  };

  return (
    <div
      style={{
        borderRadius: "15px",
        padding: "20px 40px",
        backgroundColor: "#F3FFF5",
        width: "77.5vw",
        marginTop: "5px",
        boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
      }}
    >
      <h4
        style={{
          marginBottom: "0vw",
          marginLeft: "3vw",
          color: "#008060",
          fontWeight: "bold",
        }}
      >
        Delete Admins
      </h4>
      <br />

      {adminlist.map((admin, index) => (
        <div
          key={index}
          style={{
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "#B3F9D7",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            <label>{admin.name}</label>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <label>{admin.issuperadmin ? "super admin" : "Admin"}</label>
          </div>
          <div style={{ flex: 1, textAlign: "center" }}>
            <button
              style={buttonStyle}
              type="button"
              className="btn btn-primary"
              onClick={() => deleteAdmin(admin.id, admin.issuperadmin)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ManageAdmin;
