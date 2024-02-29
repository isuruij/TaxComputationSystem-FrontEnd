import React, { useEffect } from 'react'
import axios from 'axios'; // Import axios
import { useLocation } from 'react-router-dom'; // Import useLocation

function VerifyUserEmail() {
    const location = useLocation();

    useEffect(()=>{
        const handle = async () => {
            try {
                // Parse the query parameters
                const params = new URLSearchParams(location.search);

                // Get the value of emailToken
                const emailToken = params.get('emailToken');

                // Log the value of emailToken
                console.log(emailToken);

                // Send a PATCH request to the server with the emailToken
                const response = await axios.patch('http://localhost:3000/api/taxpayer/verifyemail', {
                    emailToken: emailToken
                });

                console.log(response.data);
            } catch (error) {
              console.log(error);
            }
        };
        handle();
    },[]) // Depend on location.search so that it runs again if the URL changes

    return (
        <div>
            <h1>Email Verification</h1>
        </div>
    )
}

export default VerifyUserEmail;