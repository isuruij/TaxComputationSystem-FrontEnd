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
        width: "80%",
        marginLeft: "2%",
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
            <div style={{paddingTop:"10px"}}><ProgressBar now={now} label={`${now}%`} style={{boxShadow:"1px 5px 3px -3px rgba(0,0,0,0.44)"}}/></div>
          <p style={{paddingTop:"30px"}}></p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Location: City, Country</p>
          <p>About Me: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo sit amet ligula cursus eleifend.</p>
        </div>
      </div>
    </div>
      </div>
  )
}
