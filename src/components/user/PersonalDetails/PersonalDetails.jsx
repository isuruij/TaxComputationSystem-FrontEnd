import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Tick from "../../../assets/Tick.svg";
import Cross from "../../../assets/Cross.svg";
import "../PersonalDetails/PersonalDetails.css";

function PersonalDetails() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  useEffect(() => {
    getUserDetails();
  }, []);

  const [values, setvalues] = useState({
    email: "",
    password: "",
    name: "",
    address: "",
    tin: "",
    nameofemployer: "",
    mobileno: "",
    officeno: "",
    homeno: "",
    birthday: "",
  });

  const [userData, setuserData] = useState({});

  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const cookieValue = Cookies.get("token");
  const userId = jwtDecode(cookieValue).id;

  const getUserDetails = async () => {
    try {
      const response = await Axios.get(
        `${base_url}/api/taxpayer/getuserbasicdetails/${userId}`
      );
      setuserData(response.data.Data);
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };

  //submiting PersonalDetails to backend
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await Axios.post(
        "http://localhost:3000/api/taxpayer/register",
        values
      );
      if (res.data.Status === "Success") {
        navigate("/dashboard");
      } else {
        alert(`${res.data.Status}` + " Enter details correctly");
      }
      console.log(res);
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
          backgroundColor: "#D3E9FE",
          width: "78vw",

          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        }}
      >
        <div className="updatePersonalDetails" style={{ marginLeft: "1vw" }}>
          <h2
            style={{
              marginBottom: "1%",
              marginLeft: "19vw",
              color: "#0085FF",
              fontWeight: "bold",
            }}
          >
            Update Personal Details
          </h2>
          <div
            className="twoparts"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div>
              <div className="form-group">
                <label className="lables" >
                  Email
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="email"
                    id="email"
                    value={userData.email}
                    onChange={(e) => {
                      setvalues({ ...values, email: e.target.value });
                    }}
                  />
                </div>

                {userData.isVerifiedEmail ? (
                  <div style={{ marginLeft: "5px", marginTop: "2px" }}>
                    <img
                      style={{ paddingRight: "2px" }}
                      src={Tick}
                      alt="tick"
                    />
                    <label style={{ fontSize: "14px", color: "green" }}>
                      verified
                    </label>
                  </div>
                ) : (
                  <div style={{ marginLeft: "5px", marginTop: "2px" }}>
                    <img
                      style={{ paddingRight: "2px" }}
                      src={Cross}
                      alt="tick"
                    />
                    <label style={{ fontSize: "14px", color: "green" }}>
                      Not verified
                    </label>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label className="lables" >
                  Name
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="name"
                    value={userData.name}
                    onChange={(e) => {
                      setvalues({ ...values, name: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="lables" >
                  Permanent Address
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="address"
                    value={userData.address}
                    onChange={(e) => {
                      setvalues({ ...values, address: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="lables" >
                  Tax identification number (TIN)
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="tin"
                    value={userData.tin}
                    onChange={(e) => {
                      setvalues({ ...values, tin: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="lables" >
                  Date of birth
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="date"
                    id="birthday"
                    value={userData.birthday}
                    onChange={(e) => {
                      setvalues({ ...values, birthday: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="lables" >
                  Name of the employer
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="nameofemployer"
                    value={userData.nameofemployer}
                    onChange={(e) => {
                      setvalues({ ...values, nameofemployer: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>

            <div
              className="contactSection"
              style={{ marginLeft: "10vw", marginTop: "5vh" }}
            >
              {/* <label className="lables">Contact Numbers</label> */}
              <div className="form-group contact">
                <label className="lables" >
                  Mobile
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="mobileno"
                    value={userData.mobileno}
                    onChange={(e) => {
                      setvalues({ ...values, mobileno: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group contact">
                <label className="lables" >
                  Office
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="officeno"
                    value={userData.officeno}
                    onChange={(e) => {
                      setvalues({ ...values, officeno: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group contact">
                <label className="lables" >
                  Home
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="homeno"
                    value={userData.homeno}
                    onChange={(e) => {
                      setvalues({ ...values, homeno: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group ">
                <label className="lables" >
                  Password
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="password"
                    id="password"
                    placeholder=""
                    onChange={(e) => {
                      setvalues({ ...values, password: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group ">
                <label className="lables" >
                  Re-enter Password
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="password"
                    id="password2"
                    placeholder=""
                    onChange={(e) => {
                      setvalues({ ...values, password: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="signup" style={{ display: "flex" }}>
            <button
              onClick={() => {}}
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "3%", marginLeft: "55vw" }}
            >
              Save & Continue
            </button>
          </div>
        </div>
      </form>
      <br></br>
      <br></br>
    </div>
  );
}

export default PersonalDetails;
