import React from "react";
import ReactDOM from "react-dom/client";
import { createButton } from "./App.js";

// react elemnt
// const para = <p className="para">Introduction to react</p>;
// // React.createElement("p", { className: "para" }, "Introduction to react");
// const bold = React.createElement("b", { className: "bold1" }, "Bold text");
// const span = React.createElement("span", null, "Span text1")
// const Element = React.createElement("div", { id: "test" }, para, bold, span, createButton());

// babel

const Element = (<div id="test" className="skks">
    <p>Introduction to react</p>
    <b>Bold text</b>
</div>)


// HTML element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Element);