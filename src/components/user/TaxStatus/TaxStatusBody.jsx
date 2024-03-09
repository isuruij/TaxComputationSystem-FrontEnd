import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';




export default function TaxStatus() {
  const now = 70;
  const buttonStyle = {
    textAlign: "Center",
    display: "block",
    marginBottom: "12px",
    width: "200px",
    marginLeft: "35%",
    boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
  };

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [progress, setProgress] = useState(0); 

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
    validateDates(event.target.value, endDate);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
    validateDates(startDate, event.target.value);
  };

  const validateDates = (start, end) => {
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
    

    if (startDateObj > endDateObj) {
      
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  };

  const handleViewTaxStatus = () => {
    // You can replace this with actual logic to calculate the progress based on data.
    // For now, setting it to 70%.
    setProgress(70);
  };

  return (
    <div><div style={{
        borderRadius: "15px",
        padding: "20px 40px",
        backgroundColor: "#D3E9FE",
        width: "100%",
        marginTop:"5px",
        marginBottom:'20px',
        boxShadow:"1px 5px 3px -3px rgba(0,0,0,0.44)",
        height:"100vh"}}> 
        <div style={{display:"flex", justifyContent:"space-between"}}>
              <div className="form-group">
                <label className="lables" for="birthday">
                  Start Date
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="date"
                    id="startDate"
                    placeholder=""
                    value={startDate} onChange={handleStartDateChange}
                    
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="lables" for="birthday">
                  End Date
                </label>
                <div className="custom_input">
                  <input
                    className="details-input form-control"
                    type="date"
                    id="endDate"
                    placeholder=""
                    value={endDate} onChange={handleEndDateChange}
                  />
                  {!isValid && <p style={{ color: 'red' }}>End date must be greater than the start date.</p>}

                </div>
              </div>
              
        </div>


        <div>
            
        </div>
        <div style={{alignItems:'center',marginTop:"50px"}}>
          <button type="button" className="btn btn-primary d-flex justify-content-center" style={buttonStyle} onClick={handleViewTaxStatus}>
            View Tax Status
          </button>
        </div>
        <div style={{marginTop:"100px"}}>
          <div style={{paddingTop:"10px"}}>
            <ProgressBar now={progress} label={`${progress}%`} style={{boxShadow:"1px 5px 3px -3px rgba(0,0,0,0.44)"}}/>
          </div>
          <div style={{color:'#0085FF',textAlign:"center", textShadow:"2px 2px 4px rgba(0, 0, 0,0.3)",fontSize:'20px',marginTop:"20px"}}>
            This progress Bar shows the progress of the taxpayer
          </div>
         <div style={{color:'Gray',textAlign:"justify", textShadow:"2px 2px 4px rgba(0, 0, 0,0.3)",fontSize:'20px',marginTop:"40px"}}>The progress bar serves as a visual representation of the taxpayer's financial contributions over a specified period. As it dynamically adjusts, it mirrors the proportion of taxes paid by the user during the chosen timeframe, displaying the percentage completion. This intuitive tool provides a quick and accessible way for users to gauge their tax payment progress, fostering transparency and comprehension in financial matters.</div>
        </div>
      </div></div>
  )
}
