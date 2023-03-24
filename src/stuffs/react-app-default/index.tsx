import React from "react";
import logo from "./logo.svg";
import "./App.css";

function ReactAppDefault() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-yellow-300">Welcome to website of sayphuvong</p>
      </header>
    </div>
  );
}

export default ReactAppDefault;
