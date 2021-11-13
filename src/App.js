import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div data-test="component-app" className="App">
      <h1>Let's learn React testing</h1>
      <h2 data-test="counter-display">The counter is currently&nbsp;
      <span data-test="count">{count}</span>
      </h2>
      <button 
        data-test="increment-button"
        onClick={handleClick}>Increment Counter</button>
    </div>
  );
}

export default App;
