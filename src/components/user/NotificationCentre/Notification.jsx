import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NotificationCentre() {
  useEffect(() => {
    // Show three notifications when the component mounts
    showNotification('You have to submit Employement income document');
    showNotification('Congratulations! Your profile is verified');
    showNotification('You have an upcoming payment next month');
  }, []);

  const showNotification = (message) => {
    toast.success(message, {
      //position: 'top-center',
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        color: '#049370', 
        width: '600px',    
        height: '80px',
        top: '140px', 
        right: '880px', 
        //transform: 'translate(-55%, -35%)',
      },
    });
  };

  return (
    <div >
      
      <ToastContainer />
    </div>
  );
}

export default NotificationCentre;