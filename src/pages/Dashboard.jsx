import React, { useEffect } from 'react';
import Header from '../components/user/Header/Header';
import Sidenavbar from "../components/user/Sidenavbar";
import { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// import './Dashboard.css';  // Import a CSS file for styling

function Dashboard() {
  const [auth, setauth] = useState(false);
  const [name, setname] = useState("");
  Axios.defaults.withCredentials = true;

  const handle = async () => {    
    try {
      const res = await Axios.get("http://localhost:3000/api/taxpayer/auth");
      if (res.data.Status === "Success") {
        setauth(true);
        setname(res.data.Data);
      } else {
        alert(`${res.data.Status}` + " Enter details correctly");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handle();
  }, []);

  return (
    <div className="dashboard-container"> {/* Add a container class for styling */}
      {auth ?
        <>
          <Header name={name} />
          <Sidenavbar />
        </>
        : <h1>please authenticate</h1>
      }
    </div>
  );
}

export default Dashboard;
