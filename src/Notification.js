import React, { useEffect, useState } from 'react';
import './Notification.css'; // Add necessary styling here

const Notification = ({ message, onClose, onOpenCart }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 500); // Delay the onClose callback to allow transition
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <div
      className={`notification ${isVisible ? 'show' : ''}`}
      onClick={onOpenCart}
    >
      {message}
    </div>
  );
};

export default Notification;
