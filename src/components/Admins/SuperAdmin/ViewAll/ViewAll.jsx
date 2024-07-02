import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import Tick from "../../../../assets/Tick.svg";
import Cross from "../../../../assets/Cross.svg";
import "./ViewDetails.css";
import VerifyDocumentsView from "../Submissions/VerifyDocumentsView";

function ViewAll() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const userId = params.get("id");

  useEffect(() => {
    getUserDetails();
    getIncomeDetails();
  }, []);

  const [userData, setuserData] = useState({});
  const [incomeuserData, setincomeuserData] = useState({});

  const getUserDetails = async () => {
    try {
      const response = await Axios.get(
        `${base_url}/api/taxpayer/getuserbasicdetails/${userId}`
      );
      setuserData(response.data.Data);
    } catch (error) {
      console.error(error);
    }
  };

  const getIncomeDetails = async () => {
    try {
      const response = await Axios.get(
        `${base_url}/api/taxpayer/getuserincomedetails/${userId}`
      );
      setincomeuserData(response.data.Data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div
        style={{
          borderRadius: "15px",
          padding: "20px 40px",
          backgroundColor: "#F3FFF5",
          width: "78vw",
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        }}
      >
        <div className="updatePersonalDetails" style={{ marginLeft: "6vw" }}>
          <h2
            style={{
              marginBottom: "1%",
              marginLeft: "14vw",
              color: "#008060",
              fontWeight: "bold",
            }}
          >
            Personal Details
          </h2>
          <div
            className="twoparts"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <div>
              <div className="form-group">
                <label className="lables">Email</label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="email"
                    id="email"
                    defaultValue={userData.email}
                    readOnly
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
                <label className="lables">Name</label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="name"
                    defaultValue={userData.name}
                    readOnly
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="lables">Permanent Address</label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="address"
                    defaultValue={userData.address}
                    readOnly
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="lables">
                  Tax identification number (TIN)
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="tin"
                    defaultValue={userData.tin}
                    readOnly
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="lables">Date of birth</label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="date"
                    id="birthday"
                    defaultValue={userData.birthday}
                    readOnly
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="lables">Name of the employer</label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="nameofemployer"
                    defaultValue={userData.nameofemployer}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div
              className="contactSection"
              style={{ marginLeft: "10vw", marginTop: "5vh" }}
            >
              <label className="lables">Contact Numbers</label>
              <br></br>
              <br></br>
              <div className="form-group contact">
                <label className="lables">Mobile</label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="mobileno"
                    defaultValue={userData.mobileno}
                    readOnly
                  />
                </div>
              </div>

              <div className="form-group contact">
                <label className="lables">Office</label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="officeno"
                    defaultValue={userData.officeno}
                    readOnly
                  />
                </div>
              </div>

              <div className="form-group contact">
                <label className="lables">Home</label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="homeno"
                    defaultValue={userData.homeno}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          borderRadius: "15px",
          padding: "20px 40px",
          backgroundColor: "#F3FFF5",
          width: "78vw",
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
          marginTop: "-20px",
        }}
      >
        <div style={{ marginLeft: "5vw" }}>
          <h2
            style={{
              marginBottom: "1%",
              marginLeft: "25%",
              color: "#008060",
              fontWeight: "bold",
            }}
          >
            Income Details
          </h2>
          <label className="lables">Type of income</label>
          <br></br>
          <br></br>
          <div className="form-group contact">
            <label className="lables">Employement Income (LKR)</label>
            <div className="custom_input">
              <input
                style={{ width: "30vw" }}
                className="details-input form-control"
                type="number"
                defaultValue={incomeuserData.employmentIncome}
                readOnly
              />
            </div>
          </div>

          <div className="form-group contact">
            <label className="lables">Investment Income (LKR)</label>
            <div className="custom_input">
              <input
                style={{ width: "30vw" }}
                className="details-input form-control"
                type="number"
                defaultValue={incomeuserData.investmentIncome}
                readOnly
              />
            </div>
          </div>

          <div className="form-group contact">
            <label className="lables">Business income (LKR)</label>
            <div className="custom_input">
              <input
                style={{ width: "30vw" }}
                className="details-input form-control"
                type="number"
                defaultValue={incomeuserData.businessIncome}
                readOnly
              />
            </div>
          </div>

          <div className="form-group contact">
            <label className="lables">Other income (LKR)</label>
            <div className="custom_input">
              <input
                style={{ width: "30vw" }}
                className="details-input form-control"
                type="number"
                defaultValue={incomeuserData.otherIncome}
                readOnly
              />
            </div>
          </div>
          <div style={{marginTop:"50px",marginLeft:"-3vw"}}>
            <VerifyDocumentsView />
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
}

export default ViewAll;
