import React from "react";
import "../../styles/browsergame/index.css";

class Options extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      currentRound: 0,
      rounds: 0,
      winCounter: 0,
      statusString: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    this.setState({ statusString: `Round: ${this.round + 1}.` });

    return <div></div>;
  }
}

export default Options;
