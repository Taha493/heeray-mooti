import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Using react-icons for icons
import './index.css'
function Sidebar({ isOpen, toggleSidebar, onCategorySelect }) {
  const handleCategoryClick = (category) => {
    onCategorySelect(category);
    toggleSidebar();
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleSidebar}>
        ☰
      </button>
      <ul>
        <li onClick={() => handleCategoryClick(null)}>Home</li>
        <li onClick={() => handleCategoryClick('Handmade Ring')}>Handmade Rings</li>
        <li onClick={() => handleCategoryClick('Handmade Earring')}>Handmade Earrings</li>
        <li onClick={() => handleCategoryClick('Handmade Set')}>Handmade Sets</li>
        <li onClick={() => handleCategoryClick('Premade Ring')}>Premade Rings</li>
        <li onClick={() => handleCategoryClick('Premade Earring')}>Premade Earrings</li>
        <li onClick={() => handleCategoryClick('Premade Chain')}>Premade Chains</li>


      </ul>
      <div className="social-icons">
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
    </div>
  );
};

export default Sidebar;
