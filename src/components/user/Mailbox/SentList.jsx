import axios from "axios";
import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useNavigate } from "react-router-dom";
import trashCan from "../../../assets/trash-can-solid.svg";
import closebutton from "../../../assets/closebutton.svg";
import "./List.css";

const SentList = () => {
  const navigate = useNavigate();
  const [sentdemail, setsentdemail] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  const base_url = import.meta.env.VITE_APP_BACKEND_URL;
  useEffect(() => {
    const fetchAllsentemail = async () => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getsentemail`);
        console.log(res.data);
        setsentdemail(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllsentemail();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredemail = sentdemail.filter((email) =>
    email.Taxpayer?.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
  };

  const handleClosePopup = () => {
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
        <h3 style={{ paddingLeft: "50px", color: "#0085FF" }}>Inbox</h3>
        <ListGroup variant="primary" style={containerStyle}>
          {filteredemail.map((email) => (
            <ListGroup.Item
              key={email.emailId}
              style={{ borderRadius: "10px", margin: "5px", border: "2px solid #0085FF" }}
              onClick={() => handleEmailClick(email)}
            >
              <div className="custom-button-7">
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <div style={{ fontSize: "20px" }}>{email.Taxpayer?.name || 'No Taxpayer Name'}</div>
                  <div style={{ fontSize: "12px", textAlign: "right", color: "#008060" }}>
                    {new Date(email.sentDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'long' })}<br />
                    {new Date(email.sentDate).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })}
                  </div>
                </div>
                <div style={{ fontSize: "15px", color: "#008060" }}>{email.subject || 'No Subject'}</div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <div style={{ fontSize: "12px", fontStyle: "italic", width: "80%" }}>
                    {email.message ? email.message.split(' ').slice(0, 25).join(' ') + '...' : 'No content'}
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn btn-primary custom-button-7"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(email.emailId);
                      }}
                    >
                      <img src={trashCan} alt="" style={{ width: "20px" }} />
                    </button>
                  </div>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      {/* {selectedEmail && (
        <div className="popup-container">
          <div className="popup">
            <img
              src={closebutton}
              alt="Close"
              className="close-button"
              onClick={handleClosePopup}
            />
            <h2 className="popup-title">{selectedEmail.subject}</h2>
            <p className="popup-text"><strong>To:</strong> {selectedEmail.Taxpayer?.name || 'No Taxpayer Name'}</p>
            <p className="popup-text"><strong>Email:</strong> {selectedEmail.Taxpayer?.email || 'No Email'}</p>
            <p className="popup-text"><strong>Date:</strong> {new Date(selectedEmail.sentDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</p>
            <p className="popup-text"><strong>Time:</strong> {new Date(selectedEmail.sentDate).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false })}</p>
            <p className="popup-text"><strong>Message:</strong></p>
            <p className="popup-text">{selectedEmail.message}</p>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default SentList;
