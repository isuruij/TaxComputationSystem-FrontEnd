import React from "react";
import SettingSubMenue from "../../components/user/Settings/SettingSubMenue";
import Header from "../../components/user/Header/Header";
import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import FileUpload from "../../components/user/FileUpload/FileUpload";

function SettingsFileUpload() {
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
            >
              <SettingSubMenue />
            </div>
            <div style={{width:"78vw", marginTop: "19.2vh", marginLeft: "20vw" }}>
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsFileUpload;
