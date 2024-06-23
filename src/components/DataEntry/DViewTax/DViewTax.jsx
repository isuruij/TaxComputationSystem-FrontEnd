import React from "react";
import "./DViewTax.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function DViewTax() {
  //get user name and tin

  //variable
  let { id } = useParams();
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`${base_url}/api/dataentry/getUserDetails/${id}`)
      .then((response) => {
        console.log(response.data.Data);
        setUserDetails(response.data.Data);
      });
  }, []);

  return (
    <div className="dTax-view-page">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      ></link>
      {/*This is User info box */}
      <div className="dTax-view-header">
        <h6>Mr. {userDetails.name}</h6>
        <h6>TIN NO: {userDetails.tin}</h6>
        <h6>INCOME TAX COMPUTATION REPORT</h6>
        <h6>YEAR OF ASSESSMENT 2022/2023</h6>
      </div>
      {/*This is Total tax liability */}
      <div className="dTotal-liability">
        <h4 className="dTopic-1">Total Tax Liability For Y/A 2022/23</h4>
        <div className="dTot-amount">
          LKR
          <br />
          <h1>589,400.00</h1>
          <p>*This is not certified.</p>
        </div>
        <div className="dnine-months">
          <div>
            <h6>Total Tax Liability for 09 Months</h6>
          </div>
          <div>
            <h6>200,400.00LKR</h6>
          </div>
        </div>
        <p className="dsmall-p-one">(01/04/2022-31/12/2022)</p>
        <div className="dthree-months">
          <div>
            <h6>Total Tax Liability for 09 Months</h6>
          </div>
          <div>
            <h6>389,000.00LKR</h6>
          </div>
        </div>
        <p className="dsmall-p-one">(01/01/2023-31/03/2023)</p>
      </div>

      {/*This is tax liability for 9 months*/}

      <div className="dcontainer">
        <div className="dCal-nine-months">
          <h4 className="dTopic-2">Calculation For 09 Months</h4>
          <p className="dTopic-2">(01/04/2022-31/12/2022)</p>
          <div>
            <div>
              <h6>Total Income for 09 Months</h6>
            </div>
            <div>
              <h6>5,200,000.00LKR</h6>
            </div>
          </div>
          <div>
            <div>
              <h6>Total Qualifing Payments & Reliefs</h6>
            </div>
            <div>
              <h6>0.00LKR</h6>
            </div>
          </div>
          <p className="dsmall-p-two">*Max upto 0.9M</p>
          <div>
            <div>
              <h6>Total Tax Credits</h6>
            </div>
            <div>
              <h6>0.00LKR</h6>
            </div>
          </div>
          <div>
            <div>
              <h6>Total Taxable Income</h6>
            </div>
            <div>
              <h6>1,700,000.00LKR</h6>
            </div>
          </div>
          <div>
            <div>
              <h6>
                <i className="fas fa-circle"></i>Tax on Total Taxable Income
              </h6>
            </div>
            <div>
              <h6>200,400.00LKR</h6>
            </div>
          </div>
          <div>
            <div>
              <h6>
                <i className="fas fa-circle"></i>Tax On Other Benefits
              </h6>
            </div>
            <div>
              <h6>0.00LKR</h6>
            </div>
          </div>
          <p className="dsmall-p-two">(ex:-Terminal, Capital gain, etc.)</p>
          <div className="dnine-liability">
            <div>
              <h4>
                <i className="fas fa-star"></i>Total Tax Liability
              </h4>
            </div>
            <div>
              <h4>200,400.00LKR</h4>
            </div>
          </div>
        </div>

        {/*This is tax liability for 3 months*/}

        <div className="dCal-three-months">
          <h4 className="dTopic-3">Calculation For 03 Months</h4>
          <p className="dTopic-3">(01/01/2023-31/03/2023)</p>
          <div>
            <div>
              <h6>Total Income for 03 Months</h6>
            </div>
            <div>
              <h6>1,700,000.00LKR</h6>
            </div>
          </div>
          <div>
            <div>
              <h6>Total Qualifing Payments & Reliefs</h6>
            </div>
            <div>
              <h6>0.00LKR</h6>
            </div>
          </div>
          <p className="dsmall-p-two">*Max upto 0.9M</p>
          <div>
            <div>
              <h6>Total Tax Credits</h6>
            </div>
            <div>
              <h6>0.00LKR</h6>
            </div>
          </div>
          <div>
            <div>
              <h6>Total Taxable Income</h6>
            </div>
            <div>
              <h6>1,700,000.00LKR</h6>
            </div>
          </div>
          <div>
            <div>
              <h6>
                <i className="fas fa-circle"></i>Tax on Total Taxable Income
              </h6>
            </div>
            <div>
              <h6>389,000.00LKR</h6>
            </div>
          </div>
          <div>
            <div>
              <h6>
                <i className="fas fa-circle"></i>Tax On Other Benefits
              </h6>
            </div>
            <div>
              <h6>0.00LKR</h6>
            </div>
          </div>
          <p className="dsmall-p-two">(ex:-Terminal, Capital gain, etc.)</p>
          <div className="dthree-liability">
            <div>
              <h4>
                <i className="fas fa-star"></i>Total Tax Liability
              </h4>
            </div>
            <div>
              <h4>389,000.00LKR</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DViewTax;
