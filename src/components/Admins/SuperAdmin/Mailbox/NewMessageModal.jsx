import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function NewMessageModal({ show, handleClose }) {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    // Here you can perform any actions with the new message data
    // For example, sending it to an API or dispatching an action
    console.log('Recipient:', recipient);
    console.log('Subject:', subject);
    console.log('Message:', message);
    // After handling the new message, you can close the modal
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>New Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="recipient">
            <Form.Label>To:</Form.Label>
            <Form.Control type="text" placeholder="Enter recipient" value={recipient} onChange={handleRecipientChange} />
          </Form.Group>
          <Form.Group controlId="subject">
            <Form.Label>Subject:</Form.Label>
            <Form.Control type="text" placeholder="Enter subject" value={subject} onChange={handleSubjectChange} />
          </Form.Group>
          <Form.Group controlId="message">
            <Form.Label>Message:</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter message" value={message} onChange={handleMessageChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
