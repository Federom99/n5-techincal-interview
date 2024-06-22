import React from 'react';
import { render } from '@testing-library/react';
import Cart from './Cart';
import '@testing-library/jest-dom'


const mockCartItems = [
  { id: 1, name: 'Product 1', price: 100, quantity: 2 },
  { id: 2, name: 'Product 2', price: 200, quantity: 1 },
];

test('renders cart items correctly', () => {
  const { getByText } = render(<Cart cartItems={mockCartItems} />);
  
  mockCartItems.forEach(item => {
    const itemName = getByText(item.name);
    const itemPrice = getByText(`Price: $${item.price}`);
    const itemQuantity = getByText(`Quantity: ${item.quantity}`);
    
    expect(itemName).toBeInTheDocument();
    expect(itemPrice).toBeInTheDocument();
    expect(itemQuantity).toBeInTheDocument();
  });
});
