import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddProduct from './AddProducts';
import '@testing-library/jest-dom'


test('allows adding a new product', () => {
  const mockAddProduct = jest.fn();
  const { getByPlaceholderText, getByRole } = render(<AddProduct addProduct={mockAddProduct} />);
  
  fireEvent.change(getByPlaceholderText('Product Name'), { target: { value: 'New Product' } });
  fireEvent.change(getByPlaceholderText('Price'), { target: { value: '50' } });
  fireEvent.change(getByPlaceholderText('Amount'), { target: { value: '10' } });
  
  fireEvent.click(getByRole('button', { name: 'Add Product' }));
  
  expect(mockAddProduct).toHaveBeenCalledWith({
    name: 'New Product',
    price: '50',
    amount: '10',
    id: expect.any(Number)
  });
});
