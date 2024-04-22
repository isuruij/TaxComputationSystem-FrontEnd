import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import "../Login/Login.css";

function ForgetPassword() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  const [loading, setLoading] = useState(false);
  const [values, setvalues] = useState({
    email: "",
  });

  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await Axios.post(
        `${base_url}/api/taxpayer/forgot-password`,
        values
      );
      if (res.data.Status == "Success") {
        alert("We have sent a link. Please check your email!");
        setLoading(false);
      } else if (
        res.data.Status == "NotSuccess" &&
        res.data.message == "Email not found"
      ) {
        alert("Email not found");
        setLoading(false);
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
          <label className="lables" style={{ marginLeft: "10%" }}>
            Enter your Email
          </label>
          <div>
            <input
              required
              style={{
                width: "15vw",
                height: "30px",
              }}
              className="login-input form-control"
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
          style={{ borderRadius: "10px", marginTop: "3%", marginLeft: "25%" }}
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner
                style={{ marginLeft: "11px", marginRight: "11px" }}
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </>
          ) : (
            "Send Link"
          )}
        </button>
      </form>
    </div>
  );
}

export default ForgetPassword;
