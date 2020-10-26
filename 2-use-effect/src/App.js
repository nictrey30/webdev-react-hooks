import React, { useState, useEffect } from 'react';
// useEffect - we want to do some form of side effect whenever something happens
import './App.css';

function App() {
  const [resourceType, setResourceType] = useState('posts');
  // more often we want to do things only when the component mounts or a specific resource on the page changes. In oreder to do that, useEffect takes a second parameter(an array), and whatever we pass into this array is going to be values that whenever they change, the hook is going to run

  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // we want the function to happen only on mount, so we pass an empty array to the hook
    window.addEventListener('resize', handleResize);

    // the function after return is going to be called whenever this useEffect is cleaned up, so every single time this useEffect gets ran, whatever is in return gets run first to clean up whatever we did last time
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // everything inside of this arrow function is going to be executed every single time our App renders if we dont pass the options array
    async function fetchData() {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      let data = await response.json();
      return data;
    }
    fetchData()
      .then((data) => setItems(data.slice(0, 10)))
      .catch((err) => console.log(err));
  }, [resourceType]);

  useEffect(() => {
    // we can create a hook that runs only on mount by just passing an empty array
    console.log('on mount');
  }, []);
  return (
    // we need to react to when we change our resource type, we need a side-effect to happen when our resourceType changes
    <>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <h1>{resourceType}</h1>
      <h2>window width: {windowWidth}</h2>
      {items.map((item) => (
        <pre key={item.id}>{JSON.stringify(item)}</pre>
      ))}
    </>
  );
}

export default App;
