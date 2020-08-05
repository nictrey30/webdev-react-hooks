import React, { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import useUpdateLogger from './useUpdateLogger';

function App() {
  const [name, setName] = useLocalStorage('name', '');
  // custom hooks starts with 'use'
  useUpdateLogger(name);
  return (
    <div>
      <input
        type='text'
        value={name}
        placeholder='name'
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default App;
