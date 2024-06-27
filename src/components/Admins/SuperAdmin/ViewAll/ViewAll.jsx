import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import Tick from "../../../../assets/Tick.svg";
import Cross from "../../../../assets/Cross.svg";
import "./ViewDetails.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function ViewAllDetails() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const uId = params.get("id");

  useEffect(() => {
    getUserDetails();
    getIncomeDetails();
  }, []);

  const [userData, setuserData] = useState({});
  const [incomeuserData, setincomeuserData] = useState({});

  const getUserDetails = async () => {
    try {
      const response = await Axios.get(
        `${base_url}/api/taxpayer/getuserbasicdetails/${uId}`
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





  // test




  const navigate = useNavigate();

  const { userId } = useParams();
  const [TaxpayerName,setTaxpayerName] = useState('');
  const [businessIncomeDetails, setBusinessIncomeDetails] = useState('');
  const [employmentIncomeDetails, setEmploymentIncomeDetails] = useState('');
  const [investmentIncomeDetails, setInvestmentIncomeDetails] = useState('');
  const [otherIncomeDetails, setOtherIncomeDetails] = useState('');
  const [capitalValueGain, setCapitalValueGain] = useState('');
  const [reliefForExpenditure, setReliefForExpenditure] = useState('');
  const [reliefForRentIncome, setReliefForRentIncome] = useState('');
  const [selfAssessmentPayment, setSelfAssessmentPayment] = useState('');
  const [terminalBenefits, setTerminalBenefits] = useState('');
  const [qualifyingPayments, setQualifyingPayments] = useState('');
  const [whtOnInvestmentIncome, setWhtOnInvestmentIncome] = useState('');
  const [whtOnServiceFeeReceived, setWhtOnServiceFeeReceived] = useState('');
  const [whtWhichIsNotDeducted, setWhtWhichIsNotDeducted] = useState('');
  const [apit, setApit] = useState('');

  const fetchTaxpayer = async (userId)=>{
    try{
      const res = await axios.get(`${base_url}/api/SuperAdmin/fetchTaxpayer/${userId}`);
      setTaxpayerName(res.data);
    }
    catch(error){
      console.error('Error fetching Taxpayer income details:', error);
    }
  }

  useEffect(() => {if (userId) {fetchTaxpayer(userId);}}, [userId]);

  useEffect(() => {
    
    const fetchBusinessIncomeDetails = async (id) => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getbusinessincome/${id}`);
        setBusinessIncomeDetails(res.data);
      } catch (error) {
        console.error('Error fetching business income details:', error);
      }
    };

    const fetchEmploymentIncomeDetails = async (id) => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getemployeeincome/${id}`);
        setEmploymentIncomeDetails(res.data);
      } catch (error) {
        console.error('Error fetching employment income details:', error);
      }
    };

    const fetchInvestmentIncomeDetails = async (id) => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getinvestmentincome/${id}`);
        setInvestmentIncomeDetails(res.data);
      } catch (error) {
        console.error('Error fetching investment income details:', error);
      }
    };

    const fetchOtherIncomeDetails = async (id) => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getotherincome/${id}`);
        setOtherIncomeDetails(res.data);
      } catch (error) {
        console.error('Error fetching other income details:', error);
      }
    };

    const fetchCapitalValueGainDetails = async (id) => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getCapitalValueGain/${id}`);
        setCapitalValueGain(res.data);
      } catch (error) {
        console.error('Error fetching capital value gain details:', error);
      }
    };

    const fetchReliefForExpenditureDetails = async (id) => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getReliefForExpenditure/${id}`);
        setReliefForExpenditure(res.data);
      } catch (error) {
        console.error('Error fetching relief for expenditure details:', error);
      }
    };

    const fetchReliefForRentIncomeDetails = async (id) => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getReliefForRentIncome/${id}`);
        setReliefForRentIncome(res.data);
      } catch (error) {
        console.error('Error fetching relief for rent income details:', error);
      }
    };

    const fetchSelfAssessmentPaymentDetails = async (id) => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getSelfAssessmentPayment/${id}`);
        setSelfAssessmentPayment(res.data);
      } catch (error) {
        console.error('Error fetching self-assessment payment details:', error);
      }
    };

    const fetchTerminalBenefitsDetails = async (id) => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getTerminalBenefits/${id}`);
        setTerminalBenefits(res.data);
      } catch (error) {
        console.error('Error fetching terminal benefits details:', error);
      }
    };

    const fetchQualifyingPaymentsDetails = async (id) => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getQualifyingPayments/${id}`);
        setQualifyingPayments(res.data);
      } catch (error) {
        console.error('Error fetching qualifying payments details:', error);
      }
    };

    const fetchApitDetails = async (id) => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getapit/${id}`);
        setApit(res.data);
      } catch (error) {
        console.error('Error fetching APIT details:', error);
      }
    };

    const fetchWhtOnServiceFeeReceivedDetails = async (id) => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getWhtOnServiceFeeReceived/${id}`);
        setWhtOnServiceFeeReceived(res.data);
      } catch (error) {
        console.error('Error fetching WHT on Service Fee Received details:', error);
      }
    };

    const fetchWhtWhichIsNotDeductedDetails = async (id) => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getWhtWhichIsNotDeducted/${id}`);
        setWhtWhichIsNotDeducted(res.data);
      } catch (error) {
        console.error('Error fetching WHT which is not deducted details:', error);
      }
    };

    const fetchWhtOnInvestmentIncomeDetails = async (id) => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getWhtOnInvestmentIncome/${id}`);
        setWhtOnInvestmentIncome(res.data);
      } catch (error) {
        console.error('Error fetching WHT on investment income details:', error);
      }
    };

    fetchBusinessIncomeDetails(userId);
    fetchEmploymentIncomeDetails(userId);
    fetchInvestmentIncomeDetails(userId);
    fetchOtherIncomeDetails(userId);
    fetchCapitalValueGainDetails(userId);
    fetchReliefForExpenditureDetails(userId);
    fetchReliefForRentIncomeDetails(userId);
    fetchSelfAssessmentPaymentDetails(userId);
    fetchTerminalBenefitsDetails(userId);
    fetchQualifyingPaymentsDetails(userId);
    fetchApitDetails(userId);
    fetchWhtOnServiceFeeReceivedDetails(userId);
    fetchWhtOnInvestmentIncomeDetails(userId);
    fetchWhtWhichIsNotDeductedDetails(userId);
  }, [userId]);

  const buttonStyle = {
    textAlign:"center",
    backgroundColor: "#049370",
    display: "block",
    marginBottom: "12px",
    width: "90%",
    marginLeft: "1%",
    boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
  };

  const containerStyle = {
    textAlign: 'left',
    display: 'block',
    marginBottom: '12px',
    width: '95%',
    marginLeft: '4%',
    maxHeight: '630px',
    overflowY: 'auto',
  };

  // verify buttons
  const verifyBusinessIncome = async (id, value) => {
    try {
      // Make an API call to update the user's approval status
      await axios.put(`${base_url}/api/SuperAdmin/verifyBusinessIncome`, { incomeId: id, isverified: value })
      setBusinessIncomeDetails((prevDetails) =>
        prevDetails.map((income) =>
          income.incomeId === id ? { ...income, isverified: value } : income
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const verifyEmploymentIncome = async (id, value) => {
    try {
      // Make an API call to update the user's approval status
      await axios.put(`${base_url}/api/SuperAdmin/verifyEmploymentIncome`, { incomeId: id, isverified: value });
      setEmploymentIncomeDetails((prevDetails) =>
        prevDetails.map((income) =>
          income.incomeId === id ? { ...income, isverified: value } : income
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const verifyInvestmentIncome = async (id, value) => {
    try {
      // Make an API call to update the user's approval status
      await axios.put(`${base_url}/api/SuperAdmin/verifyInvestmentIncome`, { incomeId: id, isverified: value });
      setInvestmentIncomeDetails((prevDetails) =>
        prevDetails.map((income) =>
          income.incomeId === id ? { ...income, isverified: value } : income
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const verifyOtherIncome = async (id, value) => {
    try {
      // Make an API call to update the user's approval status
      await axios.put(`${base_url}/api/SuperAdmin/verifyOtherIncome`, { incomeId: id, isverified: value });
      setOtherIncomeDetails((prevDetails) =>
        prevDetails.map((income) =>
          income.incomeId === id ? { ...income, isverified: value } : income
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const verifyApit = async (id, value) => {
    try {
      // Make an API call to update the user's approval status
      await axios.put(`${base_url}/api/SuperAdmin/verifyApit`, { APITId: id, isverified: value });
      setApit((prevDetails) =>
        prevDetails.map((income) =>
          income.APITId === id ? { ...income, isverified: value } : income
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
  
  
  const verifyWhtOnServiceFeeReceived = async (id, value) => {
    try {
      // Make an API call to update the user's approval status
      await axios.put(`${base_url}/api/SuperAdmin/verifyWhtOnServiceFeeReceived`, { taxCreditId: id, isverified: value });
      setWhtOnServiceFeeReceived((prevDetails) =>
        prevDetails.map((income) =>
          income.taxCreditId === id ? { ...income, isverified: value } : income
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const verifyWhtWhichIsNotDeducted = async (id, value) => {
    try {
      // Make an API call to update the user's approval status
      await axios.put(`${base_url}/api/SuperAdmin/verifyWhtWhichIsNotDeducted`, { assessmentId: id, isverified: value });
      setWhtWhichIsNotDeducted((prevDetails) =>
        prevDetails.map((income) =>
          income.assessmentId === id ? { ...income, isverified: value } : income
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
  
  const verifyWhtOnInvestmentIncome = async (id, value) => {
    try {
      // Make an API call to update the user's approval status
      await axios.put(`${base_url}/api/SuperAdmin/verifyWhtOnInvestmentIncome`, { taxCreditId: id, isverified: value });
      setWhtOnInvestmentIncome((prevDetails) =>
        prevDetails.map((income) =>
          income.taxCreditId === id ? { ...income, isverified: value } : income
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  const verifySelfAssessmentPayment = async (id, value) => {
    try {
      // Make an API call to update the user's approval status
      await axios.put(`${base_url}/api/SuperAdmin/verifySelfAssessmentPayment`, { taxCreditId: id, isverified: value });
      setSelfAssessmentPayment((prevDetails) =>
        prevDetails.map((income) =>
          income.taxCreditId === id ? { ...income, isverified: value } : income
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
  

  const verifyCapitalValueGain = async (id, value) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/verifyCapitalValueGain`, { assessmentId: id, isverified: value });
      setCapitalValueGain((prevDetails) =>
        prevDetails.map((income) =>
          income.assessmentId === id ? { ...income, isverified: value } : income
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
  
  
  const verifyReliefForExpenditure = async (id, value) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/verifyReliefForExpenditure`, { reliefid: id, isverified: value });
      setReliefForExpenditure((prevDetails) =>
        prevDetails.map((income) =>
          income.reliefid === id ? { ...income, isverified: value } : income
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
  
  
  const verifyReliefForRentIncome = async (id, value) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/verifyReliefForRentIncome`, { reliefid: id, isverified: value });
      setReliefForRentIncome((prevDetails) =>
        prevDetails.map((income) =>
          income.reliefid === id ? { ...income, isverified: value } : income
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
  
  const verifyQualifyingPayments = async (id, value) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/verifyQualifyingPayments`, { reliefid: id, isverified: value });
      setQualifyingPayments((prevDetails) =>
        prevDetails.map((income) =>
          income.reliefid === id ? { ...income, isverified: value } : income
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
  
  
  const verifyTerminalBenefits = async (id, value) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/verifyTerminalBenefits`, { assessmentId: id, isverified: value });
      setTerminalBenefits((prevDetails) =>
        prevDetails.map((income) =>
          income.assessmentId === id ? { ...income, isverified: value } : income
        )
      );
    } catch (err) {
      console.log(err);
    }
  };
  

  //request button
  const requestDocumnt = async (taxpayerId,documentName)=>{
    try {
      const obj = {taxpayerId: taxpayerId,documentName: documentName}

      await axios.post(`${base_url}/api/SuperAdmin/requestDocument`, obj);
      await axios.post(`${base_url}/api/SuperAdmin/addnotifications`, obj);
      console.log(obj)
      
    } catch (err) {
      console.log(err);
    }

  }
  
  const requestAgainDocumnt = async (taxpayerId,documentName)=>{
    try {
      const obj = {taxpayerId: taxpayerId,documentName: documentName}

      await axios.post(`${base_url}/api/SuperAdmin/requestAgainDocument`, obj);
      await axios.post(`${base_url}/api/SuperAdmin/addnotifications2`, obj);
      console.log(obj)
      
    } catch (err) {
      console.log(err);
    }

  }

  //update submission status
  const updateSubmissionStatusBusinessIncome = async (incomeId) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/updateSubmissionStatusBusinessIncome/${incomeId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
  
  const updateSubmissionStatusEmploymentIncome = async (incomeId) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/updateSubmissionStatusEmploymentIncome/${incomeId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
  
  const updateSubmissionStatusInvestmentIncome = async (incomeId) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/updateSubmissionStatusInvestmentIncome/${incomeId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
  
  const updateSubmissionStatusOtherIncome = async (incomeId) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/updateSubmissionStatusOtherIncome/${incomeId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
  

  const updateSubmissionStatusreliefForExpenditure = async(incomeId)=>{
    try {
      await axios.put(`${base_url}/api/SuperAdmin/updateSubmissionStatusreliefForExpenditure/${incomeId}`);
      window.location.reload(); 
    } catch (err) {
      console.log(err);
    } 

  }

  const updateSubmissionStatusCapitalValueGain = async (incomeId) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/updateSubmissionStatusCapitalValueGain/${incomeId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
};

const updateSubmissionStatusReliefForRentIncome = async (incomeId) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/updateSubmissionStatusReliefForRentIncome/${incomeId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
};

const updateSubmissionStatusQualifyingPayments = async (incomeId) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/updateSubmissionStatusQualifyingPayments/${incomeId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
};

const updateSubmissionStatusTerminalBenefits = async (incomeId) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/updateSubmissionStatusTerminalBenefits/${incomeId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
};

const updateSubmissionStatusWhtOnInvestmentIncome = async (incomeId) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/updateSubmissionStatusWhtOnInvestmentIncome/${incomeId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
};

const updateSubmissionStatusWhtOnServiceFeeReceived = async (incomeId) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/updateSubmissionStatusWhtOnServiceFeeReceived/${incomeId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
};

const updateSubmissionStatusWhtWhichIsNotDeducted = async (incomeId) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/updateSubmissionStatusWhtWhichIsNotDeducted/${incomeId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
};

const updateSubmissionStatusApit = async (incomeId) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/updateSubmissionStatusApit/${incomeId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
};

const updateSubmissionStatusSelfAssessmentPayment = async (incomeId) => {
    try {
      await axios.put(`${base_url}/api/SuperAdmin/updateSubmissionStatusSelfAssessmentPayment/${incomeId}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
};

const updateNoOfSubmissions = async (userId) => {
  try {
    await axios.put(`${base_url}/api/SuperAdmin/updateNoOfSubmissions/${userId}`);
  } catch (error) {
    console.error('Error updating number of submissions:', error);
    alert('Failed to update number of submissions');
  }
};
  
  

const downloadDocument = (pdfUrl) => {
  // Open the PDF link in a new tab
  window.open(pdfUrl, '_blank');
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
          <br></br>
        </div>
      </div>
      <br></br>
      <br></br>



      

      {/* test */}



      <div>
      <div>
      <div>{TaxpayerName ? (<h4 style={{textAlign:"center",color:"#F86262"}}>{TaxpayerName}'s Submissions</h4>) : (<h4 style={{textAlign:"center",color:"#F86262"}}>Loading...</h4>)}</div>
        <div className='title-1'>
          <h3 className='title-name'>Total Assessable Income</h3>
          <div className='businessIncomeDetails'>
              {businessIncomeDetails ? (
                <div className='title-1-submitted'>
                  <ListGroup variant="flush" style={containerStyle}>
                    {businessIncomeDetails.map((income) => (
                      <ListGroup.Item key={income.incomeId} className='title-1-submitted-list' style={{ backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}>
                        {(income.filePath === null||income.filePath === "")? (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                              <button className="custom-button-2">
                                <div>Business Income
                                  <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                </div>
                              </button>
                            </div>
                            <div className='request-button' style={{ width: "12%" }}>
                              <button type="button" className="btn btn-primary custom-button" style={{ textAlign:"center",backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {requestDocumnt(income.taxpayerId, "Business Income"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                                Request
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                              <button className="custom-button-2">
                                <div>Business Income
                                  <Badge className='badge-1' bg="success">Submitted </Badge>
                                  {income.isnewsubmission && (<Badge className='badge-2' bg="danger">new Submission</Badge>)}
                                </div>
                              </button>
                            </div>
                            <div style={{ width: "10%" }}>
                              <button type="button" className="btn btn-primary custom-button" style={{ textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "100%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={() => {downloadDocument(income.filePath);updateSubmissionStatusBusinessIncome(income.incomeId);if (income.isnewsubmission) {updateNoOfSubmissions(userId);}}} >
                                <span>Download</span>
                              </button>
                            </div>
                            <div style={{ width: "20%", marginLeft: "10px" }}>
                              <label style={{ color: "#008060" }}>
                                {income.isverified ? "verified" : "verify"}:
                                <Switch
                                  checked={income.isverified}
                                  onChange={(e) => {
                                    console.log(e.target.checked);
                                    verifyBusinessIncome(income.incomeId, e.target.checked);
                                  }}
                                  color="success"
                                  style={{
                                    color: "#008060",
                                  }}
                                />
                              </label>
                            </div>
                            <div style={{ width: "20%" }}>
                              <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle} onClick={(event) => {requestAgainDocumnt(income.taxpayerId, "Business Income"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                                Request Again
                              </button>
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
                <ListGroup variant="flush" style={containerStyle}>
                  {employmentIncomeDetails.map((income) => (
                    <ListGroup.Item key={income.incomeId} className='title-1-submitted-list' style={{ backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}>
                      {income.filePath === null||income.filePath === ""? (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                              <div>Employment Income
                                <Badge className='badge-1' bg="danger">Not submitted</Badge>
                              </div>
                            </button>
                          </div>
                          <div className='request-button' style={{ width: "12%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {requestDocumnt(income.taxpayerId, "Employment Income"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                              Request
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                              <div>Employment Income
                                <Badge className='badge-1' bg="success">Submitted </Badge>
                                {income.isnewsubmission && (<Badge className='badge-2' bg="danger">new Submission</Badge>)}
                              </div>
                            </button>
                          </div>
                          <div style={{ width: "10%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "100%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={() => {downloadDocument(income.filePath);updateSubmissionStatusEmploymentIncome(income.incomeId);if (income.isnewsubmission) {updateNoOfSubmissions(userId);}}} >
                              <span>Download</span>
                            </button>
                          </div>
                          <div style={{ width: "20%", marginLeft: "10px" }}>
                            <label style={{ color: "#008060" }}>
                              {income.isverified ? "verified" : "verify"}:
                              <Switch
                                checked={income.isverified}
                                onChange={(e) => {
                                  console.log(e.target.checked);
                                  verifyEmploymentIncome(income.incomeId, e.target.checked);
                                }}
                                color="success"
                                style={{
                                  color: "#008060",
                                }}
                              />
                            </label>
                          </div>
                          <div style={{ width: "20%" }}>
                            <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle}onClick={(event) => {requestAgainDocumnt(income.taxpayerId, "Employment Income"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                              Request Again
                            </button>
                          </div>
                        </div>
                      )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ) : (
              <p>Loading employment income details...</p>
            )}
          </div>

          <div className='investmentIncomeDetails'>
          {investmentIncomeDetails ? (
            <div className='title-1-submitted'>
              <ListGroup variant="flush" style={containerStyle}>
                {investmentIncomeDetails.map((income) => (
                  <ListGroup.Item key={income.incomeId} className='title-1-submitted-list' style={{ backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}>
                    {income.filePath === null || income.filePath === "" ? (
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={{ width: "55%" }}>
                          <button className="custom-button-2">
                            <div>Investment Income
                              <Badge className='badge-1' bg="danger">Not submitted</Badge>
                            </div>
                          </button>
                        </div>
                        <div className='request-button' style={{ width: "12%" }}>
                          <button type="button" className="btn btn-primary custom-button" style={{ textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {requestDocumnt(income.taxpayerId, "Investment Income"); const button = event.target; button.innerText = "Requested"; button.disabled = true; button.style.opacity = 0.8;}}>
                            Request
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <div style={{ width: "55%" }}>
                          <button className="custom-button-2">
                            <div>Investment Income
                              <Badge className='badge-1' bg="success">Submitted </Badge>
                              {income.isnewsubmission && (<Badge className='badge-2' bg="danger">new Submission</Badge>)}
                            </div>
                          </button>
                        </div>
                        <div style={{ width: "10%" }}>
                          <button type="button" className="btn btn-primary custom-button" style={{ textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "100%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={() => {downloadDocument(income.filePath);updateSubmissionStatusInvestmentIncome(income.incomeId);if (income.isnewsubmission) {updateNoOfSubmissions(userId);}}} >
                            <span>Download</span>
                          </button>
                        </div>
                        <div style={{ width: "20%", marginLeft: "10px" }}>
                          <label style={{ color: "#008060" }}>
                            {income.isverified ? "verified" : "verify"}:
                            <Switch
                              checked={income.isverified}
                              onChange={(e) => {
                                console.log(e.target.checked);
                                verifyInvestmentIncome(income.incomeId, e.target.checked);
                              }}
                              color="success"
                              style={{
                                color: "#008060",
                              }}
                            />
                          </label>
                        </div>
                        <div style={{ width: "20%" }}>
                          <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle} onClick={(event) => {requestAgainDocumnt(income.taxpayerId, "Investment Income"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                            Request Again
                          </button>
                        </div>
                      </div>
                    )}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          ) : (
            <p>Loading investment income details...</p>
          )}
        </div>
        <div className='reliefForRentIncome'>
              {reliefForRentIncome ? (
                <div className='title-1-submitted'>
                  <ListGroup variant="flush" style={containerStyle}>
                    {reliefForRentIncome.map((income) => (
                      <ListGroup.Item key={income.reliefid} className='title-1-submitted-list' style={{ backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}>
                        {income.filePath === null||income.filePath === ""? (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                              <button className="custom-button-2">
                                <div>Rent Income
                                  <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                </div>
                              </button>
                            </div>
                            <div className='request-button' style={{ width: "12%" }}>
                              <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {requestDocumnt(income.taxpayerId, "Relief For Rent Income"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                                Request
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                              <button className="custom-button-2">
                                <div>Rent Income
                                  <Badge className='badge-1' bg="success">Submitted </Badge>
                                  {income.isnewsubmission && (<Badge className='badge-2' bg="danger">new Submission</Badge>)}
                                </div>
                              </button>
                            </div>
                            <div style={{ width: "10%" }}>
                              <button type="button" className="btn btn-primary custom-button" style={{ textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "100%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={() => {downloadDocument(income.filePath),updateSubmissionStatusReliefForRentIncome(income.reliefid);if (income.isnewsubmission) {updateNoOfSubmissions(userId);}}} >
                                <span>Download</span>
                              </button>
                            </div>
                            <div style={{ width: "20%", marginLeft: "10px" }}>
                              <label style={{ color: "#008060" }}>
                                {income.isverified ? "verified" : "verify"}:
                                <Switch
                                  checked={income.isverified}
                                  onChange={(e) => {
                                    console.log(e.target.checked);
                                    verifyReliefForRentIncome(income.reliefid, e.target.checked);
                                  }}
                                  color="success"
                                  style={{
                                    color: "#008060",
                                  }}
                                />
                              </label>
                            </div>
                            <div style={{ width: "20%" }}>
                              <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle} onClick={(event) => {requestAgainDocumnt(income.taxpayerId, "Relief For Rent Income"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                                Request Again
                              </button>
                            </div>
                          </div>
                        )}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              ) : (
                <p>Loading relief for rent income details...</p>
              )}
            </div>


          <div className='otherIncomeDetails'>
            {otherIncomeDetails ? (
              <div className='title-1-submitted'>
                <ListGroup variant="flush" style={containerStyle}>
                  {otherIncomeDetails.map((income) => (
                    <ListGroup.Item key={income.incomeId} className='title-1-submitted-list' style={{  backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}>
                      {income.filePath === null||income.filePath === "" ? (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                              <div>Other Income
                                <Badge className='badge-1' bg="danger">Not submitted</Badge>
                              </div>
                            </button>
                          </div>
                          <div className='request-button' style={{ width: "12%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{  textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {requestDocumnt(income.taxpayerId, "Other Income"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                              Request
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                              <div>Other Income
                                <Badge className='badge-1' bg="success">Submitted </Badge>
                                {income.isnewsubmission && (<Badge className='badge-2' bg="danger">new Submission</Badge>)}
                              </div>
                            </button>
                          </div>
                          <div style={{ width: "10%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{ textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "100%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={() => {downloadDocument(income.filePath);updateSubmissionStatusOtherIncome(income.incomeId),updateNoOfSubmissions(userId);if (income.isnewsubmission) {updateNoOfSubmissions(userId);}}} >
                              <span>Download</span>
                            </button>
                          </div>
                          <div style={{ width: "20%", marginLeft: "10px" }}>
                            <label style={{ color: "#008060" }}>
                              {income.isverified ? "verified" : "verify"}:
                              <Switch
                                checked={income.isverified}
                                onChange={(e) => {
                                  console.log(e.target.checked);
                                  verifyOtherIncome(income.incomeId, e.target.checked);
                                }}
                                color="success"
                                style={{
                                  color: "#008060",
                                }}
                              />
                            </label>
                          </div>
                          <div style={{ width: "20%" }}>
                            <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle} onClick={(event) => {requestAgainDocumnt(income.taxpayerId, "Other Income"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                              Request Again
                            </button>
                          </div>
                        </div>
                      )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ) : (
              <p>Loading other income details...</p>
            )}
          </div>
        </div>

        <div className='title-2'>
          <h3 className='title-name'>Qualifying Payments & Reliefs</h3>


        <div className='reliefForExpenditure'>
            {reliefForExpenditure ? (
              <div className='title-1-submitted'>
                <ListGroup variant="flush" style={containerStyle}>
                  {reliefForExpenditure.map((income) => (
                    <ListGroup.Item key={income.reliefid} className='title-1-submitted-list' style={{ backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}>
                      {income.filePath === null||income.filePath === "" ? (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                              <div>Expenditure
                                <Badge className='badge-1' bg="danger">Not submitted</Badge>
                              </div>
                            </button>
                          </div>
                          <div className='request-button' style={{ width: "12%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{ textAlign:"center",backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {requestDocumnt(income.taxpayerId, "Relief For Expenditure"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                              Request
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                              <div>Expenditure
                                <Badge className='badge-1' bg="success">Submitted </Badge>
                                {income.isnewsubmission && (<Badge className='badge-2' bg="danger">new Submission</Badge>)}
                              </div>
                            </button>
                          </div>
                          <div style={{ width: "10%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "100%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {downloadDocument(income.filePath),updateSubmissionStatusreliefForExpenditure(income.reliefid);if (income.isnewsubmission) {updateNoOfSubmissions(userId);}}} >
                              <span>Download</span>
                            </button>
                          </div>
                          <div style={{ width: "20%", marginLeft: "10px" }}>
                            <label style={{ color: "#008060" }}>
                              {income.isverified ? "verified" : "verify"}:
                              <Switch
                                checked={income.isverified}
                                onChange={(e) => {
                                  console.log(e.target.checked);
                                  verifyReliefForExpenditure(income.reliefid, e.target.checked);
                                }}
                                color="success"
                                style={{
                                  color: "#008060",
                                }}
                              />
                            </label>
                          </div>
                          <div style={{ width: "20%" }}>
                            <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle}onClick={(event) => {requestAgainDocumnt(income.taxpayerId, "Relief For Expenditure"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                              Request Again
                            </button>
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
          


          <div className='qualifyingPayments'>
            {qualifyingPayments ? (
              <div className='title-1-submitted'>
                <ListGroup variant="flush" style={containerStyle}>
                  {qualifyingPayments.map((income) => (
                    <ListGroup.Item key={income.reliefid} className='title-1-submitted-list' style={{ backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}>
                      {income.filePath === null||income.filePath === ""? (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                              <div>Qualifying Payments
                                <Badge className='badge-1' bg="danger">Not submitted</Badge>
                              </div>
                            </button>
                          </div>
                          <div className='request-button' style={{ width: "12%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {requestDocumnt(income.taxpayerId, "Employment Income"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                             Request
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                              <div>Qualifying Payments
                                <Badge className='badge-1' bg="success">Submitted </Badge>
                                {income.isnewsubmission && (<Badge className='badge-2' bg="danger">new Submission</Badge>)}
                              </div>
                            </button>
                          </div>
                          <div style={{ width: "10%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "100%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={() => {downloadDocument(income.filePath),updateSubmissionStatusQualifyingPayments(income.reliefid);if (income.isnewsubmission) {updateNoOfSubmissions(userId);}}} >
                              <span>Download</span>
                            </button>
                          </div>
                          <div style={{ width: "20%", marginLeft: "10px" }}>
                            <label style={{ color: "#008060" }}>
                              {income.isverified ? "verified" : "verify"}:
                              <Switch
                                checked={income.isverified}
                                onChange={(e) => {
                                  console.log(e.target.checked);
                                  verifyQualifyingPayments(income.reliefid, e.target.checked);
                                }}
                                color="success"
                                style={{
                                  color: "#008060",
                                }}
                              />
                            </label>
                          </div>
                          <div style={{ width: "20%" }}>
                            <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle} onClick={(event) => {requestAgainDocumnt(income.taxpayerId, "Qualifying Payments"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                              Request Again
                            </button>
                          </div>
                        </div>
                      )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ) : (
              <p>Loading qualifying payments details...</p>
            )}
          </div>

         






        </div>

        <div className='title-3'>
          <h3 className='title-name'>Tax Credit</h3>
                      <div className='apit'>
              {apit ? (
                <div className='title-1-submitted'>
                  <ListGroup variant="flush" style={containerStyle}>
                    {apit.map((income) => (
                      <ListGroup.Item key={income.APITId} className='title-1-submitted-list' style={{ backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}>
                        {income.filePath === null||income.filePath === ""? (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                              <button className="custom-button-2">
                                <div>APIT
                                  <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                </div>
                              </button>
                            </div>
                            <div className='request-button' style={{ width: "12%" }}>
                              <button type="button" className="btn btn-primary custom-button" style={{ textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {requestDocumnt(income.taxpayerId, "Apit"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                               Request
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                              <button className="custom-button-2">
                                <div>APIT
                                  <Badge className='badge-1' bg="success">Submitted </Badge>
                                  {income.isnewsubmission && (<Badge className='badge-2' bg="danger">new Submission</Badge>)}
                                </div>
                              </button>
                            </div>
                            <div style={{ width: "10%" }}>
                              <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "100%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={() => {downloadDocument(income.filePath),updateSubmissionStatusApit(income.APITId);if (income.isnewsubmission) {updateNoOfSubmissions(userId);}}} >
                                <span>Download</span>
                              </button>
                            </div>
                            <div style={{ width: "20%", marginLeft: "10px" }}>
                              <label style={{ color: "#008060" }}>
                                {income.isverified ? "verified" : "verify"}:
                                <Switch
                                  checked={income.isverified}
                                  onChange={(e) => {
                                    console.log(e.target.checked);
                                    verifyApit(income.APITId, e.target.checked);
                                  }}
                                  color="success"
                                  style={{
                                    color: "#008060",
                                  }}
                                />
                              </label>
                            </div>
                            <div style={{ width: "20%" }}>
                              <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle} onClick={(event) => {requestAgainDocumnt(income.taxpayerId, "APIT"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                                Request Again
                              </button>
                            </div>
                          </div>
                        )}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              ) : (
                <p>Loading APIT details...</p>
              )}
            </div>


            <div className='whtOnServiceFeeReceived'>
            {whtOnServiceFeeReceived ? (
                <div className='title-1-submitted'>
                <ListGroup variant="flush" style={containerStyle}>
                    {whtOnServiceFeeReceived.map((income) => (
                    <ListGroup.Item key={income.taxCreditId} className='title-1-submitted-list' style={{ backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}>
                        {income.filePath === "" || income.filePath === null ? (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                                <div><span style={{fontSize:"12px"}}>WHT on Service Fee Received</span>
                                <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                </div>
                            </button>
                            </div>
                            <div className='request-button' style={{ width: "12%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {requestDocumnt(income.taxpayerId, "WHT on Service Fee Received"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                                Request
                            </button>
                            </div>
                        </div>
                        ) : (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                                <div><span style={{fontSize:"12px"}}>WHT on Service Fee Received</span>
                                <Badge className='badge-1' bg="success">Submitted </Badge>
                                {income.isnewsubmission && (<Badge className='badge-2' bg="danger">new Submission</Badge>)}
                                </div>
                            </button>
                            </div>
                            <div style={{ width: "10%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "100%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={() => {downloadDocument(income.filePath),updateSubmissionStatusWhtOnServiceFeeReceived(income.taxCreditId);if (income.isnewsubmission) {updateNoOfSubmissions(userId);}}} >
                                <span>Download</span>
                            </button>
                            </div>
                            <div style={{ width: "20%", marginLeft: "10px" }}>
                            <label style={{ color: "#008060" }}>
                                {income.isverified ? "verified" : "verify"}:
                                <Switch
                                checked={income.isverified}
                                onChange={(e) => {
                                    console.log(e.target.checked);
                                    verifyWhtOnServiceFeeReceived(income.taxCreditId, e.target.checked);
                                }}
                                color="success"
                                style={{
                                    color: "#008060",
                                }}
                                />
                            </label>
                            </div>
                            <div style={{ width: "20%" }}>
                            <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle} onClick={(event) => {requestAgainDocumnt(income.taxpayerId, "WHT on Service Fee Received"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}} >
                                Request Again
                            </button>
                            </div>
                        </div>
                        )}
                    </ListGroup.Item>
                    ))}
                </ListGroup>
                </div>
            ) : (
                <p>Loading WHT on Service Fee Received details...</p>
            )}
            </div>




            <div className='whtOnInvestmentIncome'>
            {whtOnInvestmentIncome ? (
                <div className='title-1-submitted'>
                <ListGroup variant="flush" style={containerStyle}>
                    {whtOnInvestmentIncome.map((income) => (
                    <ListGroup.Item key={income.taxCreditId} className='title-1-submitted-list' style={{ backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}>
                        {income.filePath === null||income.filePath === ""? (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                                <div><span style={{fontSize:"12px"}}>WHT On Investment Income</span>
                                <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                </div>
                            </button>
                            </div>
                            <div className='request-button' style={{ width: "12%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {requestDocumnt(income.taxpayerId, "WHT On Investment Income"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                                Request
                            </button>
                            </div>
                        </div>
                        ) : (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                                <div><span style={{fontSize:"12px"}}>WHT On Investment Income</span>
                                <Badge className='badge-1' bg="success">Submitted </Badge>
                                {income.isnewsubmission && (<Badge className='badge-2' bg="danger">new Submission</Badge>)}
                                </div>
                            </button>
                            </div>
                            <div style={{ width: "10%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "100%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={() => {downloadDocument(income.filePath),updateSubmissionStatusWhtOnInvestmentIncome(income.taxCreditId);if (income.isnewsubmission) {updateNoOfSubmissions(userId);}}} >
                                <span>Download</span>
                            </button>
                            </div>
                            <div style={{ width: "20%", marginLeft: "10px" }}>
                            <label style={{ color: "#008060" }}>
                                {income.isverified ? "verified" : "verify"}:
                                <Switch
                                checked={income.isverified}
                                onChange={(e) => {
                                    console.log(e.target.checked);
                                    verifyWhtOnInvestmentIncome(income.taxCreditId, e.target.checked);
                                }}
                                color="success"
                                style={{
                                    color: "#008060",
                                }}
                                />
                            </label>
                            </div>
                            <div style={{ width: "20%" }}>
                            <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle} onClick={(event) => {requestAgainDocumnt(income.taxpayerId, "WHT On Investment Income"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                                Request Again
                            </button>
                            </div>
                        </div>
                        )}
                    </ListGroup.Item>
                    ))}
                </ListGroup>
                </div>
            ) : (
                <p>Loading WHT On Investment Income details...</p>
            )}
            </div>

            <div className='selfAssessmentPayment'>
                {selfAssessmentPayment ? (
                  <div className='title-1-submitted'>
                    <ListGroup variant="flush" style={containerStyle}>
                      {selfAssessmentPayment.map((income) => (
                        <ListGroup.Item key={income.taxCreditId} className='title-1-submitted-list' style={{ backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}>
                          {income.filePath === null||income.filePath === ""? (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div style={{ width: "55%" }}>
                                <button className="custom-button-2">
                                  <div><span style={{ fontSize: "12px" }}>Self Assessment Payment</span>
                                    <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                  </div>
                                </button>
                              </div>
                              <div className='request-button' style={{ width: "12%" }}>
                                <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {requestDocumnt(income.taxpayerId, "Self Assessment Payment"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                                    Request
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                              <div style={{ width: "55%" }}>
                                <button className="custom-button-2">
                                  <div><span style={{ fontSize: "12px" }}>Self Assessment Payment</span>
                                    <Badge className='badge-1' bg="success">Submitted </Badge>
                                    {income.isnewsubmission && (<Badge className='badge-2' bg="danger">new Submission</Badge>)}
                                  </div>
                                </button>
                              </div>
                              <div style={{ width: "10%" }}>
                                <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "100%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={() => {downloadDocument(income.filePath),updateSubmissionStatusSelfAssessmentPayment(income.taxCreditId);if (income.isnewsubmission) {updateNoOfSubmissions(userId);}}} >
                                  <span>Download</span>
                                </button>
                              </div>
                              <div style={{ width: "20%", marginLeft: "10px" }}>
                                <label style={{ color: "#008060" }}>
                                  {income.isverified ? "verified" : "verify"}:
                                  <Switch
                                    checked={income.isverified}
                                    onChange={(e) => {
                                      console.log(e.target.checked);
                                      verifySelfAssessmentPayment(income.taxCreditId, e.target.checked);
                                    }}
                                    color="success"
                                    style={{
                                      color: "#008060",
                                    }}
                                  />
                                </label>
                              </div>
                              <div style={{ width: "20%" }}>
                                <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle} onClick={(event) => {requestAgainDocumnt(income.taxpayerId, "Self Assessment Payment"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                                  Request Again
                                </button>
                              </div>
                            </div>
                          )}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  </div>
                ) : (
                  <p>Loading Self Assessment Payment details...</p>
                )}
              </div>





        </div>
        <div className='title-2'>
          <h3 className='title-name'>Other</h3>
          <div className='terminalBenefits'>
            {terminalBenefits ? (
              <div className='title-1-submitted'>
                <ListGroup variant="flush" style={containerStyle}>
                  {terminalBenefits.map((income) => (
                    <ListGroup.Item key={income.assessmentId} className='title-1-submitted-list' style={{ backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}>
                      {income.filePath === null||income.filePath === ""? (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                              <div>Terminal Benefits
                                <Badge className='badge-1' bg="danger">Not submitted</Badge>
                              </div>
                            </button>
                          </div>
                          <div className='request-button' style={{ width: "12%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {requestDocumnt(income.taxpayerId, "Terminal Benefits"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                                Request
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                              <div>Terminal Benefits
                                <Badge className='badge-1' bg="success">Submitted </Badge>
                                {income.isnewsubmission && (<Badge className='badge-2' bg="danger">new Submission</Badge>)}
                              </div>
                            </button>
                          </div>
                          <div style={{ width: "10%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "100%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={() => {downloadDocument(income.filePath),updateSubmissionStatusTerminalBenefits(income.assessmentId);if (income.isnewsubmission) {updateNoOfSubmissions(userId);}}} >
                              <span>Download</span>
                            </button>
                          </div>
                          <div style={{ width: "20%", marginLeft: "10px" }}>
                            <label style={{ color: "#008060" }}>
                              {income.isverified ? "verified" : "verify"}:
                              <Switch
                                checked={income.isverified}
                                onChange={(e) => {
                                  console.log(e.target.checked);
                                  verifyTerminalBenefits(income.assessmentId, e.target.checked);
                                }}
                                color="success"
                                style={{
                                  color: "#008060",
                                }}
                              />
                            </label>
                          </div>
                          <div style={{ width: "20%" }}>
                            <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle} onClick={(event) => {requestAgainDocumnt(income.taxpayerId, "Terminal Benefits"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                              Request Again
                            </button>
                          </div>
                        </div>
                      )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ) : (
              <p>Loading terminal benefits details...</p>
            )}
          </div>

          <div className='capitalValueGain'>
            {capitalValueGain ? (
              <div className='title-1-submitted'>
                <ListGroup variant="flush" style={containerStyle}>
                  {capitalValueGain.map((income) => (
                    <ListGroup.Item key={income.assessmentId} className='title-1-submitted-list' style={{ backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}>
                      {income.filePath === null||income.filePath === ""? (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                              <div>Capital Value & Gain
                                <Badge className='badge-1' bg="danger">Not submitted</Badge>
                              </div>
                            </button>
                          </div>
                          <div className='request-button' style={{ width: "12%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {requestDocumnt(income.taxpayerId, "Capital Value Gain"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                             Request
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                          <div style={{ width: "55%" }}>
                            <button className="custom-button-2">
                              <div>Capital Value & Gain
                                <Badge className='badge-1' bg="success">Submitted </Badge>
                                {income.isnewsubmission && (<Badge className='badge-2' bg="danger">new Submission</Badge>)}
                              </div>
                            </button>
                          </div>
                          <div style={{ width: "10%" }}>
                            <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "100%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={() => {downloadDocument(income.filePath),updateSubmissionStatusCapitalValueGain(income.assessmentId);if (income.isnewsubmission) {updateNoOfSubmissions(userId);}}} >
                              <span>Download</span>
                            </button>
                          </div>
                          <div style={{ width: "20%", marginLeft: "10px" }}>
                            <label style={{ color: "#008060" }}>
                              {income.isverified ? "verified" : "verify"}:
                              <Switch
                                checked={income.isverified}
                                onChange={(e) => {
                                  console.log(e.target.checked);
                                  verifyCapitalValueGain(income.assessmentId, e.target.checked);
                                }}
                                color="success"
                                style={{
                                  color: "#008060",
                                }}
                              />
                            </label>
                          </div>
                          <div style={{ width: "20%" }}>
                            <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle} onClick={(event) => {requestAgainDocumnt(income.taxpayerId, "Capital Value Gain"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                              Request Again
                            </button>
                          </div>
                        </div>
                      )}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ) : (
              <p>Loading capital value gain details...</p>
            )}
          </div>          


          <div className='whtWhichIsNotDeducted'>
              {whtWhichIsNotDeducted ? (
                <div className='title-1-submitted'>
                  <ListGroup variant="flush" style={containerStyle}>
                    {whtWhichIsNotDeducted.map((income) => (
                      <ListGroup.Item key={income.assessmentId} className='title-1-submitted-list' style={{ backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}>
                        {income.filePath === null||income.filePath === ""? (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                              <button className="custom-button-2">
                                <div><span style={{ fontSize: "12px" }}>WHT Which Is Not Deducted</span>
                                  <Badge className='badge-1' bg="danger">Not submitted</Badge>
                                </div>
                              </button>
                            </div>
                            <div className='request-button' style={{ width: "12%" }}>
                              <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "90%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={(event) => {requestDocumnt(income.taxpayerId, "WHT Which Is Not Deducted"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                              Request
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <div style={{ width: "55%" }}>
                              <button className="custom-button-2">
                                <div><span style={{ fontSize: "12px" }}>WHT Which Is Not Deducted</span>
                                  <Badge className='badge-1' bg="success">Submitted </Badge>
                                  {income.isnewsubmission && (<Badge className='badge-2' bg="danger">new Submission</Badge>)}
                                </div>
                              </button>
                            </div>
                            <div style={{ width: "10%" }}>
                              <button type="button" className="btn btn-primary custom-button" style={{textAlign:"center", backgroundColor: "#049370", display: "block", marginBottom: "12px", width: "100%", marginLeft: "1%", boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }} onClick={() => {downloadDocument(income.filePath),updateSubmissionStatusWhtWhichIsNotDeducted(income.assessmentId);if (income.isnewsubmission) {updateNoOfSubmissions(userId);}}} >
                                <span>Download</span>
                              </button>
                            </div>
                            <div style={{ width: "20%", marginLeft: "10px" }}>
                              <label style={{ color: "#008060" }}>
                                {income.isverified ? "verified" : "verify"}:
                                <Switch
                                  checked={income.isverified}
                                  onChange={(e) => {
                                    console.log(e.target.checked);
                                    verifyWhtWhichIsNotDeducted(income.assessmentId, e.target.checked);
                                  }}
                                  color="success"
                                  style={{
                                    color: "#008060",
                                  }}
                                />
                              </label>
                            </div>
                            <div style={{ width: "20%" }}>
                              <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle} onClick={(event) => {requestAgainDocumnt(income.taxpayerId, "WHT Which Is Not Deducted"); const button = event.target;button.innerText = "Requested";button.disabled = true;button.style.opacity = 0.8;}}>
                                Request Again
                              </button>
                            </div>
                          </div>
                        )}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              ) : (
                <p>Loading WHT Which Is Not Deducted details...</p>
              )}
            </div>

        </div>
      </div>
    </div>



    </div>
  );
}

export default ViewAllDetails;
