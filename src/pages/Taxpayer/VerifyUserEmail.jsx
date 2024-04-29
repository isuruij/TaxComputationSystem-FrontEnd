import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import { useLocation } from "react-router-dom"; // Import useLocation
import { useNavigate } from "react-router-dom";

function VerifyUserEmail() {
  const location = useLocation();
  const [isVerified, setIsVerified] = useState("Started");
  const navigate = useNavigate();

  useEffect(() => {
    const handleVerification = async () => {
      try {
        // Parse the query parameters
        const params = new URLSearchParams(location.search);

        // Get the value of emailToken
        const emailToken = params.get("emailToken");

        // Send a PATCH request to the server with the emailToken
        const response = await axios.patch(
          "http://localhost:3000/api/taxpayer/verifyemail",
          {
            emailToken: emailToken,
          }
        );

        if (response.data.status === "Success") {
          setIsVerified("Success");
        } else {
          setIsVerified("Failed");
        }
      } catch (error) {
        console.log(error);
        setIsVerified("Failed"); // Set verification status to failed in case of error
      }
    };

    handleVerification();
  }, []);

  return (
    <div>
      {isVerified === "Started" && <h1>Verification in progress...</h1>}
      {isVerified === "Success" && <h1>Verification successful!</h1>}
      {isVerified === "Failed" && (
        <h1>Verification failed. Please try again.</h1>
      )}
    </div>
  );
}

export default VerifyUserEmail;
