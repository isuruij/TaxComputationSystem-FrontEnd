import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DDashbox() {
  const [listOfUsers, setListOfUsers] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/taxpayer/getusernames")
      .then((response) => {
        console.log(response.data);
        setListOfUsers(response.data);
      });
  }, []);

  return (
    <div
      style={{
        marginTop: "5px",
        width: "78vw",
        backgroundColor: "#F3FFF5",
        paddingTop: "20px",
        paddingBottom: "20px",
        boxShadow: "1px 5px 3px 1px rgba(0, 0, 0, 0.44)",
        borderRadius: "10px",
      }}
    >
      {listOfUsers.map((value, key) => {
        return (
          <div
            key={key}
            className="User"
            // onClick={() => {
            //   navigate(`/post/${value.id}`);
            // }}
            style={{
              display: "flex",
              padding: "5px",
              width: "95%",
              justifyContent: "space-between",
              margin: "20px 10px",
              backgroundColor: "#B3F9D7",
              borderRadius: "10px",
            }}
          >
            <div
              className="name"
              style={{
                padding: "5px",
                color: "black",
                fontWeight: "400",
                paddingLeft: "30px",
              }}
              onClick={() => {
                navigate("/dataEntry/dashboard");
              }}
            >
              {value.name}
            </div>
            <div
              className="Verified"
              style={{
                padding: "5px",
                fontWeight: "600",
                paddingRight: "30px",
              }}
            >
              {value.isVerifiedEmail && (
                <div style={{ color: "#049370" }}>Verified</div>
              )}
              {!value.isVerifiedEmail && (
                <div style={{ color: "#F86262" }}>Not Verified</div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DDashbox;
