import React from "react";
import Board from "../../components/board";

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">{/* TODO */}</div>
      </div>
    );
  }
}
