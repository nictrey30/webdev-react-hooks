import React, { useState, useEffect } from 'react';

function App() {
  const [[windowWidth, windowHeight], setWindow] = useState([
    window.innerWidth,
    window.innerHeight
  ]);
  const handleResize = () => {
    setWindow([window.innerWidth, window.innerHeight]);
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      {windowWidth} x {windowHeight}
    </div>
  );
}

export default App;
