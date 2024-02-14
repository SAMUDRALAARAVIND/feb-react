import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Dishes } from "./dishes.js"

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <>
    {/* <App /> */}
    <Dishes />
  </>
);
