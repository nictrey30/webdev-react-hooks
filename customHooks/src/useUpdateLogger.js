import React, { useEffect } from 'react';
// every time a variable changes i want to log it to the console
export default function useUpdateLogger(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}
