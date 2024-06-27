import React from "react";
import Header from "../../components/user/Header/Header";
import SettingSubMenueTax from "../../components/user/Settings/SettingSubMenueTax";

import TaxPayment from "../../components/user/TaxPayments/TaxPayment";

import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import Axios from "axios";
import { useState, useEffect } from "react";

export default function TaxPayments() {
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
              >
                <SettingSubMenueTax />
              </div>
              <div style={{ marginTop: "19.2vh", marginLeft: "20vw" }}>
                <TaxPayment />
              </div>
            </div>
          </div>
        </div>
      )}
      {auth === "Failed" && <h1>Access Denied! Please Login Again</h1>}
    </div>
  );
}
