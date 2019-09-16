import React from "react";
import ReactDOM from "react-dom";
import FILE from "./FILE.js";
import Drawer from "./Drawer.js";
import "./styles.css";

function App() {
  return (
    <div className="App" style={{backgroundColor:"lightgray"}}>
      <Drawer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
