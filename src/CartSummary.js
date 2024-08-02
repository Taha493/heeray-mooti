import React from 'react';

const CartSummary = ({ total, OpenCheckout, cart}) => {
  return (
    <div className="cart-summary">
      <h3> Total Items: {cart.length} </h3>
      <h3>Total Quantity: {cart.reduce(((prev, next)=> prev + next.quantity), 0)}</h3>
      <h3>Sub Total: PKR {total.toLocaleString()}/-</h3>
      <h3>Shipping Cost: PKR 200/-</h3>
      <h3>Total: PKR {(total+200).toLocaleString()}</h3>
      <button onClick={OpenCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default CartSummary;
