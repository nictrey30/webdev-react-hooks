import React from 'react';
import FunctionContextComponent from './contexts/FunctionContextComponent';
import { ThemeProvider } from './contexts/ThemeContext';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent />
      </ThemeProvider>
    </>
  );
}
