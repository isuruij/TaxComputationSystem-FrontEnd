import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function CreateFirstAdmin() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const [values, setvalues] = useState({
    userName: "",
    password: "",
    name: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await Axios.post(
        `${base_url}/api/SuperAdmin/createfirstadmin`,
        values
      );
      if (res.data.Status === "Success") {
        navigate("/SuperAdminDashboard");
      } else if (res.data.message == "user exist") {
        alert("Already added the First admin");
        setLoading(false);
      } else {
        alert("System Error!");
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
          backgroundColor: "#F3FFF5",
          width: "25vw",
          marginLeft: "35vw",
          marginTop: "10vh",
          boxShadow: "0px 2px 10px -2px rgba(0,0,0,0.75)",
        }}
      >
        <h4
          style={{
            marginBottom: "0vw",
            marginLeft: "3vw",
            color: "#008060",
            fontWeight: "bold",
          }}
        >
          Create Admin
        </h4>
        <br></br>
        <div className="form-group" style={{ marginLeft: "10%" }}>
          <label
            className="lables"
            style={{ fontWeight: "700", color: "#008060" }}
          >
            User Name
          </label>
          <div>
            <input
              required
              style={{
                width: "15vw",
                fontSize: "15px",
                height: "27px",
                outline: "none",
                // background: "#B3F9D7",
                // color: "#000000",
                // border: "1px solid #C4D1EB",
                // borderRadius: "10px",
                // boxShadow: "0px 3px 3px 1px #9D9D9D",
                // transition: ".3s ease",
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
          <label
            className="lables"
            style={{ fontWeight: "700", color: "#008060" }}
          >
            Password
          </label>
          <div>
            <input
              required
              style={{
                width: "15vw",
                fontSize: "15px",
                height: "27px",
                outline: "none",
                // background: "#B3F9D7",
                // color: "#000000",
                // border: "1px solid #C4D1EB",
                // borderRadius: "10px",
                // boxShadow: "0px 2px 3px 1px #9D9D9D",
                // transition: ".3s ease",
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
        </div>

        <div className="form-group" style={{ marginLeft: "10%" }}>
          <label
            className="lables"
            style={{ fontWeight: "700", color: "#008060" }}
          >
            Your Name
          </label>
          <div>
            <input
              required
              style={{
                width: "15vw",
                fontSize: "15px",
                height: "27px",
                outline: "none",
                // background: "#B3F9D7",
                // color: "#000000",
                // border: "1px solid #C4D1EB",
                // borderRadius: "10px",
                // boxShadow: "0px 3px 3px 1px #9D9D9D",
                // transition: ".3s ease",
              }}
              className="login-input details-input form-control"
              type="text"
              id="exampleInputEmail1"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, name: e.target.value });
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary adminLogin"
          style={{ borderRadius: "10px", marginTop: "3%", marginLeft: "34%" }}
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
            "Create"
          )}
        </button>
      </form>
    </div>
  );
}

export default CreateFirstAdmin;
