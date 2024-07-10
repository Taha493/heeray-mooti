import React, {useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';

const itemData=[
    {
        name: "Rajwari Ring",
        id: Math.floor(Math.random()*10000)+1,
        description: "Adjustable ring, rajwari design, red stone",
        price: 2000,
        category: "Ring",
        img: "https://razajewellers.pk/wp-content/uploads/2024/02/IMG_1333-800x800.jpg"
    }
    ,

    {
        name: "Rajwari Ring",
        id: Math.floor(Math.random()*10000)+1,
        description: "Adjustable ring, rajwari design, red stone",
        price: 2000,
        category: "Ring",
        img: "https://razajewellers.pk/wp-content/uploads/2024/02/IMG_1333-800x800.jpg"
    },

    {
        name: "Rajwari Ring",
        id: Math.floor(Math.random()*10000)+1,
        description: "Adjustable ring, rajwari design, red stone",
        price: 2000,
        category: "Ring",
        img: "https://razajewellers.pk/wp-content/uploads/2024/02/IMG_1333-800x800.jpg"
    },
    {
        name: "Rajwari Ring",
        id: Math.floor(Math.random()*10000)+1,
        description: "Adjustable ring, rajwari design, red stone",
        price: 2000,
        category: "Ring",
        img: "https://razajewellers.pk/wp-content/uploads/2024/02/IMG_1333-800x800.jpg"
    },
    {
        name: "Rajwari Ring",
        id: Math.floor(Math.random()*10000)+1,
        description: "Adjustable ring, rajwari design, red stone",
        price: 2000,
        category: "Ring",
        img: "https://razajewellers.pk/wp-content/uploads/2024/02/IMG_1333-800x800.jpg"
    }
    ,
    {
        name: "Anti Tarnish Bracelet",
        id: Math.floor(Math.random()*10000)+1,
        description: "White Anti Tarnish Bracelet, Adjustable, Attractive",
        price: 500,
        category: "Bracelet",
        img: "https://gypsyjewellery.in/wp-content/uploads/2023/12/IMG_20231018_164150.webp"
    }
    ,
    {
      name: "Anti Tarnish Bracelet",
      id: Math.floor(Math.random()*10000)+1,
      description: "White Anti Tarnish Bracelet, Adjustable, Attractive",
      price: 500,
      category: "Bracelet",
      img: "https://gypsyjewellery.in/wp-content/uploads/2023/12/IMG_20231018_164150.webp"
  }
  ,
  {
    name: "Anti Tarnish Bracelet",
    id: Math.floor(Math.random()*10000)+1,
    description: "White Anti Tarnish Bracelet, Adjustable, Attractive",
    price: 500,
    category: "Bracelet",
    img: "https://gypsyjewellery.in/wp-content/uploads/2023/12/IMG_20231018_164150.webp"
}
,
{
  name: "Anti Tarnish Bracelet",
  id: Math.floor(Math.random()*10000)+1,
  description: "White Anti Tarnish Bracelet, Adjustable, Attractive",
  price: 500,
  category: "Bracelet",
  img: "https://gypsyjewellery.in/wp-content/uploads/2023/12/IMG_20231018_164150.webp"
}
,
{
  name: "Anti Tarnish Bracelet",
  id: Math.floor(Math.random()*10000)+1,
  description: "White Anti Tarnish Bracelet, Adjustable, Attractive",
  price: 500,
  category: "Bracelet",
  img: "https://gypsyjewellery.in/wp-content/uploads/2023/12/IMG_20231018_164150.webp"
}
,
{
  name: "Rajwadi Earring",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Ear Ring, Adjustable, Attractive",
  price: 1000,
  category: "Ear Ring",
  img: "https://divyamani.com/uploads/product_sub/ERRJ22438BLGT-P.JPG"
}
,
{
  name: "Rajwadi Earring",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Ear Ring, Adjustable, Attractive",
  price: 1000,
  category: "Ear Ring",
  img: "https://divyamani.com/uploads/product_sub/ERRJ22438BLGT-P.JPG"
},
{
  name: "Rajwadi Earring",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Ear Ring, Adjustable, Attractive",
  price: 1000,
  category: "Ear Ring",
  img: "https://divyamani.com/uploads/product_sub/ERRJ22438BLGT-P.JPG"
},
{
  name: "Rajwadi Earring",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Ear Ring, Adjustable, Attractive",
  price: 1000,
  category: "Ear Ring",
  img: "https://divyamani.com/uploads/product_sub/ERRJ22438BLGT-P.JPG"
},
{
  name: "Rajwadi Earring",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Ear Ring, Adjustable, Attractive",
  price: 1000,
  category: "Ear Ring",
  img: "https://divyamani.com/uploads/product_sub/ERRJ22438BLGT-P.JPG"
},
{
  name: "Rajwadi Earring",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Ear Ring, Adjustable, Attractive",
  price: 1000,
  category: "Ear Ring",
  img: "https://divyamani.com/uploads/product_sub/ERRJ22438BLGT-P.JPG"
},
{
  name: "Rajwadi Earring",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Ear Ring, Adjustable, Attractive",
  price: 1000,
  category: "Ear Ring",
  img: "https://divyamani.com/uploads/product_sub/ERRJ22438BLGT-P.JPG"
}
, 
{
  name: "Rajwadi Jewellery Set",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Set, Adjustable, Attractive",
  price: 5000,
  category: "Set",
  img: "https://m.media-amazon.com/images/I/71gVFWbBh6L._SY695_.jpg"
}
, 
{
  name: "Rajwadi Jewellery Set",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Set, Adjustable, Attractive",
  price: 5000,
  category: "Set",
  img: "https://m.media-amazon.com/images/I/71gVFWbBh6L._SY695_.jpg"
}, 
{
  name: "Rajwadi Jewellery Set",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Set, Adjustable, Attractive",
  price: 5000,
  category: "Set",
  img: "https://m.media-amazon.com/images/I/71gVFWbBh6L._SY695_.jpg"
}, 
{
  name: "Rajwadi Jewellery Set",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Set, Adjustable, Attractive",
  price: 5000,
  category: "Set",
  img: "https://m.media-amazon.com/images/I/71gVFWbBh6L._SY695_.jpg"
}, 
{
  name: "Rajwadi Jewellery Set",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Set, Adjustable, Attractive",
  price: 5000,
  category: "Set",
  img: "https://m.media-amazon.com/images/I/71gVFWbBh6L._SY695_.jpg"
}, 
{
  name: "Rajwadi Jewellery Set",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Set, Adjustable, Attractive",
  price: 5000,
  category: "Set",
  img: "https://m.media-amazon.com/images/I/71gVFWbBh6L._SY695_.jpg"
}, 
{
  name: "Rajwadi Jewellery Set",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Set, Adjustable, Attractive",
  price: 5000,
  category: "Set",
  img: "https://m.media-amazon.com/images/I/71gVFWbBh6L._SY695_.jpg"
}, 
{
  name: "Rajwadi Jewellery Set",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Set, Adjustable, Attractive",
  price: 5000,
  category: "Set",
  img: "https://m.media-amazon.com/images/I/71gVFWbBh6L._SY695_.jpg"
}, 
{
  name: "Rajwadi Jewellery Set",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Set, Adjustable, Attractive",
  price: 5000,
  category: "Set",
  img: "https://m.media-amazon.com/images/I/71gVFWbBh6L._SY695_.jpg"
}, 
{
  name: "Rajwadi Jewellery Set",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Set, Adjustable, Attractive",
  price: 5000,
  category: "Set",
  img: "https://m.media-amazon.com/images/I/71gVFWbBh6L._SY695_.jpg"
}, 
{
  name: "Rajwadi Jewellery Set",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Set, Adjustable, Attractive",
  price: 5000,
  category: "Set",
  img: "https://m.media-amazon.com/images/I/71gVFWbBh6L._SY695_.jpg"
}, 
{
  name: "Rajwadi Jewellery Set",
  id: Math.floor(Math.random()*10000)+1,
  description: "Rajwadi Set, Adjustable, Attractive",
  price: 5000,
  category: "Set",
  img: "https://m.media-amazon.com/images/I/71gVFWbBh6L._SY695_.jpg"
}
]

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);


  function handleOpenCart()
  {
    setIsCheckoutOpen(false);
    setSelectedCategory(null);
    setIsOpenCart(true);
  }
  function handleAddToCart(item, quantity) {
    const existingItem = cart.find(article => article.id === item.id);
    if (existingItem) {
      setCart(cart.map(article =>
        article.id === item.id
          ? { ...article, quantity: article.quantity + quantity }
          : article
      ));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }

    setQuantity(1);
  }

  function handleCheckoutPage()
  {
    setIsOpenCart(false);
    setSelectedCategory(false);
    setIsCheckoutOpen(true);
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
        <Header toggleSidebar={toggleSidebar} openCart={handleOpenCart} cart={cart} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} onCategorySelect={handleCategorySelect} />
        {isCheckoutOpen ? (
          <CheckoutPage />
        ) : isOpenCart ? (
          <CartPage cart={cart} setCart={setCart} isOpen={isSidebarOpen} OpenCheckout={handleCheckoutPage} />
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
          <ItemList isSidebarOpen={isSidebarOpen} onItemClick={handleItemClick} items={filteredItems} />
        )}
        <Footer />
      </div>
    );
}

export default App;
