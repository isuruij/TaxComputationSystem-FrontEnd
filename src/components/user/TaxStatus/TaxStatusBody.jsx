import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import './TaxStatusBody.css';
import Axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";




export default function TaxStatus() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const cookieValue = Cookies.get("token");
  const userId = jwtDecode(cookieValue).id;

  const [taxPayments, setTaxPayments] = useState([]);
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
    const totalAmount = listOfItems.reduce((total, item) => total + item.amount, 0) || 0;
    const totalPayment = taxPayments.reduce((total, item) => total + item.Paid, 0) || 0;
    const progress = (totalPayment/totalAmount)*100 || 0;
    
    const now = Math.round(progress);

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
    <div><div className='main-1'> 
        
        <div  className='view-tax-button'>
          {now == 0 ?(<div className='taxpayer-progress-bar-dis-3'>You did not do any payment updates</div> ):(now >= 71 ?(<div className='taxpayer-progress-bar-dis-4'>Your Tax payment progress is excellent</div> ):(<></>))}
        </div>
        <div className='taxpayer-progress'>
          <div className='taxpayer-progress-bar'><ProgressBar className='taxpayer-progress-bar-style' now={now} label={`${now}%`} variant={getProgressVariant()} style={{ boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)" }}/></div>
          <div className='taxpayer-progress-bar-dis-1'>This progress Bar shows the progress of the taxpayer</div> 
          <div  className='taxpayer-progress-bar-dis-2'>The progress bar serves as a visual representation of the taxpayer's financial contributions. As it dynamically adjusts, it mirrors the proportion of taxes paid by the user during the chosen timeframe, displaying the percentage completion. This intuitive tool provides a quick and accessible way for users to gauge their tax payment progress, fostering transparency and comprehension in financial matters.</div>
        </div>
      </div>
    </div>
  )
}
