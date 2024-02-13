import "./app.css";
import { useState } from "react";

// const Card = ({ styles }) => {
//     return (
//         <div className="card" style={styles}>

//         </div>
//     );
// }

// const App = () => {
//     let backgroundColor = "red";

//     const changeBgColor = () => {
//         backgroundColor = "blue";
//         console.log(backgroundColor); // blue
//     }

//     return <>
//         <h1>useState</h1>
//         <button onClick={changeBgColor}>Change Color</button>
//         <Card styles={{ backgroundColor, borderColor: "orange" }} />
//     </>
// }

// useState function needs to be called with in the functional component only
// const App = () => {
//     // useState always returns an array of two elements
//     // [ state, setState ]
//     let [count, setCount] = useState(3);

//     /**
//      * 1st render: count = 3
//      * React: 3 != 5 => registers a re render of App component
//      * 
//      * 2nd render: count = 5
//      * React: 5 != 7 => registers another re render of App component
//      * 
//      * 3rd render: count= 7
//      * React: 7 != 9 => register another re render of App component
//      */
//     const increment = () => {
//         count++; // 7+1 => 8
//         setCount(count + 1);  // 9
//     }

//     const decrement = () => {
//         setCount();
//     }

//     return (
//         <div className="counter">
//             <button onClick={decrement}>-</button>
//             <h1>{count}</h1>
//             <button onClick={increment}>+</button>
//         </div>
//     );
// }



// let colors = ["blue", "red", "yellow", "orange"];

// const App = () => {
//     const [index, setIndex] = useState(0);
//     console.log("rendered: ", index);

//     const changeColor = () => {
//         let newIndex = index === colors.length - 1 ? 0 : index + 1;
//         setIndex(newIndex);
//     }

//     return <div className="card" style={{ backgroundColor: colors[index] }}>
//         <button onClick={changeColor}>Change Color</button>
//     </div>
// }


// const App = () => {

//     const [inputValue, setInputValue] = useState("");

//     const onChangeText = (event) => {
//         setInputValue(event.target.value);
//     }

//     return (
//         <div>
//             <label htmlFor="">Enter your name:</label>
//             <input onChange={onChangeText} />
//             {inputValue && <p>{`Hello ${inputValue}!`}</p>}
//             {inputValue && <p>{`Hello ${inputValue}!`}</p>}
//             {inputValue && <p>{`Hello ${inputValue}!`}</p>}
//             {inputValue && <p>{`Hello ${inputValue}!`}</p>}{inputValue && <p>{`Hello ${inputValue}!`}</p>}
//             {inputValue && <p>{`Hello ${inputValue}!`}</p>}
//         </div>
//     )
// }


const report = [
    {
        city: "Hyderbad",
        temparature: 30,
    },
    {
        city: "Mumbai",
        temparature: 22,
    },
    {
        city: "Rajasthan",
        temparature: 40,
    },
    {
        city: "Jammu",
        temparature: 6,
    },
    {
        city: "Assam",
        temparature: 13,
    },
    {
        city: "Bangalore",
        temparature: 21,
    }
]

const mapper = (location) => {
    const text = location.temparature > 25 ? "Too hot" :
        location.temparature <= 15 ? "Too cold" : "Moderate";

    const textColor = location.temparature > 25 ? "red" :
        location.temparature <= 15 ? "blue" : "orange";

    return <p>{location.city}  : <span style={{ color: textColor }}>{text}</span></p>
}

const App = () => {
    return (
        <div>{report.map(mapper)}</div>
    )
}


export default App;