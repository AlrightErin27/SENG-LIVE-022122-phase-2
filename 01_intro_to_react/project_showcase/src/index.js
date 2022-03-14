//importing libraries

import React from "react";
import ReactDOM from "react-dom";
//import './index.css';

//importing App component from App.js
import App from "./App";

//first argument is the high level component rendered to the DOM. It will have the rest of the UI nested inside it.
//the second argument is teh el that appends the html (root (a div) found in index.html)
ReactDOM.render(
  <React.StrictMode>
    <App />
    <>This is a react fragment. This is just surface level.</>
  </React.StrictMode>,
  document.getElementById("root")
);
