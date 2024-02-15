import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NotificationCentre() {
  useEffect(() => {
    // Show three notifications when the component mounts
    showNotification('Notification 1');
    showNotification('Notification 2');
    showNotification('Notification 3');
  }, []);

  const showNotification = (message) => {
    toast.success(message, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div>
      {/* Your app content */}
      <ToastContainer />
    </div>
  );
}

export default NotificationCentre;
