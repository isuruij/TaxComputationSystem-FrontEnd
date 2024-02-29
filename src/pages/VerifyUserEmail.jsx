import React, { useEffect } from 'react'
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


                
            } catch (error) {
              console.log(error);
            }
        };
        handle();
    },[location.search]) // Depend on location.search so that it runs again if the URL changes

    return (
        <div>
            <h1>Email Verification</h1>
        </div>
    )
}

export default VerifyUserEmail;