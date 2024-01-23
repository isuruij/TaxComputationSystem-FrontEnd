import React from "react";

function Loginform() {
  return (
    <div>
      <form style={{borderRadius:"15px", padding:"20px 40px", backgroundColor:"#D3E9FE", width: "25%", marginLeft: "35%", marginTop: "10%",boxShadow:"1px 5px 3px -3px rgba(0,0,0,0.44)" }}>
        <h2 style={{marginBottom:"10%", marginLeft:"30%", color:"#0085FF", fontWeight:"bold"}}>Log in</h2>
        <div class="form-group" style={{marginLeft:"10%"}}>
          <label className="lables" for="email">Email</label>
          <div class="custom_input">
            <input
              class="input form-control"
              type="email"
              id="exampleInputEmail1"
              placeholder=""
            />
          </div>
        </div>

        <div class="form-group" style={{marginLeft:"10%"}}>
          <label className="lables" for="exampleInputPassword1">Password</label>
          <div class="custom_input">
            <input
              class="input form-control"
              type="password"
              id="exampleInputPassword1"
              placeholder=""
            />
          </div>
          <p style={{color:"#049370",fontSize:"13px",marginTop:"5%"  }}>Forget password</p>

        </div>

        <button
          type="submit"
          class="btn btn-primary"
          style={{ marginTop: "3%", marginLeft: "33%" }}
        >
          Login
        </button>
        <p style={{marginLeft:"10%", marginTop:"5%", color:"#049370", fontSize:"13px"}}>Not a member ? Sign Up</p>
      </form>
    </div>
  );
}

export default Loginform;
