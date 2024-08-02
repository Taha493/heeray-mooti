import CartItem from './CartItem';
import CartSummary from './CartSummary';

function CartPage({ cart, setCart, isOpen, OpenCheckout, ResetToInitialState}) {
  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  const updateQuantity = (id, newQuantity) => {
    const updatedCart =   cart.map((item) =>
      item.id === id? {...item, quantity: newQuantity } : item);
    setCart(updatedCart);

    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price - item.discount) * item.quantity, 0);
  };

  return (
    cart.length >= 1? (
      <div className={isOpen? "shifted-cart-page" : "cart-page"}>
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem
              article={item}
              onRemove={removeItem}
              key={item.id}
              quantity={item.quantity}
              updateQuantity={updateQuantity}
            />
          ))}
        </div>
        <CartSummary total={calculateTotal()} OpenCheckout={OpenCheckout} cart={cart}/>
      </div>
    ) : (
      <div className='empty-cart-message'>
      <h2>
        Your cart is empty. Let's change that.
      </h2>
      <button onClick={ResetToInitialState}>Continue Shopping</button>
      <p>Press the button to continue shopping.</p>
      </div>
    )
  );
};

export default CartPage;