
import React, { useState } from "react";
// import './../styles/App.css';

const Tooltip = ({ text, children }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    const show = () => {
        setShowTooltip(true);
    }

    const hide = () => {
        setShowTooltip(false);
    }

    return <>
        {showTooltip && <div className="tooltip">
            <b className="tooltiptext">{text}</b>
        </div>}
        <div onMouseEnter={show} onMouseLeave={hide} style={{ padding: "10px", border: "2px solid red" }}>
            {children}
        </div>
    </>
}

const App = () => {
    return (
        <div>
            <Tooltip text={"This is a tooltip"}>
                <p>Hover over me</p>
            </Tooltip>
            <Tooltip text={"This is another tooltip"}>
                <p>Hover over me to see another tooltip</p>
            </Tooltip>
        </div>
    )
}

export default App
