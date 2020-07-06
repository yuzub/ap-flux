import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  console.log('HomePage');

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect() on HomePage');

    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className="jumbotron">
      <h1>OXYGEN Courses Administration</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <p>React, Flux, and React Router for responsive apps.</p>
      <Link to="/about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
