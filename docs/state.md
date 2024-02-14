## useState Hook
- useState is a plain javascript function (called as hook in react) that can manage the state of a component.
- `useState` can only be invoked with in the `functional components`.
- In simple words the `state` of a component means, the dynamic data on which the `jsx` returned by the component is dependent on.
- For example

```javascript 
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

let count = 0;
const increment = () => {
    console.log(count); // prints 0
    count++;
    console.log(count);// prints 1

    // By adding the below statement it will update the component with the incremented value.
    root.render(<Counter />);
}

const Counter = () => {
    console.log("rendered");
    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </>
    );
}

root.render(<Counter />);
```

- In the above example upon clicking on `increment` button we are manually calling `root.render(<Counter />)` to update the component. 
- In a large application defining the state (like `count` variable above ) and maintaining it and rendering ourself is a headache for the developer.
- Imagine what if the `rendering` process and the state `count` taken care by React itself.That's going to reduce lot of work for developer in building a bugless application.
- To provide such a state management support for every component React has come up with a hook called `useState` which will ensure the re rendering process & state updates for a every component.

```javascript 
const Counter = () => {
  console.log("rendered");
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1); // setCount(prev => prev + 1)
  }

  return <>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
  </>
}
```

- `useState` function always takes a single argument (value | function) and returns an array with two elements.
- `[ value, setValue ]` => value is the state of the component, setValue is a function which can change the state of the component.
- In the above code when the component renders for the `1st time`, the `count` value will be `0`. Upon consecutive clicks on the button the `count` value changes as below.

| User Action | Render count     | state value |  
|--------------|------------------|-------------|
|             | Intial Render | 0   
| Clicked on button | 2nd render | 1
| Clicked on button | 3rd render | 2

- `setCount` function above is acts like a state modifier, so use it whenever you need to update the `state` of the component.

- The `setCount` method can take a direct value or it can also take a callback function.
- React will re render the component only when there's a state change.For example in the below code as we are setting the same state value React will not trigger a re render of the component.
```javascript
const Counter = () => {
  console.log("rendered");
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count);
  }

  return <>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
  </>
}
```

- Understanding the execution flow of `setState` function is very essential otherwise we will end up finding un expected outputs in the code.
- Try to solve the short Example below.
```javascript

const Counter = () => {
  console.log("rendered");
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count);
    setCount((prev) => {
      console.log({ prev1: prev });
      return prev;
    })
    setCount((prev) => {
      console.log({ prev2: prev });
      return prev + 10;
    })
    setCount((prev) => {
      console.log({ prev3: prev });
      return prev;
    })
    setCount(89);
  };

  return <>
    <h1>{count}</h1>
    <button onClick={updateCount}>update count</button>
  </>
}
```
### On Clicking the `update count` button 
- React always maintains a boolean value behind the scenes wether to trigger a re render or not.
- after calling first update `setCount(count)` React will not register a re-render as there's no change in the `count` value.
- after calling second update 
```javascript 
setCount((prev) => {
    console.log({ prev1: prev });
    return prev;
});
``` 
React will execute the callback to check if there's any state change, but this callback also not mutating the state.
- After executing the third state update 
```javascript
setCount((prev) => {
    console.log({ prev2: prev });
    return prev + 10;
});
```
React will execute the callback and registers a re-render of `Counter` component as there's a change of value from `0` to `0 + 10`.
- **** Once React registers the re render the next sequence of updates will be queued and will be executed in the next render of component.
- So React will queue the below two updates in a Queue behind scenes.

```javascript 
    setCount((prev) => {
      console.log({ prev3: prev });
      return prev;
    })
    setCount(89);
```
- Now in the next render when we call `useState(0)` it will execute the pending update ( which were queued in previous render ) and then returns the final update.
- Therefore in the next render the `count` value will be `89` as it is the last item in the queue.
- The output for the overall code looks like below
```javascript
    {prev1: 0}
    {prev2: 0}
    rendered
    {prev3: 10}
```