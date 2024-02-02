import React from "react";
import "../Incomedetails/Incomedetails.css";

function Incomedetails() {
  return (
    <div>
      <form
        style={{
          borderRadius: "15px",
          padding: "20px 40px",
          backgroundColor: "#D3E9FE",
          width: "65VW",
          boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
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
          Income Details
        </h2>
        <label className="lables" for="exampleInputPassword1">
          Type of income
        </label>
        <br></br>
        <br></br>
        <div className="form-group contact">
          <label className="lables" for="mobileno">
            Employement Income
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
            Investment Income
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
            Business income
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

        <div class="form-group contact">
          <label className="lables" for="homeno">
            Other income
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
        <br></br>

        <button
          class="btn btn-primary"
          style={{ marginTop: "3%", marginLeft: "0%" }}
        >
          Back
        </button>

        <button
          class="btn btn-primary"
          style={{ marginTop: "3%", marginLeft: "70%" }}
          type="submit"
        >
          Save & Continue
        </button>
        <br></br>
        <br></br>
      </form>
    </div>
  );
}

export default Incomedetails;
