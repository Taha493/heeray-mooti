import React from 'react';
import './cart.css';

const CartItem = ({ article, onRemove, quantity, updateQuantity }) => {
  const subtotal = article.price * quantity;

  const handleDecrement = () => {
    if (quantity === 1) return;
    updateQuantity(article.id, quantity - 1);
  };

  const handleIncrement = () => {
    updateQuantity(article.id, quantity + 1);
  };

  return (
    <div className="cart-item">
      <img src={article.img} alt={article.name} className="item-image" />
      <div className="item-details">
        <div className="item-info">
          <h4 className="item-name">{article.name}</h4>
          <p className="item-quantity">Quantity: {quantity}</p>
          <p className="item-price">Price: PKR {article.price}</p>
          <p className="item-subtotal">Subtotal: PKR {subtotal.toFixed(2)}</p>
          <div className="quantity">
            <button onClick={handleDecrement} className="quantityButton">
              -
            </button>
            <input type="number" value={quantity} readOnly />
            <button onClick={handleIncrement} className="quantityButton">
              +
            </button>
          </div>
        </div>
        <button className="remove-button" onClick={() => onRemove(article.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;