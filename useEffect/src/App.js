import React, { useState, useEffect } from 'react';

function App() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const baseString = 'https://jsonplaceholder.typicode.com/';
      const response = await fetch(baseString + resourceType);
      const data = await response.json();
      return data;
    }
    fetchData()
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, [resourceType]);
  return (
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <h1>{resourceType}</h1>
      {items.map((item) => (
        <pre key={item.id}>{JSON.stringify(item)}</pre>
      ))}
    </div>
  );
}

export default App;
