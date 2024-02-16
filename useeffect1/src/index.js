import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.js";
import Markdown from 'react-markdown';
import ToolTip from "./Tooltip.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    <ToolTip />
  </>
);