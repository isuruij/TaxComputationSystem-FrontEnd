import React from "react";
import "./TaxView.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";
import { jwtDecode } from "jwt-decode";

function TaxView() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const cookieValue = Cookies.get("token");
  const userId = jwtDecode(cookieValue).id;

  const [userDetails, setUserDetails] = useState([]);
  const [listOfTaxDetails, setListOfTaxDetails] = useState([]);
  const [listOfTaxDetails2, setListOfTaxDetails2] = useState([]);

  const getYearFromDate = (dateString) => {
    if (dateString) {
      return dateString.split("-")[0];
    }
    return "";
  };

  //Get tax user details
  useEffect(() => {
    Axios.get(`${base_url}/api/taxpayer/getUserDetails/${userId}`).then(
      (response) => {
        setUserDetails(response.data.Data);
      }
    );
  }, []);

  //Get tax calculation details
  useEffect(() => {
    Axios.get(`${base_url}/api/taxpayer/getTaxCalDetails/${userId}`).then(
      (response) => {
        setListOfTaxDetails(response.data.Data);
        setListOfTaxDetails2(response.data.Data2);
      }
    );
  }, []);

  return (
    <div className="Tax-view-page">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      ></link>
      <div className="Tax-view-header">
        <h6>Mr.{userDetails.name}</h6>
        <h6>TIN NO: {userDetails.tin}</h6>
        <h6>INCOME TAX COMPUTATION REPORT</h6>
        <h6>
          YEAR OF ASSESSMENT {getYearFromDate(listOfTaxDetails.createdAt)}/
          {parseFloat(getYearFromDate(listOfTaxDetails.createdAt)) + 1}
        </h6>
      </div>

      <div className="Total-liability">
        <h4 className="Topic-1">
          Total Tax Liability For Year{" "}
          {getYearFromDate(listOfTaxDetails.createdAt)}/
          {parseFloat(getYearFromDate(listOfTaxDetails.createdAt)) + 1}
        </h4>
        <div className="Tot-amount">
          LKR
          <br />
          <h1>
            {listOfTaxDetails.incomeTax +
              ((listOfTaxDetails.TerminalTax +
                listOfTaxDetails.CapitalTax +
                listOfTaxDetails.WHTNotDeductTax) *
                9) /
                12 -
              listOfTaxDetails2.TaxCredit +
              (listOfTaxDetails.incomeTax2 +
                ((listOfTaxDetails.TerminalTax +
                  listOfTaxDetails.CapitalTax +
                  listOfTaxDetails.WHTNotDeductTax) *
                  3) /
                  12 -
                listOfTaxDetails2.TaxCredit2)}
          </h1>
          <p>*This is not certified.</p>
        </div>
        <div className="nine-months">
          <div>
            <h6>Total Tax Liability for 09 Months</h6>
          </div>
          <div>
            <h6>
              {listOfTaxDetails.incomeTax +
                ((listOfTaxDetails.TerminalTax +
                  listOfTaxDetails.CapitalTax +
                  listOfTaxDetails.WHTNotDeductTax) *
                  9) /
                  12 -
                listOfTaxDetails2.TaxCredit}
              LKR
            </h6>
          </div>
        </div>
        {/* <p className="small-p-one">(01/04/2022-31/12/2022)</p> */}
        <div className="three-months">
          <div>
            <h6>Total Tax Liability for 03 Months</h6>
          </div>
          <div>
            <h6>
              {listOfTaxDetails.incomeTax2 +
                ((listOfTaxDetails.TerminalTax +
                  listOfTaxDetails.CapitalTax +
                  listOfTaxDetails.WHTNotDeductTax) *
                  3) /
                  12 -
                listOfTaxDetails2.TaxCredit2}
              LKR
            </h6>
          </div>
        </div>
        {/* <p className="small-p-one">(01/01/2023-31/03/2023)</p> */}
      </div>

      <div className="container">
        <div className="Cal-nine-months">
          <h4 className="Topic-2">Calculation For 09 Months</h4>
          {/* <p className="Topic-2">(01/04/2022-31/12/2022)</p> */}
          <div>
            <div>
              <h6>Total Income for 09 Months</h6>
            </div>
            <div>
              <h6>{listOfTaxDetails2.TotAssessableIncome}LKR</h6>
            </div>
          </div>
          <div>
            <div>
              <h6>Total Qualifing Payments & Reliefs</h6>
            </div>
            <div>
              <h6>
                {listOfTaxDetails2.Reliefs +
                  (listOfTaxDetails2.Choosed_QP * 9) / 12}
                LKR
              </h6>
            </div>
          </div>
          {/* <p className="small-p-two">*Max upto 0.9M</p> */}

          <div>
            <div>
              <h6>Total Taxable Income</h6>
            </div>
            <div>
              <h6>{listOfTaxDetails.taxableAmount}LKR</h6>
            </div>
          </div>
          <div>
            <div>
              <h6>
                <i className="fas fa-circle"></i>Tax on Total Taxable Income
              </h6>
            </div>
            <div>
              <h6>{listOfTaxDetails.incomeTax}LKR</h6>
            </div>
          </div>
          <div>
            <div>
              <h6>
                <i className="fas fa-circle"></i>Tax On Other Benefits
              </h6>
            </div>
            <div>
              <h6>
                {((listOfTaxDetails.TerminalTax +
                  listOfTaxDetails.CapitalTax +
                  listOfTaxDetails.WHTNotDeductTax) *
                  9) /
                  12}
                LKR
              </h6>
            </div>
          </div>
          <p className="small-p-two">(ex:-Terminal, Capital gain, etc.)</p>
          <div>
            <div>
              <h6>
                <i className="fas fa-circle"></i>Total Tax Credits
              </h6>
            </div>
            <div>
              <h6>({listOfTaxDetails2.TaxCredit}LKR)</h6>
            </div>
          </div>
          <div className="nine-liability">
            <div>
              <h4>
                <i className="fas fa-star"></i>Total Tax Liability
              </h4>
            </div>
            <div>
              <h4>
                {listOfTaxDetails.incomeTax +
                  ((listOfTaxDetails.TerminalTax +
                    listOfTaxDetails.CapitalTax +
                    listOfTaxDetails.WHTNotDeductTax) *
                    9) /
                    12 -
                  listOfTaxDetails2.TaxCredit}
                LKR
              </h4>
            </div>
          </div>
        </div>

        <div className="Cal-three-months">
          <h4 className="Topic-3">Calculation For 03 Months</h4>
          {/* <p className="Topic-3">(01/01/2023-31/03/2023)</p> */}
          <div>
            <div>
              <h6>Total Income for 03 Months</h6>
            </div>
            <div>
              <h6>{listOfTaxDetails2.TotAssessableIncome2}LKR</h6>
            </div>
          </div>
          <div>
            <div>
              <h6>Total Qualifing Payments & Reliefs</h6>
            </div>
            <div>
              <h6>
                {listOfTaxDetails2.Reliefs2 +
                  (listOfTaxDetails2.Choosed_QP * 3) / 12}
                LKR
              </h6>
            </div>
          </div>
          {/* <p className="small-p-two">*Max upto 0.9M</p> */}

          <div>
            <div>
              <h6>Total Taxable Income</h6>
            </div>
            <div>
              <h6>{listOfTaxDetails.taxableAmount2}LKR</h6>
            </div>
          </div>
          <div>
            <div>
              <h6>
                <i className="fas fa-circle"></i>Tax on Total Taxable Income
              </h6>
            </div>
            <div>
              <h6>{listOfTaxDetails.incomeTax2}LKR</h6>
            </div>
          </div>
          <div>
            <div>
              <h6>
                <i className="fas fa-circle"></i>Tax On Other Benefits
              </h6>
            </div>
            <div>
              <h6>
                {((listOfTaxDetails.TerminalTax +
                  listOfTaxDetails.CapitalTax +
                  listOfTaxDetails.WHTNotDeductTax) *
                  3) /
                  12}
                LKR
              </h6>
            </div>
          </div>
          <p className="small-p-two">(ex:-Terminal, Capital gain, etc.)</p>
          <div>
            <div>
              <h6>
                <i className="fas fa-circle"></i>Total Tax Credits
              </h6>
            </div>
            <div>
              <h6>({listOfTaxDetails2.TaxCredit2}LKR)</h6>
            </div>
          </div>
          <div className="three-liability">
            <div>
              <h4>
                <i className="fas fa-star"></i>Total Tax Liability
              </h4>
            </div>
            <div>
              <h4>
                {listOfTaxDetails.incomeTax2 +
                  ((listOfTaxDetails.TerminalTax +
                    listOfTaxDetails.CapitalTax +
                    listOfTaxDetails.WHTNotDeductTax) *
                    3) /
                    12 -
                  listOfTaxDetails2.TaxCredit2}
                LKR
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaxView;
