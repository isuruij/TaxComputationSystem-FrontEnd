import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import update from "../../../assets/greenupdate.svg";
import greeneye from "../../../assets/greenViewEye.svg";
import "./DSubmissionDash.css";

function DSubmissionDash() {
  const [listOfSubmissions, setListOfSubmissions] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfSubmissions(response.data);
    });
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <h5>Anderson James</h5>
        <p>4 submissions</p>
        <Button variant="primary D-Update">
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
        <Button variant="primary D-Update">
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
}

export default DSubmissionDash;
