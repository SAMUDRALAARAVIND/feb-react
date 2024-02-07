// console.log(React);
// console.log(ReactDOM);

// Creating h1 with document API.
// const h1 = document.createElement("h1");
// h1.innerText = "Hello DOM!";

// const container = document.getElementById("container");
// // container.appendChild(h1);

// console.log(React);
// const h1 = React.createElement("h1", { id: "aravind", className: "salman" }, "Hello React!");


// // render(ReactElement, HTMLElementContainer)
// ReactDOM.render(h1, container);


/**

    <div id="test">
        <b class="bold1">Bold 1</b>
        <span class="span1">Span 1</span>
    </div>

 */
// const bold = React.createElement("b", { className: "bold1" }, "Bold 1");
// const span = React.createElement("span", { className: "span1" }, "Span 1");
// const parent = React.createElement("div", { id: "test" }, ...[bold, span]);

// ReactDOM.render(parent, document.getElementById("container"))

import obj from "./api/test.js";
let { callme, users, student } = obj;
console.log({ callme, users, student });