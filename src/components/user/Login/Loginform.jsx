import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import "../Login/Login.css";


function Loginform() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const [values, setvalues] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await Axios.post(`${base_url}/api/taxpayer/login`, values);
      if (res.data.Status === "Success") {
        navigate("/UserHomePage");
      } else {
        setLoading(false);
        alert("Invalid credentials! Please enter correct details.");
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
        <h2
          style={{
            marginBottom: "0vw",
            marginLeft: "6vw",
            color: "#0085FF",
            fontWeight: "bold",
          }}
        >
          Log in
        </h2>
        <div className="form-group" style={{ marginLeft: "10%" }}>
          <label className="lables" >
            Email
          </label>
          <div>
            <input
              required
              style={{
                width: "15vw" ,
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

        <div className="form-group" style={{ marginLeft: "10%" }}>
          <label className="lables">
            Password
          </label>
          <div>
            <input
            required
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
              id="exampleInputPassword1"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, password: e.target.value });
              }}
            />
          </div>
          <p onClick={()=>{navigate('../forgotpassword')}} style={{ cursor:"pointer", color: "#049370", fontSize: "13px", marginTop: "5%" }}>
            Forget password
          </p>
        </div>

        <button
        type="submit"
        className="btn btn-primary"
        style={{ marginTop: "3%", marginLeft: "36%" }}
        disabled={loading}
      >
        {loading ? (
          <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            
          </>
        ) : (
          "Login"
        )}
      </button>
        <p onClick={()=>{navigate('../signup')}}
          style={{
            cursor:"pointer",
            marginLeft: "10%",
            marginTop: "5%",
            color: "#049370",
            fontSize: "13px",
          }}
        >
          Not a member ? Sign Up
        </p>
      </form>
    </div>
  );
}

export default Loginform;
