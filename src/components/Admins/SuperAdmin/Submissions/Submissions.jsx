import React from "react";
import "./SearchBar.css";
import SubmissionsList from "./SubmissionsList";

export default function Submissions() {
  return (
    <div>
      <div
        style={{
          borderRadius: "15px",
          padding: "20px 40px",
          backgroundColor: "#F3FFF5",
          width: "77vw",
          marginTop: "5px",
          marginBottom: "20px",
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
          height: "100vh",
        }}
      >
        <div>
          <SubmissionsList />
        </div>
      </div>
    </div>
  );
}
