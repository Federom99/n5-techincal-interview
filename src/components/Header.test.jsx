import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom'


test('renders header with correct title', () => {
  const { getByText } = render(<Header />);
  const titleElement = getByText(/Shopping Cart/i);
  expect(titleElement).toBeInTheDocument();
});
