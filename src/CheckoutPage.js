import React, { useState } from 'react';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    phone:'',
    zip: '',
    country: ''
  });

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Shipping Info:', shippingInfo);
    alert('Order placed successfully! Cash on Delivery.');
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="section">
          <h2>Shipping Information</h2>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={shippingInfo.name}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={shippingInfo.address}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={shippingInfo.city}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              name="state"
              value={shippingInfo.state}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="form-group">
            <label>ZIP Code</label>
            <input
              type="number"
              name="zip"
              value={shippingInfo.zip}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="number"
              name="phone"
              value={shippingInfo.phone}
              onChange={handleShippingChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={shippingInfo.country}
              onChange={handleShippingChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="checkout-button">Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
