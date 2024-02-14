import { useState, memo } from "react";
import "./styles.css";

/**
 * Component re render occurs :
 * 1 ) when there's a state change with in that component.
 * 2 ) when there's a prop change in that component.
 */

// memo(Component) => MemoizedComponent
// MemoizedComponent => will re render only if there's a change between the prevProps and currentProps
const Child = memo(({ name }) => {
    // for first Render: name = "aravind"
    // for the second render of parent: Child({name: "aravind"})
    const [childCount, setChildCount] = useState(10);
    console.log("child render");
    console.log("name: ", name);

    const incChild = () => {
        setChildCount(childCount + 1);
    }

    return (
        <div className="child">
            <h2>Child Component: {childCount}</h2>
            <p>Parent count: {name}</p>
            <button onClick={incChild}>Increment child count</button>
        </div>
    )
})

const Parent = () => {
    console.log("parent render");
    const [parentCount, setParentCount] = useState(0);

    const incParent = () => {
        setParentCount(parentCount + 1);
    }

    return (
        <div className="parent">
            <h1>Parent Component : {parentCount}</h1>
            <button onClick={incParent}>Increment parent count</button>
            <Child name={parentCount} />
            {/* Child({name: "aravind"}) */}
        </div>
    )
};


export default Parent;