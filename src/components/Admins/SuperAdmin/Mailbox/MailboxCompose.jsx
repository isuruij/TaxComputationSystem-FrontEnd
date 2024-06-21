import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MailboxCompose.css';
import attach from "../../../../assets/attach.svg"

const EmailCompose = () => {
    const [email, setEmail] = useState({ to: '', subject: '', body: '', attachedFile: null });
    const [fileName, setFileName] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmail(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setEmail(prevState => ({...prevState,attachedFile: e.target.files[0] }));
            setFileName(e.target.files[0].name);
        }
    };

    const clearTextArea = () => {
        setEmail(prevState => ({...prevState, body: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle sending the email with the attachment
        console.log(email);
        alert('Email sent successfully!');
        setEmail({ to: '', subject: '', body: '', attachedFile: null });
        setFileName('');
    };

    return (
        <Container className="mt-5">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="to">
                    <Form.Label>To</Form.Label>
                    <Form.Control
                        type="email"
                        name="to"
                        value={email.to}
                        onChange={handleChange}
                        placeholder="Enter recipient's email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                        type="text"
                        name="subject"
                        value={email.subject}
                        onChange={handleChange}
                        placeholder="Email subject"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="body">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="body"
                        value={email.body}
                        onChange={handleChange}
                        placeholder="Write your message here"
                        required
                    />
                </Form.Group>

                <div style={{ display: "flex", flexDirection: "row", gap:"10px" ,margin:"10px"}}>
                    <div>
                        <Button variant="danger" style={{width:"100px"}} onClick={clearTextArea} className="mb-2">
                            Clear 
                        </Button>
                    </div>
                    <div>
                        <Form.Label htmlFor="file-input" className="file-input-label">
                            <img src={attach} alt="Attach" style={{ width: "18px", marginRight: "10px" }} /> Attach File
                        </Form.Label>
                        <Form.Control type="file" id="file-input" className="file-input" onChange={handleFileChange}/>
                        {fileName && <div style={{fontSize:"10px", marginTop: "10px"}}>Attached File: {fileName}</div>}
                    </div>
                </div>

                <Button style={{margin:"10px"}} variant="primary" type="submit">
                    Send Email
                </Button>
            </Form>
        </Container>
    );
};

export default EmailCompose;
