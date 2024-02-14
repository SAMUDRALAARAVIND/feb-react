// Component life cycle
// Lazy intialisation | asynchronous nature of setState

import { useState } from "react";

// React's useState hook can take a value or a function expression as a value 
// When we pass a function expression to the useState hook, it will call that callback function only during the first render

// sum of first 1000 numbers 

const getIntialState = () => {
  console.log("inside the complex operation");
  let sum = 0;
  for (let i = 0; i < 1000; i++) {
    sum += i;
  }
  return sum;
}

function App() {
  debugger;
  console.log("rendered");
  const [count, setCount] = useState(getIntialState);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default App;
