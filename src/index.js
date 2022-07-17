// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { ThemeProvider } from './Context';

// ReactDOM.render(
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>,
//   document.getElementById('root')

// );

import { ThemeProvider } from './Context';
import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>

    <App />

  </ThemeProvider>
);

