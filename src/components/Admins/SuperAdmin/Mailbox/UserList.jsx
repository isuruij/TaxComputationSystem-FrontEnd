import axios from "axios";
import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./UserList.css";

const UserList = ({ setRecipientEmail }) => {
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

  const handleProfile = (id) => {
    const selectedUser = users.find((user) => user.id === id);
    if (selectedUser) {
      setRecipientEmail(selectedUser.email);
    }
  };

  const containerStyle = {
    textAlign: "left",
    display: "block",
    marginBottom: "12px",
    width: "130%",
    marginLeft: "4%",
    maxHeight: "350px",
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
                <div style={{ width: "100%" }}>
                  <button
                    className="custom-button-2"
                    onClick={() => handleProfile(user.id)}
                  >
                    <div style={{ fontSize: "small" }}>{user.name}</div>
                  </button>
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
