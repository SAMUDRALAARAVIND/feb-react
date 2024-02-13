import { useState } from "react";
import "./styles.css";

// Functional component: A regular js function that starts with a capital letter and always returns some valid jsx
// useState needs to be used with in the functional component only.


// if count is even update it by count + 3;
// if count is odd update it by count + 5
// const App = () => {
//   // console.log("rendered");
//   const [count, setCount] = useState(10); // 11
//   console.log(count, "rendered");

//   /**
//    *  first render: 
//    *  count = 10
//    * 
//    *  second render: 
//    *  count = 11
//    * 
//    *  third render: 
//    *  count = 12
//    */

//   const increment = () => {
//     // // console.log("clicked on button");
//     // // count = 10 => setCount( 10 + 1) => setCount(11);
//     // setCount(count + 1);
//     // console.log(count); // 10
//     if (count % 2 === 0) {
//       setCount(count + 3)
//     }
//     else {
//       setCount(count + 5);
//     }
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>

//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }



// const App = () => {
//   const [inputValue, setInputValue] = useState("ara");
//   const [tasks, setTasks] = useState([]);

//   // tasks = ["Eating"]

//   const addTask = () => {
//     // tasks  = ["Eating"]
//     // inputValue = "Play Badminton"
//     setTasks([...tasks, inputValue]); // [...["Eating"], "Play Badminton"] => ["Eating", "Play badminton"]
//   }

//   const onChangeInput = (event) => {
//     // inputvalue = "ara"
//     // after backspace => event.target.value = "ar"
//     let newvalue = event.target.value;
//     setInputValue(newvalue); // setInputValue("ar")
//   }

//   return <div className="container">
//     <div className="header">
//       <input placeholder="Enter task" onChange={onChangeInput} value={inputValue} />
//       <button onClick={addTask}>Add Task</button>
//     </div>
//     <div className="tasks">
//       {
//         tasks.map((task, index) => <p key={index}>{task}</p>)
//       }
//     </div>
//   </div>;
// }

const App = () => {
  console.log("rendered");
  const [user, setUser] = useState({ name: "aravind" });
  // #400 => #300 => #200

  const updateCount = () => {
    setUser({ name: "aravind" });  // #200
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={updateCount}>updateCount</button>
    </div>
  );
}

export default App;