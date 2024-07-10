import React from "react";

function Item({ item, onItemClick }) {
    return (
      <div className="item-container" onClick={() => onItemClick(item)}>
        <img src={item.img} alt={item.name} width="150px" height="150px"></img>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>PKR {item.price}/-</p>
      </div>
    );
  }

export default Item;