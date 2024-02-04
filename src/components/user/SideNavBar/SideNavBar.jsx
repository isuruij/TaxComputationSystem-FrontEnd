import React from 'react';
import DownloadTaxreport from "../assets/DownloadTaxreport.svg";
import changeincome from "../assets/changeincome.svg";
import home from "../assets/home.svg";
import logout from "../assets/logout.svg";
import registration from "../assets/registration.svg";
import taxhistory from "../assets/taxhistory.svg";
import viewtax from "../assets/viewtax.svg";


export default function SideNavBar() {
  return (
    <div>
      <div
        
        style={{boxShadow:"1px 5px 3px -3px rgba(0,0,0,0.44)",borderRadius:"10px",padding:"10px",marginRight:"10%",marginBottom:"10px" ,marginTop:"10px", marginLeft: "10%", backgroundColor: "#D3E9FE", width: "20%" }}
      >
        <br></br>
        <button type="button" className="btn btn-primary" style={{textAlign:"left",display:"block" ,marginBottom:"12px",width:"90%",marginLeft:"4%",boxShadow:"0px 5px 14px -10px rgba(0,0,0,1)"}}>
          <img src={home} style={{alignItems:"left",textAlign:"left"}}  alt="Icon" />
          Home
        </button>
        <button type="button" className="btn btn-primary menue-button" style={{textAlign:"left",display:"block" ,marginBottom:"12px",width:"90%",marginLeft:"4%",boxShadow:"0px 5px 14px -10px rgba(0,0,0,1)"}}>
          <img src={changeincome} alt="Icon" style={{alignItems:"left",textAlign:"left"}}/>
          Primary
        </button>
        <button type="button" className="btn btn-primary menue-button"style={{textAlign:"left",display:"block" ,marginBottom:"12px",width:"90%",marginLeft:"4%",boxShadow:"0px 5px 14px -10px rgba(0,0,0,1)"}}>
          <img src={viewtax} alt="Icon" style={{alignItems:"left",textAlign:"left"}}/>
          View Tax
        </button>
        <button type="button" className="btn btn-primary menue-button" style={{textAlign:"left",display:"block" ,marginBottom:"12px",width:"90%",marginLeft:"4%",boxShadow:"0px 5px 14px -10px rgba(0,0,0,1)"}}>
          <img src={taxhistory} alt="Icon" style={{alignItems:"left",textAlign:"left"}}/>
          Tax History
        </button>
        <button type="button" className="btn btn-primary menue-button"style={{textAlign:"left",display:"block" ,marginBottom:"12px",width:"90%",marginLeft:"4%",boxShadow:"0px 5px 14px -10px rgba(0,0,0,1)"}}>
          <img src={DownloadTaxreport} alt="Icon" style={{alignItems:"left",textAlign:"left"}}/>
          Download Tax report
        </button>
        <button type="button" className="btn btn-primary menue-button" style={{textAlign:"left",display:"block" ,marginBottom:"12px",width:"90%",marginLeft:"4%",boxShadow:"0px 5px 14px -10px rgba(0,0,0,1)"}}>
          <img src={registration} alt="Icon" style={{alignItems:"left",textAlign:"left"}}/>
          Registration
        </button>
        <button type="button" className="btn btn-primary menue-button" style={{textAlign:"left",display:"block" ,marginBottom:"12px",width:"90%",marginLeft:"4%",boxShadow:"0px 5px 14px -10px rgba(0,0,0,1)"}}>
          <img src={logout} alt="Icon" style={{alignItems:"left",textAlign:"left"}}/>
          Log out
        </button>
        <br></br>
      </div>
    </div>
  )
}
