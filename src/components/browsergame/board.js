import Square from "./square.js";
import React from "react";
import "../../styles/browsergame/index.css";

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    let round = 0;
    const status = `Round: ${round + 1}.`;

    return <div></div>;
  }
}

export default Board;
