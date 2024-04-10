import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function DDashbox() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  const [listOfUsers, setListOfUsers] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${base_url}/api/dataentry/getusernames`).then((response) => {
      console.log(response.data.Data);
      setListOfUsers(response.data.Data);
    });
  }, []);

  return (
    //This is mapping part show all the users to data entry operator andalso show is Verified by admin or not
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
              onClick={() => {
                navigate("/dataEntry/dashboard");
              }}
            >
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
              {value.isVerifiedUser && (
                <div
                  style={{
                    color: "#049370",
                    fontFamily: "Poppins",
                    fontWeight: "bold",
                  }}
                >
                  Verified
                </div>
              )}
              {!value.isVerifiedUser && (
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
