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
          width: "78VW",
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
          Income Details
        </h2>
        <label className="lables">
          Type of income
        </label>
        <br></br>
        <br></br>
        <div className="form-group contact">
          <label className="lables">
            Employement Income
          </label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="text"
              id="mobileno"
              placeholder=""
            />
          </div>
        </div>

        <div className="form-group contact">
          <label className="lables">
            Investment Income
          </label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="number"
              id="officeno"
              placeholder=""
            />
          </div>
        </div>

        <div className="form-group contact">
          <label className="lables">
            Business income
          </label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="number"
              id="homeno"
              placeholder=""
            />
          </div>
        </div>

        <div className="form-group contact">
          <label className="lables">
            Other income
          </label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="number"
              id="homeno"
              placeholder=""
            />
          </div>
        </div>
        <br></br>

        <label className="lables">How do you know DPR</label>
        <br></br>
        <br></br>

        <div className="form-check">
          <input
            type="radio"
            id="friend"
            name="dprSource"
            className=" form-check-input"
          />
          <label className="form-check-label lables">
            Introduced by a Friend
          </label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            id="family"
            name="dprSource"
            className="form-check-input"
          />
          <label className="form-check-label lables">
            Introduced by a Family Member
          </label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            id="company"
            name="dprSource"
            className="form-check-input"
          />
          <label className="form-check-label lables">
            Introduced by the Company
          </label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            id="socialMedia"
            name="dprSource"
            className="form-check-input"
          />
          <label  className="form-check-label lables">
            Social Media
          </label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            id="dprWebsite"
            name="dprSource"
            className="form-check-input"
          />
          <label className="form-check-label lables">
            DPR Website
          </label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            id="other"
            name="dprSource"
            className="form-check-input"
          />
          <label className="form-check-label lables">
            Other
          </label>
        </div>
        <br></br>

        <label className="form-check-label lables">
          Are you agree with annual fee
        </label>
        <div className="form-check">
          <input
            type="radio"
            id="agree"
            name="annualFee"
            className="form-check-input"
          />
          <label className="form-check-label lables">
            Yes
          </label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            id="disagree"
            name="annualFee"
            className="form-check-input"
          />
          <label className="form-check-label lables">
            No
          </label>
        </div>

        

        <button
          className="btn btn-primary"
          style={{ marginTop: "3%", marginLeft: "70%" }}
          type="submit"
        >
          Update
        </button>
        <br></br>
        <br></br>
      </form>
    </div>
  );
}

export default Incomedetails;