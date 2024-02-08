import React from "react";

import ReactDOM from "react-dom/client";
import { Chat } from "./Chat.js";
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<img />) // works
// root.render(<App id="abc" className="mno" />)

// root.render( ReactElement )

// <App /> => App()

// const Element = () => (
//     <div>
//         <h1>Somthing</h1>
//         <h1>Something else </h1>
//         <h2>Some thing</h2>
//     </div>
// )
// <Element /> => Element();
// <Card /> => Card();

// const Element = () => (
//     <div>
//         <Card message={"Hello world!"} sender={"Aravind"} timeAgo={"3mins ago"} />
//         <Card message={"Hello India!"} sender={"Rajesh"} timeAgo={"10mins ago"} />
//     </div>
// );


root.render(<Chat />)