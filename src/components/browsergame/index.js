import React from "react";
import Board from "./board";
import Options from "./options";
//import "../../styles/browsergame/index.css";

class Game extends React.Component {
  render() {
    return (
      <div className='game'>
        <div className='options'>
          <Options />
        </div>
        <div className='game-board'>
          <Board />
        </div>
        <div className='game-info'>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
