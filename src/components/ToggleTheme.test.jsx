import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToggleTheme from './ToggleTheme';
import '@testing-library/jest-dom'


test('allows toggling between light and dark themes', () => {
  const mockToggleTheme = jest.fn();
  const { getByTestId } = render(<ToggleTheme theme="light" toggleTheme={mockToggleTheme} />);
  
  const toggleButton = getByTestId('toggle-theme-button');
  expect(toggleButton).toHaveTextContent('Dark Mode');
  
  fireEvent.click(toggleButton);
  
  expect(mockToggleTheme).toHaveBeenCalledTimes(1);
});
