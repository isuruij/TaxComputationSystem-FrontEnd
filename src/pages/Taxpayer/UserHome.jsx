import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "../../components/user/Header/Header";

import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";

import Homepage from "../../components/user/UserHomepage/Homepage";

export default function UserHome() {
  return (
    <div>
      <div>
        <div style={{ position: "fixed" }}>
          <Header />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ marginTop: "8.5vh", position: "fixed" }}>
            <Sidenavbar />
          </div>
          <div style={{ marginLeft: "5px", marginTop: "5px" }}>
            <div
              style={{
                marginLeft: "20vw",
                marginTop: "7.7vh",
                position: "fixed",
              }}
            ></div>
            <div style={{ marginTop: "7.7vh", marginLeft: "20vw" }}>
              <Homepage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
