import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddProduct = ({ addProduct }) => {
  const [product, setProduct] = useState({ name: '', price: "", amount: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.price > 0 && product.amount > 0) {
      addProduct({ ...product, id: Date.now() });
      setProduct({ name: '', price: 0, amount: 0 });
    } else {
      alert('Please fill in all fields with valid values.');
    }
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          type="number"
          name="amount"
          value={product.amount}
          onChange={handleChange}
          placeholder="Amount"
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default AddProduct;
