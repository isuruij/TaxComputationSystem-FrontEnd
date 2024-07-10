import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import defaultprofile from "../../../assets/defaultprofile.svg";

function DDashbox() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  const [listOfUsers, setListOfUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${base_url}/api/dataentry/getusernames`).then((response) => {
      const sortedUsers = response.data.Data.sort((a, b) => {
        if (a.isVerifiedUser === b.isVerifiedUser) {
          return a.name.localeCompare(b.name);
        }
        return a.isVerifiedUser ? -1 : 1;
      });
      setListOfUsers(sortedUsers);
    });
  }, []);

  const filteredUsers = listOfUsers.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      style={{
        marginTop: "5px",
        width: "100%",
        backgroundColor: "#F3FFF5",
        paddingTop: "20px",
        paddingBottom: "20px",
        boxShadow: "1px 3px 2px 1px rgba(0, 0, 0, 0.44)",
        borderRadius: "10px",
      }}
    >
      <link
        href="https://fonts.cdnfonts.com/css/poppins"
        rel="stylesheet"
      ></link>

      <input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          marginLeft: "5%",
          marginBottom: "20px",
          padding: "10px",
          width: "90%",
          borderRadius: "10px",
          border: "0px",
          fontFamily: "Poppins",
          boxShadow: "1px 3px 2px 1px rgba(0, 0, 0, 0.44)",
          outline: "none",
        }}
      />

      {filteredUsers.map((value, key) => {
        return (
          <div
            key={key}
            className="User"
            onClick={() => {
              navigate(`/dataEntry/submission/dashboard`);
            }}
            style={{
              display: "flex",
              padding: "5px",
              width: "95%",
              justifyContent: "space-between",
              margin: "20px 10px",
              backgroundColor: "#B3F9D7",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            {/* Show users name*/}
            <div
              className="name"
              style={{
                padding: "5px",
                color: "black",
                fontWeight: "500",
                paddingLeft: "30px",
                fontFamily: "Poppins",
              }}
            >
              <img
                src={
                  value.filePath === null || value.filePath === ""
                    ? defaultprofile
                    : value.filePath
                }
                alt="Profile"
                className="img-fluid rounded-circle"
                style={{
                  width: "30px",
                  marginTop: "0px",
                  marginRight: "10px",
                  height: "30px",
                }}
              />
              {value.name}
            </div>

            {/* Show verified or not verified div */}
            <div
              className="Verified"
              style={{
                padding: "5px",
                fontWeight: "600",
                paddingRight: "30px",
              }}
            >
              {value.isVerifiedUser ? (
                <div
                  style={{
                    color: "#049370",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                  }}
                >
                  Verified
                </div>
              ) : (
                <div
                  style={{
                    color: "#F86262",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                  }}
                >
                  Not Verified
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DDashbox;
