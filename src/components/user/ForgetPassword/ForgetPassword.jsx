import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "../Login/Login.css";

function ForgetPassword() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const [values, setvalues] = useState({
    email: ""
  });

  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await Axios.post(`${base_url}/api/taxpayer/forgot-password`, values);
      if (res.data.Status == "Success") {
        alert("We have sent a link. Please check your email!");
      } else if(res.data.Status == "NotSuccess" && res.data.message=="Email not found"){
        alert("Email not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
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
          Forgot Password
            
        </h4>
        <div className="form-group" style={{ marginLeft: "10%" }}>
          <label className="lables"  style={{ marginLeft: "10%" }}>
           Enter your Email
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
              type="email"
              id="exampleInputEmail1"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, email: e.target.value });
              }}
            />
          </div>
        </div>



        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "3%", marginLeft: "30%" }}
        >
          Send Link
        </button>

      </form>
    </div>
  );
}

export default ForgetPassword;
