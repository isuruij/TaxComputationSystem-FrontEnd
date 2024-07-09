import axios from "axios";
import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import trashCan from "../../../assets/trash-can-solid.svg";

import "./List.css";

const InboxList = () => {
  const navigate = useNavigate();
  const [recivedemail, setrecivedemail] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  useEffect(() => {
    const fetchAllReciveemail = async () => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getinboxemail`);
        console.log(res.data);
        setrecivedemail(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllReciveemail();
  }, [base_url]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredemail = recivedemail.filter((email) =>
    email.Taxpayer?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedEmails = filteredemail.sort((a, b) => new Date(b.receivedDate) - new Date(a.receivedDate));

  const handleDelete = async (emailId) => {
    try {
      const shouldDelete = window.confirm("Are you sure you want to delete this email?");
      if (shouldDelete) {
        await axios.delete(`${base_url}/api/SuperAdmin/deletetInboxemail/${emailId}`);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleShowModal = (email) => {
    setSelectedEmail(email);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedEmail(null);
  };
  const handleOpenDocument = () => {
    if (selectedEmail && selectedEmail.filePath) {
      window.open(selectedEmail.filePath, '_blank');
    }
  };

  const containerStyle = {
    textAlign: "left",
    display: "block",
    marginLeft: "4%",
    maxHeight: "630px",
    overflowY: "auto",
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder=" Search..."
          className="search-input"
          style={{ border: "none", backgroundColor: "white", borderRadius: "10px" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <h3 style={{ paddingLeft: "50px", color: "#0085FF" }}>Sent Messages</h3>
        <ListGroup variant="flush" style={containerStyle}>
          {sortedEmails.map((email) => (
            <ListGroup.Item
              key={email.emailId}
              style={{ borderRadius: "10px", margin: "5px", border: "2px solid #0085FF" }}
              onClick={() => handleShowModal(email)}
            >
              <div className="custom-button-7">
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <div style={{ fontSize: "20px" }}>Tax Computation System</div>
                  <div style={{ fontSize: "12px", textAlign: "right", color: "#0085FF" }}>
                    {new Date(email.receivedDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'long' })}<br />
                    {new Date(email.receivedDate).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })}
                  </div>
                </div>
                <div style={{ fontSize: "15px", color: "#0085FF" }}>{email.subject || 'No Subject'}</div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <div style={{ fontSize: "12px", fontStyle: "italic", width: "80%" }}>
                    {email.message ? email.message.split(' ').slice(0, 25).join(' ') + '...' : 'No content'}
                  </div>
                  <div>
                    <button type="button" className="btn btn-primary custom-button-0" onClick={(e) => { e.stopPropagation(); handleDelete(email.emailId); }}>
                      <img src={trashCan} alt="" style={{ width: "20px" }} />
                    </button>
                  </div>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title style={{ color: "#0085FF" }}>{selectedEmail?.subject || 'No Subject'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <strong>To:</strong> {selectedEmail?.Taxpayer?.name || 'No Taxpayer Name'}
          </div>
          <div>
            <strong>Email:</strong> {selectedEmail?.Taxpayer?.email || 'No Email'}
          </div>
          <div>
            <strong>Sent:</strong> {new Date(selectedEmail?.receivedDate).toLocaleString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false })}
          </div>
          <hr />
          <div>
            {selectedEmail?.message || 'No content'}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleOpenDocument}>
              Open Document
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default InboxList;
