import React from "react";
import "./TaxView.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Axios from "axios";
import { jwtDecode } from "jwt-decode";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import pdfgen from "../../../assets/pdf_gen.svg";
import pdfdown from "../../../assets/pdf_down.svg";

function TaxView() {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const cookieValue = Cookies.get("token");
  const userId = jwtDecode(cookieValue).id;

  //Popup for confirmation
  const [show, setShow] = useState(false); //for modal
  const [msg, setMsg] = useState("");
  const [filePath, setFilePath] = useState("");
  const [show2, setShow2] = useState(true);

  const handleClose = () => setShow(false);

  const [userDetails, setUserDetails] = useState([]);
  const [listOfTaxDetails, setListOfTaxDetails] = useState([]);
  const [listOfTaxDetails2, setListOfTaxDetails2] = useState([]);

  const getYearFromDate = (dateString) => {
    if (dateString) {
      return dateString.split("-")[0];
    }
    return "";
  };

  function generatePDF() {
    Axios.get(`${base_url}/api/taxpayer/generate-report/${userId}`)
      .then((response) => {
        if (response.data.Status) {
          console.log(response.data.filepath);
          setFilePath(response.data.filepath);
          setShow2(false);
          setMsg(response.data.Status);
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 3000); // 3 seconds delay
        } else {
          console.error("Error generating report:", response.data.status);
        }
      })
      .catch((error) => {
        setMsg(er.response.data.Status);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000); // 3 seconds delay
      });
  }

  //Download file(under development not working)
  const downloadPDF = (filePath) => {
    console.log(filePath);
    window.open(filePath, "_blank");
    // const link = document.createElement("a");
    // link.href = filePath;
    // link.download = `tax_report_${userId}.pdf`;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    // Axios({
    //   url: filePath,
    //   method: "GET",
    //   responseType: "blob", // Ensure responseType is set to 'blob' for binary data
    //   credentials: true,
    // })
    //   .then((response) => {

    //     // Create a Blob from the PDF response data
    //     const blob = new Blob([response.data], { type: "application/pdf" });

    //     // Create a link element, hide it, direct it towards the Blob, and then 'click' it programmatically
    //     const link = document.createElement("a");
    //     link.href = window.URL.createObjectURL(blob);
    //     link.download = `tax_report_${userId}.pdf`;

    //     // Append the link to the body
    //     document.body.appendChild(link);

    //     try {
    //       // Programmatically click the link to trigger the download
    //       link.click();
    //     } catch (error) {
    //       console.log(error);
    //     }

    //     // Remove the link from the body
    //     document.body.removeChild(link);
    //     setMsg("File Downloaded!");
    //     setShow(true);
    //     setTimeout(() => {
    //       setShow(false);
    //     }, 3000); // 3 seconds delay
    //   })
    //   .catch((error) => {
    //     console.error("Error downloading PDF:", error);
    //     setMsg("Error downloading PDF:");
    //     setShow(true);
    //     // downloadFile(filePath);
    //     setTimeout(() => {
    //       setShow(false);
    //     }, 3000); // 3 seconds delay
    //   });
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShow(false)}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      ></link>
      <div className="Tax-view-header">
        <h6>Mr.XXXXXX_XXX</h6>
        <h6>TIN NO: XXXXXXX</h6>
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
              -listOfTaxDetails2.TaxCredit +
              (listOfTaxDetails.incomeTax2 +
                (listOfTaxDetails.TerminalTax +
                  listOfTaxDetails.CapitalTax +
                  listOfTaxDetails.WHTNotDeductTax) -
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
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {show2 && (
          <button
            className="btn btn-primary custom-btn"
            onClick={() => generatePDF()}
          >
            Generate PDF{" "}
            <img
              src={pdfgen}
              style={{ alignItems: "left", textAlign: "left" }}
              alt="Icon"
            />
          </button>
        )}
        {!show2 && (
          <button
            className="btn btn-primary custom-btn"
            onClick={() => downloadPDF(filePath)}
          >
            Download PDF{" "}
            <img
              src={pdfdown}
              style={{ alignItems: "left", textAlign: "left" }}
              alt="Icon"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default TaxView;
