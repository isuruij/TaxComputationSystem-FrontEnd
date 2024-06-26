

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import ProgressBar from "react-bootstrap/ProgressBar";
import "./Homepagestyle.css";
import profilepic from "./profilepic.jpg";

export default function Homepage() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  const cookieValue = Cookies.get("token");
  const id = jwtDecode(cookieValue).id 


  const [userData, setUserData] = useState({});
  axios.defaults.withCredentials = true;

 

  const [businessIncomeDetails, setBusinessIncomeDetails] = useState([]);
  const [employmentIncomeDetails, setEmploymentIncomeDetails] = useState([]);
  const [investmentIncomeDetails, setInvestmentIncomeDetails] = useState([]);
  const [otherIncomeDetails, setOtherIncomeDetails] = useState([]);
  const [capitalValueGain, setCapitalValueGain] = useState([]);
  const [reliefForExpenditure, setReliefForExpenditure] = useState([]);
  const [reliefForRentIncome, setReliefForRentIncome] = useState([]);
  const [selfAssessmentPayment, setSelfAssessmentPayment] = useState([]);
  const [terminalBenefits, setTerminalBenefits] = useState([]);
  const [qualifyingPayments, setQualifyingPayments] = useState([]);
  const [whtOnInvestmentIncome, setWhtOnInvestmentIncome] = useState([]);
  const [whtOnServiceFeeReceived, setWhtOnServiceFeeReceived] = useState([]);
  const [whtWhichIsNotDeducted, setWhtWhichIsNotDeducted] = useState([]);
  const [apit, setApit] = useState([]);

  useEffect(() => {

    const getUserDetails = async () => {
      try {
        const response = await axios.get(`${base_url}/api/taxpayer/getuserbasicdetails/${id}`);
        setUserData(response.data.Data);
      } catch (error) {
        console.error(error);
      }
    };
    
    const fetchBusinessIncomeDetails = async () => {
      try {
        const res = await axios.get(`${base_url}/api/taxpayer/getbusinessincome/${id}`);
        setBusinessIncomeDetails(res.data);
      } catch (error) {
        console.error('Error fetching business income details:', error);
      }
    };

    const fetchEmploymentIncomeDetails = async () => {
      try {
        const res = await axios.get(`${base_url}/api/taxpayer/getemploymentincome/${id}`);
        setEmploymentIncomeDetails(res.data);
      } catch (error) {
        console.error('Error fetching employment income details:', error);
      }
    };
    
    const fetchInvestmentIncomeDetails = async () => {
      try {
        const res = await axios.get(`${base_url}/api/taxpayer/getinvestmentincome/${id}`);
        setInvestmentIncomeDetails(res.data);
      } catch (error) {
        console.error('Error fetching investment income details:', error);
      }
    };
    
    const fetchOtherIncomeDetails = async () => {
      try {
        const res = await axios.get(`${base_url}/api/taxpayer/getotherincome/${id}`);
        setOtherIncomeDetails(res.data);
      } catch (error) {
        console.error('Error fetching other income details:', error);
      }
    };
    
    const fetchCapitalValueGain = async () => {
      try {
        const res = await axios.get(`${base_url}/api/taxpayer/getcapitalvaluegain/${id}`);
        setCapitalValueGain(res.data);
      } catch (error) {
        console.error('Error fetching capital value gain:', error);
      }
    };
    
    const fetchReliefForExpenditure = async () => {
      try {
        const res = await axios.get(`${base_url}/api/taxpayer/getreliefforexpenditure/${id}`);
        setReliefForExpenditure(res.data);
      } catch (error) {
        console.error('Error fetching relief for expenditure:', error);
      }
    };
    
    const fetchReliefForRentIncome = async () => {
      try {
        const res = await axios.get(`${base_url}/api/taxpayer/getreliefforrentincome/${id}`);
        setReliefForRentIncome(res.data);
      } catch (error) {
        console.error('Error fetching relief for rent income:', error);
      }
    };
    
    const fetchSelfAssessmentPayment = async () => {
      try {
        const res = await axios.get(`${base_url}/api/taxpayer/getselfassessmentpayment/${id}`);
        setSelfAssessmentPayment(res.data);
      } catch (error) {
        console.error('Error fetching self assessment payment:', error);
      }
    };
    
    const fetchTerminalBenefits = async () => {
      try {
        const res = await axios.get(`${base_url}/api/taxpayer/getterminalbenefits/${id}`);
        setTerminalBenefits(res.data);
      } catch (error) {
        console.error('Error fetching terminal benefits:', error);
      }
    };
    
    const fetchQualifyingPayments = async () => {
      try {
        const res = await axios.get(`${base_url}/api/taxpayer/getqualifyingpayments/${id}`);
        setQualifyingPayments(res.data);
      } catch (error) {
        console.error('Error fetching qualifying payments:', error);
      }
    };
    
    const fetchWhtOnInvestmentIncome = async () => {
      try {
        const res = await axios.get(`${base_url}/api/taxpayer/getwhtoninvestmentincome/${id}`);
        setWhtOnInvestmentIncome(res.data);
      } catch (error) {
        console.error('Error fetching WHT on investment income:', error);
      }
    };
    
    const fetchWhtOnServiceFeeReceived = async () => {
      try {
        const res = await axios.get(`${base_url}/api/taxpayer/getwhtonservicefeereceived/${id}`);
        setWhtOnServiceFeeReceived(res.data);
      } catch (error) {
        console.error('Error fetching WHT on service fee received:', error);
      }
    };
    
    const fetchWhtWhichIsNotDeducted = async () => {
      try {
        const res = await axios.get(`${base_url}/api/taxpayer/getwhtwhichisnotdeducted/${id}`);
        setWhtWhichIsNotDeducted(res.data);
      } catch (error) {
        console.error('Error fetching WHT which is not deducted:', error);
      }
    };
    
    const fetchApit = async () => {
      try {
        const res = await axios.get(`${base_url}/api/taxpayer/getapit/${id}`);
        setApit(res.data);
      } catch (error) {
        console.error('Error fetching APIT:', error);
      }
    };
    
    // Call the fetch functions
    fetchEmploymentIncomeDetails();
    fetchInvestmentIncomeDetails();
    fetchOtherIncomeDetails();
    fetchCapitalValueGain();
    fetchReliefForExpenditure();
    fetchReliefForRentIncome();
    fetchSelfAssessmentPayment();
    fetchTerminalBenefits();
    fetchQualifyingPayments();
    fetchWhtOnInvestmentIncome();
    fetchWhtOnServiceFeeReceived();
    fetchWhtWhichIsNotDeducted();
    fetchApit();
    fetchBusinessIncomeDetails();
    getUserDetails();
  }, [id]);





  // // Assuming progress bar value comes from data or logic
  // const now = userData.progress || 0; // Use data or default to 0

