import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import RightContent from "./components/oceanic/user-register";

function App() {
  // return (
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //     <button className="btn btn-primary">Click Me!</button>
  //   </header>
  // </div>
  // );
  return (
    <BrowserRouter>
      <RightContent />
    </BrowserRouter>
  );
}

export default App;
