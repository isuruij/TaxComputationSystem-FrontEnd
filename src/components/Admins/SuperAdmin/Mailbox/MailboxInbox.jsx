import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Profile from "../../../../assets/AdminProfile.svg";
import "./Mailbox.css";
import { end } from '@popperjs/core';

import NavbarEmail from './NavbarEmail';

export default function MailboxInbox(props) {
  const [additionalItems, setAdditionalItems] = useState([
    // Your array items
    { name: 'John Doe', sender: 'Irushi Silva', message: 'Please send your NIC copy as well.', time: '12.53 p.m' },
    { name: 'Jane Doe', sender: 'John Smith', message: 'Meeting agenda attached.', time: '10.15 a.m' },
    { name: 'Jane Doe', sender: 'John Smith', message: 'Meeting agenda attached.', time: '10.15 a.m' },
    { name: 'Alice Johnson', sender: 'Bob White', message: 'Reminder: Project meeting tomorrow.', time: '3.30 p.m' },
    { name: 'Michael Brown', sender: 'Sarah Green', message: 'Review the latest report when you have a chance.', time: '2.05 p.m' },
    { name: 'Emily Taylor', sender: 'David Clark', message: 'Call me back as soon as possible.', time: '4.20 p.m' },
    { name: 'John Doe', sender: 'Irushi Silva', message: 'Please send your NIC copy as well.', time: '12.53 p.m' },
    { name: 'Jane Doe', sender: 'John Smith', message: 'Meeting agenda attached.', time: '10.15 a.m' },
    { name: 'Jane Doe', sender: 'John Smith', message: 'Meeting agenda attached.', time: '10.15 a.m' },
    { name: 'Alice Doe', sender: 'Bob Black', message: 'Reminder: Project meeting tomorrow.', time: '3.30 p.m' },
    { name: 'Michael Brown', sender: 'Sarah Green', message: 'Review the latest report when you have a chance.', time: '2.05 p.m' },
    { name: 'Emily Taylor', sender: 'David Clark', message: 'Call me back as soon as possible.', time: '4.20 p.m' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const lastItemRef = useRef(null);

  useEffect(() => {
    setFilteredItems(
      additionalItems.filter(item =>
        item.sender.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, additionalItems]);

  useEffect(() => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [filteredItems]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div style={{
        borderRadius: "15px",
        padding: "20px 40px",
        backgroundColor: "#F3FFF5",
        width: "100%",
        marginTop: "5px",
        marginBottom: '20px',
        boxShadow: "1px 5px 3px -3px rgba(0,0,0,0.44)",
        height: "100vh",
        overflowY: 'auto', // Enable vertical scrolling
      }}>
        <div className='box-1' style={{ display: "flex", flexDirection: "row" }}>
          <div className='box-1.1'>
            <NavbarEmail />
          </div>
          <div className='box-1.2'>
            <div className="search-container" style={{ position: 'sticky', top: '0', zIndex: '1', backgroundColor: '#F3FFF5', padding: '10px' }}>
              <input
                type="text"
                placeholder=" Search..."
                className="search-input"
                style={{ border: "none", backgroundColor: "white", borderRadius: "10px" }}
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div style={{ paddingTop: '40px' }}>
              {filteredItems.map((item, index) => (
                <div
                  key={index}
                  ref={index === filteredItems.length - 1 ? lastItemRef : null}
                  className="d-grid gap-2"
                  style={{ width: "70%", marginLeft: "30%", marginBottom: "10px" }}
                >
                  <Button size="lg">
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <div className='box1'>
                        <img src={Profile} alt="Profile" />
                        <span style={{ display: "flex", marginTop: "2%", marginLeft: "1%" }}>
                          <h6>{props.name}</h6>
                        </span>
                      </div>
                      <div className='box2'>
                        <div className='box3'>
                          <b>{item.sender}</b>
                        </div>
                        <div style={{ display: 'flex' }}>
                          <div className="box5">{item.message}</div>
                          <div className="box6" style={{}}>{item.time}</div>
                        </div>
                      </div>
                    </div>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
