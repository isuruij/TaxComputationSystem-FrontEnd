import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import './TaxPayments.css';
import axios from "axios";
import { useEffect } from "react";





export default function TaxPayment() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  
  const cookieValue = Cookies.get("token");
  const userId = jwtDecode(cookieValue).id;

  const [taxData, setTaxData] = useState([]);
  const [taxCredit, setTaxCredit] = useState([]);

  useEffect(() => {
    axios.get(`${base_url}/api/taxpayer/getCalculatedTax/${userId}`).then((response) => {
      console.log(response.data.Data);
      setTaxData(response.data.Data);
      setTaxCredit(response.data.Data2);

    });
  }, []);


  
  // const [tasks, setTasks] = useState([
  //   { name: 'Payment-1', toPay: 12000, paid: '', document: '' },
  //   { name: 'Payment-2', toPay: 10000, paid: '', document: '' },
  //   { name: 'Payment-3', toPay: 20000, paid: '', document: '' },
  //   { name: 'Payment-4', toPay: 15000, paid: '', document: '' },
  //   { name: 'Payment-5', toPay: 18000, paid: '', document: '' },
  // ]);

  // const [completedTasks, setCompletedTasks] = useState([]);

  // const handleInputChange = (index, event) => {
  //   const { name, value } = event.target;
  //   const newTasks = [...tasks];
  //   newTasks[index][name] = value;
  //   setTasks(newTasks);
  // };

  // const handleUploadDocument = (index, event) => {
  //   const file = event.target.files[0];
  //   const newTasks = [...tasks];
  //   newTasks[index]['document'] = file;
  //   setTasks(newTasks);
  // };

  // const handleCompleteTask = (index) => {
  //   const completedTask = tasks[index];
  //   setCompletedTasks([...completedTasks, completedTask]);
  //   const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
  //   setTasks(updatedTasks);
  // };

  const buttonStyle = {
    textAlign: "Center",
    display: "block",
    marginBottom: "12px",
    width: "150px",
    marginLeft: "0%",
    boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
  };

  return (
    <div><div style={{
        borderRadius: "15px",
        padding: "20px 40px",
        backgroundColor: "#D3E9FE",
        width: "78vw",
        marginTop:"5px",
        marginBottom:'20px',
        boxShadow:"1px 5px 3px -3px rgba(0,0,0,0.44)",
        height:"100vh"}}> 

<div style={{display: "flex", justifyContent: "center" , alignItems: "center"}}><h6 style={{alignItems: "center"}}>Personal Income Taxes</h6></div>
<div className="dContainer3">
            <div className="ddiv3-1">
              <div className="div3-1-1">
                <label>
                  <h6>Income Tax</h6>
                </label>
              </div>
              <div className="div3-1-2">
              <label>
                  <h6>{taxData.incomeTax || 0 + taxData.incomeTax2 || 0}</h6>
                </label>
              </div>
            </div>

            <div className="ddiv3-2">
              <div className="div3-2-1">
                <label>
                  <h6>Tax on terminal Benifits</h6>
                </label>
              </div>
              <div className="div3-2-2">
              <label>
                  <h6>{taxData.TerminalTax || 0}</h6>
                </label>
              </div>
            </div>

            <div className="ddiv3-3">
              <div className="div3-3-1">
                <label>
                  <h6>Tax on WHT is Not Deducted</h6>
                </label>
              </div>
              <div className="div3-3-2">
              <label>
                  <h6>{taxData.WHTNotDeductTax || 0}</h6>
                </label>
              </div>
            </div>

            <div className="ddiv3-4">
              <div className="div3-4-1">
                <label>
                  <h6>Tax on Capital Gain</h6>
                </label>
              </div>
              <div className="div3-4-2">
              <label>
                  <h6>{taxData.CapitalTax || 0}</h6>
                </label>
              </div>
            </div>
            <div className="ddiv3-3" style={{padding: "10 0",backgroundColor: "white"}}>
              <div className="div3-3-1">
                <label>
                  <h6>Total Tax</h6>
                </label>
              </div>
              <div className="div3-3-2">
              <label>
                  <h6>{taxData.WHTNotDeductTax || 0 + taxData.CapitalTax || 0 + taxData.TerminalTax || 0 + taxData.incomeTax || 0 + taxData.incomeTax2 || 0}</h6>
                </label>
              </div>
            </div>
          

          <div style={{display: "flex", justifyContent: "center" , alignItems: "center", paddingTop: "30px"}}><h6 style={{alignItems: "center"}}>Tax Credits</h6></div>

            <div className="ddiv3-1">
              <div className="div3-1-1">
                <label>
                  <h6>Apit</h6>
                </label>
              </div>
              <div className="div3-1-2">
                <label>
                  <h6>{taxCredit[0] || 0 }</h6>
                </label>
              </div>
            </div>

            <div className="ddiv3-2">
              <div className="div3-2-1">
                <label>
                  <h6>whtOnInvestmentIncome</h6>
                </label>
              </div>
              <div className="div3-2-2">
              <label>
                  <h6>{taxCredit[1] || 0}</h6>
                </label>
              </div>
            </div>

            <div className="ddiv3-3">
              <div className="div3-3-1">
                <label>
                  <h6>whtOnServiceFeeReceived</h6>
                </label>
              </div>
              <div className="div3-3-2">
              <label>
                  <h6>{taxCredit[2] || 0}</h6>
                </label>
              </div>
            </div>

            <div className="ddiv3-4">
              <div className="div3-4-1">
                <label>
                  <h6>selfAssessmentPayment</h6>
                </label>
              </div>
              <div className="div3-4-2">
              <label>
                  <h6>{taxCredit[3] || 0}</h6>
                </label>
              </div>
            </div>
            <div className="ddiv3-3" style={{padding: "10 0",backgroundColor: "white"}}>
              <div className="div3-3-1">
                <label>
                  <h6>Total Tax Credit</h6>
                </label>
              </div>
              <div className="div3-3-2">
              <label>
                  <h6>{taxCredit[0]  || 0 + taxCredit[1]  || 0 + taxCredit[2]  || 0 + taxCredit[3]  || 0 }</h6>
                </label>
              </div>
            </div>
            </div>
          

            <div className="ddiv3-3" style={{backgroundColor: "white", borderRadius: "5%", marginTop: "50px"}}>
              <div className="div3-3-1">
                <label>
                  <h3>You Have To Pay</h3>
                </label>
              </div>
              <div className="div3-3-2">
                <label>
                    <h5>{taxData.WHTNotDeductTax || 0 + taxData.CapitalTax || 0 + taxData.TerminalTax || 0 + taxData.incomeTax || 0 + taxData.incomeTax2 || 0 - (taxCredit[0]  || 0 + taxCredit[1]  || 0 + taxCredit[2]  || 0 + taxCredit[3]  || 0 )}</h5>
                  </label>
              </div>
            </div>
          



        {/* <div className="App">
      <div className="none-completed-payments">
        <h2 style={{color:'#0085FF',textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0,0.3)",fontSize:'20px',marginTop:"20px",marginBottom:"20px"}}>None Completed Payments</h2>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th style={{color:'#0085FF',textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0,0.3)",fontSize:'15px',marginTop:"20px", width:"20%"}}>Name</th>
              <th style={{color:'#0085FF',textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0,0.3)",fontSize:'15px',marginTop:"20px", width:"20%"}}>To Pay</th>
              <th style={{color:'#0085FF',textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0,0.3)",fontSize:'15px',marginTop:"20px", width:"20%"}}>Paid</th>
              <th style={{color:'#0085FF',textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0,0.3)",fontSize:'15px',marginTop:"20px", width:"20%"}}>Document</th>
              <th style={{color:'#0085FF',textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0,0.3)",fontSize:'15px',marginTop:"20px", width:"20%"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td style={{ textAlign: 'center' }}>{task.name}</td>
                <td style={{ textAlign: 'center' }}>{task.toPay}</td>
                <td style={{ textAlign: 'center' }}>
                  <input style={{width:"80%",outline: "none",background:" #f3f9ff",border: "1px solid #C4D1EB",borderRadius: "7px",boxShadow: "0px 3px 3px 1px #9D9D9D"}}
                    type="text"
                    name="paid"
                    value={task.paid}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </td>
                <td style={{ textAlign: 'center' }}>
                  <input type="file" onChange={(event) => handleUploadDocument(index, event)} />
                </td>
                <td style={{ textAlign: 'center' }}>
                  <button type="button" className="btn btn-primary" style={buttonStyle} onClick={() => handleCompleteTask(index)}>Complete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="completed-payments">
        <h2 style={{color:'#0085FF',textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0,0.3)",fontSize:'20px',marginTop:"20px",marginBottom:"20px"}}>Completed Payments</h2>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th style={{color:'#0085FF',textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0,0.3)",fontSize:'15px',marginTop:"20px", width:"25%"}}>Name</th>
              <th style={{color:'#0085FF',textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0,0.3)",fontSize:'15px',marginTop:"20px", width:"25%"}}>To Pay</th>
              <th style={{color:'#0085FF',textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0,0.3)",fontSize:'15px',marginTop:"20px", width:"25%"}}>Paid</th>
              <th style={{color:'#0085FF',textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0,0.3)",fontSize:'15px',marginTop:"20px", width:"25%"}}>Document</th>
            </tr>
          </thead>
          <tbody>
            {completedTasks.map((task, index) => (
              <tr key={index}>
                <td style={{ textAlign: 'center' }}>{task.name}</td>
                <td style={{ textAlign: 'center' }}>{task.toPay}</td>
                <td style={{ textAlign: 'center' }}>{task.paid}</td>
                <td style={{ textAlign: 'center' }}>
                  <a href={URL.createObjectURL(task.document)} download>
                    Download Document
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div> */}
      </div></div>
  )
}
