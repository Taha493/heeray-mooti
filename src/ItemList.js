import React, { useState } from 'react';
import Item from './Item';

function ItemList({ items, isSidebarOpen, onItemClick, AddtoCart, category}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('none'); // 'none', 'priceLowToHigh', 'priceHighToLow'

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value); 
  };

  const filteredItems = items?.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const sortedItems = filteredItems?.sort((a, b) => {
    if (sortOrder === 'priceLowToHigh') {
      return a.price - b.price;
    }
    if (sortOrder === 'priceHighToLow') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <>
      <div className="controls">
        <input
          type="text"
          placeholder="Search items..."
          value={searchQuery}
          onChange={handleSearchChange}
          />
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="none">Sort by</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
        </select>
      </div>
    <main className={isSidebarOpen ? 'shifted' : ''}>
      {sortedItems?.map((item) => (
        <Item key={item.id} item={item} onItemClick={onItemClick} AddtoCart={AddtoCart}/>
      ))}
      {console.log(items)}
    </main>
      </>
  );
}

export default ItemList;
