
/**

  cartState = {count: 0}
  
  1. state/store => is an object Ex: { count: 0 }
  2. Actions => actions are plain strings which will be doing the modification of the state.
  3. subscribers/listeners => are functions  which will get executed (informed) when there's a change in the state.

  "increment" ? count + 1
  "decrement" ? count - 1
  "increment_by_ten" ? count + 10
 */

// const state = { count: 0 };

// const f1 = () => {
//   console.log("subscriber1");
// }

// state.count += 1 ;

// What ever reducer function returns that will be state.

// store = { dispatch, getState, subscribe }
/**
 * getState() => returns the redux state
 * dispatch({type: ""}) => 
 */
// console.log(store);
// console.log("STATE: ", store.getState());

import { legacy_createStore as createStore } from "redux";

const reducer = (state, action) => {
  // state = {count: 0} , action = { type: "increment" }
  if (action.type === "increment") {
    return { count: state.count + 1 }
  }
  else if (action.type === "decrement") {
    return { count: state.count - 1 };
  }

  return { count: 0 };
}

// createStore => accepts one callback function as an argument and returns an object
const store = createStore(reducer);

// store.subscribe(() => {
//   console.log("subscriber 1", store.getState());
// });

// store.subscribe(() => {
//   console.log("subscriber 2", store.getState());
// });


function App() {
  const incrementCount = () => {
    store.dispatch({ type: "increment" })
  };

  const decrementCount = () => {
    store.dispatch({ type: "decrement" })
  }

  return <>
    <button onClick={incrementCount}>Dispatch Increment</button>
    <button onClick={decrementCount}>Dispatch Decrement</button>
  </>
}

export default App;
