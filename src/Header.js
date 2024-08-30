import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';

function Header({ toggleSidebar, openCart, cart, setCart, searchQuery, setSearchQuery, ResetToInitialState }) {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const searchRef = useRef(null);
  const cartCount = cart.length;
  const [headerMarginTop, setHeaderMarginTop] = useState('30px');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) { // adjust the value to your needs
        setHeaderMarginTop('');
      } else {
        setHeaderMarginTop('30px');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible);
    setSearchQuery("");
  };

  const handleSearchChange = (e) => {
    if (e.target.value) {
      ResetToInitialState();
    }
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (isSearchVisible && searchRef.current) {
      searchRef.current.focus();
    }
  }, [isSearchVisible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  return (
    <>
      
        <div className="top-bar">
          <p className="top-bar-content">
            STANDARD DELIVERY CHARGES ARE PKR 200 ~ FREE DELIVERY ON ORDERS ABOVE PKR 3000
          </p>
        </div>
      <header style={{ marginTop: headerMarginTop }} className='header'>
        <button className="toggle-button" onClick={toggleSidebar}>
          ☰
        </button>

        <h1>HEERAY MOOTI</h1>
        <div className="search-cart-container">
          {!isSearchVisible && (
            <button className="iconButton" onClick={toggleSearch}>
              <FaSearch />
            </button>
          )}
          {isSearchVisible && (
            <input
              type="text"
              placeholder="Search..."
              ref={searchRef}
              className="searchInput"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          )}
          <button className="cart-button" onClick={openCart}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
            </svg>
            {cartCount > 0 && (
              <span className="cart-count-badge">{cartCount}</span>
            )}
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;
