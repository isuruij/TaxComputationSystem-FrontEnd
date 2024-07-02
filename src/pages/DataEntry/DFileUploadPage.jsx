import React from "react";
import DHeader from "../../components/DataEntry/Header/DHeader";
import DSideNavBar from "../../components/DataEntry/DSideNavBar/DSideNavBar";
import DDocUpload from "../../components/DataEntry/DDocUpload/DDocUpload";
import Axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DFileUploadPage() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const [auth, setauth] = useState("Started");
  const navigate = useNavigate();

  const handle = async () => {
    try {
      const res = await Axios.get(`${base_url}/api/dataentry/authtsecondAdmin`);
      if (res.data.Status === "Success") {
        setauth("Verified");
        console.log(auth);
      } else {
        setauth("Failed");
        navigate("/Admin/login");
      }
    } catch (error) {
      navigate("/Admin/login");
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
          <div>
            <DHeader />
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ width: "20vw" }}>
              <DSideNavBar />
            </div>
            <div style={{ marginLeft: "5px", marginTop: "5px", width: "80vw" }}>
              <DDocUpload />
            </div>
          </div>
        </div>
      )}
      {auth === "Failed" && <h1>Access Denied! Please Login Again </h1>}
    </div>
  );
}

export default DFileUploadPage;
