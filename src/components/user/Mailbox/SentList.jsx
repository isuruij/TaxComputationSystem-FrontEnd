import axios from "axios";
import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import trashCan from "../../../assets/trash-can-solid.svg";
import "./List.css";
import { Modal, Button } from "react-bootstrap";

const SentList = () => {
  const navigate = useNavigate();
  const [sentEmails, setSentEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  useEffect(() => {
    const fetchAllSentEmails = async () => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getsentemail`);
        console.log(res.data);
        setSentEmails(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllSentEmails();
  }, [base_url]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmails = sentEmails.filter((email) =>
    email.Taxpayer?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedEmails = filteredEmails.sort((a, b) => new Date(b.sentDate) - new Date(a.sentDate));

  const handleDelete = async (emailId) => {
    try {
      const shouldDelete = window.confirm("Are you sure you want to delete this email?");
      if (shouldDelete) {
        await axios.delete(`${base_url}/api/SuperAdmin/deleteSentemail/${emailId}`);
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

  const containerStyle = {
    textAlign: "left",
    display: "block",
    marginLeft: "4%",
    maxHeight: "630px",
    overflowY: "auto",
  };

  return (
    <div>
      <div className="search-container-ts">
        <input
          type="text"
          placeholder=" Search..."
          className="search-input-ts"
          style={{ border: "none", backgroundColor: "white", borderRadius: "10px" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <h3 style={{ paddingLeft: "50px", color: "#0085FF" }}>Inbox</h3>
        <ListGroup variant="primary" style={containerStyle}>
          {sortedEmails.map((email) => (
            <ListGroup.Item
              key={email.emailId}
              style={{ borderRadius: "10px", margin: "5px", border: "2px solid #0085FF" }}
              onClick={() => handleShowModal(email)}
            >
              <div className="custom-button-7">
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <div style={{ fontSize: "20px" }}>{email.Taxpayer?.name || 'No Taxpayer Name'}</div>
                  <div style={{ fontSize: "12px", textAlign: "right", color: "blue" }}>
                    {new Date(email.sentDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'long' })}<br />
                    {new Date(email.sentDate).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })}
                  </div>
                </div>
                <div style={{ fontSize: "15px", color: "blue" }}>{email.subject || 'No Subject'}</div>
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
      {selectedEmail && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header>
            <Modal.Title style={{ color: "#0085FF" }}>{selectedEmail?.subject || 'No Subject'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <strong>From:</strong> Tax computatation System
            </div>
            <div>
              <strong>Received:</strong> {selectedEmail?.sentDate ? new Date(selectedEmail.sentDate).toLocaleString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }) : 'Date not available'}
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
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default SentList;
