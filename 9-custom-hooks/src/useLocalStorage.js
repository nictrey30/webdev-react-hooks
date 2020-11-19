import { useState, useEffect } from 'react';

// key - what we want to store this key as in localStorage
function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));

  if (savedValue) return savedValue;

  // useState can also take a function as a parameter
  // if initialValue is a function, then we want to return whatever comes out of initialValue() when we call it
  if (initialValue instanceof Function) return initialValue();
  // otherwise we will return the default initialValue, since we know it's not a function, it's an actual value
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  // we want the useEffect hook to save the value in the localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  // return the same thing as useState, a variable and an update function
  return [value, setValue];
}
