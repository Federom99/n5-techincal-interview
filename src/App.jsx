import React, { useState, useEffect } from 'react';
import './assets/styles/main.scss';
import productsData from './assets/json/products.json';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AddProduct from './components/AddProducts';
import ToggleTheme from './components/ToggleTheme';
import Header from './components/Header';

const App = () => {
  const [products, setProducts] = useState(productsData.products);
  const [cartItems, setCartItems] = useState([]);
  const [theme, setTheme] = useState('light');

  
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const savedTheme = localStorage.getItem('theme') || 'light';


    const updatedProducts = productsData.products.map(product => {
      const cartItem = savedCartItems.find(item => item.id === product.id);
      if (cartItem) {
        return { ...product, amount: product.amount - cartItem.quantity };
      }
      return product;
    });

    setCartItems(savedCartItems);
    setProducts(updatedProducts);
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]); 


  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode';
    localStorage.setItem('theme', theme);
  }, [theme]); 

  
  const addToCart = (productId, quantity) => {
    const product = products.find((p) => p.id === productId);
    if (product && quantity <= product.amount) {
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === productId ? { ...p, amount: p.amount - quantity } : p
        )
      );

      setCartItems((prevItems) => {
        const existingItem = prevItems.find((item) => item.id === productId);
        if (existingItem) {
          return prevItems.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + parseInt(quantity) }
              : item
          );
        } else {
          return [...prevItems, { ...product, quantity: parseInt(quantity) }];
        }
      });
    }
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        const cartItem = cartItems.find((item) => item.id === product.id);
        if (cartItem) {
          return { ...product, amount: product.amount + cartItem.quantity };
        } else {
          return product;
        }
      })
    );
    setCartItems([]);
  };

  // Función para realizar la compra (limpiar el carrito)
  const purchaseItems = () => {
    setCartItems([]);
  };

  // Función para agregar un nuevo producto
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  // Función para cambiar el tema entre light y dark mode
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <Header />
      <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cartItems} clearCart={clearCart} purchaseItems={purchaseItems} />
      <AddProduct addProduct={addProduct} />
    </div>
  );
};

export default App;
