import CartItem from './CartItem';
import CartSummary from './CartSummary';

function CartPage({ cart, setCart, isOpen, OpenCheckout}) {
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id!== id));
  };

  const updateQuantity = (id, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === id? {...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
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
        <CartSummary total={calculateTotal()} OpenCheckout={OpenCheckout}/>
      </div>
    ) : (
      <h2 className="empty-cart-message">
        OOPS! The cart is empty. Shop something and come back
      </h2>
    )
  );
};

export default CartPage;