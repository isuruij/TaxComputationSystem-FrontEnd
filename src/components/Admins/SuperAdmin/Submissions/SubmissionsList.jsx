import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";
import './SearchBar.css';
import './SubmissionsList.css';
import fileCheck from "./file-circle-check-solid.svg";

const SubmissionsList = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  const base_url = import.meta.env.VITE_APP_BACKEND_URL;

  useEffect(() => {
    const fetchAllTaxpayers = async () => {
      try {
        const res = await axios.get(`${base_url}/api/SuperAdmin/getusers`);
        console.log(res.data);
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllTaxpayers();
  }, [base_url]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users
    .filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.numOfSubmissions - a.numOfSubmissions); // Added sorting by numOfSubmissions in descending order

  const buttonStyle = {
    backgroundColor: "#049370",
    display: "block",
    marginBottom: "12px",
    width: "90%",
    marginLeft: "1%",
    boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
  };

  const containerStyle = {
    textAlign: 'left',
    display: 'block',
    marginBottom: '12px',
    width: '95%',
    marginLeft: '4%',
    maxHeight: '630px',
    overflowY: 'auto',
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
        <ListGroup variant="flush" style={containerStyle}>
          {filteredUsers.map((user) => (
            <ListGroup.Item
              key={user.id}
              style={{ backgroundColor: '#B3F9D7', borderRadius: '10px', margin: '5px' }}
            >
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <div style={{ width: "55%" }}>
                  <button className="custom-button-2" onClick={() => handleProfile(user.id)}>
                    <div>{user.name} {user.numOfSubmissions === 0 ? (<Badge bg="danger" style={{opacity:"0.8"}}>No Submissions</Badge>) : (<Badge bg="danger">{user.numOfSubmissions} Submissions</Badge>)}</div>
                  </button>
                </div>
                <div style={{ width: "10%" }}>
                  <button type="button" className="btn btn-primary custom-button" style={{ textAlign:"center",backgroundColor: "#049370",display: "block", marginBottom: "12px",width: "210%",marginLeft: "1%",boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)"}} onClick={() =>{ navigate(`/SuperAdminSubmissions/VerifyDocuments/${user.id}`)} }>
                  <img
                    src={fileCheck}
                    style={{ alignItems: "left", textAlign: "left",width:"12%",marginRight:"8px" }}
                    alt="Icon"
                  />
                   <span>Verify Docs</span>
                  </button>
                </div>
                <div style={{ width: "10%" }}>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default SubmissionsList;
