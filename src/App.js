import React, { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const handleIncrementClick = () => setCount(count + 1);

  const handleDecrementClick = () => {
    if (count > 0) {
      setCount(count - 1);
    } else 
      setCount(-1);      
  }

  return (
    <div data-test="component-app" className="App">
      <h1>Let's learn React testing</h1>
      {count >= 0 ? <h2 data-test="counter-display">The counter is currently&nbsp;
        <span data-test="count">{count}</span>
      </h2> : null
      }
      {count < 0 ?
        <div>ERROR! Cannot go below zero</div> : null
      }
      <div className="button-container">
        <button
          data-test="increment-button"
          onClick={handleIncrementClick}>Plus One
        </button>
        <button
          data-test="decrement-button"
          onClick={handleDecrementClick}>
          Minus One
        </button>
      </div>
    </div>
  );
}

export default App;