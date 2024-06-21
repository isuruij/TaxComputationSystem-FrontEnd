import React from "react";
import Header from "../../components/user/Header/Header";
import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import { useState, useEffect } from "react";
import Axios from "axios";
import Taxview from "../../components/user/TaxView/TaxView";

function Viewtax() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const [auth, setauth] = useState("Started");
 

  const handle = async () => {
    try {
      const res = await Axios.get(`${base_url}/api/taxpayer/authtaxpayer`);
      if (res.data.Status === "Success") {
        setauth("Verified");
        console.log(auth);
      } else {
        setauth("Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handle();
  }, []);
  return (
    <div>
      {auth === "Started" && <p></p>}
      {auth === "Verified" && (
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
              <div style={{ marginTop: "7.8vh", marginLeft: "20vw" }}>
                <Taxview />
              </div>
            </div>
          </div>
        </div>
      )}
      {auth === "Failed" && <h1>Access Denied! Please Login Again</h1>}
    </div>
  );
}

export default Viewtax;
