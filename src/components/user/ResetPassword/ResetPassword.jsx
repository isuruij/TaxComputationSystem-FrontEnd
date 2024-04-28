import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import "../Login/Login.css";

function ResetPassword() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  const [valid, setValid] = useState("Started");
  const [loading, setLoading] = useState(false);

  const [password, setpassword] = useState("");

  const navigate = useNavigate();
 

  //Getting the values of query parameters
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
          setValid("Verified");
        } else {
          setValid("NotVerified");
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
      setLoading(true);
      const res = await Axios.post(
        `${base_url}/api/taxpayer/addnew-password/${id}/${token}`,
        { password }
      );
      if (res.data.Status == "Verified") {
        alert("Password change Sucessful!");
        setLoading(false);
        navigate("/login");
      } else {
        alert("Error");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {valid === "Started" && <h1>Started the resetting process</h1>}
      {valid === "Verified" && (
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
              Reset Password
            </h4>
            <div className="form-group" style={{ marginLeft: "10%" }}>
              <label className="lables" style={{ marginLeft: "10%" }}>
                Enter new password
              </label>
              <div>
                <input
                  required
                  style={{
                    width: "15vw",
                    fontSize: "15px",
                    height: "26px",
                  }}
                  className="login-input form-control"
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
              style={{
                borderRadius: "10px",
                marginTop: "3%",
                marginLeft: "30%",
              }}
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
                "Continue"
              )}
            </button>
          </form>
        </div>
      )}
      {valid === "NotVerified" && <h1>Error in resetting</h1>}
    </>
  );
}

export default ResetPassword;
