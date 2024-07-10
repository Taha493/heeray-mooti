import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Using react-icons for icons
import './Footer.css'; // Importing the CSS file

function Footer() {
  return (
    <footer className="footer">
      <p>© H & Y Collections. All rights reserved 2024.</p>
      <p>Email: handycollections6@gmail.com</p>
      <div className="icons">
        <a href="https://www.instagram.com/handycollection2024/" target="_blank" rel="noopener noreferrer" className="iconLink">
          <FaInstagram />
        </a>
        <a href="https://wa.me/+923025975556" target="_blank" rel="noopener noreferrer" className="iconLink">
          <FaWhatsapp />
        </a>
        <a href="mailto:hycollection6@gmail.com" className="iconLink">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
