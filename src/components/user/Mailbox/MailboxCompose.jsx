import React, { useState, useRef, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MailboxCompose.css';
import Cookies from "js-cookie";
import Axios from "axios";
import { jwtDecode } from "jwt-decode";
import attach from "../../../assets/attach.svg";
import crossIcon from "../../../assets/cross.svg"; // Ensure you have this icon




const EmailCompose = () => {
    const base_url = import.meta.env.VITE_APP_BACKEND_URL;
    const [email, setEmail] = useState({ subject: '', body: '', attachedFile: null });
    const [fileName, setFileName] = useState('');
    const fileInputRef = useRef(null); // Reference to the hidden file input
     const cookieValue = Cookies.get("token");
    const userId = jwtDecode(cookieValue).id;


    const sendMail = async () => {
        try {
            const formData = new FormData();
            formData.append('subject', email.subject);
            formData.append('body', email.body);
            if (email.attachedFile) {
            formData.append('attachedFile', email.attachedFile);
        }
            const res = await Axios.post(`${base_url}/api/taxpayer/composemail/${userId}`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            
            console.log(res)
            console.log(email);
        } catch (err) {
            console.log(err);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmail(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(email);
    };

    const handleFileChange = (e) => {
        if (e.target.files[0]) {
            setEmail(prevState => ({ ...prevState, attachedFile: e.target.files[0] }));
            setFileName(e.target.files[0].name);
        }
    };

    const handleClickAttachIcon = () => {
        fileInputRef.current.click(); // Programmatically click the hidden file input
    };

    const clearTextArea = () => {
        setEmail(prevState => ({ ...prevState, body: '' }));
    };

    const handleRemoveFile = () => {
        setEmail(prevState => ({ ...prevState, attachedFile: null }));
        setFileName('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        sendMail();
        alert('Email sent successfully!');
        setEmail({subject: '', body: '', attachedFile: null });
        setFileName('');
    };

    return (
        <Container className="mt-5 email-to added-1">
            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3 email-subject" controlId="subject">
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

                <Form.Group className="mb-3 email-message" controlId="body">
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

                <div style={{ display: "flex", flexDirection: "row", gap: "10px", margin: "10px" }}>
                    <div>
                        <Button variant="danger" style={{ width: "100px" }} onClick={clearTextArea} className="mb-2 clear">
                            Clear
                        </Button>
                    </div>
                    <div>
                        <img src={attach} alt="Attach" onClick={handleClickAttachIcon} style={{ cursor: 'pointer', width: '18px', marginTop: '8px' }} />
                    </div>
                    <div>
                        <input type="file" id="file-input" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
                        {fileName && (
                            <div style={{ fontSize: "10px", marginTop: "10px" }}>
                                Attached File: {fileName} <img src={crossIcon} alt="Remove file" style={{ cursor: 'pointer', width: '15px' }} onClick={handleRemoveFile} />
                            </div>
                        )}
                    </div>
                </div>

                <Button style={{ margin: "10px" }} variant="primary" type="submit">
                    Send Email
                </Button>
            </Form>
        </Container>
    );
};

export default EmailCompose;
