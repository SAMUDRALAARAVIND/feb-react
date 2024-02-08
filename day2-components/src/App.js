import React from "react"

const bold = <b>Bold text</b>;
const bold1 = <b>Bold 1 text</b>;
const bold2 = <b>Bold 2 text</b>;

let arr = [bold, bold1, bold2]

export const app = function ({ id, className }) {
    /**
     * {
     *   id: "abc",
     *   className: "mno"
     * }
     */
    console.log(id, className);
    return (
        <p>
            {/* {bold}
            {bold1}
            {bold2} */}
            {[bold, bold1, bold2]}
            <span>Span text</span>
        </p>
    )
}

// jsx => ReactElement
// template string: ${name}
// In native HTML: <button onclick="func()">Click Me</button>

// for binding the dynamic data (variable) inside jsx we use the notation {} 