import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tick from "../../../assets/Tick.svg";
import Cross from "../../../assets/Cross.svg";
import "../PersonalDetails/PersonalDetails.css";

function UpdatePersonalDetails() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const cookieValue = Cookies.get("token");
  const userId = jwtDecode(cookieValue).id;

  useEffect(() => {
    getUserDetails();
  }, []);
  const [userData, setuserData] = useState({});
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
    id: userId,
  });

  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  //get details from backend
  const getUserDetails = async () => {
    try {
      const response = await Axios.get(
        `${base_url}/api/taxpayer/getuserbasicdetails/${userId}`
      );
      setuserData(response.data.Data);
      setvalues({
        ...values,
        email: response.data.Data.email,
        password: response.data.Data.password,
        name: response.data.Data.name,
        address: response.data.Data.address,
        tin: response.data.Data.tin,
        nameofemployer: response.data.Data.nameofemployer,
        mobileno: response.data.Data.mobileno,
        officeno: response.data.Data.officeno,
        homeno: response.data.Data.homeno,
        birthday: response.data.Data.birthday,
        id: response.data.Data.id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  //submiting PersonalDetails to backend
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await Axios.patch(
        "http://localhost:3000/api/taxpayer/updatebasicdetails",
        values
      );
      if (res.data.Status === "Success") {
        window.location.reload();
      } else {
        alert("Enter in updating");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //Popup for confirmation
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              <div class="form-group">
                <label className="lables" for="email">
                  Email
                </label>
                <div className="custom_input">
                  <input
                    class="details-input form-control"
                    type="email"
                    id="email"
                    defaultValue={userData.email}
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

              <div class="form-group">
                <label className="lables" for="name">
                  Name
                </label>
                <div className="custom_input">
                  <input
                    class="details-input form-control"
                    type="text"
                    id="name"
                    defaultValue={userData.name}
                    onChange={(e) => {
                      setvalues({ ...values, name: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div class="form-group">
                <label className="lables" for="address">
                  Permanent Address
                </label>
                <div class="custom_input">
                  <input
                    class="details-input form-control"
                    type="text"
                    id="address"
                    defaultValue={userData.address}
                    onChange={(e) => {
                      setvalues({ ...values, address: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div class="form-group">
                <label className="lables" for="tin">
                  Tax identification number (TIN)
                </label>
                <div class="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="tin"
                    defaultValue={userData.tin}
                    onChange={(e) => {
                      setvalues({ ...values, tin: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="lables" for="birthday">
                  Date of birth
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="date"
                    id="birthday"
                    defaultValue={userData.birthday}
                    onChange={(e) => {
                      setvalues({ ...values, birthday: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div class="form-group">
                <label className="lables" for="employername">
                  Name of the employer
                </label>
                <div class="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="nameofemployer"
                    defaultValue={userData.nameofemployer}
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
                <label className="lables" for="mobileno">
                  Mobile
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="mobileno"
                    defaultValue={userData.mobileno}
                    onChange={(e) => {
                      setvalues({ ...values, mobileno: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group contact">
                <label className="lables" for="officeno">
                  Office
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="officeno"
                    defaultValue={userData.officeno}
                    onChange={(e) => {
                      setvalues({ ...values, officeno: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group contact">
                <label className="lables" for="homeno">
                  Home
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="text"
                    id="homeno"
                    defaultValue={userData.homeno}
                    onChange={(e) => {
                      setvalues({ ...values, homeno: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="form-group ">
                <label className="lables" for="password">
                  Password
                </label>
                <div className="custom_input">
                  <input
                    class="details-input form-control"
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
                <label className="lables" for="password">
                  Re-enter Password
                </label>
                <div className="custom_input">
                  <input
                    class="details-input form-control"
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
            <>
              <Button variant="primary" onClick={handleShow}>
                Update
              </Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Are you Sure</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you want to update details ?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    No
                  </Button>
                  <Button variant="primary" onClick={handleSubmit}>
                    Yes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          </div>
        </div>
      </form>
      <br></br>
      <br></br>
    </div>
  );
}

export default UpdatePersonalDetails;
