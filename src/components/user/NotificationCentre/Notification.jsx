import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notification() {
  useEffect(() => {
    
    showNotification('You have to submit Employement income document');
    showNotification('Congratulations! Your profile is verified');
    showNotification('You have an upcoming payment next month');
  }, []);

  const showNotification = (message) => {
    toast.success(message, {
      position: 'top-left',
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: {
        color: '#049370', 
        width: '600px',    
        height: '80px',
      },
    });
  };

  return (
    <div>
      
      <ToastContainer />
    </div>
  );
}

export default Notification;
