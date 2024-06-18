import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function CreateNewAdmin() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const [values, setvalues] = useState({
    userName: "",
    password: "",
    name: "",
    adminType: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await Axios.post(
        `${base_url}/api/SuperAdmin/register`,
        values
      );
      if (res.data.Status === "Success") {
        alert("Addded Sucessfully");
        setLoading(false);
      } else if (res.data.message == "already registered user") {
        alert("User Name is already registered! Please Enter another one");
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
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          borderRadius: "15px",
          padding: "20px 40px",
          backgroundColor: "#F3FFF5",
          width: "77.5vw",
          marginTop: "5px",
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
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
              }}
              className="login-input details-input form-control"
              type="text"
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
              }}
              className="login-input details-input form-control"
              type="password"
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
              }}
              className="login-input details-input form-control"
              type="text"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, name: e.target.value });
              }}
            />
          </div>
        </div>
        <br></br>
        <label
          className="form-check-label lables"
          style={{ marginLeft: "10%", fontWeight: "700", color: "#008060" }}
        >
          Admin Type
        </label>
        <div className="form-check" style={{ marginLeft: "10%" }}>
          <input
            required
            type="radio"
            id="superadmin"
            name="adminType"
            value="superadmin"
            className="form-check-input"
            onChange={(e) =>
              setvalues({ ...values, adminType: e.target.value })
            }
          />
          <label
            className="form-check-label lables"
            style={{ fontWeight: "700", color: "#008060" }}
          >
            Super Admin
          </label>
        </div>

        <div className="form-check" style={{ marginLeft: "10%" }}>
          <input
            required
            type="radio"
            id="admin"
            name="adminType"
            value="admin"
            className="form-check-input"
            onChange={(e) =>
              setvalues({ ...values, adminType: e.target.value })
            }
          />
          <label
            className="form-check-label lables"
            style={{ fontWeight: "700", color: "#008060" }}
          >
            Admin
          </label>
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

export default CreateNewAdmin;
