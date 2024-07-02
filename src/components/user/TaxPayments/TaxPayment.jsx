import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import './TaxPayments.css'
import Cookies from "js-cookie";
import Axios from "axios";
import { jwtDecode } from "jwt-decode";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Button } from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";




export default function TaxPayment() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const cookieValue = Cookies.get("token");
  const userId = jwtDecode(cookieValue).id;

  const [amountInputs, setAmountInputs] = useState(""); 
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryText, setSelectedCategoryText] = useState("");
  const [taxPayments, setTaxPayments] = useState([]);


  //Popup for confirmation
  const [show, setShow] = useState(false); //for modal
  const [msg, setMsg] = useState("");

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  }

    // Handler for updating amount input value
    const handleAmountInputChange = (event, index) => {
      const { value } = event.target;
      // Regex to match only numbers
      const regex = /^\d*\.?\d*$/;
  
      // If value matches regex or empty, update input value
      if (value === "" || regex.test(value)) {
        const newAmountInputs = [...amountInputs];
        newAmountInputs[index] = value;
        setAmountInputs(newAmountInputs);
      // }else{
      //   setMsg("You can Only Enter numbers.");
      //   setShow(true);
      }
    };

    // Handler for dropdown selection change
    const handleCategoryChange = (event) => {
      const selectedValue = event.target.value;
    const selectedText = event.target.options[event.target.selectedIndex].text;
    setSelectedCategory(selectedValue);
    setSelectedCategoryText(selectedText);
  };

   // Handler for resetting inputs
   const handleDiscard = () => {
    setSelectedCategory("");
    setSelectedCategoryText("");
    setAmountInputs(Array(1).fill(""));
  };
  
   // Initial state with the list of items as objects
   const [listOfItems, setListOfItems] = useState([
    { note: "Tax on Income", amount: 0.0 },
    { note: "Tax on Terminal benifits", amount: 0.0 },
    { note: "Tax on Capital Value Gain", amount: 0.0 },
    { note: "Tax on WHT Which is not Deducted", amount: 0.0 }
  ]);

  //Get taxes
  useEffect(() => {
    Axios.get(`${base_url}/api/taxpayer/getCalculatedTax/${userId}`).then(
      (response) => {
        const taxData = response.data.Data;
        // console.log(taxData);
        

        // Calculate the "Tax on Income"
        const taxOnIncome = taxData.incomeTax + taxData.incomeTax2;
        console.log(taxOnIncome, taxData.incomeTax, taxData.incomeTax2);
        // Update the listOfItems state with fetched data
        setListOfItems([
          { note: "Tax on Income", amount: taxOnIncome },
          { note: "Tax on Terminal benefits", amount: taxData.TerminalTax },
          { note: "Tax on Capital Value Gain", amount: taxData.CapitalTax },
          { note: "Tax on WHT Which is not Deducted", amount: taxData.WHTNotDeductTax },
        ]);
      }
      
    );
  }, []);

  //Get Paid tax payments 
  useEffect(() => {
    Axios.get(`${base_url}/api/taxpayer/getTaxPayments/${userId}`).then(
      (response) => {
        setTaxPayments(response.data.Data);
        console.log(response.data.Data);
      }
    );
  }, []);

 

  // Calculate the total amount
  const totalAmount = listOfItems.reduce((total, item) => total + item.amount, 0);
  const totalPayment = taxPayments.reduce((total, item) => total + item.Paid, 0) || 0;

  //Data input field styles
  const inputFieldStyles = {
    backgroundColor: "white",
    textAlign: "center",
    borderRadius: "10px",
    boxShadow: "2px 3px rgba(0, 0, 0, 0.25)",
    fontWeight: "lighter",
  };

  // Handler for submitting form
  const handleSubmit = () => {

    const isValidAmount = amountInputs[0] !== "" && !/^0+$/.test(amountInputs[0]);

    if (selectedCategoryText === "" || !isValidAmount || selectedCategoryText === "Select Category") {
      setMsg("Please select a category and enter a valid amount.");
      setShow(true);
      return;
    }

    // Submit the data
    const submittedData = {
      category: selectedCategoryText,
      amount: amountInputs[0],
    };

    console.log("Submitted data:", submittedData);

    // Send data to tables
    Axios.post(`${base_url}/api/taxpayer/paidtax/${userId}`, submittedData)
      .then(response => {
        console.log("Submission successful:", response.data);
        setMsg(response.data.Status);
        setShow(true);
        setTimeout(() => {
          setShow(false);
          window.location.reload();
        }, 3000);
      })
      .catch(error => {
        console.error("Error submitting data:", error);
      });

    // Reset the form after submission
    handleDiscard();
  };

   // Handler for deleting a record
   const handleDeleteClick = (index) => {
    const record = taxPayments[index];
    Axios.delete(`${base_url}/api/taxpayer/deletePaidTax/${record.paidTaxId}`)
      .then((response) => {
        console.log('Delete successful:', response.data);
        setTaxPayments((prevPayments) => prevPayments.filter((_, i) => i !== index));
        setMsg('Delete successful');
        setShow(true);
        setTimeout(() => {
          setShow(false);
          window.location.reload();
        }, 3000);
      })
      .catch((error) => {
        console.error('Error deleting data:', error);
      });
  };


  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShow(false)}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
      <div style={{
        borderRadius: "15px",
        padding: "20px 40px",
        backgroundColor: "#D3E9FE",
        width: "78vw",
        marginTop:"5px",
        marginBottom:'20px',
        boxShadow:"1px 5px 3px -3px rgba(0,0,0,0.44)",
        height:"120vh"}}> 
        <div className="App">
          <div>
            <h3>Taxes</h3>
            <ul>
              {listOfItems.map((item, index) => (
                <li key={index} className="tax-item">
                  <span>{item.note}:</span>
                  <span>{item.amount} LKR</span>
                </li>
              ))}
            </ul>
            <div style={{padding: "10px 20px", backgroundColor:"white", borderRadius:"10px", boxShadow:"2px 3px rgba(0, 0, 0, 0.25)"}}>
              <h3>Total Tax: {totalAmount} LKR</h3>
            </div>
          </div>

          {taxPayments.length > 0 && (<div style={{paddingTop:"30px"}}>
            <h3>Tax Payments</h3>
            <ul>
              {taxPayments.map((item, index) => (
                <li key={index} className="tax-item">
                  <span>{item.Description}:</span>
                  <span style={{paddingRight: "30px"}}>{item.Paid} LKR</span>
                  <span><FaTrash
                        onClick={() => handleDeleteClick(index)}
                        style={{ cursor: "pointer", color: "red" }}
                      />
                  </span>
                </li>
              ))}
            </ul>
            <div style={{padding: "10px 20px", backgroundColor:"white", borderRadius:"10px", boxShadow:"2px 3px rgba(0, 0, 0, 0.25)"}}>
              <h3>Total Tax Payments: {totalPayment} LKR</h3>
            </div> 
          </div>)}
          <div style={{ padding: "10px 20px", marginTop: "20px", backgroundColor:"#0085ff", borderRadius:"10px", boxShadow:"2px 3px rgba(0, 0, 0, 0.25)"}}>
              <h3 style={{color: "white"}}>Total Tax Liability: {totalAmount-totalPayment} LKR</h3>
            </div>

          <div className="Input-Rows" style={{paddingTop:"30px"}}>
                <Row>
                  <label><h4 style={{color:"#0085ff"}}>Add Paid taxes</h4></label>
                  <Col xs={6}>
                  <Form.Select aria-label="Default select example" style={{boxShadow:"2px 3px rgba(0, 0, 0, 0.25)"}} value={selectedCategory} onChange={handleCategoryChange} >
                    <option>Select Category</option>
                    <option value="1">APIT</option>
                    <option value="2">WHT on Investment Income</option>
                    <option value="3">WHT on Service Fee Received</option>
                    <option value="4">Self Assessment Payments</option>
                  </Form.Select>
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder="AMOUNT"
                      style={inputFieldStyles}
                      value={amountInputs[0]} // Set value from state
                      onChange={(e) => handleAmountInputChange(e, 0)} // Handle input change
                    />
                  </Col>
                </Row>
              </div>
              <div className="button-container">
                <Button
                  variant="success"
                  className="custom_back_button"
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
      </div>
    </div>
  )
}
