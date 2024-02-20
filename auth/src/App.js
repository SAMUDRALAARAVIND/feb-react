import { useEffect, useRef, useState } from "react";
/**
 * Axios
 * useRef => hook
 * Authorization App ( JWT )
 * 
 * useState => manages the state of the component
 * useEffect => used for executing a peice of code upon components mounting or updating. It's also used for cleanup activities.
 * 
 * useRef
 */

let users = []; // [ #300 ]

function App() {
  const [toggle, setToggle] = useState(true);
  const spanRef = useRef(null); // {current: }
  console.log("during render", spanRef); // {current: null}

  // if (users.length === 2) console.log(users[0] === users[1]);


  // const value = { name: "aravind" }; // #500
  // users.push(value);

  // if (users.length === 2) {
  //   console.log(users);
  //   console.log(users[0] === users[1]);
  // }

  const onClick = () => {
    // find the innerText inside span if it's even re render component else no.
    // we need span element to look for it's innerText
  };

  useEffect(() => {
    console.log("after mounting", spanRef); // {current: HTMLElementObject }
    console.log(spanRef.current.innerText);
  }, []);


  return (
    <div className="App">
      <button onClick={onClick}>Re Render</button>
      <span ref={spanRef}>10</span>
    </div>
  );
}

export default App;
