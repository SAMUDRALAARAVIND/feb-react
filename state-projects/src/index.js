import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './skills-management/App';
import { MoviesApp } from './movies-app/MoviesApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <App /> */}
    <MoviesApp />
  </>
);
