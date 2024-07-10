import React from 'react';

const CartSummary = ({ total, OpenCheckout}) => {
  return (
    <div className="cart-summary">
      <h3>Total: PKR {total.toFixed(2)}</h3>
      <button onClick={OpenCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;
