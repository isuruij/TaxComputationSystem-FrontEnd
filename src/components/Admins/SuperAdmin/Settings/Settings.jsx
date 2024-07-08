import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Axios from "axios";

function Settings() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  const [OldPassword, setOldPassword] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [warning, setWarning] = useState("");
  const [name, setName] = useState("");

  // Fetch the current admin name on component mount
  useEffect(() => {
    const fetchName = async () => {
      try {
        const res = await Axios.get(`${base_url}/api/SuperAdmin/getname`);
        if(res.data.status){
            setName(res.data.data)
        }
      } catch (error) {
        console.error("Error fetching name:", error);
      }
    };
    fetchName();
  }, []);

  // Handling password change
  const handlePasswordChange = async (event) => {
    event.preventDefault();
    if (OldPassword === "") {
      setWarning("Enter Current Password!");
      return;
    }
    if (Password === "") {
      setWarning("Enter password!");
      return;
    }
    if (confirmPassword === "") {
      setWarning("Confirm password!");
      return;
    }

    if (Password !== confirmPassword) {
      setWarning("Passwords do not match!");
      setPassword("");
      setConfirmPassword("");
      return;
    }
    try {
      const res = await Axios.patch(
        `${base_url}/api/SuperAdmin/updatePassword`,
        {
          OldPassword: OldPassword,
          Password: Password,
        }
      );
      if (res.data.status) {
        alert("Password Change Successful");
      } else if (res.data.message === "Admin not found") {
        alert("Incorrect Password");
      } else {
        alert("Error in Updating");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // Handling name change
  const handleNameChange = async (event) => {
    event.preventDefault();
    try {
      const res = await Axios.patch(`${base_url}/api/SuperAdmin/updatename`, {
        name: name,
      });
      if (res.data.status) {
        alert("Name Change Successful");
        setName(name); // Update the current name to the new name
      } else {
        alert("Error in Updating Name");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        paddingBottom: "100px",
        paddingTop: "50px",
        backgroundColor: "#F3FFF5",
        width: "77.5vw",
        boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        borderRadius: "15px",
      }}
    >
      <div style={{ marginLeft: "6vw" }}>
        <h4
          style={{
            marginBottom: "1%",
            color: "#049370",
            fontWeight: "bold",
          }}
        >
          Change Name
        </h4>

        <div className="form-group">
          <label className="labels">Your Name</label>
          <div className="custom_input">
            <input
              style={{ width: "20vw" }}
              className="details-input form-control"
              type="text"
              defaultValue={name}
              onChange={(e) => {setName(e.target.value)
                console.log(name)
              }}
            />
          </div>



          <Button
            onClick={handleNameChange}
            style={{
              marginTop: "2vh",
              borderRadius: "10px",
              marginLeft: "0",
              backgroundColor: "#049370",
              border:"none"
            }}
          >
            Change
          </Button>
        </div>

        <br></br>
        <br></br>

        <h4
          style={{
            marginBottom: "1%",
            color: "#049370",
            fontWeight: "bold",
          }}
        >
          Change Password
        </h4>

        <div className="form-group">
          <label className="labels">Current Password</label>
          <div className="custom_input">
            <input
              style={{ width: "20vw" }}
              className="details-input form-control"
              type="password"
              id="oldpassword"
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
        </div>

        <div
          className="passwordChange"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div className="form-group">
            <label className="labels">New Password</label>
            <div className="custom_input">
              <input
                style={{ width: "20vw" }}
                className="details-input form-control"
                type="password"
                id="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="confirmPassword" style={{ marginLeft: "10vw" }}>
            <label className="labels">Confirm Password</label>
            <div className="custom_input">
              <input
                style={{ width: "20vw" }}
                className="details-input form-control"
                type="password"
                id="password2"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        {warning && <p style={{ color: "red" }}>{warning}</p>}
        <Button
          onClick={handlePasswordChange}
          style={{
            marginTop: "2vh",
            borderRadius: "10px",
            marginLeft: "0vw",
            backgroundColor: "#049370",
            border:"none"
          }}
        >
          Change
        </Button>
      </div>
    </div>
  );
}

export default Settings;
