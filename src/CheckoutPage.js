import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import supabase from './supabase'
import './CheckoutPage.css';

const CheckoutPage = ({ cart, clearCart, ResetToInitialState }) => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    phone: '',
    zip: '',  
    country: '',
    email: ''
  });

  const createOrder = async (shippingInfo, cartItems) => {
    const { data, error } = await supabase
      .from('Orders')
      .insert([
        {
          name: shippingInfo.name,
          address: shippingInfo.address,
          city: shippingInfo.city,
          state: shippingInfo.state,
          phone: shippingInfo.phone,
          zip: shippingInfo.zip,
          country: shippingInfo.country,
          email: shippingInfo.email,
          cart: cartItems
        }
      ])
      .select();
      
    if (error) {
      console.error('Error creating order:', error);
      throw error;
    }
    
    return data[0].id;  // Return the order_id
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleShippingChange = (e) => {
    setShippingInfo({ ...shippingInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setIsSubmitting(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  
    let totalAmount = 0;
    let totalQuantity = 0;
  
    const cartItemsHtml = cart.map(item => {
      const subtotal = item.quantity * (item.price - item.discount);
      totalAmount += subtotal;
      totalQuantity += item.quantity;
      return `
        <tr>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>${item.price - item.discount}</td>
          <td>${subtotal}</td>
        </tr>
      `;
    }).join('');
  
    const emailHtml = `
    <style>
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }
      th {
        background-color: #f2f2f2;
      }
      .total-row {
        font-weight: bold;
      }
    </style>
    <table border="1" cellspacing="15">
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        ${cartItemsHtml}
        <tr class="total-row">
          <td colspan="3">Total Quantity:</td>
          <td>${totalQuantity}</td>
        </tr>
        <tr class="total-row">
          <td colspan="3">Shipping Cost:</td>
          <td>${totalAmount<3000?200:`Free Shipping`}</td>
        </tr>
        <tr class="total-row">
          <td colspan="3">Total Amount:</td>
          <td>${totalAmount < 3000? totalAmount +200:totalAmount}</td>
        </tr>
      </tbody>
    </table>
  `;
  
    const templateParams = {
      name: shippingInfo.name,
      address: shippingInfo.address,
      city: shippingInfo.city,
      state: shippingInfo.state,
      phone: shippingInfo.phone,
      zip: shippingInfo.zip,
      country: shippingInfo.country,
      email: shippingInfo.email,
      cart_items: emailHtml 
    };
  
    try {
      // Attempt to send the first email
      const order_id = await createOrder(shippingInfo, cart);
      console.log('Order created successfully with ID:', order_id);
      await emailjs.send(
        'service_rkvby5u', // First EmailJS service ID
        'template_kezs9lp', // First EmailJS template ID
        templateParams,
        'x4ZjbsMi7cVZzYYJJ' // First EmailJS user ID
      );
      console.log('First email sent successfully');
  
      // Attempt to send the second email
      await emailjs.send(
        'service_s0q5rzp', // Second EmailJS service ID
        'template_ka6pe48', // Second EmailJS template ID
        templateParams,
        'ZJYcFsBBuo8UGE-TM' // Second EmailJS user ID
      );
      console.log('Second email sent successfully');
  
      setSubmissionStatus('success');
      clearCart(); // Clear the cart after successful email sending
  
    } catch (error) {
      console.error('Failed to send email:', error);
      // Determine which email failed and update the status accordingly
      if (error.response && error.response.status === 400) {
        setSubmissionStatus('error');
      } else {
        setSubmissionStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinueShopping = () => {
    ResetToInitialState();
  };

  return (
    <div className="checkout-container">
      {submissionStatus === '' && (
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={shippingInfo.email}
                onChange={handleShippingChange}
                required
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>
          </div>
          <button type="submit" className="checkout-button" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Place Order'}
          </button>
        </form>
      )}

      {submissionStatus === 'success' && (
        <div className="confirmation-message">
          <h2>Order Placed Successfully!</h2>
          <p>Your order has been placed successfully. Thank you for shopping with us. You will receive a confirmation email shortly.</p>
          <button onClick={handleContinueShopping} className="continue-shopping-button">
            Continue Shopping
          </button>
        </div>
      )}

      {submissionStatus === 'error' && (
        <div className="confirmation-message">
          <h2>Order Placement Failed</h2>
          <p>There was an error placing your order. Please try again.</p>
          <button onClick={() => window.location.reload()} className="continue-shopping-button">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
