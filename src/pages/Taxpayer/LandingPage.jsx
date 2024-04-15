import React from "react";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          backgroundColor: "#D3E9FE",
          margin: "10vh 35vw 10vh 30vw",
          padding: "5vh 0vw 5vh 3vw",
          border:"1px solid black",
          borderRadius:"40px"
        }}
      >
        <h1 style={{ fontWeight: "600", color: "#0085FF", marginLeft: "8vw" }}>
          Welcome
        </h1>
        <br></br>
        <div style={{ display: "flex" }}>
          <button
            onClick={()=>{navigate("/login")}}
            className="btn btn-primary"
            style={{ borderRadius: "30px", marginTop: "", marginLeft: "6vw" }}
          >
            Taxpayer
          </button>
          <div className="vl" style={{marginLeft:"2vw",height:"30px",borderLeft:"2px solid black"}}></div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ padding:"0px 20px",borderRadius: "30px", marginTop: "", marginLeft: "2vw" }}
          >
            Admin
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
