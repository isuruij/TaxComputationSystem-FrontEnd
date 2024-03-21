import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useLocation } from "react-router-dom"; // Import useLocation
import "../Login/Login.css";

function ResetPassword() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  const [valid, setValid] = useState(false);

  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const params = new URLSearchParams(location.search);
  const id = params.get("id");
  const token = params.get("token");
  

  useEffect(() => {
    const handle = async () => {
      try {
        
        const response = await Axios.get(
          `${base_url}/api/taxpayer/reset-password/${id}/${token}`
        );
        
        if (response.data.Status == "Verified") {
          setValid(true);
          
        } else if (response.data.Status == "NotVerified") {
          setValid(false);
          
        }

      } catch (error) {
        console.log(error); 
      }
    };
    handle();
  }, []);

  const handleSubmit = async (event) => {
    
    event.preventDefault();
    try {
      const res = await Axios.post(
        `${base_url}/api/taxpayer/addnew-password/${id}/${token}`,
        {password}
      );
      if (res.data.Status == "Verified") {
        alert("Password change Sucessful!");
      } else if (
        res.data.Status == "NotVerified"
      ) {
        alert("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (<>

    {valid ? (    <div className="login">
      <form
        onSubmit={handleSubmit}
        style={{
          borderRadius: "15px",
          padding: "20px 40px",
          backgroundColor: "#D3E9FE",
          width: "25vw",
          marginLeft: "35vw",
          marginTop: "10vh",
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        }}
      >
        <h4
          style={{
            marginBottom: "3vh",
            marginLeft: "2vw",
            color: "#0085FF",
            fontWeight: "bold",
          }}
        >
          Reset Password
        </h4>
        <div className="form-group" style={{ marginLeft: "10%" }}>
          <label className="lables"  style={{ marginLeft: "10%" }}>
            Enter new password
          </label>
          <div>
            <input
              style={{
                width: "15vw",
                fontSize: "15px",
                height: "26px",
                outline: "none",
                background: "#f3f9ff",
                color: "#000000",
                border: "1px solid #C4D1EB",
                borderRadius: "10px",
                boxShadow: "0px 3px 3px 1px #9D9D9D",
                transition: ".3s ease",
              }}
              className="login-input"
              type="password"
              id="exampleInputEmail1"
              placeholder=""
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "3%", marginLeft: "20%" }}
        >
          Reset Password
        </button>
      </form>
    </div>) : <h3>Link is invalid</h3>}
    

  </>);
}

export default ResetPassword;
