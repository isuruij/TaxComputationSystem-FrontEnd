import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import update from "../../../assets/greenupdate.svg";
import greeneye from "../../../assets/greenViewEye.svg";
import "./DSubmissionDash.css";

function DSubmissionDash() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  const [listOfSubmissions, setListOfSubmissions] = useState([]);

  let navigate = useNavigate();

  //get users from database
  useEffect(() => {
    axios
      .get(`${base_url}/api/dataentry/getusersubmission`)
      .then((response) => {
        console.log(response.data.Data);
        setListOfSubmissions(response.data.Data);
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#F3FFF5",
        alignItems: "center",
        boxShadow: "1px 3px 2px 1px rgba(0, 0, 0, 0.44)",
        paddingTop: "20px",
        paddingBottom: "20px",
        borderRadius: "10px",
      }}
    >
      {listOfSubmissions.map((value, key) => {
        return (
          <div
            key={value.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#B3F9D7",
              marginTop: "10px",
              paddingBottom: "10px",
              marginLeft: "10px",
              width: "97%",
              paddingTop: "10px",
              borderRadius: "10px",
            }}
          >
            <div style={{ display: "flex", marginLeft: "30px" }}>
              <h5 style={{ marginLeft: "5px", cursor: "default" }}>
                {value.name}
              </h5>
              <p
                style={{
                  backgroundColor: "#F86262",
                  color: "white",
                  borderRadius: "5px",
                  marginLeft: "20px",
                  padding: "5px",
                  boxShadow: "1px 3px 2px 1px rgba(0, 0, 0, 0.44)",
                  cursor: "default",
                }}
              >
                {value.numOfSubmissions} submissions
              </p>
            </div>

            <div style={{ display: "flex", marginRight: "30px" }}>
              <Button
                onClick={() => {
                  navigate(`/dataEntry/submission/uploadDoc/${value.id}`, {
                    state: { key },
                  });
                }}
                variant="primary D-Update"
                style={{
                  boxShadow: "1px 3px 2px 1px rgba(0, 0, 0, 0.44)",
                }}
              >
                <img
                  src={update}
                  style={{
                    alignItems: "left",
                    textAlign: "left",
                    width: "25px",
                    height: "auto",
                  }}
                  alt="Icon"
                />
                <span>Update</span>
              </Button>
              <Button
                onClick={() => {
                  navigate(`/dataEntry/viewTax/${value.id}`);
                }}
                variant="primary D-Update"
                style={{
                  boxShadow: "1px 3px 2px 1px rgba(0, 0, 0, 0.44)",
                }}
              >
                <img
                  src={greeneye}
                  style={{
                    alignItems: "left",
                    textAlign: "left",
                    width: "28px",
                    height: "auto",
                  }}
                  alt="Icon"
                />
                <span>View Files</span>
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default DSubmissionDash;
