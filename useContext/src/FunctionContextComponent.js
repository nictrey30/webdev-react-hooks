import React from 'react';
import { useTheme, useThemeUpdate } from './ThemeContext';

function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem'
  };
  return (
    <div>
      <button onClick={toggleTheme}>Toggle theme</button>
      <div style={themeStyles}>Function Theme</div>
    </div>
  );
}

export default FunctionContextComponent;
