import React from 'react';

const ToggleTheme = ({ theme, toggleTheme }) => (
  <div className="toggle-theme">
    
    <button onClick={toggleTheme} data-testid="toggle-theme-button">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  </div>
);

export default ToggleTheme;
