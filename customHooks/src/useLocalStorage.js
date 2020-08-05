import React, { useState, useEffect } from 'react';
// i want the custom hook useLocalStorage to work the same as useState, so it needs to return the same thing as useState - returning the variable and the update function

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

function useLocalStorage(key, initialValue) {
  // useState can take a value or a function as its argument
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export default useLocalStorage;
