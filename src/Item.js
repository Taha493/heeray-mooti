function Item({ item, onItemClick, AddtoCart }) {
  const handleCartClick = (e) => {
    e.stopPropagation();
    AddtoCart(item, 1);
  }

  return (
    <div className="item-container" 
    style={{ 
      position: 'relative',
      maxWidth: '300px',  // Adjust this value as needed
      margin: 'auto',  // Center the container horizontally
      textAlign: 'center',  // Center the text inside the container
      marginLeft: '70px'
    }} 
    onClick={() => onItemClick(item)}>
      <img src={item.img} alt={item.name} width="150px" height="150px"></img>
      {item.discount > 0 && (
        <div
          style={{
            position: 'absolute',
            top: 15,
            left: 15,
            backgroundColor: 'orangered',
            color: 'white',
            padding: '5px',
          }}
        >
          {`${Math.floor((item.discount / item.price) * 100)}% OFF`}
        </div>
      )}
      <h3>{item.name}</h3>
      {item.description && <p>{item.description}</p>}
      {
        item.discount > 0?
        <p><span style={{textDecoration: "line-through"}}>PKR {item.price.toLocaleString()} </span>
      <span>&nbsp;PKR {(item.price - item.discount).toLocaleString() }/-</span></p>
      : <p>PKR {(item.price - item.discount).toLocaleString()}/-</p>
      }
      <button className="mini-add-to-cart" onClick={handleCartClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>
      </button>
    </div>
  );
}

export default Item;
