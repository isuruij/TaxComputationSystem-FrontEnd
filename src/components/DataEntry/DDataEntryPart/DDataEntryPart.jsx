import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./DDataEntryPart.css";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Modal from "react-bootstrap/Modal";

function DDataEntry() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  //variable
  let { id } = useParams();
  const [userDetails, setUserDetails] = useState([]);

  //Popup for confirmation
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  const handleClose = () => setShow(false);

  //Popup for confirmation2
  const [show2, setShow2] = useState(false);
  const [msg2, setMsg2] = useState("");

  const handleClose2 = () => setShow(false);

  //get user details
  useEffect(() => {
    axios
      .get(`${base_url}/api/dataentry/getUserDetails/${id}`)
      .then((response) => {
        console.log(response.data.Data);
        setUserDetails(response.data.Data);
      });
  }, []);

  //navigator
  const navigate = useNavigate();
  // State to store input values (note and amount)
  const [amountInputs, setAmountInputs] = useState(Array(14).fill("")); //For 9 months
  const [amount2Inputs, setAmount2Inputs] = useState(Array(14).fill("")); //for 3 months
  const [noteInputs, setNoteInputs] = useState(Array(14).fill(""));

  // Handler for updating amount input value for 9 months
  const handleAmountInputChange = (event, index) => {
    const { value } = event.target;
    // Regex to match only numbers
    const regex = /^\d*\.?\d*$/;

    // If value matches regex or empty, update input value
    if (value === "" || regex.test(value)) {
      const newAmountInputs = [...amountInputs];
      newAmountInputs[index] = value;
      setAmountInputs(newAmountInputs);
    }
  };

  // Handler for updating amount input value for 3 months
  const handleAmount2InputChange = (event, index) => {
    const { value } = event.target;
    // Regex to match only numbers
    const regex = /^\d*\.?\d*$/;

    // If value matches regex or empty, update input value
    if (value === "" || regex.test(value)) {
      const newAmountInputs = [...amount2Inputs];
      newAmountInputs[index] = value;
      setAmount2Inputs(newAmountInputs);
    }
  };

  // Handler for updating note input value
  const handleNoteInputChange = (event, index) => {
    const { value } = event.target;
    const newNoteInputs = [...noteInputs];
    newNoteInputs[index] = value;
    setNoteInputs(newNoteInputs);
  };

  //handle form submission
  const handleSubmit = () => {
    // Validate each row
    for (let i = 0; i < 11; i++) {
      if (i == 5 || i == 6) {
        continue;
      }
      if (
        noteInputs[i] != "" &&
        (amountInputs[i] === "" || amount2Inputs[i] === "")
      ) {
        setMsg2(
          "Please fill in the AMOUNT field for row " +
            (i + 1) +
            " before submitting."
        );
        setShow2(true);
        return;
      }
    } // Validate each row
    for (let i = 5; i < 14; i++) {
      if (i <= 10 || i >= 7) {
      }
      if (noteInputs[i] != "" && amountInputs[i] === "") {
        setMsg2(
          "Please fill in the AMOUNT field for row " +
            (i + 1) +
            " before submitting."
        );
        setShow2(true);
        return;
      }
    }

    //send data to endpoint
    // for (let i = 0; i < 14; i++) {
    axios
      .post(`${base_url}/api/dataentry/enterData`, {
        amount: amountInputs,
        amount2: amount2Inputs,
        note: noteInputs,
        UserId: id,
      })
      .then((response) => {
        console.log(response.data.Status);
        // alert(response.data.Status);
        setMsg(response.data.Status);
        setShow(true);
        // Delay navigation to allow the user to see the modal
        setTimeout(() => {
          navigate("/dataEntry/dashboard");
        }, 3000); // 3 seconds delay
        // navigate("/dataEntry/dashboard");
      })
      .catch((error) => {
        console.error(error);
        setMsg(error);
        setShow(true);
      });
  };

  //Handle discarding input values
  const handleDiscard = () => {
    setAmountInputs(Array(14).fill(""));
    setNoteInputs(Array(14).fill(""));
    setAmount2Inputs(Array(14).fill(""));
  };

  //Data input feilds names
  const listofItems1 = [
    "Employment Income",
    "Business Income",
    "Investment Income",
    "Rent Income",
    "Other Income",
  ];
  const listofItems2 = ["Expenditure ", "Qualifying Payments"];
  const listofItems3 = [
    "APIT",
    "WHT on Investment Income",
    "WHT on Service Fee Received",
    "Self Assessment Payments",
  ];
  const listofItems4 = [
    "Terminal Benefits",
    "Capital  Value & Gain",
    "WHT which is not deducted",
  ];

  //Data input field styles
  const inputFieldStyles = {
    backgroundColor: "#B3F9D7",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "2px 3px rgba(0, 0, 0, 0.25)",
    fontWeight: "lighter",
  };

  return (
    <div
      style={{
        marginTop: "5px",
        paddingLeft: "10px",
        paddingRight: "10px",
        width: "100%",
        backgroundColor: "#F3FFF5",
        paddingTop: "20px",
        paddingBottom: "20px",
        boxShadow: "1px 3px 2px 1px rgba(0, 0, 0, 0.44)",
        borderRadius: "10px",
      }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="success"
            onClick={() => navigate("/dataEntry/dashboard")}
          >
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg2}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShow2(false)}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
      {/*Poppins font family*/}
      <link
        href="https://fonts.googleapis.com/css?family=Poppins"
        rel="stylesheet"
      ></link>
      {/*This is tax payer information div*/}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            backgroundColor: "#049370",
            width: "150px",
            height: "150px",
            borderRadius: "75px",
            marginLeft: "10%",
          }}
        ></div>
        <div
          className="userInfo"
          style={{
            backgroundColor: "#049370",
            width: "60%",
            height: "150px",
            borderRadius: "30px",
            marginRight: "10%",
            color: "white",
            fontSize: "smaller",
          }}
        >
          <h5 style={{ marginTop: "15px" }}>MR. {userDetails.name}</h5>
          <h5>TIN NO: {userDetails.tin}</h5>
          <h5>INCOME TAX COMPUTATION REPORT</h5>
          <h5 style={{ marginBottom: "15px" }}>YEAR OF ASSESSMENT 2022/2023</h5>
        </div>
      </div>

      {/*This is data entry part*/}
      <div style={{ display: "flex" }}>
        {/*This is form*/}
        <Form className="DataEntry-Form">
          {/*This is Assessable Income field*/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <h5>Assessable Income</h5>
            </div>
            <div>
              <h5>For First 9 Months</h5>
            </div>
            <div>
              <h5>For Last 3 Months</h5>
            </div>
          </div>
          {listofItems1.map((value, key) => {
            return (
              <div key={key} className="Input-Rows">
                <Row>
                  <label>{value}</label>
                  <Col xs={4}>
                    <Form.Control
                      placeholder="NOTE"
                      style={inputFieldStyles}
                      value={noteInputs[key]} // Set value from state
                      onChange={(e) => handleNoteInputChange(e, key)} // Handle input change
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="AMOUNT"
                      style={inputFieldStyles}
                      value={amountInputs[key]} // Set value from state
                      onChange={(e) => handleAmountInputChange(e, key)} // Handle input change
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="AMOUNT"
                      style={inputFieldStyles}
                      value={amount2Inputs[key]} // Set value from state
                      onChange={(e) => handleAmount2InputChange(e, key)} // Handle input change
                    />
                  </Col>
                </Row>
              </div>
            );
          })}
          {/*This is Qualifying Payments and Relife field*/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <h5>Relifes</h5>
            </div>
            <div>
              <h5>For First 9 Months</h5>
            </div>
            <div>
              <h5>For Last 3 Months</h5>
            </div>
          </div>
          {listofItems2.map((value, key) => {
            return (
              <div key={key} className="Input-Rows">
                <Row>
                  <label>{value}</label>
                  <Col xs={4}>
                    <Form.Control
                      placeholder="NOTE"
                      style={inputFieldStyles}
                      value={noteInputs[key + 5]} // Set value from state
                      onChange={(e) => handleNoteInputChange(e, key + 5)} // Handle input change
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="AMOUNT"
                      style={inputFieldStyles}
                      value={amountInputs[key + 5]} // Set value from state
                      onChange={(e) => handleAmountInputChange(e, key + 5)} // Handle input change
                    />
                  </Col>
                  <Col>
                    <div
                      style={{
                        alignItems: "center",
                        paddingLeft: "28%",
                        paddingTop: "10px",
                        color: "red",
                      }}
                    >
                      {value === "Expenditure "
                        ? "*Not applicable For Last 3 Months"
                        : "*Enter Amount For Entire Year"}
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}

          {/*This is Tax Credit Field*/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <h5>Tax Credit</h5>
            </div>
            <div>
              <h5>For First 9 Months</h5>
            </div>
            <div>
              <h5>For Last 3 Months</h5>
            </div>
          </div>
          {listofItems3.map((value, key) => {
            return (
              <div key={key} className="Input-Rows">
                <Row>
                  <label>{value}</label>
                  <Col xs={4}>
                    <Form.Control
                      placeholder="NOTE"
                      style={inputFieldStyles}
                      value={noteInputs[key + 7]} // Set value from state
                      onChange={(e) => handleNoteInputChange(e, key + 7)} // Handle input change
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="AMOUNT"
                      style={inputFieldStyles}
                      value={amountInputs[key + 7]} // Set value from state
                      onChange={(e) => handleAmountInputChange(e, key + 7)} // Handle input change
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="AMOUNT"
                      style={inputFieldStyles}
                      value={amount2Inputs[key + 7]} // Set value from state
                      onChange={(e) => handleAmount2InputChange(e, key + 7)} // Handle input change
                    />
                  </Col>
                </Row>
              </div>
            );
          })}
          {/*This is Other information Field*/}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <h5>Other</h5>
            </div>
            <div>
              <h5>For Year</h5>
            </div>
            {/* <div>
              <h5>For Last 3 Months</h5>
            </div> */}
          </div>
          {listofItems4.map((value, key) => {
            return (
              <div key={key} className="Input-Rows">
                <Row>
                  <label>{value}</label>
                  <Col xs={6}>
                    <Form.Control
                      placeholder="NOTE"
                      style={inputFieldStyles}
                      value={noteInputs[key + 11]} // Set value from state
                      onChange={(e) => handleNoteInputChange(e, key + 11)} // Handle input change
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="AMOUNT"
                      style={inputFieldStyles}
                      value={amountInputs[key + 11]} // Set value from state
                      onChange={(e) => handleAmountInputChange(e, key + 11)} // Handle input change
                    />
                  </Col>
                </Row>
              </div>
            );
          })}
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <Button
                variant="success"
                className="custom_back_button"
                onClick={() => {
                  navigate(`/dataEntry/submission/uploadDoc/${id}`);
                }}
              >
                Back
              </Button>
            </div>
            <div>
              <Button
                variant="success"
                className="custom_back_button"
                style={{ marginRight: "20px" }}
                onClick={handleDiscard}
              >
                Discard
              </Button>
              <Button
                variant="success"
                className="custom_sub_button"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default DDataEntry;
