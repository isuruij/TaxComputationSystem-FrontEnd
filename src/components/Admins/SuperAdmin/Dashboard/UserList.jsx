import Switch from '@mui/material/Switch';
import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './SearchBar.css';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', approved: true },
    { id: 2, name: 'Jane Smith', approved: false },
    { id: 3, name: 'Alice Johnson', approved: true },
    { id: 4, name: 'Bob Williams', approved: false },
    { id: 5, name: 'Eva Davis', approved: true },
    { id: 6, name: 'Charlie Brown', approved: false },
    { id: 7, name: 'Grace Turner', approved: true },
    { id: 8, name: 'David Miller', approved: false },
    { id: 9, name: 'Sophia White', approved: true },
    { id: 10, name: 'Daniel Lee', approved: false },
    { id: 11, name: 'Emily Johnson', approved: true },
    { id: 12, name: 'Michael Davis', approved: false },
    { id: 13, name: 'Olivia Brown', approved: true },
    { id: 14, name: 'William Turner', approved: false },
    { id: 15, name: 'Ava Miller', approved: true },
    { id: 16, name: 'Matthew White', approved: false },
    { id: 17, name: 'Sophie Lee', approved: true },
    { id: 18, name: 'Benjamin Smith', approved: false },
    { id: 19, name: 'Lily Johnson', approved: true },
    { id: 20, name: 'James Williams', approved: false },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const buttonStyle = {
    backgroundColor: "#049370",
    display: "block",
    marginBottom: "12px",
    width: "90%",
    marginLeft: "1%",
    boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
  };

  const handleDelete = (id) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this user?');
    if (shouldDelete) {
      const newUsers = users.filter((user) => user.id !== id);
      setUsers(newUsers);
    }
  };

  const handleUpdate = (id) => {
    console.log(`Update user with id ${id}`);
  };

  const handleProfile = (id) => {
    console.log(`View profile for user with id ${id}`);
  };

  const handleApprovalToggle = (id) => {
    const newUsers = users.map((user) => {
      if (user.id === id) {
        const updatedUser = { ...user, approved: !user.approved };
        updatedUser.approvalLabel = updatedUser.approved ? 'Approved' : 'Not Approved';
        return updatedUser;
      }
      return user;
    });
    setUsers(newUsers);
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
                    <div>{user.name}</div>
                  </button>
                </div>
                <div style={{ width: "10%" }}>
                  <button type="button" className="btn btn-primary custom-button" style={buttonStyle} onClick={() => handleUpdate(user.id)}>
                    Update
                  </button>
                </div>
                <div style={{ width: "10%" }}>
                  <button type="button" className="btn btn-primary custom-button-1" style={buttonStyle} onClick={() => handleDelete(user.id)}>
                    Delete
                  </button>
                </div>
                <div style={{ width: "20%" }}>
                  <label style={{ color: '#008060' }}>
                    {user.approved ? 'Approved' : 'Approve'}:
                    <Switch
                      checked={user.approved}
                      onChange={() => handleApprovalToggle(user.id)}
                      color="success"
                      style={{
                        color: '#008060',
                      }}
                      inputProps={{ 'aria-label': 'approve switch' }}
                    />
                  </label>
                </div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default UserList;
