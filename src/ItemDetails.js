import './ItemDetails.css';
import Item from './Item';

const ItemDetails = ({ item, onBack, onAddToCart, items, onItemClick, isSidebarOpen, quantity, setQuantity }) => {

  function handleDecrement() {
    if (quantity === 1) return;
    setQuantity((prevQuantity) => prevQuantity - 1);
  }

  function handleIncrement() {
    setQuantity((prevQuantity) => prevQuantity + 1);
  }

  return (
    <div className={isSidebarOpen?"container-shifted":"container"}>
      <button className="backButton" onClick={onBack}>
        &larr;
      </button>
      <div className="itemDetails">
        <img src={item.img} alt={item.name} className="itemImage" width="600px" height="300px" />
        <div className="itemInfo">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <p>Price: PKR {item.price}/-</p>
          <p>Item Code: {item.id}</p>
          <p>Category: {item.category}</p>
          <div className="quantity">
            <button onClick={handleDecrement} className='quantityButton'>-</button>
            <input type="number" value={quantity} disabled />
            <button onClick={handleIncrement} className='quantityButton'>+</button>
          </div>
          <button className="addToCartButton" onClick={() => onAddToCart(item, quantity)}>
            Add to Cart
          </button>
        </div>
      </div>
      <div className="relatedItems">
        <h2>Related Items</h2>
        <div className="relatedItemsList">
          {items
            .filter(relatedItem => relatedItem.id !== item.id)
            .map((relatedItem) => (
              <Item key={relatedItem.id} item={relatedItem} onItemClick={() => onItemClick(relatedItem)} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
