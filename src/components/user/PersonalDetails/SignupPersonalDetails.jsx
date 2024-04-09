import React from "react";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import "../PersonalDetails/PersonalDetails.css";
function SignupPersonalDetails() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  useEffect(() => {
    console.log("Cookies:", document.cookie);
  }, []);
  const [warning, setWarning] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [Password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [values, setvalues] = useState({
    email: "",
    password: "",
    name: "",
    address: "",
    tin: "",
    nameofemployer: "",
    mobileno: "",
    officeno: "",
    homeno: "",
    birthday: "",
    agreeToannualFee: "",
    dprSource: "",
  });

  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;

  //submiting PersonalDetails to backend
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    if (Password == "") {
      setWarning("Enter password!");
      return;
    }
    if (confirmPassword == "") {
      setWarning("Confirm password!");
      return;
    }

    if (Password !== confirmPassword) {
      setWarning("Passwords do not match!");
      setPassword("");
      setConfirmPassword("");
      setvalues({ ...values, password: "" });
      return;
    }

    try {
      setLoading(true)
      const res = await Axios.post(`${base_url}/api/taxpayer/register`, values);
      console.log(res.data.message);
      if (res.data.Status === "Success") {
        navigate("/UserHomePage");
      } else if (res.data.message == "already registered email") {
        alert("Email is already registered! Please Enter another one");
        setLoading(false)
      }
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          borderRadius: "15px",
          padding: "20px 40px",
          backgroundColor: "#D3E9FE",
          width: "78vw",

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
          Personal Details
        </h2>

        <div className="form-group">
          <label className="lables">Email</label>
          <div className="custom_input">
            <input
              required
              className="details-input form-control"
              type="email"
              id="email"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, email: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="lables">Name</label>
          <div className="custom_input">
            <input
              required
              className="details-input form-control"
              type="text"
              id="name"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, name: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="lables">Permanent Address</label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="text"
              id="address"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, address: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="lables">Tax identification number (TIN)</label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="text"
              id="tin"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, tin: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="lables">Name of the employer</label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="text"
              id="nameofemployer"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, nameofemployer: e.target.value });
              }}
            />
          </div>
        </div>

        <label className="lables">Contact Numbers</label>
        <br></br>
        <br></br>
        <div className="form-group contact">
          <label className="lables">Mobile</label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="text"
              id="mobileno"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, mobileno: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-group contact">
          <label className="lables">Office</label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="text"
              id="officeno"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, officeno: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-group contact">
          <label className="lables">Home</label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="text"
              id="homeno"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, homeno: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="lables">Date of birth</label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="date"
              id="birthday"
              placeholder=""
              onChange={(e) => {
                setvalues({ ...values, birthday: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="lables">Password</label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="password"
              id="password"
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
                setvalues({ ...values, password: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="lables">Confirm Password</label>
          <div className="custom_input">
            <input
              className="details-input form-control"
              type="password"
              id="password2"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          {warning && <p style={{ color: "red" }}>{warning}</p>}
        </div>

        <label className="lables">How do you know DPR</label>
        <br></br>
        <br></br>

        <div className="form-check">
          <input
            type="radio"
            id="friend"
            name="dprSource"
            value="friend"
            className=" form-check-input"
            onChange={(e) =>
              setvalues({ ...values, dprSource: e.target.value })
            }
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
            value="family"
            className="form-check-input"
            onChange={(e) =>
              setvalues({ ...values, dprSource: e.target.value })
            }
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
            value="company"
            className="form-check-input"
            onChange={(e) =>
              setvalues({ ...values, dprSource: e.target.value })
            }
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
            value="socialmedia"
            className="form-check-input"
            onChange={(e) =>
              setvalues({ ...values, dprSource: e.target.value })
            }
          />
          <label className="form-check-label lables">Social Media</label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            id="dprWebsite"
            name="dprSource"
            value="dprWebsite"
            className="form-check-input"
            onChange={(e) =>
              setvalues({ ...values, dprSource: e.target.value })
            }
          />
          <label className="form-check-label lables">DPR Website</label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            id="other"
            name="dprSource"
            className="form-check-input"
            onChange={(e) =>
              setvalues({ ...values, dprSource: e.target.value })
            }
          />
          <label className="form-check-label lables">Other</label>
        </div>

        <label className="form-check-label lables">
          Are you agree with annual fee
        </label>
        <div className="form-check">
          <input
            type="radio"
            id="agree"
            name="annualFee"
            value="yes"
            className="form-check-input"
            onChange={(e) =>
              setvalues({ ...values, agreeToannualFee: e.target.value })
            }
          />
          <label className="form-check-label lables">Yes</label>
        </div>

        <div className="form-check">
          <input
            type="radio"
            id="disagree"
            name="annualFee"
            value="no"
            className="form-check-input"
            onChange={(e) =>
              setvalues({ ...values, agreeToannualFee: e.target.value })
            }
          />
          <label className="form-check-label lables">No</label>
        </div>

        <div style={{ display: "flex" }}>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "3%", marginLeft: "70%" }}
          disabled={loading}
        >
          {loading ? (
            <>
              <Spinner
                style={{ marginLeft: "11px", marginRight: "11px" }}
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            </>
          ) : (
            "Continue"
          )}
        </button>
        </div>

        <br></br>
        <br></br>
      </form>
      <br></br>
      <br></br>
    </div>
  );
}

export default SignupPersonalDetails;
