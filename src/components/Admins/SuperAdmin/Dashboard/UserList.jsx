import Switch from "@mui/material/Switch";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";
import "./UserList.css";

const UserList = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);

  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  useEffect(() => {
    const fetchAllTaxpayers = async () => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getusers`);

        console.log(res.data);

        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTaxpayers();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const buttonStyle = {
    textAlign: "center",
    backgroundColor: "#049370",
    display: "block",
    marginBottom: "12px",
    width: "100%",
    marginLeft: "1%",
    boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
  };

  const handleDelete = async (id) => {
    try {
      const shouldDelete = window.confirm(
        "Are you sure you want to delete this user?"
      );
      if (shouldDelete) {
        await axios.delete(`${base_url}/api/SuperAdmin/deletetaxpayers/${id}`);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/view/details?id=${id}`);
  };

  const handleProfile = (id) => {
    console.log(`View profile for user with id ${id}`);
    navigate('/view/PersonalDetails');
  };

  const handleApprovalToggle = async (id, value) => {
    try {
      // Make an API call to update the user's approval status
      await axios.put(`${base_url}/api/SuperAdmin/updateUserApprovalStatus`, { id:id,isVerifiedUser: value });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const containerStyle = {
    textAlign: "left",
    display: "block",
    marginBottom: "12px",
    width: "95%",
    marginLeft: "4%",
    maxHeight: "630px",
    overflowY: "auto",
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder=" Search..."
          className="search-input"
          style={{
            border: "none",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <ListGroup variant="flush" style={containerStyle}>
          {filteredUsers.map((user) => (
            <ListGroup.Item
              key={user.id}
              style={{
                backgroundColor: "#B3F9D7",
                borderRadius: "10px",
                margin: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "55%" }}>
                  <button
                    className="custom-button-2"
                    onClick={() => handleProfile(user.id)}
                  >
                    <div>{user.name}</div>
                  </button>
                </div>
                <div style={{ width: "10%" }}>
                  <button
                    type="button"
                    className="btn btn-primary custom-button"
                    style={buttonStyle}
                    onClick={() => handleUpdate(user.id)}
                  >
                    Update
                  </button>
                </div>
                <div style={{ width: "10%" }}>
                  <button
                    type="button"
                    className="btn btn-primary custom-button-1"
                    style={buttonStyle}
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </div>
                <div style={{ width: "20%" }}>
                  <label style={{ color: "#008060" }}>
                    {user.isVerifiedUser ? "Approved" : "Approve"}:
                    <Switch
                    checked={user.isVerifiedUser}
                      onChange={(e) => {
                        console.log(e.target.checked);
                        handleApprovalToggle(user.id, e.target.checked);
                      }}
                      color="success"
                      style={{
                        color: "#008060",
                      }}
                    />
                  </label>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default UserList;




