import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import "../Login/Login.css";

function Login() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const [values, setvalues] = useState({
    userName: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await Axios.post(`${base_url}/api/SuperAdmin/login`, values);
      if (res.data.Status === "Success" && res.data.Type ==="superAdmin") {
        navigate("/SuperAdminDashboard");
      } else if(res.data.Status === "Success" && res.data.Type ==="secondAdmin"){
        //navigate("/SuperAdminDashboard");
        alert("second admin");
      }else{
        setLoading(false);
        alert("Login Failed!");
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
          backgroundColor: "#F3FFF5",
          width: "25vw",
          marginLeft: "35vw",
          marginTop: "10vh",
          boxShadow: "0px 2px 10px -2px rgba(0,0,0,0.75)",
         
        }}
      >
        <h2
          style={{
            marginBottom: "0vw",
            marginLeft: "6vw",
            color: "#008060",
            fontWeight: "bold",
          }}
        >
          Log in
        </h2>
        <div className="form-group" style={{ marginLeft: "10%" }}>
          <label className="lables" style={{fontWeight:"700",color:"#008060"}}>User Name</label>
          <div>
            <input
              required
              style={{
                width: "15vw",
                fontSize: "15px",
                height: "27px",
              }}
              className="login-input details-input form-control"
              type="text"
              id="exampleInputEmail1"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, userName: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-group" style={{ marginLeft: "10%" }}>
          <label className="lables" style={{fontWeight:"700",color:"#008060"}}>Password</label>
          <div>
            <input
              required
                 style={{
                    width: "15vw",
                    fontSize: "15px",
                    height: "27px",
                    outline: "none",
                  }}
              className="login-input details-input form-control"
              type="password"
              id="exampleInputPassword1"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, password: e.target.value });
              }}
            />
          </div>
          <br></br>
        </div>

        <button
          type="submit"
          className="btn btn-primary adminLogin"
          style={{borderRadius:"10px",marginTop: "3%", marginLeft: "36%" }}
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
            "Login"
          )}
        </button>
        <p
          onClick={() => {
            navigate("../Create/FirstAdmin");
          }}
          style={{
            cursor: "pointer",
            marginLeft: "10%",
            marginTop: "5%",
            color: "#049370",
            fontSize: "13px",
          }}
        >
          No Account ? Create First Admin
        </p>
      </form>
    </div>
  );
}

export default Login;
