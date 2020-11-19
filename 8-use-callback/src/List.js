import React, { useEffect, useState } from 'react';

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(5));
    console.log('updating items');
    // -> is firing also when we toggle the theme, because when we render App by toggling the theme, the getItems function gets recreated every time
  }, [getItems]);
  return items.map((item) => <div key={item}>{item}</div>);
}
