import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// we dont need to worry about accesing ThemeContext outside this single file
function useTheme() {
  return useContext(ThemeContext);
}
function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}

export { useThemeUpdate, useTheme, ThemeProvider as default };