const calculateProgress = () => {
    // List of specific fields to consider in userData
    const fieldsToCount = ['name', 'address','email', 'tin', 'nameofemployer', 'mobileno', 'officeno', 'homeno', 'birthday', 'isVerifiedEmail', 'isVerifiedUser'];
    
    // Filter userData to include only the specified fields and count non-empty values
    const nonEmptyFields = fieldsToCount.reduce((acc, field) => acc + (userData[field] ? 1 : 0), 0);

    // Sum verified counts across all categories
    const verifiedCounts = [
        businessIncomeDetails,
        employmentIncomeDetails,
        investmentIncomeDetails,
        otherIncomeDetails,
        capitalValueGain,
        reliefForExpenditure,
        reliefForRentIncome,
        selfAssessmentPayment,
        terminalBenefits,
        qualifyingPayments,
        whtOnInvestmentIncome,
        whtOnServiceFeeReceived,
        whtWhichIsNotDeducted,
        apit
    ].reduce((acc, arr) => acc + arr.filter(item => item.isverified).length, 0);

    // Calculate total fields as the sum of specified userData fields and counts of other arrays
    const totalFields = fieldsToCount.length + 14 + verifiedCounts;
    const progress = ((nonEmptyFields + verifiedCounts) / totalFields) * 100;
    return Math.round(progress);
};


  const now = calculateProgress();

  const getProgressVariant = () => {
    if (now >= 71) {
      return "success"; // green
    } else if (now >= 36) {
      return "primary"; // blue
    } else {
      return "danger"; // red
    }
  };



  return (
    <div
      style={{
        borderRadius: "15px",
        padding: "20px 40px",
        backgroundColor: "#D3E9FE",
        width: "78vw",
        marginBottom: "20px",
        boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
      }}
    >
      <div className="container mt-5">
        <div className="row">
          <div>
            <img
              src={profilepic}
              alt="Profile"
              className="img-fluid rounded-circle"
              style={{ width: "200px"}}
            />
          </div>
          <h2 style={{paddingTop: "30px",color: "#0085FF",extShadow: "2px 2px 4px rgba(0, 0, 0,0.3)",}}>
            {userData.name}  
          </h2>
          <span><h5>{userData.isVerifiedUser && <Badge bg="success">Verified</Badge>}</h5></span> 
          <h4>TIN: {userData.tin}</h4>
          <div style={{ paddingTop: "10px" }}>
            <div style={{ paddingTop: "10px" }}>
              <ProgressBar now={now} label={`${now}%`}  variant={getProgressVariant()} style={{ boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} />
            </div>
            <p style={{ paddingTop: "30px" }}></p>
            <p>Birthday: {userData.birthday}</p>
            <p>Phone</p>
                <p style={{marginLeft:"15px"}}>Mobile: {userData.mobileno}</p>
                <p style={{marginLeft:"15px"}}>Office: {userData.officeno}</p>
                <p style={{marginLeft:"15px"}}>Home: {userData.homeno}</p>
            <p>Location: {userData.address}</p>
            <p>Email: {userData.email}</p>
            <p>Address: {userData.address}</p>
            <h3>Document Submission Summery</h3>
            <h5>Total Assessable Income</h5>

            <div className='businessIncomeDetails'>
              {businessIncomeDetails ? (
                <div className='title-1-submitted'>
                  <ListGroup variant="flush" style={{ textAlign:"left", backgroundColor: "transparent", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%"}}>
                    {businessIncomeDetails.map((income) => (
                      <ListGroup.Item key={income.incomeId} className='title-1-submitted-list' style={{ backgroundColor: 'transparent', borderRadius: '10px', margin: '5px' }}>
                        {(income.filePath === null||income.filePath === "")? (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div>
                                <div>Business Income
                                  <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                </div>
                            </div>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                                <div>Business Income
                                  <Badge className='badge-1' bg="success">Submitted </Badge>
                                  {income.isverified ? (<Badge className='badge-2' bg="primary">verified</Badge>):(<Badge className='badge-2' bg="danger"> Not verified</Badge>)}
                                </div> 
                            </div>
                          </div>
                        )}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              ) : (
                <p>Loading business income details...</p>
              )}
            </div>

            <div className='employmentIncomeDetails'>
              {employmentIncomeDetails ? (
                <div className='title-1-submitted'>
                  <ListGroup variant="flush" style={{ textAlign:"left", backgroundColor: "transparent", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%"}}>
                    {employmentIncomeDetails.map((income) => (
                      <ListGroup.Item key={income.incomeId} className='title-1-submitted-list' style={{ backgroundColor: 'transparent', borderRadius: '10px', margin: '5px' }}>
                        {(income.filePath === null||income.filePath === "")? (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div>
                                <div>Employement Income
                                  <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                </div>
                            </div>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                                <div>Employement Income
                                  <Badge className='badge-1' bg="success">Submitted </Badge>
                                  {income.isverified ? (<Badge className='badge-2' bg="primary">verified</Badge>):(<Badge className='badge-2' bg="danger"> Not verified</Badge>)}
                                </div> 
                            </div>
                          </div>
                        )}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              ) : (
                <p>Loading business income details...</p>
              )}
            </div>

            <div className='investmentIncomeDetails'>
              {investmentIncomeDetails ? (
                <div className='title-1-submitted'>
                  <ListGroup variant="flush" style={{ textAlign:"left", backgroundColor: "transparent", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%"}}>
                    {investmentIncomeDetails.map((income) => (
                      <ListGroup.Item key={income.incomeId} className='title-1-submitted-list' style={{ backgroundColor: 'transparent', borderRadius: '10px', margin: '5px' }}>
                        {(income.filePath === null||income.filePath === "")? (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div>
                                <div>Investment Income
                                  <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                </div>
                            </div>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                                <div>Investment Income
                                  <Badge className='badge-1' bg="success">Submitted </Badge>
                                  {income.isverified ? (<Badge className='badge-2' bg="primary">verified</Badge>):(<Badge className='badge-2' bg="danger"> Not verified</Badge>)}
                                </div> 
                            </div>
                          </div>
                        )}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              ) : (
                <p>Loading business income details...</p>
              )}
            </div>



            <div className='reliefForRentIncome'>
              {reliefForRentIncome ? (
                <div className='title-1-submitted'>
                  <ListGroup variant="flush" style={{ textAlign:"left", backgroundColor: "transparent", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%"}}>
                    {reliefForRentIncome.map((income) => (
                      <ListGroup.Item key={income.reliefid} className='title-1-submitted-list' style={{ backgroundColor: 'transparent', borderRadius: '10px', margin: '5px' }}>
                        {(income.filePath === null||income.filePath === "")? (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div>
                                <div>Rent Income
                                  <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                </div>
                            </div>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                                <div>Rent Income
                                  <Badge className='badge-1' bg="success">Submitted </Badge>
                                  {income.isverified ? (<Badge className='badge-2' bg="primary">verified</Badge>):(<Badge className='badge-2' bg="danger"> Not verified</Badge>)}
                                </div> 
                            </div>
                          </div>
                        )}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              ) : (
                <p>Loading business income details...</p>
              )}
            </div>
            <div className='otherIncomeDetails'>
              {otherIncomeDetails ? (
                <div className='title-1-submitted'>
                  <ListGroup variant="flush" style={{ textAlign:"left", backgroundColor: "transparent", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%"}}>
                    {otherIncomeDetails.map((income) => (
                      <ListGroup.Item key={income.incomeId} className='title-1-submitted-list' style={{ backgroundColor: 'transparent', borderRadius: '10px', margin: '5px' }}>
                        {(income.filePath === null||income.filePath === "")? (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div>
                                <div>Other Income
                                  <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                </div>
                            </div>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                                <div>Other Income
                                  <Badge className='badge-1' bg="success">Submitted </Badge>
                                  {income.isverified ? (<Badge className='badge-2' bg="primary">verified</Badge>):(<Badge className='badge-2' bg="danger"> Not verified</Badge>)}
                                </div> 
                            </div>
                          </div>
                        )}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              ) : (
                <p>Loading business income details...</p>
              )}
            </div>

            <h5>Qualifying Payments & Reliefs</h5>

                <div className='reliefForExpenditure '>
                {reliefForExpenditure ? (
                  <div className='title-1-submitted'>
                    <ListGroup variant="flush" style={{ textAlign:"left", backgroundColor: "transparent", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%"}}>
                      {reliefForExpenditure .map((relief) => (
                        <ListGroup.Item key={relief.reliefId} className='title-1-submitted-list' style={{ backgroundColor: 'transparent', borderRadius: '10px', margin: '5px' }}>
                          {(!relief.filePath) ? (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div>
                                  <div>Relief For Expenditure
                                    <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                  </div>
                              </div>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div style={{ width: "55%" }}>
                                  <div>Relief For Expenditure
                                    <Badge className='badge-1' bg="success">Submitted</Badge>
                                    {relief.isverified ? (<Badge className='badge-2' bg="primary">verified</Badge>):(<Badge className='badge-2' bg="danger">Not verified</Badge>)}
                                  </div> 
                              </div>
                            </div>
                          )}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                ) : (
                  <p>Loading relief for expenditure details...</p>
                )}
              </div>

              <div className='qualifyingPayments '>
                {qualifyingPayments ? (
                  <div className='title-1-submitted'>
                    <ListGroup variant="flush" style={{ textAlign:"left", backgroundColor: "transparent", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%"}}>
                      {qualifyingPayments .map((relief) => (
                        <ListGroup.Item key={relief.reliefId} className='title-1-submitted-list' style={{ backgroundColor: 'transparent', borderRadius: '10px', margin: '5px' }}>
                          {(!relief.filePath) ? (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div>
                                  <div>Qualify Payments
                                    <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                  </div>
                              </div>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div style={{ width: "55%" }}>
                                  <div>Qualify Payments
                                    <Badge className='badge-1' bg="success">Submitted</Badge>
                                    {relief.isverified ? (<Badge className='badge-2' bg="primary">verified</Badge>):(<Badge className='badge-2' bg="danger">Not verified</Badge>)}
                                  </div> 
                              </div>
                            </div>
                          )}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                ) : (
                  <p>Loading relief for expenditure details...</p>
                )}
              </div>

              <h5>Tax Credit</h5>

              <div className='apit'>
                {apit ? (
                  <div className='title-1-submitted'>
                    <ListGroup variant="flush" style={{ textAlign:"left", backgroundColor: "transparent", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%"}}>
                      {apit.map((relief) => (
                        <ListGroup.Item key={relief.APITId} className='title-1-submitted-list' style={{ backgroundColor: 'transparent', borderRadius: '10px', margin: '5px' }}>
                          {(!relief.filePath) ? (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div>
                                  <div>APIT
                                    <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                  </div>
                              </div>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div style={{ width: "55%" }}>
                                  <div>APIT
                                    <Badge className='badge-1' bg="success">Submitted</Badge>
                                    {relief.isverified ? (<Badge className='badge-2' bg="primary">verified</Badge>):(<Badge className='badge-2' bg="danger">Not verified</Badge>)}
                                  </div> 
                              </div>
                            </div>
                          )}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                ) : (
                  <p>Loading relief for expenditure details...</p>
                )}
              </div>


              <div className='whtOnServiceFeeReceived'>
                {whtOnServiceFeeReceived? (
                  <div className='title-1-submitted'>
                    <ListGroup variant="flush" style={{ textAlign:"left", backgroundColor: "transparent", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%"}}>
                      {whtOnServiceFeeReceived.map((relief) => (
                        <ListGroup.Item key={relief.taxCreditId} className='title-1-submitted-list' style={{ backgroundColor: 'transparent', borderRadius: '10px', margin: '5px' }}>
                          {(!relief.filePath) ? (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div>
                                  <div>WHT on Service Fee Received
                                    <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                  </div>
                              </div>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div style={{ width: "55%" }}>
                                  <div>WHT on Service Fee Received
                                    <Badge className='badge-1' bg="success">Submitted</Badge>
                                    {relief.isverified ? (<Badge className='badge-2' bg="primary">verified</Badge>):(<Badge className='badge-2' bg="danger">Not verified</Badge>)}
                                  </div> 
                              </div>
                            </div>
                          )}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                ) : (
                  <p>Loading relief for expenditure details...</p>
                )}
              </div>

              <div className='whtOnInvestmentIncome'>
                {whtOnInvestmentIncome ? (
                  <div className='title-1-submitted'>
                    <ListGroup variant="flush" style={{ textAlign:"left", backgroundColor: "transparent", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%"}}>
                      {whtOnInvestmentIncome.map((relief) => (
                        <ListGroup.Item key={relief.taxCreditId} className='title-1-submitted-list' style={{ backgroundColor: 'transparent', borderRadius: '10px', margin: '5px' }}>
                          {(!relief.filePath) ? (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div>
                                  <div>WHT On Investment Income
                                    <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                  </div>
                              </div>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div style={{ width: "55%" }}>
                                  <div>WHT On Investment Income
                                    <Badge className='badge-1' bg="success">Submitted</Badge>
                                    {relief.isverified ? (<Badge className='badge-2' bg="primary">verified</Badge>):(<Badge className='badge-2' bg="danger">Not verified</Badge>)}
                                  </div> 
                              </div>
                            </div>
                          )}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                ) : (
                  <p>Loading relief for expenditure details...</p>
                )}
              </div>

              <div className='selfAssessmentPayment'>
                {selfAssessmentPayment ? (
                  <div className='title-1-submitted'>
                    <ListGroup variant="flush" style={{ textAlign:"left", backgroundColor: "transparent", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%"}}>
                      {selfAssessmentPayment.map((relief) => (
                        <ListGroup.Item key={relief.taxCreditId} className='title-1-submitted-list' style={{ backgroundColor: 'transparent', borderRadius: '10px', margin: '5px' }}>
                          {(!relief.filePath) ? (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div>
                                  <div>Self Assesment Payment
                                    <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                  </div>
                              </div>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div style={{ width: "55%" }}>
                                  <div>Self Assesment Payment
                                    <Badge className='badge-1' bg="success">Submitted</Badge>
                                    {relief.isverified ? (<Badge className='badge-2' bg="primary">verified</Badge>):(<Badge className='badge-2' bg="danger">Not verified</Badge>)}
                                  </div> 
                              </div>
                            </div>
                          )}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                ) : (
                  <p>Loading relief for expenditure details...</p>
                )}
              </div>

              <h5>Other</h5>

              <div className='terminalBenefits'>
                {terminalBenefits ? (
                  <div className='title-1-submitted'>
                    <ListGroup variant="flush" style={{ textAlign:"left", backgroundColor: "transparent", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%"}}>
                      {terminalBenefits.map((relief) => (
                        <ListGroup.Item key={relief.assessmentId} className='title-1-submitted-list' style={{ backgroundColor: 'transparent', borderRadius: '10px', margin: '5px' }}>
                          {(!relief.filePath) ? (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div>
                                  <div>Terminal Benefits
                                    <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                  </div>
                              </div>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div style={{ width: "55%" }}>
                                  <div>Terminal Benefits
                                    <Badge className='badge-1' bg="success">Submitted</Badge>
                                    {relief.isverified ? (<Badge className='badge-2' bg="primary">verified</Badge>):(<Badge className='badge-2' bg="danger">Not verified</Badge>)}
                                  </div> 
                              </div>
                            </div>
                          )}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                ) : (
                  <p>Loading relief for expenditure details...</p>
                )}
              </div>

              <div className='capitalValueGain'>
                {capitalValueGain ? (
                  <div className='title-1-submitted'>
                    <ListGroup variant="flush" style={{ textAlign:"left", backgroundColor: "transparent", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%"}}>
                      {capitalValueGain.map((relief) => (
                        <ListGroup.Item key={relief.assessmentId} className='title-1-submitted-list' style={{ backgroundColor: 'transparent', borderRadius: '10px', margin: '5px' }}>
                          {(!relief.filePath) ? (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div>
                                  <div>Capital Value & Gain
                                    <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                  </div>
                              </div>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div style={{ width: "55%" }}>
                                  <div>Capital Value & Gain
                                    <Badge className='badge-1' bg="success">Submitted</Badge>
                                    {relief.isverified ? (<Badge className='badge-2' bg="primary">verified</Badge>):(<Badge className='badge-2' bg="danger">Not verified</Badge>)}
                                  </div> 
                              </div>
                            </div>
                          )}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                ) : (
                  <p>Loading relief for expenditure details...</p>
                )}
              </div>


              <div className='whtWhichIsNotDeducted'>
                {whtWhichIsNotDeducted ? (
                  <div className='title-1-submitted'>
                    <ListGroup variant="flush" style={{ textAlign:"left", backgroundColor: "transparent", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%"}}>
                      {whtWhichIsNotDeducted.map((relief) => (
                        <ListGroup.Item key={relief.assessmentId} className='title-1-submitted-list' style={{ backgroundColor: 'transparent', borderRadius: '10px', margin: '5px' }}>
                          {(!relief.filePath) ? (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div>
                                  <div>WHT Which Is Not Deducted
                                    <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                  </div>
                              </div>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div style={{ width: "55%" }}>
                                  <div>WHT Which Is Not Deducted
                                    <Badge className='badge-1' bg="success">Submitted</Badge>
                                    {relief.isverified ? (<Badge className='badge-2' bg="primary">verified</Badge>):(<Badge className='badge-2' bg="danger">Not verified</Badge>)}
                                  </div> 
                              </div>
                            </div>
                          )}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                ) : (
                  <p>Loading relief for expenditure details...</p>
                )}
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}