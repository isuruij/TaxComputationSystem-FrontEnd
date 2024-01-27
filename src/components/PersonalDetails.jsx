import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PersonalDetails() {

  useEffect(() => {
    console.log("Cookies:", document.cookie);
  }, [])

  const [values, setvalues] = useState({

    email:"",
    password:"",
    name:"",
    address:"",
    tin:"",
    nameofemployer:"",
    mobileno:"",
    officeno:"",
    homeno:"",
    birthday:""
  });

  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  //submiting PersonalDetails to backend
  const handleSubmit =async (event)=>{
      event.preventDefault();
      try {
        const res = await Axios.post("http://localhost:3000/api/employees/register",values);
        if(res.data.Status === "Success"){
          navigate("/dashboard")
        }else{
          alert(`${res.data.Status}`+" Enter details correctly")
        }
        console.log(res)
      } catch (error) {
        console.log(error);
      }

  }

  return (
    <div>
      <form onSubmit={handleSubmit}
        style={{
          borderRadius: "15px",
          padding: "20px 40px",
          backgroundColor: "#D3E9FE",
          width: "65%",
          marginLeft: "20%",
          marginTop: "10%",
          boxShadow:"1px 5px 3px -3px rgba(0,0,0,0.44)"
        }}
      >
        <h2
          style={{
            marginBottom: "1%",
            marginLeft: "35%",
            color: "#0085FF",
            fontWeight: "bold",
            
          }}
        >
          Personal Details
        </h2>
        <div class="form-group">
          <label className="lables" for="email">
            Email
          </label>
          <div className="custom_input">
            <input
              class="details-input form-control"
              type="email"
              id="email"
              placeholder=""
              onChange={(e)=>{setvalues({...values,email:e.target.value})}}
            />
          </div>
        </div>

        <div class="form-group">
          <label className="lables" for="password">
            Password
          </label>
          <div className="custom_input">
            <input
              class="details-input form-control"
              type="password"
              id="password"
              placeholder=""
              onChange={(e)=>{setvalues({...values,password:e.target.value})}}
            />
          </div>
        </div>


        <div class="form-group">
          <label className="lables" for="name">
            Name
          </label>
          <div className="custom_input">
            <input
              class="details-input form-control"
              type="text"
              id="name"
              placeholder=""
              onChange={(e)=>{setvalues({...values,name:e.target.value})}}
            />
          </div>
        </div>

        <div class="form-group">
          <label className="lables" for="address">
            Permanent Address
          </label>
          <div class="custom_input">
            <input
              class="details-input form-control"
              type="text"
              id="address"
              placeholder=""
              onChange={(e)=>{setvalues({...values,address:e.target.value})}}
            />
          </div>
        </div>

        <div class="form-group">
          <label className="lables" for="tin">
            Tax identification number (TIN)
          </label>
          <div class="custom_input">
            <input
              className="details-input form-control"
              type="text"
              id="tin"
              placeholder=""
              onChange={(e)=>{setvalues({...values,tin:e.target.value})}}
            />
          </div>
        </div>

        <div class="form-group">
          <label className="lables" for="employername">
            Name of the employer
          </label>
          <div class="custom_input">
            <input
              className="details-input form-control"
              type="text"
              id="nameofemployer"
              placeholder=""
              onChange={(e)=>{setvalues({...values,nameofemployer:e.target.value})}}
            />
          </div>
        </div>

        <label className="lables" for="exampleInputPassword1">
            Contact Numbers
          </label><br></br><br></br>
        <div className="form-group contact" >
          <label className="lables" for="mobileno">
            Mobile
          </label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="text"
              id="mobileno"
              placeholder=""
              onChange={(e)=>{setvalues({...values,mobileno:e.target.value})}}
            />
          </div>
        </div>


        <div className="form-group contact">
          <label className="lables" for="officeno">
            Office
          </label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="text"
              id="officeno"
              placeholder=""
              onChange={(e)=>{setvalues({...values,officeno:e.target.value})}}
            />
          </div>
        </div>

        <div className="form-group contact">
          <label className="lables" for="homeno">
            Home
          </label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="text"
              id="homeno"
              placeholder=""
              onChange={(e)=>{setvalues({...values,homeno:e.target.value})}}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="lables" for="birthday">
            Date of birth
          </label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="date"
              id="birthday"
              placeholder=""
              onChange={(e)=>{setvalues({...values,birthday:e.target.value})}}
            />
          </div>
        </div>


        
        <button
          className="btn btn-primary"
          style={{ marginTop: "3%", marginLeft: "0%" }}
        >
          Back
        </button>

        <button
          
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "3%", marginLeft: "70%" }}
        >
          Save & Continue
        </button>
        <br></br>
        <br></br>

      </form>
      <br></br>
      <br></br>
    </div>
  );
}

export default PersonalDetails;
