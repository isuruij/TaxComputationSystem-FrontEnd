import React from "react";
import SettingSubMenue from "../../components/user/Settings/SettingSubMenue";
import Header from "../../components/user/Header/Header";
import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import FileUpload from "../../components/user/FileUpload/FileUpload";
import Axios from "axios";
import { useState, useEffect } from "react";

function SettingsFileUpload() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const [auth, setauth] = useState("Started");
  Axios.defaults.withCredentials = true;

  const handle = async () => {
    try {
      const res = await Axios.get(`${base_url}/api/taxpayer/auth`);
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
              <SettingSubMenue />
            </div>
            <div style={{width:"78vw", marginTop: "19.2vh", marginLeft: "20vw" }}>
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
            )}
            {auth === "Failed" && <h1>Access Denied</h1>}
    </div>
  );
}

export default SettingsFileUpload;
