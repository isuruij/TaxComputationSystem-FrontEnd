import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './TaxStatusBody.css';




export default function TaxStatus() {
  const now = 70;
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isValid, setIsValid] = useState(true);

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


  return (
    <div><div className='main-1'> 
        <div className='start-and-end-date'style={{display:"flex", justifyContent:"space-between"}}>
              <div className="start-date">
                <label className="lables" for="birthday">Start Date</label>
                  <div className="start-sate-input">
                    <input className="details-input form-control" type="date" id="startDate" placeholder="" value={startDate} 
                    onChange={handleStartDateChange}/>
                  </div>
              </div>

              <div className="end-date">
                <label className="lables" for="birthday">End Date</label>
                  <div className="end-sate-input">
                    <input className="details-input form-control" type="date" id="endDate" placeholder="" value={endDate} onChange={handleEndDateChange}/>
                    {!isValid && <p className='vlidate-massege'>End date must be greater than the start date.</p>}
                  </div>
              </div>      
        </div>
        <div  className='view-tax-button'>
          <button type="button" className="btn btn-primary d-flex justify-content-center button-style">View Tax Status</button> 
        </div>
        <div className='taxpayer-progress'>
          <div className='taxpayer-progress-bar'><ProgressBar className='taxpayer-progress-bar-style' now={now} label={`${now}%`}/></div>
          <div className='taxpayer-progress-bar-dis-1'>This progress Bar shows the progress of the taxpayer</div> 
          <div  className='taxpayer-progress-bar-dis-2'>The progress bar serves as a visual representation of the taxpayer's financial contributions over a specified period. As it dynamically adjusts, it mirrors the proportion of taxes paid by the user during the chosen timeframe, displaying the percentage completion. This intuitive tool provides a quick and accessible way for users to gauge their tax payment progress, fostering transparency and comprehension in financial matters.</div>
        </div>
      </div>
    </div>
  )
}
