import React from 'react';
import { render } from '@testing-library/react';
import ProductList from './ProductList';
import '@testing-library/jest-dom'


const mockProducts = [
  { id: 1, name: 'Product 1', price: 100, amount: 10 },
  { id: 2, name: 'Product 2', price: 200, amount: 5 },
];

test('renders product list correctly', () => {
  const { getByText } = render(<ProductList products={mockProducts} />);
  
  mockProducts.forEach(product => {
    const productName = getByText(product.name);
    expect(productName).toBeInTheDocument();
  });
});
