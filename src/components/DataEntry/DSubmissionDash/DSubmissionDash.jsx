import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import update from "../../../assets/greenupdate.svg";
import greeneye from "../../../assets/greenViewEye.svg";
import "./DSubmissionDash.css";

function DSubmissionDash() {
  // const [listOfSubmissions, setListOfSubmissions] = useState([]);

  let navigate = useNavigate();

  // useEffect(() => {
  //   axios.get("http://localhost:3001/posts").then((response) => {
  //     setListOfSubmissions(response.data);
  //   });
  // }, []);

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
      <div
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
          <h5 style={{ marginLeft: "5px" }}>Anderson James</h5>
          <p
            style={{
              backgroundColor: "#F86262",
              color: "white",
              borderRadius: "5px",
              marginLeft: "20px",
              padding: "5px",
              boxShadow: "1px 3px 2px 1px rgba(0, 0, 0, 0.44)",
            }}
          >
            4 submissions
          </p>
        </div>

        <div style={{ display: "flex", marginRight: "30px" }}>
          <Button
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

      <div
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
          <h5 style={{ marginLeft: "5px" }}>Thimira Deshaka</h5>
          <p
            style={{
              backgroundColor: "#F86262",
              color: "white",
              borderRadius: "5px",
              marginLeft: "20px",
              padding: "5px",
              boxShadow: "1px 3px 2px 1px rgba(0, 0, 0, 0.44)",
            }}
          >
            7 submissions
          </p>
        </div>

        <div style={{ display: "flex", marginRight: "30px" }}>
          <Button
            onClick={() => {
              navigate("/dataEntry/submission/uploadDoc");
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
              navigate("/dataEntry/viewTax");
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

      <div
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
          <h5 style={{ marginLeft: "5px" }}>Thimira Kalupahana</h5>
          <p
            style={{
              backgroundColor: "#F86262",
              color: "white",
              borderRadius: "5px",
              marginLeft: "20px",
              padding: "5px",
              boxShadow: "1px 3px 2px 1px rgba(0, 0, 0, 0.44)",
            }}
          >
            3 submissions
          </p>
        </div>

        <div style={{ display: "flex", marginRight: "30px", marginTop: "0px" }}>
          <Button
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
    </div>
  );
}

export default DSubmissionDash;
