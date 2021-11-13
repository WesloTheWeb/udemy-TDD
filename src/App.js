import './App.css';

function App() {
  return (
    <div data-test="component-app" className="App">
      <h1>Let's learn React testing</h1>
      <h2 data-test="counter-display">The counter is currently</h2>
      <button data-test="increment-button">Increment Counter</button>
    </div>
  );
}

export default App;
