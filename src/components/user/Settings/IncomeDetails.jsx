import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Incomedetails() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const cookieValue = Cookies.get("token");
  const userId = jwtDecode(cookieValue).id;

  useEffect(() => {
    getIncomeDetails();
  }, []);

  const [values, setvalues] = useState({
    businessIncome: "",
    employmentIncome: "",
    investmentIncome: "",
    otherIncome: "",
    id: userId,
  });

  const [userData, setuserData] = useState({});

  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  const getIncomeDetails = async () => {
    try {
      const response = await Axios.get(
        `${base_url}/api/taxpayer/getuserincomedetails/${userId}`
      );
      setuserData(response.data.Data);
      setvalues({
        ...values,
        businessIncome: response.data.Data.businessIncome,
        employmentIncome: response.data.Data.employmentIncome,
        investmentIncome: response.data.Data.investmentIncome,
        otherIncome: response.data.Data.otherIncome,
      });
      console.log(userData);
    } catch (error) {
      console.error(error);
    }
  };

  //submiting income details to backend
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(values);
    try {
      const res = await Axios.patch(
        `${base_url}/api/taxpayer/updateincomedetails`,
        values
      );
      if (res.data.Status === "Success") {
        window.location.reload();
      } else {
        alert("Error in updating");
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  //popup for confirmation

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
          width: "78VW",
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        }}
      >
        <div style={{marginLeft:"5vw"}}>
          <h2
            style={{
              marginBottom: "1%",
              marginLeft: "35%",
              color: "#0085FF",
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
                style={{width:"30vw"}}
                className="details-input form-control"
                type="number"
                defaultValue={userData.employmentIncome}
                onChange={(e) => {
                  setvalues({ ...values, employmentIncome: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="form-group contact">
            <label className="lables">Investment Income (LKR)</label>
            <div className="custom_input">
              <input
              style={{width:"30vw"}}
                className="details-input form-control"
                type="number"
                defaultValue={userData.investmentIncome}
                onChange={(e) => {
                  setvalues({ ...values, investmentIncome: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="form-group contact">
            <label className="lables">Business income (LKR)</label>
            <div className="custom_input">
              <input
              style={{width:"30vw"}}
                className="details-input form-control"
                type="number"
                defaultValue={userData.businessIncome}
                onChange={(e) => {
                  setvalues({ ...values, businessIncome: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="form-group contact">
            <label className="lables">Other income (LKR)</label>
            <div className="custom_input">
              <input
              style={{width:"30vw"}}
                className="details-input form-control"
                type="number"
                defaultValue={userData.otherIncome}
                onChange={(e) => {
                  setvalues({ ...values, otherIncome: e.target.value });
                }}
              />
            </div>
          </div>
          <br></br>

          <Button
            style={{ borderRadius: "10px", marginLeft: "50vw" }}
            onClick={handleShow}
          >
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
          <br></br>
          <br></br>
        </div>
      </form>
    </div>
  );
}

export default Incomedetails;
