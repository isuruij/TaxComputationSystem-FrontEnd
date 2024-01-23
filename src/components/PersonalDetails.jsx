import React from "react";

function PersonalDetails() {
  return (
    <div>
      <form
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
          <div class="custom_input">
            <input
              class="details-input form-control"
              type="email"
              id="email"
              placeholder=""
            />
          </div>
        </div>

        <div class="form-group">
          <label className="lables" for="password">
            Password
          </label>
          <div class="custom_input">
            <input
              class="details-input form-control"
              type="password"
              id="password"
              placeholder=""
            />
          </div>
        </div>


        <div class="form-group">
          <label className="lables" for="name">
            Name
          </label>
          <div class="custom_input">
            <input
              class="details-input form-control"
              type="password"
              id="name"
              placeholder=""
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
              type="password"
              id="address"
              placeholder=""
            />
          </div>
        </div>

        <div class="form-group">
          <label className="lables" for="tin">
            Tax identification number (TIN)
          </label>
          <div class="custom_input">
            <input
              class="details-input form-control"
              type="password"
              id="tin"
              placeholder=""
            />
          </div>
        </div>

        <div class="form-group">
          <label className="lables" for="employername">
            Name of the employer
          </label>
          <div class="custom_input">
            <input
              class="details-input form-control"
              type="password"
              id="employername"
              placeholder=""
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
          <div class="custom_input">
            <input
              class="details-input form-control"
              type="password"
              id="mobileno"
              placeholder=""
            />
          </div>
        </div>


        <div class="form-group contact">
          <label className="lables" for="officeno">
            Office
          </label>
          <div class="custom_input">
            <input
              class="details-input form-control"
              type="password"
              id="officeno"
              placeholder=""
            />
          </div>
        </div>

        <div class="form-group contact">
          <label className="lables" for="homeno">
            Home
          </label>
          <div class="custom_input">
            <input
              class="details-input form-control"
              type="password"
              id="homeno"
              placeholder=""
            />
          </div>
        </div>

        <div class="form-group">
          <label className="lables" for="birthday">
            Date of birth
          </label>
          <div class="custom_input">
            <input
              class="details-input form-control"
              type="date"
              id="birthday"
              placeholder=""
            />
          </div>
        </div>


        
        <button
          class="btn btn-primary"
          style={{ marginTop: "3%", marginLeft: "0%" }}
        >
          Back
        </button>

        <button
          class="btn btn-primary"
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
