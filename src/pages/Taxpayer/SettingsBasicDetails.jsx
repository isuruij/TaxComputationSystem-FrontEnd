import React from "react";
import SettingSubMenue from "../../components/user/Settings/SettingSubMenue";
import Header from "../../components/user/Header/Header";
import Sidenavbar from "../../components/user/Sidenavbar/Sidenavbar";
import UpdatePersonalDetails from "../../components/user/PersonalDetails/UpdatePersonalDetails";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SettingsBasicDetails() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const [auth, setauth] = useState("Started");
  const navigate = useNavigate();

  const handle = async () => {
    try {
      const res = await Axios.get(`${base_url}/api/taxpayer/authtaxpayer`);
      if (res.data.Status === "Success") {
        setauth("Verified");
        console.log(auth);
      } else {
        setauth("Failed");
        navigate("/login");
      }
    } catch (error) {
      navigate("/login");
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
              <div
                className="UserPageContent"
                style={{ marginTop: "19.2vh", marginLeft: "20vw" }}
              >
                <UpdatePersonalDetails />
              </div>
            </div>
          </div>
        </div>
      )}
      {auth === "Failed" && <h1>Access Denied! Please Login Again</h1>}
    </div>
  );
}

export default SettingsBasicDetails;
