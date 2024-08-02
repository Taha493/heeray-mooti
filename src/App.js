import React, {useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import Notification from './Notification';
import getItems from './ItemData';
// import {items} from './ItemData';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cart, setCart] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    return savedCart || [];
  });  const [quantity, setQuantity] = useState(1);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState(null);
  const [itemData, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedItems = await getItems();
      console.log('Fetched Items:', fetchedItems);
      setItems(fetchedItems);
    }
    fetchData();
  }, []);

  useState(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  function ResetToInitialState()
  {
    setIsCheckoutOpen(false);
    setIsOpenCart(false);
    setIsSidebarOpen(false);
    setQuantity(1);
    setSelectedCategory(null);
    setSelectedItem(null);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  function handleOpenCart()
  {
    setIsCheckoutOpen(false);
    setSelectedCategory(null);
    setIsOpenCart(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  function handleAddToCart(item, quantity) {
    const existingItem = cart.find(article => article.id === item.id);
    let updatedCart;
  
    if (existingItem) {
      updatedCart = cart.map(article =>
        article.id === item.id
          ? { ...article, quantity: article.quantity + quantity }
          : article
      );
    } else {
      updatedCart = [...cart, { ...item, quantity }];
    }
  
    setCart(updatedCart);
    setQuantity(1);
    setNotification(`${item.name} has been added to the cart 🛒`);
  
    // Save updated cart to local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  function handleCheckoutPage()
  {
    setIsOpenCart(false);
    setSelectedCategory(false);
    setIsCheckoutOpen(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const clearCart = () => {
    setCart([]);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSelectedCategory(item.category);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setQuantity(1);
  };

  const handleBackClick = () => {
    setSelectedItem(null);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (category) => {
    setSelectedItem(null);
    
    setSelectedCategory(category);
    setIsCheckoutOpen(false);
    setIsOpenCart(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setQuantity(1);
  };

  const filteredItems = selectedCategory
    ? itemData.filter(item => item.category === selectedCategory)
    : itemData;

    return (
      <div className="App">
        <Header 
          toggleSidebar={toggleSidebar} 
          openCart={handleOpenCart} 
          cart={cart} 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          ResetToInitialState={ResetToInitialState}
          isSaleLive={itemData.some(item => item.discount > 0)}
        />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} onCategorySelect={handleCategorySelect} />
        {isCheckoutOpen ? (
          <CheckoutPage cart={cart} clearCart={clearCart} ResetToInitialState={ResetToInitialState}/>
        ) : isOpenCart ? (
          <CartPage cart={cart} setCart={setCart} isOpen={isSidebarOpen} OpenCheckout={handleCheckoutPage} ResetToInitialState={ResetToInitialState}/>
        ) : selectedItem ? (
          <ItemDetails
            item={selectedItem}
            onBack={handleBackClick}
            onAddToCart={handleAddToCart}
            items={itemData.filter(i => i.category === selectedCategory)}
            onItemClick={handleItemClick}
            isSidebarOpen={isSidebarOpen}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        ) : (
          <ItemList 
            isSidebarOpen={isSidebarOpen} 
            onItemClick={handleItemClick} 
            items={filteredItems?.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))} 
            AddtoCart={handleAddToCart}
            category={selectedCategory}
          />
        )}
        <Footer />
        {notification && (
        <Notification 
          message={notification} 
          onClose={() => setNotification(null)} 
          onOpenCart={handleOpenCart}
        />
      )}
      </div>
    );
  }

export default App;

