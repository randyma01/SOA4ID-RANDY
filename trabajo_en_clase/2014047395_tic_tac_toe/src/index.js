import React from "react";
import ReactDOM from "react-dom";
import Game from "./screen/game";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h4>Código del Tic-Tac Toe</h4>
      <h5>Randy Martínez Sandí - 2014047395</h5>
      <Game />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
