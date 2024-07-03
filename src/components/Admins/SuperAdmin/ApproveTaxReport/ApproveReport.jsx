import React, { useState, useEffect } from "react";
import "./ApproveReport.css"; // For custom styles
import approve from "../../../../assets/approve.svg";
import eye from "../../../../assets/eye.svg";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ApproveReport = () => {
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  const [reportRequests, setReportRequests] = useState([]);
  //Popup for confirmation
  const [show, setShow] = useState(false); //for modal
  const [msg, setMsg] = useState("");

  const handleClose = () => setShow(false);

  useEffect(() => {
    axios
      .get(`${base_url}/api/SuperAdmin/getTaxReport`)
      .then((response) => {
        console.log(response.data.data);
        setReportRequests(response.data.data);
      })
      .catch((error) =>
        console.error("Error fetching report requests:", error)
      );
  }, []);

  const viewReport = (path) => {
    window.open(path, "_blank");
  };

  const approveReport = (reportId) => {
    axios
      .post(`${base_url}/api/SuperAdmin/verifyTaxReport`, { reportId })
      .then((response) => {
        setMsg(response.data.message);
        setShow(true);
        setTimeout(() => {
          setShow(false);
        }, 3000); // 3 seconds delay
      })
      .then(() => {
        setReportRequests((prevRequests) =>
          prevRequests.map((request) =>
            request.reportId === reportId
              ? { ...request, isVerified: true }
              : request
          )
        );
      })
      .catch((error) => console.error("Error verifying report:", error));
  };

  return (
    <div className="report-list">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShow(false)}>
            Okay
          </Button>
        </Modal.Footer>
      </Modal>
      <h2>Tax Report Requests</h2>
      {reportRequests.length > 0 ? (
        reportRequests.map((request, index) => (
          <div key={index} className="report-item">
            <span>{request.taxpayerName || "Unknown Taxpayer"}</span>
            <div className="buttons-container">
              <button
                className="view-report"
                onClick={() => viewReport(request.path)}
              >
                <img
                  src={eye}
                  style={{
                    width: "13%",
                    marginRight: "8px",
                  }}
                  alt="Icon"
                />
                View Report
              </button>
              {request.isVerified ? (
                <span className="verified-label">Verified</span>
              ) : (
                <button
                  className="approve-report"
                  onClick={() => approveReport(request.reportId)}
                >
                  <img
                    src={approve}
                    style={{
                      width: "10%",
                      marginRight: "8px",
                    }}
                    alt="Icon"
                  />
                  Approve Report
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No report requests found.</p>
      )}
    </div>
  );
};

export default ApproveReport;
