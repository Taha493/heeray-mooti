import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Using react-icons for icons
import './Footer.css'; // Importing the CSS file

function Footer() {
  return (
    <footer className="footer">
      <p>© Heeray Mooti. All rights reserved 2024.</p>
      <p>Email: mootiheeray@gmail.com</p>
      <div className="icons">
        <a href="https://www.instagram.com/heeray_mooti/" target="_blank" rel="noopener noreferrer" className="iconLink">
          <FaInstagram />
        </a>
        <a href="https://wa.me/+923377773131" target="_blank" rel="noopener noreferrer" className="iconLink">
          <FaWhatsapp />
        </a>
        <a href="mailto:mootiheeray@gmail.com" className="iconLink">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
