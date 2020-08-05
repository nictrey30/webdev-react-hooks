import React, { useState, useContext } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// we dont need to worry about accesing ThemeContext outside this single file
// exposing custom hooks - in this case gives easy acces to the ThemeProvider's values - darkTheme and toggleTheme
function useTheme() {
  return useContext(ThemeContext);
}
function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

// ThemeProvider is handling creating our state, updating our state and persisting both of this diffrent values down to the children
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
