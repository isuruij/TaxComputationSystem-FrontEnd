import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

import "./Homepagestyle.css";
import profilepic from "./profilepic.jpg";





export default function Homepage() {
    const now = 60;
    const tin = document.getElementById('personalDetails.TIN');
  return (
    <div style={{
        borderRadius: "15px",
        padding: "20px 40px",
        backgroundColor: "#D3E9FE",
        width: "100%",
        height:"100vh",
        marginBottom:"20px",
        boxShadow:"1px 5px 3px -3px rgba(0,0,0,0.44)"
      }}> 


<div className="container mt-5">
      <div className="row">
        <div >
          <img
            src= {profilepic}// Replace with the URL of your profile picture
            alt="Profile"
            className="img-fluid rounded-circle"
            style={{width:"200px"}}
          />
        </div>
        <h2 style={{paddingTop:"30px",color:" #0085FF", textShadow:"2px 2px 4px rgba(0, 0, 0,0.3)"
}}>John Doe</h2>
        <div style={{paddingTop:"10px"}}>
            <div style={{paddingTop:"10px"}}><ProgressBar now={now} label={`${now}%`} style={{boxShadow:"1px 5px 3px -3px rgba(0,0,0,0.44)",  transition: "width 1s ease-in-out"}}/></div>
          <p style={{paddingTop:"30px"}}></p>
          <p>Phone: +94 (555) 123-4567</p>
          <p>Office: +94 (555) 123-4567 </p>
          <p>TIN Number: 1123470x</p>
          <p>Location: Colombo 07, Sri Lanka</p>
          <p>E-mail:jhonedoe97@gmail.com </p>
          <p>About Me: As an account and business owner, I bring a wealth of financial expertise to effectively manage and optimize financial operations. My commitment to fiscal responsibility and strategic decision-making ensures the sustained success and growth of my business. </p>
        </div>
      </div>
    </div>
      </div>
  )
}
