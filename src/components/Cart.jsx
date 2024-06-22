import React from 'react';

const Cart = ({ cartItems, clearCart, purchaseItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
          <p>Total: ${item.price * item.quantity}</p>
        </div>
      ))}
      <div className="cart-summary">
        <h3>Total: ${total}</h3>
        <button onClick={purchaseItems}>Purchase</button>
        <button onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
