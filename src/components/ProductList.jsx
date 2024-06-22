import React from 'react';

const ProductList = ({ products, addToCart }) => {
  const handleAddToCart = (productId) => {
    const quantity = parseInt(document.getElementById(`quantity-${productId}`).value);
    const product = products.find((p) => p.id === productId);

    if (quantity > product.amount) {
      alert("There is no more quantity in the product inventory");
    } else {
      addToCart(productId, quantity);
    }
  };

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Available: {product.amount}</p>
          <input
            type="number"
            min="1"
            max={product.amount}
            defaultValue="1"
            id={`quantity-${product.id}`}
          />
          <button onClick={() => handleAddToCart(product.id)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
