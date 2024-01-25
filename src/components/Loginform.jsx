import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Loginform() {

  const [values, setvalues] = useState({

    email:"",
    password:"",
  });

  const navigate = useNavigate();

  const handleSubmit =async (event)=>{
    event.preventDefault();
    try {
      const res = await Axios.post("http://localhost:3000/api/employees/login",values);
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
          width: "25%",
          marginLeft: "35%",
          marginTop: "10%",
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        }}
      >
        <h2
          style={{
            marginBottom: "10%",
            marginLeft: "30%",
            color: "#0085FF",
            fontWeight: "bold",
          }}
        >
          Log in
        </h2>
        <div class="form-group" style={{ marginLeft: "10%" }}>
          <label className="lables" for="email">
            Email
          </label>
          <div class="custom_input">
            <input
              style={{ width: "95%" }}
              class="details-input form-control "
              type="email"
              id="exampleInputEmail1"
              placeholder=""
              onChange={(e)=>{setvalues({...values,email:e.target.value})}}
            />
          </div>
        </div>

        <div class="form-group" style={{ marginLeft: "10%" }}>
          <label className="lables" for="exampleInputPassword1">
            Password
          </label>
          <div class="custom_input">
            <input
              style={{ width: "95%" }}
              class="details-input form-control"
              type="password"
              id="exampleInputPassword1"
              placeholder=""
              onChange={(e)=>{setvalues({...values,password:e.target.value})}}
            />
          </div>
          <p style={{ color: "#049370", fontSize: "13px", marginTop: "5%" }}>
            Forget password
          </p>
        </div>

        <button
          type="submit"
          class="btn btn-primary"
          style={{ marginTop: "3%", marginLeft: "33%" }}
        >
          Login
        </button>
        <p
          style={{
            marginLeft: "10%",
            marginTop: "5%",
            color: "#049370",
            fontSize: "13px",
          }}
        >
          Not a member ? Sign Up
        </p>
      </form>
    </div>
  );
}

export default Loginform;
