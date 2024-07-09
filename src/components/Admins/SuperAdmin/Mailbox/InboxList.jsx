import axios from "axios";
import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import trashCan from "../../../../assets/trash-can-solid.svg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./List.css";

const InboxList = () => {
  const navigate = useNavigate();
  const [recivedemail, setrecivedemail] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredemail = recivedemail.filter((email) =>
    email.Taxpayer?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to sort emails by receivedDate in descending order
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

  const containerStyle = {
    textAlign: "left",
    display: "block",
    marginLeft: "4%",
    maxHeight: "630px",
    overflowY: "auto",
  };

  return (
    <div>
      <div className="search-container-as">
        <input
          type="text"
          placeholder=" Search..."
          className="search-input-as"
          style={{ border: "none", backgroundColor: "white", borderRadius: "10px" }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <h3 style={{ paddingLeft: "50px", color: "#008060" }}>Inbox</h3>
        <ListGroup variant="flush" style={containerStyle}>
          {sortedEmails.map((email) => (
            <ListGroup.Item key={email.emailId} style={{ borderRadius: "10px", margin: "5px", border: "2px solid #B3F9D7" }}>
              <button className="custom-button-6" onClick={() => handleShowModal(email)}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <div style={{ fontSize: "20px" }}>{email.Taxpayer?.name || 'No Taxpayer Name'}</div>
                  <div style={{ fontSize: "12px", textAlign: "right", color: "#008060" }}>
                    {new Date(email.receivedDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'long' })}<br />
                    {new Date(email.receivedDate).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })}
                  </div>
                </div>
                <div style={{ fontSize: "15px", color: "#008060" }}>{email.subject || 'No Subject'}</div>
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
              </button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header>
          <Modal.Title style={{ color: "#008060" }}>{selectedEmail?.subject || 'No Subject'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <strong>From:</strong> {selectedEmail?.Taxpayer?.name || 'No Taxpayer Name'}
          </div>
          <div>
            <strong>Email:</strong> {selectedEmail?.Taxpayer?.email || 'No Email'}
          </div>
          <div>
            <strong>Received:</strong> {selectedEmail?.receivedDate ? new Date(selectedEmail.receivedDate).toLocaleString('en-GB', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false }) : 'Date not available'}
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
    </div>
  );
};

export default InboxList;
